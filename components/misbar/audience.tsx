'use client'

import { Car, Check, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [Wrench, Car]

export function Audience() {
  const { t } = useLanguage()

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="services-title"
          eyebrow={t.audience.eyebrow}
          title={t.audience.title}
          description={t.audience.description}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {t.audience.cards.map((card, i) => {
            const Icon = icons[i]
            const featured = i === 0
            return (
              <article
                key={card.tag}
                className={`relative overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-lg md:p-10 ${
                  featured ? 'bg-navy text-white' : 'border border-slate-200 bg-white text-navy'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-14 items-center justify-center rounded-xl ${
                      featured ? 'bg-gold text-navy' : 'bg-navy text-gold'
                    }`}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 font-sans text-xs font-bold tracking-wider ${
                      featured ? 'bg-white/10 text-gold' : 'bg-gold/15 text-navy'
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span
                        className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                          featured ? 'bg-gold/20 text-gold' : 'bg-navy/5 text-navy'
                        }`}
                      >
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className={featured ? 'text-white/85' : 'text-slate-700'}>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
