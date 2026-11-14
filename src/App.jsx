import React, { useEffect } from 'react'
import { LangProvider, useLang } from './context/LangContext'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Achievements from './components/Achievements'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function AppInner() {
  const { lang } = useLang()
  useScrollReveal()

  // Apply lang class to body for font switching
  useEffect(() => {
    document.body.classList.toggle('lang-hi', lang === 'hi')
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Achievements />
        <WhyUs />
        <Process />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  )
}
