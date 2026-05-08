import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/settings')({
  component: AdminSettings,
})

function AdminSettings() {
  return <div>Admin Settings</div>
}
