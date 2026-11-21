import React from 'react'
import { useLang } from '../context/LangContext'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import { Award, Shield, Users, MessageCircle, CheckCircle2 } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left — portrait */}
          <div className={`reveal ${styles.imageCol}`}>
            <div className={styles.imageFrame}>
              <img
                src="/assets/advisor/office-portrait.jpg"
                alt="Vinay Singh at his office in Rewa — VN Financial Advisory"
                className={styles.portrait}
                loading="lazy"
                width="480"
                height="560"
              />
              {/* Decorative frame border */}
              <div className={styles.frameBorder} aria-hidden="true" />

              {/* Experience badge */}
              <div className={styles.expBadge}>
                <div className={styles.expNumber}>15+</div>
                <div className={styles.expLabel}>Years of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className={`reveal ${styles.textCol}`} style={{ transitionDelay: '0.15s' }}>
            <p className="section-label">{t.about.sectionLabel}</p>
            <h2 className={`section-heading ${styles.heading}`}>{t.about.heading}</h2>
            <p className={styles.subheading}>{t.about.subheading}</p>
            <div className="gold-divider" />

            <p className={styles.bio}>{t.about.bio1}</p>
            <p className={styles.bio}>{t.about.bio2}</p>
            <p className={styles.bio}>{t.about.bio3}</p>

            {/* Stats */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <div className={styles.statValue}>{t.about.stat1Value}</div>
                <div className={styles.statLabel}>{t.about.stat1Label}</div>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <div className={styles.statValue}>{t.about.stat2Value}</div>
                <div className={styles.statLabel}>{t.about.stat2Label}</div>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <div className={styles.statValue}>{t.about.stat3Value}</div>
                <div className={styles.statLabel}>{t.about.stat3Label}</div>
              </div>
            </div>

            {/* Verified Team Credentials Box */}
            <div className={styles.credentialsCard}>
              <div className={styles.credentialHeader}>
                <Shield size={16} className={styles.credentialHeaderIcon} />
                <span>Authorized Financial & Insurance Intermediaries</span>
              </div>
              <div className={styles.credentialGrid}>
                <div className={styles.credentialItem}>
                  <CheckCircle2 size={14} className={styles.checkIcon} />
                  <div>
                    <strong>Mr. Vinay Singh</strong>
                    <span>Titanium Advisor · ID: <code>{BUSINESS.regulatory.vinayInsuranceId}</code></span>
                    <span className={styles.arnTag}>AMFI Reg. Mutual Fund Distributor · <strong>ARN-{BUSINESS.regulatory.amfiArn}</strong></span>
                  </div>
                </div>
                <div className={styles.credentialItem}>
                  <CheckCircle2 size={14} className={styles.checkIcon} />
                  <div>
                    <strong>Mrs. Neetu Singh</strong>
                    <span>Authorized Advisor · ICICI Life Insurance ID: <code>{BUSINESS.regulatory.neetuInsuranceId}</code></span>
                    <span className={styles.arnTag}>Life Insurance Advisory & Client Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {t.about.cta}
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
      </div>
    </section>
  )
}
