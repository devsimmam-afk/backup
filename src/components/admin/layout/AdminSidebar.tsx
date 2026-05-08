import {
  LayoutDashboard,
  CalendarDays,
  Trophy,
  Shield,
  Users,
  Megaphone,
  Settings,
} from 'lucide-react'

import { Link } from '@tanstack/react-router'

const items = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Events',
    href: '/admin/events',
    icon: CalendarDays,
  },
  {
    title: 'Leaderboard',
    href: '/admin/leaderboard',
    icon: Trophy,
  },
  {
    title: 'Houses',
    href: '/admin/houses',
    icon: Shield,
  },
  {
    title: 'Participants',
    href: '/admin/participants',
    icon: Users,
  },
  {
    title: 'Announcements',
    href: '/admin/announcements',
    icon: Megaphone,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
]

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/10 bg-black/30 backdrop-blur-2xl lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-6">
        <h1 className="font-display text-3xl font-bold text-yellow-400">
          SIMMAM
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Admin Control Center
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.title}
              to={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/5 hover:text-white"
              activeProps={{
                className:
                  'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
              }}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}