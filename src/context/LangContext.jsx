import React, { createContext, useContext, useState } from 'react'
import translations from '../data/translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'en' ? 'hi' : 'en')
  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
