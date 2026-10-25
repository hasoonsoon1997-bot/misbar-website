'use client'

import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { useLanguage } from './language-provider'
import { Logo } from './logo'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div>
          <Logo label={t.nav.brand} tone="dark" />
          <p className="mt-5 max-w-xs leading-relaxed text-white/60">{t.footer.tagline}</p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="text-sm font-bold uppercase tracking-wider text-gold">
            {t.footer.quickLinks}
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {[...t.nav.links, { href: '#quote', label: t.nav.cta }].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">{t.footer.contact}</h2>
          <ul className="mt-5 flex flex-col gap-4">
            <li>
              <a href="https://wa.me/4969000000" className="flex items-center gap-3 text-white/70 hover:text-white">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-gold">
                  <MessageCircle className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="sr-only">{t.footer.whatsapp}: </span>
                  <span dir="ltr">+49 69 000 000</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:info@misbar.de" className="flex items-center gap-3 text-white/70 hover:text-white">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-gold">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="sr-only">{t.footer.email}: </span>
                  info@misbar.de
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-gold">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              {t.footer.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/50 md:px-6">{t.footer.legal}</p>
      </div>
    </footer>
  )
}
