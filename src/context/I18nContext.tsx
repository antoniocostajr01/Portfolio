import React, { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'pt'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('language')
  if (stored === 'en' || stored === 'pt') return stored
  
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('pt')) return 'pt'
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    // We will implement a dictionary lookup here, 
    // but initially we will just pass the key if not found.
    return key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
