import React, { useState } from 'react'
import { X, ShieldCheck, FileText, AlertTriangle, Lock, Building, CheckCircle2 } from 'lucide-react'
import { BUSINESS } from '../data/business'
import styles from './LegalModal.module.css'

export default function LegalModal({ isOpen, initialTab = 'regulatory', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab)

  if (!isOpen) return null

  const tabs = [
    { id: 'regulatory', label: 'Regulatory & Ownership', icon: Building },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'terms', label: 'Terms of Use', icon: FileText },
    { id: 'disclaimer', label: 'Risk Disclosures', icon: AlertTriangle },
  ]

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="legal-title">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerTitleWrap}>
            <ShieldCheck size={24} className={styles.headerIcon} />
            <div>
              <h2 id="legal-title" className={styles.title}>Regulatory, Legal & Compliance Disclosures</h2>
              <p className={styles.subtitle}>VN Financial Advisory · Rewa, Madhya Pradesh</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close legal modal">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className={styles.content}>
          {/* TAB 1: REGULATORY & OWNERSHIP CLARITY */}
          {activeTab === 'regulatory' && (
            <div className={styles.tabPane}>
              <h3 className={styles.sectionHeading}>Business Structure & Operational Management</h3>
              <p className={styles.paragraph}>
                <strong>VN Financial Advisory</strong> is a financial services practice operating from Rewa, Madhya Pradesh. The day-to-day business operations, client communication, enquiry handling, and advisory services are managed operationally by <strong>Mr. Vinay Singh</strong>.
              </p>

              <h4 className={styles.subHeading}>Associated Advisors & Role Clarity</h4>
              <p className={styles.paragraph}>
                The professionals associated with VN Financial Advisory and their respective verified intermediary credentials are:
              </p>
              <ul className={styles.list}>
                <li><strong>Mr. Vinay Singh:</strong> Founder, Operational Lead & Primary Client Advisor. AMFI Registered Mutual Fund Distributor (ARN-311806). Titanium Advisor with ICICI Life Insurance (Advisor ID: <code>ICICI01176293</code>). Over 15 years of industry experience.</li>
                <li><strong>Mrs. Neetu Singh:</strong> Authorized Life Insurance Advisor with ICICI Life Insurance (Advisor ID: <code>ICICI01374991</code>). Actively associated with client coverage, servicing, and policyholder assistance.</li>
              </ul>
              <p className={styles.noticeBox}>
                <strong>Policyholder & Investment Record Transparency:</strong> Individual insurance policies and mutual fund investment folios are held strictly under the official individual names of respective policyholders and investors as recorded with the respective life insurer or Asset Management Company (AMC).
              </p>

              <h4 className={styles.subHeading}>Intermediary Registration Status</h4>
              <div className={styles.regTable}>
                <div className={styles.regRow}>
                  <span className={styles.regKey}>Mutual Fund Distribution</span>
                  <span className={styles.regVal}>AMFI Registered Mutual Fund Distributor · <strong>ARN-311806</strong> (Facilitating SIP, SWP, and Lump-Sum Investments)</span>
                </div>
                <div className={styles.regRow}>
                  <span className={styles.regKey}>Life Insurance Representation</span>
                  <span className={styles.regVal}>
                    Authorized Intermediaries — ICICI Life Insurance Company Ltd.:<br />
                    • Mr. Vinay Singh — Advisor ID: <strong>ICICI01176293</strong> (Titanium Advisor)<br />
                    • Mrs. Neetu Singh — Advisor ID: <strong>ICICI01374991</strong>
                  </span>
                </div>
                <div className={styles.regRow}>
                  <span className={styles.regKey}>SEBI Status Notice</span>
                  <span className={styles.regVal}>VN Financial Advisory acts as an AMFI-registered mutual fund distributor (ARN-311806) and authorized insurance intermediary. It does NOT hold out as an independent SEBI Registered Investment Adviser (RIA) under SEBI (Investment Advisers) Regulations, 2013.</span>
                </div>
                <div className={styles.regRow}>
                  <span className={styles.regKey}>Client Trust Milestone</span>
                  <span className={styles.regVal}>Proudly serving and protecting <strong>500+ client families</strong> across Rewa and Madhya Pradesh with comprehensive financial solutions.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className={styles.tabPane}>
              <h3 className={styles.sectionHeading}>Privacy Policy</h3>
              <p className={styles.paragraph}>
                This Privacy Policy outlines how VN Financial Advisory collects, uses, and safeguards information submitted through our website (https://vnfinancialadvisory.in).
              </p>

              <h4 className={styles.subHeading}>1. Information We Collect</h4>
              <p className={styles.paragraph}>
                Through our website contact form, we collect only minimal contact details submitted voluntarily by prospective clients:
              </p>
              <ul className={styles.list}>
                <li>Full Name</li>
                <li>Phone / WhatsApp Contact Number</li>
                <li>City / Town of Residence</li>
                <li>Selected Area of Interest (Mutual Funds, Life Insurance, Health Insurance, General Enquiry)</li>
                <li>Preferred Contact Time</li>
              </ul>

              <div className={styles.securityAlert}>
                <strong>Strict Sensitive Data Protection:</strong> We NEVER request or collect government identification numbers (Aadhaar, PAN), bank account numbers, credit/debit card credentials, passwords, PINs, OTPs, or policy passwords through our online marketing forms. Any KYC or official onboarding documentation is conducted strictly through official, encrypted AMC/insurer portals or physical verified forms.
              </div>

              <h4 className={styles.subHeading}>2. Use of Information</h4>
              <p className={styles.paragraph}>
                Information provided is utilized solely to respond to your direct enquiry, schedule consultations with Mr. Vinay Singh, and provide relevant information regarding financial products. We do not sell, rent, or trade your personal information to third-party telemarketers or external databases.
              </p>

              <h4 className={styles.subHeading}>3. Data Retention & Grievance Contact</h4>
              <p className={styles.paragraph}>
                Client communications are maintained confidentially. For privacy requests, corrections, or grievance redressal, please contact:
                <br />
                <strong>Grievance Officer:</strong> Vinay Singh · VN Financial Advisory
                <br />
                <strong>Email:</strong> vnfinancialadvisory@gmail.com · <strong>Phone:</strong> +91 96916 07779
              </p>
            </div>
          )}

          {/* TAB 3: TERMS OF USE */}
          {activeTab === 'terms' && (
            <div className={styles.tabPane}>
              <h3 className={styles.sectionHeading}>Terms of Website Use</h3>
              <p className={styles.paragraph}>
                By accessing or using this website, you agree to comply with and be bound by the following terms and conditions:
              </p>

              <h4 className={styles.subHeading}>1. Informational & Awareness Purpose</h4>
              <p className={styles.paragraph}>
                The content provided on this website — including descriptions of mutual funds, SIPs, life insurance, and health insurance — is intended strictly for general consumer awareness and educational purposes. It does not constitute formal financial, tax, or legal advice.
              </p>

              <h4 className={styles.subHeading}>2. No Guaranteed Returns</h4>
              <p className={styles.paragraph}>
                VN Financial Advisory does not make any promises, guarantees, or representations regarding assured returns, fixed profits, or market appreciation on mutual fund investments or market-linked insurance products. All market-linked investments carry risk of capital fluctuation.
              </p>

              <h4 className={styles.subHeading}>3. Geographical Scope</h4>
              <p className={styles.paragraph}>
                Services and product facilitations described on this website are intended primarily for residents of India, with primary operations in Rewa and Madhya Pradesh, subject to applicable Indian regulations (IRDAI, SEBI, AMFI).
              </p>

              <h4 className={styles.subHeading}>4. Intellectual Property & Brand Names</h4>
              <p className={styles.paragraph}>
                The VN Financial Advisory monogram, emblem, tagline ("Trust. Partnership. Growth."), and original website content are protected assets. Third-party brand names (such as ICICI Life Insurance, AMFI, MDRT) remain the registered trademarks of their respective organizations and are cited herein strictly for factual representation of professional credentials and agency appointments.
              </p>
            </div>
          )}

          {/* TAB 4: RISK DISCLOSURES */}
          {activeTab === 'disclaimer' && (
            <div className={styles.tabPane}>
              <h3 className={styles.sectionHeading}>Mandatory Risk Disclosures & Disclaimers</h3>

              <div className={styles.mandatoryCard}>
                <h4 className={styles.mandatoryTitle}>Mutual Fund Statutory Disclosure</h4>
                <p className={styles.mandatoryText}>
                  "Mutual Fund investments are subject to market risks, read all scheme related documents carefully."
                </p>
              </div>

              <div className={styles.mandatoryCard}>
                <h4 className={styles.mandatoryTitle}>Insurance Solicitation Disclosure</h4>
                <p className={styles.mandatoryText}>
                  "Insurance is the subject matter of solicitation. Policy terms, exclusions, waiting periods, sub-limits, and conditions apply as outlined in the official policy brochure issued by the respective insurance company."
                </p>
              </div>

              <h4 className={styles.subHeading}>Standard SEBI Social Media & Advertisement Guidelines</h4>
              <p className={styles.paragraph}>
                In alignment with SEBI and AMFI circulars regarding investor education and digital communications:
              </p>
              <ul className={styles.list}>
                <li>Past performance of any mutual fund scheme or index is not an indicator of future results.</li>
                <li>Distributors receive commissions from Asset Management Companies (AMCs) as permitted under AMFI and SEBI regulations. Commission disclosures are available upon request.</li>
                <li>Consultation requests initiated via WhatsApp, phone, or website contact forms are processed individually on a voluntary basis.</li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  )
}
