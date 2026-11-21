import { useRef, useEffect, useState } from 'react'
import { Star, Shield, Trophy, Award, Maximize2, X, CheckCircle, Crown } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { BUSINESS } from '../data/business'
import styles from './Achievements.module.css'

const TROPHY_DATA = [
  {
    id: 'icici-2024',
    src: '/assets/awards/icici-trophy.jpg',
    alt: 'ICICI Life Insurance Award of Excellence trophy presented to Mr. Vinay Singh for MDRT Qualification-2024',
    title: 'ICICI Life Insurance — Award of Excellence',
    subTitle: 'Presented to Mr. Vinay Singh, Rewa (Advisor ID: ICICI01176293)',
    inscription: [
      'ICICI Life Insurance',
      'Award of Excellence',
      'Presented to Mr. Vinay Singh',
      'Rewa',
      'For MDRT Qualification-2024',
    ],
    details:
      'This official physical trophy confirms the Award of Excellence presented to Mr. Vinay Singh (Advisor ID: ICICI01176293) by ICICI Life Insurance in recognition of MDRT Qualification for 2024.',
    verificationStatus: 'Documented Trophy & Advisor ID Verified',
  },
  {
    id: 'cot-mdrt-trophies',
    src: '/assets/awards/cot-mdrt-trophies.jpg',
    alt: 'Black and gold Court of the Table (COT) and MDRT recognition trophies',
    title: 'Court of the Table (COT) & MDRT Recognition Trophies',
    subTitle: 'Premier Industry Recognition · Advisor IDs: ICICI01176293 & ICICI01374991',
    inscription: [
      'COT Trophy: Presented for achieving Court of the Table (COT)',
      'MDRT Trophy: ICICI Life Insurance Award of Excellence for MDRT Qualification',
    ],
    details:
      'Physical COT and MDRT recognition trophies representing premier production milestones. Our advisory practice operates with authorised appointments for Mr. Vinay Singh (ID: ICICI01176293) and Mrs. Neetu Singh (ID: ICICI01374991) with ICICI Life Insurance.',
    verificationStatus: 'Documented Trophies & Agency IDs Confirmed',
  },
]

