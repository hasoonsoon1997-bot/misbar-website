'use client'

import { Cog, Cpu, Fuel, Gauge, Lightbulb, Radar } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [Cpu, Cog, Radar, Gauge, Lightbulb, Fuel]

export function Parts() {
  const { t } = useLanguage()

  return (
    <section id="parts" aria-labelledby="parts-title" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="parts-title"
          eyebrow={t.parts.eyebrow}
          title={t.parts.title}
          description={t.parts.description}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.parts.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li
                key={item.title}
                className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-gray-50 p-6 transition-all hover:border-navy/20 hover:bg-white hover:shadow-lg"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
