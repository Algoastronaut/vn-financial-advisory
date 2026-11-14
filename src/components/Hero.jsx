import React, { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import { Phone, MessageCircle, ChevronDown, Award, Star } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Staggered entrance
    const els = textRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`
      el.classList.add(styles.revealed)
    })
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero} aria-label="Homepage hero">
      {/* Background pattern */}
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left — text */}
        <div className={styles.textCol} ref={textRef}>
          <div
            className={`badge badge-gold ${styles.badge}`}
            data-reveal
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <Award size={12} />
            {t.hero.badge}
          </div>

          <h1
            className={styles.headline}
            data-reveal
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <span className={styles.headlineLine1}>{t.hero.headline}</span>
            <span className={styles.headlineLine2}>{t.hero.headlineLine2}</span>
          </h1>

          <p
            className={styles.subtext}
            data-reveal
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            {t.hero.subtext}
          </p>

          <div
            className={styles.ctaRow}
            data-reveal
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <a href="#contact" className="btn btn-primary btn-lg" onClick={scrollToContact}>
              {t.hero.ctaPrimary}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <MessageCircle size={18} />
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div
            className={styles.trustBar}
            data-reveal
            style={{ opacity: 0, transition: 'opacity 0.6s ease' }}
          >
            <span className={styles.trustItem}>
              <span className={styles.trustDot} />
              {BUSINESS.advisor.experience.insurance} in Insurance
            </span>
            <span className={styles.trustSep} aria-hidden="true">·</span>
            <span className={styles.trustItem}>
              <span className={styles.trustDot} />
              500+ Families Protected
            </span>
            <span className={styles.trustSep} aria-hidden="true">·</span>
            <span className={styles.trustItem}>
              <span className={styles.trustDot} />
              10× MDRT & 2× COT
            </span>
            <span className={styles.trustSep} aria-hidden="true">·</span>
            <span className={styles.trustItem}>
              <span className={styles.trustDot} />
              AMFI ARN-{BUSINESS.regulatory.amfiArn}
            </span>
          </div>
        </div>

        {/* Right — portrait */}
        <div className={styles.imageCol} ref={imageRef}>
          <div className={styles.imageFrame}>
            <div className={styles.imageWrap}>
              <img
                src="/assets/advisor/hero-portrait.jpg"
                alt="Vinay Singh, VN Financial Advisory — Mutual Fund Distributor and Insurance Advisor, Rewa"
                className={styles.portrait}
                loading="eager"
                width="460"
                height="600"
              />
            </div>
            {/* Gold corner accents */}
            <div className={styles.cornerTL} aria-hidden="true" />
            <div className={styles.cornerBR} aria-hidden="true" />

            {/* Name card */}
            <div className={styles.nameCard}>
              <div className={styles.nameCardName}>{BUSINESS.advisor.fullName}</div>
              <div className={styles.nameCardDesig}>{BUSINESS.advisor.designation} · ID: {BUSINESS.regulatory.vinayInsuranceId}</div>
              <div className={styles.nameCardCo}>With Mrs. Neetu Singh (ID: {BUSINESS.regulatory.neetuInsuranceId})</div>
            </div>

            {/* MDRT badge */}
            <div className={styles.mdrtBadge} aria-label="10 times MDRT and 2 times COT qualified">
              <Star size={14} className={styles.mdrtStar} />
              <span>10× MDRT · 2× COT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollDown}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  )
}
