import { Bell, Search } from 'lucide-react'

import AdminMobileNav from './AdminMobileNav'

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <AdminMobileNav />

          <div>
            <h2 className="font-display text-2xl text-white">
              Admin Dashboard
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="glass flex h-11 w-11 items-center justify-center rounded-2xl">
            <Search className="h-5 w-5 text-white" />
          </button>

          <button className="glass flex h-11 w-11 items-center justify-center rounded-2xl">
            <Bell className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}