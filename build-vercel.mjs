import { writeFileSync, mkdirSync, cpSync, existsSync, rmSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

// 1. Run the regular vite build
console.log("▶ Running vite build...");
execSync("npx vite build", { stdio: "inherit" });

// 2. Prepare .vercel/output directory structure
const OUTPUT = join(process.cwd(), ".vercel", "output");
const STATIC = join(OUTPUT, "static");
const FN_DIR = join(OUTPUT, "functions", "ssr.func");

// Clean previous output
if (existsSync(OUTPUT)) {
  rmSync(OUTPUT, { recursive: true, force: true });
}

mkdirSync(STATIC, { recursive: true });
mkdirSync(FN_DIR, { recursive: true });

// Ensure a single copy of @tanstack/router-core is available to the function
// This prevents nested copies under @tanstack/react-router/node_modules
try {
  const topRouterCore = join(process.cwd(), "node_modules", "@tanstack", "router-core");
  const targetRouterCore = join(FN_DIR, "node_modules", "@tanstack", "router-core");
  if (existsSync(topRouterCore)) {
    mkdirSync(join(FN_DIR, "node_modules", "@tanstack"), { recursive: true });
    cpSync(topRouterCore, targetRouterCore, { recursive: true, force: true });
  }
  // Also ensure nested copy under @tanstack/react-router/node_modules so
  // imports that resolve from that path find the same runtime implementation.
  try {
    const nestedTarget = join(FN_DIR, "node_modules", "@tanstack", "react-router", "node_modules", "@tanstack", "router-core");
    mkdirSync(join(FN_DIR, "node_modules", "@tanstack", "react-router", "node_modules", "@tanstack"), { recursive: true });
    if (existsSync(topRouterCore)) {
      cpSync(topRouterCore, nestedTarget, { recursive: true, force: true });
    }
  } catch (e) {
    // non-fatal
  }
} catch (e) {
  console.warn("Could not copy @tanstack/router-core into function node_modules:", e.message || e);
}

// 3. Write the routing config
writeFileSync(
  join(OUTPUT, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        {
          src: "/assets/(.*)",
          headers: { "Cache-Control": "public, max-age=31536000, immutable" },
        },
        { src: "/awards/(.*)", headers: { "Cache-Control": "public, max-age=86400" } },
        { src: "/gallery/(.*)", headers: { "Cache-Control": "public, max-age=86400" } },
        { src: "/houses/(.*)", headers: { "Cache-Control": "public, max-age=86400" } },
        { src: "/teams%2026/(.*)", headers: { "Cache-Control": "public, max-age=86400" } },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/ssr" },
      ],
    },
    null,
    2
  )
);

// 4. Copy client assets to static directory
console.log("▶ Copying client assets to static/...");
cpSync(join(process.cwd(), "dist", "client"), STATIC, { recursive: true });

if (existsSync(join(process.cwd(), "public"))) {
  cpSync(join(process.cwd(), "public"), STATIC, { recursive: true, force: true });
}

// 5. Copy server bundle to the function directory
console.log("▶ Setting up serverless function...");
cpSync(join(process.cwd(), "dist", "server"), join(FN_DIR, "dist", "server"), {
  recursive: true,
});

// 6. Create a minimal package.json with only runtime deps needed for SSR
const mainPkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
const runtimeDeps = {};
const needed = [
  "h3-v2", "@tanstack/router-core", "@tanstack/react-router", "@tanstack/history",
  "seroval", "react", "react-dom", "lucide-react", "react-icons",
  "@radix-ui/react-dialog", "class-variance-authority", "clsx", "tailwind-merge",
  "@tanstack/react-store", "seroval-plugins", "isbot",
];
for (const dep of needed) {
  if (mainPkg.dependencies?.[dep]) {
    runtimeDeps[dep] = mainPkg.dependencies[dep];
  } else {
    // Find it in the lockfile / node_modules
    const depPkgPath = join(process.cwd(), "node_modules", dep, "package.json");
    if (existsSync(depPkgPath)) {
      const depPkg = JSON.parse(readFileSync(depPkgPath, "utf-8"));
      if (dep === "h3-v2") {
        runtimeDeps[dep] = `npm:h3@${depPkg.version}`;
      } else {
        runtimeDeps[dep] = depPkg.version;
      }
    }
  }
}

writeFileSync(
  join(FN_DIR, "package.json"),
  JSON.stringify({ type: "module", dependencies: runtimeDeps }, null, 2)
);

// 7. Install only runtime deps in the function directory
console.log("▶ Installing runtime dependencies...");
execSync("npm install --production --ignore-scripts", {
  cwd: FN_DIR,
  stdio: "inherit",
});

// After installation, overwrite any nested copies with the top-level router-core
try {
  const topRouterCore = join(process.cwd(), "node_modules", "@tanstack", "router-core");
  const targetRouterCore = join(FN_DIR, "node_modules", "@tanstack", "router-core");
  const nestedTarget = join(FN_DIR, "node_modules", "@tanstack", "react-router", "node_modules", "@tanstack", "router-core");
  if (existsSync(topRouterCore)) {
    cpSync(topRouterCore, targetRouterCore, { recursive: true, force: true });
    mkdirSync(join(FN_DIR, "node_modules", "@tanstack", "react-router", "node_modules", "@tanstack"), { recursive: true });
    cpSync(topRouterCore, nestedTarget, { recursive: true, force: true });
  }
} catch (e) {
  console.warn("Post-install copy of @tanstack/router-core failed:", e.message || e);
}

// 8. Create the function entry point
writeFileSync(
  join(FN_DIR, "index.mjs"),
  `import server from "./dist/server/server.js";
import { Readable } from "node:stream";

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url, \`\${protocol}://\${host}\`);

    const init = {
      method: req.method,
      headers: req.headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = req;
      init.duplex = 'half';
    }

    const request = new Request(url, init);
    const response = await server.fetch(request);

    res.statusCode = response.status;
    
    // Set headers properly, addressing Set-Cookie separately
    response.headers.forEach((value, key) => {
      if (key === 'set-cookie' && typeof response.headers.getSetCookie === 'function') {
        res.setHeader(key, response.headers.getSetCookie());
      } else {
        res.setHeader(key, value);
      }
    });

    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("SSR Error:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}
`
);

// 9. Write the function config
writeFileSync(
  join(FN_DIR, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      supportsResponseStreaming: true,
    },
    null,
    2
  )
);

console.log("✅ Vercel Build Output ready at .vercel/output/");
