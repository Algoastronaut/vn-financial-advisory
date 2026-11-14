import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import { Menu, X, Globe, Phone, MessageCircle } from 'lucide-react'
import styles from './Navbar.module.css'
import VNLogo from './VNLogo'

export default function Navbar() {
  const { t, toggleLang, lang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [mobileOpen])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#achievements', label: t.nav.achievements },
    { href: '#resources', label: t.nav.resources },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const topOffset = 70
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.mobileActive : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#home"
          className={styles.logoLink}
          onClick={e => { e.preventDefault(); handleNavClick('#home') }}
          aria-label="VN Financial Advisory — Home"
        >
          <VNLogo variant="navbar" />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <button
            onClick={toggleLang}
            className={styles.langBtn}
            aria-label="Switch language"
          >
            <Globe size={14} />
            <span>{t.nav.langSwitch}</span>
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-whatsapp btn-sm ${styles.waBtn}`}
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>{t.nav.whatsapp}</span>
          </a>
          <a
            href="#contact"
            className={`btn btn-primary btn-sm ${styles.consultBtn}`}
            onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
          >
            {t.nav.bookConsultation}
          </a>
        </div>

        {/* Mobile quick controls (always visible on phone) */}
        <div className={styles.mobileQuickControls}>
          <button
            onClick={toggleLang}
            className={styles.mobileDirectLangBtn}
            aria-label="Switch language"
            title="Switch language (English / हिन्दी)"
          >
            <Globe size={13} />
            <span>{t.nav.langSwitch}</span>
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobileNav}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileActions}>
            <a
              href={`tel:${BUSINESS.contact.phoneRaw}`}
              className={`btn btn-outline ${styles.mobileActionBtn}`}
            >
              <Phone size={16} />
              {BUSINESS.contact.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.mobileActionBtn}`}
            >
              <MessageCircle size={16} />
              {t.nav.whatsapp}
            </a>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.mobileActionBtn}`}
              onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
            >
              {t.nav.bookConsultation}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
