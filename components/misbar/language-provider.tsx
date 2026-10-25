'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, type Dictionary, type Lang } from '@/lib/i18n'

interface LanguageContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  t: Dictionary
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const toggleLang = useCallback(() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar')), [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, t: dictionaries[lang], toggleLang }),
    [lang, dir, toggleLang],
  )

  return (
    <LanguageContext.Provider value={value}>
      <div dir={dir} lang={lang} className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
