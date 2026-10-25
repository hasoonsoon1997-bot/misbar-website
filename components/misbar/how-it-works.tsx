'use client'

import { CreditCard, PackageOpen, Search, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [Send, Search, CreditCard, PackageOpen]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(245,165,36,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="how-title"
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          description={t.how.description}
          tone="dark"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-x-[12.5%] top-8 hidden h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 md:block"
          />
          {t.how.steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <span className="relative flex size-16 items-center justify-center rounded-2xl border border-gold/40 bg-navy text-gold shadow-lg shadow-black/20">
                  <Icon className="size-7" aria-hidden="true" />
                  <span className="absolute -top-2.5 -end-2.5 flex size-7 items-center justify-center rounded-full bg-gold font-sans text-sm font-bold text-navy">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-white/65">{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
