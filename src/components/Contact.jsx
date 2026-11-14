import { useState } from 'react'
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Globe,
} from 'lucide-react'
import { useLang } from '../context/LangContext'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import styles from './Contact.module.css'

// TODO: Connect to backend/form service (Formspree, Netlify Forms, etc.) before launch

const INITIAL_FORM = {
  name: '',
  phone: '',
  city: '',
  interest: '',
  preferredTime: '',
  consent: false,
}

function validateForm(formData, t) {
  const errors = {}
  const ft = t.contact.form

  if (!formData.name.trim()) {
    errors.name = ft.required
  }

  if (!formData.phone.trim()) {
    errors.phone = ft.required
  } else if (!/^[+]?[0-9]{10,13}$/.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = ft.phoneInvalid
  }

  if (!formData.interest) {
    errors.interest = ft.required
  }

  if (!formData.consent) {
    errors.consent = ft.consentRequired
  }

  return errors
}

export default function Contact() {
  const { t } = useLang()
  const ct = t.contact
  const ft = ct.form

  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateForm(formData, t)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Scroll to first error
      const firstErrorField = document.querySelector('[data-error="true"]')
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)
    setErrors({})

    // Simulate network delay (remove when real backend is connected)
    await new Promise(resolve => setTimeout(resolve, 1200))

    // TODO: Replace simulated delay with actual form submission:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    setSubmitting(false)
    setSubmitted(true)
  }

  function handleReset() {
    setFormData(INITIAL_FORM)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* ─── LEFT — Contact Info Panel ─── */}
          <aside className={styles.infoPanel}>
            {/* Panel header */}
            <div className={styles.panelHeader}>
              <span className={`section-label ${styles.labelLight}`}>{ct.sectionLabel}</span>
              <h2 className={styles.panelHeading}>{ct.heading}</h2>
              <p className={styles.panelSubheading}>{ct.subheading}</p>
            </div>

            {/* Action buttons */}
            <div className={styles.actionBtns}>
              <a
                href={`tel:${BUSINESS.contact.phoneRaw}`}
                className={`btn ${styles.callBtn}`}
                aria-label={`Call Vinay Singh at ${BUSINESS.contact.phone}`}
              >
                <Phone size={20} strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong>{ct.callUs}</strong>
                  <em>{BUSINESS.contact.phone}</em>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp ${styles.waBtn}`}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong>{ct.whatsappUs}</strong>
                  <em>WhatsApp</em>
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS.contact.email}`}
                className={`btn ${styles.emailBtn}`}
                aria-label={`Email ${BUSINESS.contact.email}`}
              >
                <Mail size={20} strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong>{ct.emailUs}</strong>
                  <em>{BUSINESS.contact.email}</em>
                </span>
              </a>
            </div>

            {/* Meta rows */}
            <ul className={styles.metaList}>
              <li className={styles.metaRow}>
                <Clock size={18} strokeWidth={1.5} className={styles.metaIcon} aria-hidden="true" />
                <div>
                  <span className={styles.metaLabel}>{ct.hours}</span>
                  <span className={styles.metaValue}>{ct.hoursValue}</span>
                </div>
              </li>
              <li className={styles.metaRow}>
                <MapPin size={18} strokeWidth={1.5} className={styles.metaIcon} aria-hidden="true" />
                <div>
                  <span className={styles.metaLabel}>{ct.location}</span>
                  <span className={styles.metaValue}>{ct.locationValue}</span>
                </div>
              </li>
              <li className={styles.metaRow}>
                <Globe size={18} strokeWidth={1.5} className={styles.metaIcon} aria-hidden="true" />
                <div>
                  <span className={styles.metaLabel}>Instagram</span>
                  <a
                    href={BUSINESS.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    {BUSINESS.contact.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>

            {/* Compliance note */}
            <p className={styles.complianceNote}>
              Direct line to {BUSINESS.advisor.name}. No automated systems.
            </p>
          </aside>

          {/* ─── RIGHT — Contact Form ─── */}
          <div className={styles.formCol}>
            <h3 className={styles.formHeading}>{ct.formHeading}</h3>

            {submitted ? (
              /* ── Success state ── */
              <div className={styles.successCard} role="alert" aria-live="polite">
                <div className={styles.successIcon}>
                  <CheckCircle2 size={48} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h4 className={styles.successTitle}>{ft.successTitle}</h4>
                <p className={styles.successMsg}>{ft.successMsg}</p>
                <button
                  className={`btn btn-outline ${styles.resetBtn}`}
                  onClick={handleReset}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact enquiry form"
              >
                {/* Full Name */}
                <div
                  className={`${styles.fieldGroup} ${errors.name ? styles.hasError : ''}`}
                  data-error={!!errors.name}
                >
                  <label htmlFor="contact-name" className={styles.label}>
                    {ft.name} <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder={ft.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                  {errors.name && (
                    <span id="error-name" className={styles.errorMsg} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div
                  className={`${styles.fieldGroup} ${errors.phone ? styles.hasError : ''}`}
                  data-error={!!errors.phone}
                >
                  <label htmlFor="contact-phone" className={styles.label}>
                    {ft.phone} <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className={styles.input}
                    placeholder={ft.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                  />
                  {errors.phone && (
                    <span id="error-phone" className={styles.errorMsg} role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* City (optional) */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-city" className={styles.label}>
                    {ft.city}
                    <span className={styles.optional}> (optional)</span>
                  </label>
                  <input
                    id="contact-city"
                    type="text"
                    name="city"
                    className={styles.input}
                    placeholder={ft.cityPlaceholder}
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="address-level2"
                  />
                </div>

                {/* Area of Interest */}
                <div
                  className={`${styles.fieldGroup} ${errors.interest ? styles.hasError : ''}`}
                  data-error={!!errors.interest}
                >
                  <label htmlFor="contact-interest" className={styles.label}>
                    {ft.interest} <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="contact-interest"
                      name="interest"
                      className={styles.select}
                      value={formData.interest}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.interest}
                      aria-describedby={errors.interest ? 'error-interest' : undefined}
                    >
                      <option value="" disabled>Select an area…</option>
                      {ft.interestOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  {errors.interest && (
                    <span id="error-interest" className={styles.errorMsg} role="alert">
                      {errors.interest}
                    </span>
                  )}
                </div>

                {/* Preferred Contact Time (optional) */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-time" className={styles.label}>
                    {ft.preferredTime}
                    <span className={styles.optional}> (optional)</span>
                  </label>
                  <input
                    id="contact-time"
                    type="text"
                    name="preferredTime"
                    className={styles.input}
                    placeholder={ft.preferredTimePlaceholder}
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>

                {/* Consent checkbox */}
                <div
                  className={`${styles.consentGroup} ${errors.consent ? styles.hasError : ''}`}
                  data-error={!!errors.consent}
                >
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="consent"
                      className={styles.checkbox}
                      checked={formData.consent}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? 'error-consent' : undefined}
                    />
                    <span className={styles.checkmark} aria-hidden="true" />
                    <span className={styles.consentText}>{ft.consent}</span>
                  </label>
                  {errors.consent && (
                    <span id="error-consent" className={styles.errorMsg} role="alert">
                      {errors.consent}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      {ft.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={2} aria-hidden="true" />
                      {ft.submit}
                    </>
                  )}
                </button>

                {/* Important note */}
                <p className={styles.privacyNote}>
                  We will never ask for PAN, Aadhaar, passwords or financial account details through this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
