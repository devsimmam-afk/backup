interface Props {
  title: string
  subtitle?: string
}

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}