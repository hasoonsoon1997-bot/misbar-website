interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({ id, eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark'
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-gold">{eyebrow}</p>
      <h2
        id={id}
        className={`mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl ${isDark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-pretty leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  )
}
