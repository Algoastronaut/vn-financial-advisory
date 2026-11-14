import { User, MessageCircle, Shield, Heart, CheckCircle2, MapPin } from 'lucide-react'
import { useLang } from '../context/LangContext'
import styles from './WhyUs.module.css'

const ICONS = [User, MessageCircle, Shield, Heart, CheckCircle2, MapPin]

export default function WhyUs() {
  const { t } = useLang()
  const reasons = t.whyUs.reasons

  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">{t.whyUs.sectionLabel}</span>
          <h2 className={`section-heading ${styles.heading}`}>{t.whyUs.heading}</h2>
          {t.whyUs.subheading && (
            <p className={styles.subheading}>{t.whyUs.subheading}</p>
          )}
          <div className="gold-divider" />
        </div>

        {/* Reason cards grid */}
        <div className={styles.grid}>
          {reasons.map((reason, idx) => {
            const Icon = ICONS[idx % ICONS.length]
            return (
              <article key={idx} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDesc}>{reason.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
