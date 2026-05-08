import {
    CalendarDays,
    LayoutDashboard,
    Megaphone,
    Menu,
    Settings,
    Shield,
    Trophy,
    Users,
} from 'lucide-react'

import { Link } from '@tanstack/react-router'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

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

export default function AdminMobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="glass flex h-11 w-11 items-center justify-center rounded-2xl lg:hidden">
                    <Menu className="h-5 w-5 text-white" />
                </button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="border-white/10 bg-black/90 backdrop-blur-2xl"
            >
                <div className="mt-8 space-y-3">
                    {items.map((item) => {
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white transition-all hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-400"
                            >
                                <Icon className="h-5 w-5" />
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}