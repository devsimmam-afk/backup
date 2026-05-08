import { createFileRoute } from '@tanstack/react-router'
import {
  CalendarDays,
  Trophy,
  Users,
  Shield,
} from 'lucide-react'

import StatCard from '@/components/admin/dashboard/StatCard'
import PageHeader from '@/components/admin/shared/PageHeader'

export const Route = createFileRoute('/admin/_layout/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="SIMMAM Command Center"
        subtitle="Monitor events, leaderboard, houses, and live festival operations"
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Events"
          value="48"
          icon={CalendarDays}
          accent="gold"
        />

        <StatCard
          title="Participants"
          value="3200+"
          icon={Users}
          accent="red"
        />

        <StatCard
          title="Active Houses"
          value="6"
          icon={Shield}
          accent="gold"
        />

        <StatCard
          title="Live Competitions"
          value="12"
          icon={Trophy}
          accent="red"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-strong neon-border rounded-3xl p-6 lg:col-span-2">
          <h2 className="font-display text-2xl text-white">
            Live Activity
          </h2>

          <div className="mt-6 space-y-4">
            <div className="glass rounded-2xl p-4 text-sm text-muted-foreground">
              Rudras gained +20 points in Coding Clash
            </div>

            <div className="glass rounded-2xl p-4 text-sm text-muted-foreground">
              Music Wars registrations crossed 500 participants
            </div>

            <div className="glass rounded-2xl p-4 text-sm text-muted-foreground">
              Dance finals moved to Main Auditorium
            </div>
          </div>
        </div>

        <div className="glass-strong neon-border-red rounded-3xl p-6">
          <h2 className="font-display text-2xl text-white">
            Leaderboard Preview
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-white">Rudras</span>
              <span className="font-bold text-yellow-400">420</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-white">Suryas</span>
              <span className="font-bold text-yellow-400">395</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-white">Dronas</span>
              <span className="font-bold text-yellow-400">360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}