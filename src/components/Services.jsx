import { useRef, useEffect } from 'react'
import { TrendingUp, Shield, Heart, ChevronRight, CheckCircle2, Info } from 'lucide-react'
import { useLang } from '../context/LangContext'
import styles from './Services.module.css'

const SERVICE_ICONS = [TrendingUp, Shield, Heart]
const SERVICE_KEYS = ['service1', 'service2', 'service3']

export default function Services() {
  const { t } = useLang()
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className={`section ${styles.services}`} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">{t.services.sectionLabel}</span>
          <h2 className={`section-heading ${styles.heading}`}>{t.services.heading}</h2>
          <p className={`section-subheading ${styles.subheading}`}>{t.services.subheading}</p>
        </div>

        {/* Service Cards */}
        <div className={styles.grid}>
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[index]
            const service = t.services[key]
            return (
              <article
                key={key}
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${index * 0.12}s` }}
                aria-label={service.title}
              >
                {/* Icon */}
                <div className={styles.iconWrap}>
                  <Icon size={28} strokeWidth={1.75} className={styles.icon} aria-hidden="true" />
                </div>

                {/* Subtitle */}
                <span className={styles.subtitle}>{service.subtitle}</span>

                {/* Title */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* Description */}
                <p className={styles.description}>{service.description}</p>

                {/* Bullet Points */}
                <ul className={styles.points} aria-label={`Key features of ${service.title}`}>
                  {service.points.map((point, i) => (
                    <li key={i} className={styles.point}>
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        className={styles.checkIcon}
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Risk Disclosure (service1 only) */}
                {key === 'service1' && service.disclosure && (
                  <p className={styles.disclosure}>
                    <Info size={13} strokeWidth={2} aria-hidden="true" />
                    <em>{service.disclosure}</em>
                  </p>
                )}

                {/* CTA */}
                <a href="#contact" className={`btn btn-outline btn-sm ${styles.cta}`}>
                  {service.cta}
                  <ChevronRight size={15} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>

        {/* Full-width Risk Disclosure Banner */}
        <aside className={`${styles.riskBanner} reveal`} role="note" aria-label="Risk disclosure">
          <Info size={16} strokeWidth={2} aria-hidden="true" />
          <p>
            Mutual Fund investments are subject to market risks. Please read all scheme-related
            documents carefully.
          </p>
        </aside>
      </div>
    </section>
  )
}
