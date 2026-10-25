'use client'

import { ArrowLeft, Clock, FileCheck, MapPin, Plane, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from './language-provider'

const trustIcons: LucideIcon[] = [Plane, ShieldCheck, Clock, FileCheck]

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,165,36,0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-6 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <MapPin className="size-4" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 id="hero-title" className="mt-8 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {t.hero.title}
            <span className="mt-2 block bg-gradient-to-l from-gold via-amber-300 to-gold bg-clip-text pb-2 text-transparent">
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#quote"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-base font-bold text-navy shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowLeft
                className="size-5 transition-transform ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans" aria-label="Brands">
            {t.hero.brands.map((brand) => (
              <li key={brand} className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {t.hero.trust.map((item, i) => {
            const Icon = trustIcons[i]
            return (
              <li
                key={item}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm sm:flex-row sm:text-start"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white">{item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
