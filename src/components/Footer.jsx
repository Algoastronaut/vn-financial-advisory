import React, { useState } from 'react'
import { useLang } from '../context/LangContext'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, ChevronRight, ShieldCheck } from 'lucide-react'
import VNLogo from './VNLogo'
import LegalModal from './LegalModal'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  const [legalTab, setLegalTab] = useState(null)

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#achievements', label: t.nav.achievements },
    { href: '#resources', label: t.nav.resources },
    { href: '#contact', label: t.nav.contact },
  ]

  const serviceLinks = [
    { label: t.services?.service1?.title || 'Mutual Funds & SIPs', href: '#services' },
    { label: t.services?.service2?.title || 'Life Insurance', href: '#services' },
    { label: t.services?.service3?.title || 'Health Insurance', href: '#services' },
  ]

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openLegal = (tab) => {
    setLegalTab(tab)
  }

  return (
    <>
      <footer className={styles.footer} role="contentinfo">
        {/* Top CTA strip */}
        <div className={styles.ctaStrip}>
          <div className={`container ${styles.ctaInner}`}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaHeading}>Ready to take the next step?</h3>
              <p>Speak directly with Vinay Singh — 10:00 AM to 8:00 PM.</p>
            </div>
            <div className={styles.ctaButtons}>
              <a
                href={`tel:+${BUSINESS.contact.phoneRaw}`}
                className="btn btn-primary"
                aria-label="Call VN Financial Advisory"
              >
                <Phone size={16} />
                {BUSINESS.contact.phone}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className={styles.main}>
          <div className={`container ${styles.grid}`}>
            {/* Brand column */}
            <div className={styles.brandCol}>
              <VNLogo variant="footer" />
              <p className={styles.brandDesc}>{t.footer.description}</p>
              <div className={styles.socialLinks}>
                <a
                  href={BUSINESS.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow VN Financial Advisory on Instagram"
                >
                  <Instagram size={18} />
                  <span>{BUSINESS.contact.instagramHandle}</span>
                </a>
              </div>
              <div className={styles.contactInfo}>
                <a href={`tel:+${BUSINESS.contact.phoneRaw}`} className={styles.contactLine}>
                  <Phone size={14} />
                  {BUSINESS.contact.phone}
                </a>
                <a href={`mailto:${BUSINESS.contact.email}`} className={styles.contactLine}>
                  <Mail size={14} />
                  {BUSINESS.contact.email}
                </a>
                <div className={styles.contactLine}>
                  <MapPin size={14} />
                  {t.contact?.locationValue || 'Rewa, Madhya Pradesh, India'}
                </div>
                <div className={styles.contactLine}>
                  <Clock size={14} />
                  {BUSINESS.hours}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colHeading}>{t.footer.quickLinks}</h4>
              <ul className={styles.linksList}>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={e => { e.preventDefault(); handleScroll(link.href) }}
                    >
                      <ChevronRight size={12} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Legal Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colHeading}>{t.footer.services}</h4>
              <ul className={styles.linksList}>
                {serviceLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={e => { e.preventDefault(); handleScroll(link.href) }}
                    >
                      <ChevronRight size={12} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className={styles.colHeading} style={{ marginTop: '24px' }}>{t.footer.legal}</h4>
              <ul className={styles.linksList}>
                <li>
                  <button
                    className={styles.footerLinkBtn}
                    onClick={() => openLegal('privacy')}
                  >
                    <ChevronRight size={12} />
                    {t.footer.privacy}
                  </button>
                </li>
                <li>
                  <button
                    className={styles.footerLinkBtn}
                    onClick={() => openLegal('terms')}
                  >
                    <ChevronRight size={12} />
                    {t.footer.terms}
                  </button>
                </li>
                <li>
                  <button
                    className={styles.footerLinkBtn}
                    onClick={() => openLegal('disclaimer')}
                  >
                    <ChevronRight size={12} />
                    {t.footer.disclaimer}
                  </button>
                </li>
              </ul>
            </div>

            {/* Regulatory */}
            <div className={styles.regCol}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className={styles.colHeading}>Regulatory Information</h4>
                <button
                  className={styles.regDetailsBtn}
                  onClick={() => openLegal('regulatory')}
                  title="View full regulatory and ownership disclosures"
                >
                  <ShieldCheck size={14} />
                  <span>View Details</span>
                </button>
              </div>
              <div className={styles.regInfo}>
                <p className={styles.regNote}>
                  AMFI Registered Mutual Fund Distributor<br />
                  ARN: <strong style={{ color: 'var(--gold)' }}>{BUSINESS.regulatory.amfiArnDisplay}</strong>
                </p>
                <p className={styles.regNote}>
                  ICICI Prudential Life Insurance Appointments:<br />
                  • Vinay Singh (ID: <strong style={{ color: 'var(--gold)' }}>{BUSINESS.regulatory.vinayInsuranceId}</strong>)<br />
                  • Neetu Singh (ID: <strong style={{ color: 'var(--gold)' }}>{BUSINESS.regulatory.neetuInsuranceId}</strong>)
                </p>
                <p className={styles.regNote}>
                  Proudly Protecting & Serving: <strong>500+ Client Families</strong>
                </p>
              </div>
              <div className={styles.mfDisclosure}>
                <p>{t.footer.amfiDisclosure}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosure bar */}
        <div className={styles.disclosureBar}>
          <div className="container">
            <p className={styles.disclosureText}>{t.footer.disclosure}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <div className={`container ${styles.copyrightInner}`}>
            <span>{t.footer.copyright}</span>
            <span className={styles.mfRiskShort}>Mutual Fund investments are subject to market risks.</span>
          </div>
        </div>
      </footer>

      {/* Interactive Legal & Regulatory Modal */}
      <LegalModal
        isOpen={!!legalTab}
        initialTab={legalTab || 'regulatory'}
        onClose={() => setLegalTab(null)}
      />
    </>
  )
}
