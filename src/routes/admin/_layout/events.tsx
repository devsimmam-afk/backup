import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/events')({
  component: EventsPage,
})

function EventsPage() {
  return <div>Events Page</div>
}