import type { LucideIcon } from 'lucide-react'

interface Props {
  title: string
  value: string
  icon: LucideIcon
  accent?: 'gold' | 'red'
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  accent = 'gold',
}: Props) {
  return (
    <div
      className={`glass-strong rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
        accent === 'gold' ? 'neon-border' : 'neon-border-red'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl">
          <Icon className="h-7 w-7 text-yellow-400" />
        </div>
      </div>
    </div>
  )
}