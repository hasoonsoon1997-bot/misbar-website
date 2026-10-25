'use client'

import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'
import { useLanguage } from './language-provider'
import { Logo } from './logo'

export function Navbar() {
  const { t, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 md:px-6" aria-label="Main">
        <a href="#top" aria-label={t.nav.brand}>
          <Logo label={t.nav.brand} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.toggleLabel}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 font-sans text-sm font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-slate-50"
          >
            <Globe className="size-4" aria-hidden="true" />
            {t.nav.toggle}
          </button>
          <a
            href="#quote"
            className="hidden rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="flex size-10 items-center justify-center rounded-xl text-navy hover:bg-slate-100 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-50 hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gold px-4 py-3 text-center font-bold text-navy"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
