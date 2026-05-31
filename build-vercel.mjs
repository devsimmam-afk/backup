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

// 6. Create package.json with all app runtime dependencies for SSR
const mainPkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
const runtimeDeps = { ...(mainPkg.dependencies ?? {}) };

// Ensure h3-v2 alias exists because the server bundle imports it directly.
if (!runtimeDeps["h3-v2"]) {
  const h3PkgPath = join(process.cwd(), "node_modules", "h3", "package.json");
  if (existsSync(h3PkgPath)) {
    const h3Pkg = JSON.parse(readFileSync(h3PkgPath, "utf-8"));
    runtimeDeps["h3-v2"] = `npm:h3@${h3Pkg.version}`;
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

// 8. Create the function entry point
writeFileSync(
  join(FN_DIR, "index.mjs"),
  `import server from "./dist/server/server.js";
import { Readable } from "node:stream";

function normalizeHeaders(inputHeaders) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(inputHeaders || {})) {
    if (typeof value === "undefined") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "string") headers.append(key, item);
      }
      continue;
    }
    headers.set(key, String(value));
  }
  return headers;
}

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const rawUrl = typeof req.url === 'string' ? req.url : '/';
    const url = rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
      ? new URL(rawUrl)
      : new URL(rawUrl, \`\${protocol}://\${host}\`);

    const init = {
      method: req.method,
      headers: normalizeHeaders(req.headers),
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