/* Animated counter hook */
function useCounter(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const start = performance.now()
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

/* ─── COT Hero Card (prominent, featured) ─── */
function COTHeroCard() {
  const { value: cotVal, ref: cotRef } = useCounter(2, 1600)

  return (
    <article className={`${styles.cotHero} reveal`} aria-label="2-Time Court of the Table">
      {/* Crown badge */}
      <div className={styles.cotCrown}>
        <Crown size={20} className={styles.cotCrownIcon} />
        <span>HIGHEST DISTINCTION</span>
      </div>

      <div className={styles.cotInner}>
        {/* Giant metric */}
        <div className={styles.cotMetricWrap} ref={cotRef}>
          <span className={styles.cotMetric} aria-label="2 times">
            {cotVal}
            <span className={styles.cotMetricX}>×</span>
          </span>
          <span className={styles.cotMetricLabel}>COURT OF THE TABLE</span>
          <span className={styles.cotMetricSub}>COT — Elite MDRT Distinction</span>
        </div>

        {/* Info */}
        <div className={styles.cotInfo}>
          <h3 className={styles.cotTitle}>2-Time Court of the Table (COT)</h3>
          <p className={styles.cotSubtitle}>Top 4% of MDRT Qualifiers Worldwide · 3× MDRT Base Production</p>
          <p className={styles.cotDesc}>
            Court of the Table (COT) is one of the most elite distinctions in financial advisory — earned by producing
            <strong> 3 times the base MDRT requirement</strong>. Mr. Vinay Singh has achieved this pinnacle milestone
            <strong> twice</strong>, placing him among the top 4% of MDRT members worldwide — a testament to exceptional
            dedication, ethical practice, and transformative client impact over 15+ years.
          </p>
          <div className={styles.cotBadgeRow}>
            <span className={styles.cotBadge}>
              <Star size={12} /> MDRT Premier Distinction
            </span>
            <span className={styles.cotBadge}>
              <CheckCircle size={12} /> Internationally Verified
            </span>
            <span className={styles.cotBadge}>
              <Crown size={12} /> Rewa's Finest
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ─── MDRT Feature Card ─── */
function MDRTCard() {
  const { value: mdrtVal, ref: mdrtRef } = useCounter(10, 1800)

  return (
    <article className={`${styles.mdrtCard} reveal`} aria-label="10-Time MDRT Qualifier">
      <div className={styles.mdrtInner} ref={mdrtRef}>
        <span className={styles.mdrtNum} aria-label="10 times">
          {mdrtVal}<span className={styles.mdrtX}>×</span>
        </span>
        <div className={styles.mdrtTextBlock}>
          <h3 className={styles.mdrtTitle}>MDRT Qualifier</h3>
          <p className={styles.mdrtSub}>Million Dollar Round Table — 10 Consecutive Qualifications</p>
          <p className={styles.mdrtDesc}>
            Ten-time MDRT qualification representing a decade of sustained, verified excellence in client protection and ethical financial advisory.
          </p>
        </div>
      </div>
    </article>
  )
}

/* ─── Small achievement card ─── */
function SmallCard({ achievement, index }) {
  const IconMap = { titanium: Shield, 'icici-excellence': Trophy }
  const Icon = IconMap[achievement.id]

  return (
    <article
      className={`${styles.smallCard} reveal`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={achievement.title}
    >
      <div className={styles.smallIconArea}>
        {Icon ? (
          <Icon size={26} strokeWidth={1.5} className={styles.smallIcon} />
        ) : (
          <span className={styles.smallMetric}>{achievement.metric}</span>
        )}
      </div>
      <div className={styles.smallContent}>
        <h4 className={styles.smallTitle}>{achievement.title}</h4>
        <span className={styles.smallSubtitle}>{achievement.subtitle}</span>
        <p className={styles.smallDesc}>{achievement.description}</p>
      </div>
    </article>
  )
}

export default function Achievements() {
  const { t } = useLang()
  const sectionRef = useRef(null)
  const [selectedTrophy, setSelectedTrophy] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const openLightbox = (trophy) => {
    setSelectedTrophy(trophy)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedTrophy(null)
    document.body.style.overflow = ''
  }

  // Separate achievements: cot + mdrt are featured, rest are small cards
  const smallCards = BUSINESS.achievements.filter(
    (a) => a.id !== 'cot' && a.id !== 'mdrt'
  )

  return (
    <section
      id="achievements"
      className={`section section-dark ${styles.achievements}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* Section Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">{t.achievements.sectionLabel}</span>
          <h2 className={`section-heading ${styles.heading}`}>{t.achievements.heading}</h2>
          <p className={styles.subheading}>{t.achievements.subheading}</p>
        </div>

        {/* ── COT HERO (most prominent) ── */}
        <COTHeroCard />

        {/* ── MDRT FEATURE ── */}
        <MDRTCard />

        {/* ── Other achievements (Titanium + Excellence) ── */}
        <div className={styles.smallGrid}>
          {smallCards.map((achievement, i) => (
            <SmallCard key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>

        {/* Trophy Photos */}
        <div className={`${styles.trophySection} reveal`}>
          <div className={styles.trophyDivider}>
            <span className={styles.trophyDividerLine} />
            <span className={styles.trophyDividerText}>
              {t.achievements.viewCertificates || 'Award Photographs & Verified Recognition'}
            </span>
            <span className={styles.trophyDividerLine} />
          </div>

          <div className={styles.trophyRow}>
            {TROPHY_DATA.map((trophy, index) => (
              <figure
                key={trophy.id}
                className={`${styles.trophyFrame} reveal`}
                style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
                onClick={() => openLightbox(trophy)}
                title="Click to view details"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox(trophy)
                }}
              >
                <div className={styles.trophyImgWrap}>
                  <img
                    src={trophy.src}
                    alt={trophy.alt}
                    className={styles.trophyImg}
                    loading="lazy"
                  />
                  <div className={styles.zoomOverlay}>
                    <Maximize2 size={24} className={styles.zoomIcon} />
                    <span>Click to Inspect Trophy</span>
                  </div>
                </div>
                <figcaption className={styles.trophyCaption}>
                  <strong>{trophy.title}</strong>
                  <span className={styles.trophySub}>{trophy.subTitle}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Compliance Note */}
        <aside className={`${styles.complianceNote} reveal`} role="note">
          <p>
            All achievement claims are based on verified records. MDRT (Million Dollar Round Table) is an independent
            international association. COT (Court of the Table) requires 3× the standard MDRT production threshold.
            Awards presented by ICICI Life Insurance reflect individual professional milestones and do not imply
            endorsement of VN Financial Advisory as an independent legal branch or separate corporate entity.
          </p>
        </aside>
      </div>

      {/* Lightbox Modal */}
      {selectedTrophy && (
        <div
          className={styles.modalBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalCloseBtn}
              onClick={closeLightbox}
              aria-label="Close award modal"
            >
              <X size={22} />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageCol}>
                <img
                  src={selectedTrophy.src}
                  alt={selectedTrophy.alt}
                  className={styles.modalImg}
                />
              </div>
              <div className={styles.modalInfoCol}>
                <div className={styles.modalBadge}>
                  <CheckCircle size={14} />
                  <span>{selectedTrophy.verificationStatus}</span>
                </div>
                <h3 className={styles.modalTitle}>{selectedTrophy.title}</h3>
                <h4 className={styles.modalSub}>{selectedTrophy.subTitle}</h4>

                <div className={styles.inscriptionBox}>
                  <h5 className={styles.inscriptionHeader}>Trophy Inscription / Citation:</h5>
                  {selectedTrophy.inscription.map((line, idx) => (
                    <div key={idx} className={styles.inscriptionLine}>{line}</div>
                  ))}
                </div>

                <p className={styles.modalDetailsText}>{selectedTrophy.details}</p>

                <div className={styles.modalActionRow}>
                  <button className="btn btn-outline btn-sm" onClick={closeLightbox}>
                    Close View
                  </button>
                  <a
                    href="#contact"
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      closeLightbox()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Consult with Vinay Singh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
