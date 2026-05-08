import type { ReactNode } from 'react'

import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

interface Props {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(220,20,60,0.12),transparent_35%)]" />

      <div className="relative-flex">
        <AdminSidebar />

        <main className="min-h-screen flex-1 lg:ml-72">
          <AdminHeader />

          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}