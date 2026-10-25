'use client'

import { Cpu, Headphones, PackageCheck, Plane, ReceiptText, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [ShieldCheck, Plane, ReceiptText, Cpu, Headphones, PackageCheck]

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" aria-labelledby="why-title" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading id="why-title" eyebrow={t.why.eyebrow} title={t.why.title} description={t.why.description} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
