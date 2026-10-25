interface LogoProps {
  label: string
  tone?: 'light' | 'dark'
}

export function Logo({ label, tone = 'light' }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`flex size-10 items-center justify-center rounded-xl bg-navy font-sans text-xl font-extrabold text-gold ${
          tone === 'dark' ? 'ring-1 ring-white/15' : ''
        }`}
      >
        M
      </span>
      <span className={`text-xl font-bold ${tone === 'dark' ? 'text-white' : 'text-navy'}`}>{label}</span>
    </span>
  )
}
