import { useRef, useEffect, useState } from 'react'
import { Star, Shield, Trophy, Award, Maximize2, X, CheckCircle, ExternalLink } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { BUSINESS } from '../data/business'
import styles from './Achievements.module.css'

/* Map achievement ids to Lucide icons */
const ICONS = {
  mdrt: null, // rendered as "10×" text
  cot: null,  // rendered as "2×" text
  titanium: Shield,
  'icici-excellence': Trophy,
}

const TROPHY_DATA = [
  {
    id: 'icici-2024',
    src: '/assets/awards/icici-trophy.jpg',
    alt: 'ICICI Prudential Award of Excellence trophy presented to Mr. Vinay Singh for MDRT Qualification-2024',
    title: 'ICICI Prudential Life Insurance — Award of Excellence',
    subTitle: 'Presented to Mr. Vinay Singh, Rewa (Advisor ID: ICICI01176293)',
    inscription: [
      'ICICI Prudential Life Insurance',
      'Award of Excellence',
      'Presented to Mr. Vinay Singh',
      'Rewa',
      'For MDRT Qualification-2024'
    ],
    details: 'This official physical trophy visibly confirms the Award of Excellence presented to Mr. Vinay Singh (Advisor ID: ICICI01176293) by ICICI Prudential Life Insurance in recognition of achieving MDRT Qualification for 2024.',
    verificationStatus: 'Documented Trophy & Advisor ID Verified'
  },
  {
    id: 'cot-mdrt-trophies',
    src: '/assets/awards/cot-mdrt-trophies.jpg',
    alt: 'Black and gold Court of the Table (COT) and MDRT recognition trophies',
    title: 'Court of the Table (COT) & MDRT Recognition Trophies',
    subTitle: 'Premier Industry Recognition · Advisor IDs: ICICI01176293 & ICICI01374991',
    inscription: [
      'COT Trophy: Presented for achieving Court of the Table (COT)',
      'MDRT Trophy: ICICI Prudential Award of Excellence for MDRT Qualification'
    ],
    details: 'Physical COT and MDRT recognition trophies representing premier production milestones. Our advisory practice operates with authorized appointments for Mr. Vinay Singh (ID: ICICI01176293) and Mrs. Neetu Singh (ID: ICICI01374991) with ICICI Prudential Life Insurance.',
    verificationStatus: 'Documented Trophies & Agency IDs Confirmed'
  }
]

/* Hook: animate a counter from 0 to target when visible */
function useCounterAnimation(target, duration = 1200) {
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
            const progress = Math.min((now - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

/* Individual achievement card */
function AchievementCard({ achievement, index }) {
  const { id, title, subtitle, description } = achievement
  const Icon = ICONS[id]
  const isMDRT = id === 'mdrt'
  const isCOT = id === 'cot'
  const isCounter = isMDRT || isCOT
  const targetCount = isMDRT ? 10 : (isCOT ? 2 : 0)
  const { value: counterVal, ref: counterRef } = useCounterAnimation(targetCount, 1400)

  return (
    <article
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={title}
    >
      {/* Icon / Number Badge */}
      <div className={styles.iconArea} ref={isCounter ? counterRef : null}>
        {isCounter ? (
          <span className={styles.bigNumber} aria-label={`${targetCount} times`}>
            {counterVal}
            <span className={styles.bigNumberSuffix}>×</span>
          </span>
        ) : (
          Icon && (
            <Icon
              size={32}
              strokeWidth={1.5}
              className={styles.cardIcon}
              aria-hidden="true"
            />
          )
        )}
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardSubtitle}>{subtitle}</span>
        <p className={styles.cardDesc}>{description}</p>
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
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
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
          <p className={`${styles.subheading}`}>{t.achievements.subheading}</p>
        </div>

        {/* Achievement Cards — 2×2 grid */}
        <div className={styles.cardsGrid}>
          {BUSINESS.achievements.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>

        {/* Trophy Photographs & Viewing Facility */}
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
                title="Click to view details and inscription"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(trophy) }}
              >
                <div className={styles.trophyImgWrap}>
                  <img src={trophy.src} alt={trophy.alt} className={styles.trophyImg} loading="lazy" />
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
        <aside className={`${styles.complianceNote} reveal`} role="note" aria-label="Compliance note">
          <p>
            All achievement claims are based on verified records. MDRT (Million Dollar Round Table) is an independent
            international association. Awards presented by ICICI Prudential Life Insurance reflect individual professional
            milestones and do not imply endorsement of VN Financial Advisory as an independent legal branch or separate corporate entity.
          </p>
        </aside>
      </div>

      {/* Lightbox Modal */}
      {selectedTrophy && (
        <div className={styles.modalBackdrop} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={closeLightbox} aria-label="Close award modal">
              <X size={22} />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageCol}>
                <img src={selectedTrophy.src} alt={selectedTrophy.alt} className={styles.modalImg} />
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
