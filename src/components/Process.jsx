import { Phone, MessageCircle, Shield, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LangContext'
import styles from './Process.module.css'

const STEPS = [
  {
    number: '01',
    icon: Phone,
    titleKey: 'connect',
    defaultTitle: 'Connect',
    defaultDesc: 'Reach out by phone, WhatsApp, or the contact form — whichever feels most comfortable for you.',
  },
  {
    number: '02',
    icon: MessageCircle,
    titleKey: 'discuss',
    defaultTitle: 'Discuss',
    defaultDesc: 'Have an open, unhurried conversation with Vinay Singh about your financial situation and goals.',
  },
  {
    number: '03',
    icon: Shield,
    titleKey: 'understand',
    defaultTitle: 'Understand',
    defaultDesc: 'Receive clear, jargon-free explanations of relevant products and options — with no pressure to decide immediately.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    titleKey: 'proceed',
    defaultTitle: 'Proceed',
    defaultDesc: 'When you are ready, proceed at your own pace with full support through every step of the process.',
  },
]

export default function Process() {
  const { t } = useLang()
  const pt = t.process || {}

  return (
    <section id="process" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={`section-label ${styles.labelLight}`}>
            {pt.sectionLabel || 'How It Works'}
          </span>
          <h2 className={styles.heading}>
            {pt.heading || 'Your Journey in Four Simple Steps'}
          </h2>
          {(pt.subheading) && (
            <p className={styles.subheading}>{pt.subheading}</p>
          )}
        </div>

        {/* Steps */}
        <div className={styles.stepsWrapper}>
          {/* Connecting line (desktop) */}
          <div className={styles.connectLine} aria-hidden="true" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon
            const stepData = pt.steps?.[idx] || {}
            const title = stepData.title || step.defaultTitle
            const desc = stepData.desc || step.defaultDesc

            return (
              <div key={step.number} className={styles.step}>
                {/* Mobile vertical connector (not for first item) */}
                {idx > 0 && <div className={styles.mobileConnector} aria-hidden="true" />}

                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.iconWrap}>
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDesc}>{desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            {pt.cta || 'Start Your Journey'}
          </a>
        </div>
      </div>
    </section>
  )
}
