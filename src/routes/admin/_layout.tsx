import { Outlet, createFileRoute } from '@tanstack/react-router'
import AdminLayout from '@/components/admin/layout/AdminLayout.tsx'

export const Route = createFileRoute('/admin/_layout')({
  component: AdminLayoutRoute,
})

function AdminLayoutRoute() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}