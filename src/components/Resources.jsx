import React, { useState } from 'react'
import { ArrowRight, X, Clock, BookOpen, Share2 } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { ARTICLES } from '../data/articles'
import styles from './Resources.module.css'

export default function Resources() {
  const { t, lang } = useLang()
  const rt = t.resources
  const [activeArticleId, setActiveArticleId] = useState(null)

  const activeArticleData = activeArticleId && ARTICLES[activeArticleId]
    ? ARTICLES[activeArticleId][lang] || ARTICLES[activeArticleId]['en']
    : null

  const openArticle = (id) => {
    setActiveArticleId(id)
    document.body.style.overflow = 'hidden'
  }

  const closeArticle = () => {
    setActiveArticleId(null)
    document.body.style.overflow = ''
  }

  return (
    <section id="resources" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">{rt.sectionLabel}</span>
          <h2 className={`section-heading ${styles.heading}`}>{rt.heading}</h2>
          {rt.subheading && <p className={styles.subheading}>{rt.subheading}</p>}
          <div className="gold-divider" />
        </div>

        {/* Article cards */}
        <div className={styles.grid}>
          {rt.articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>{article.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.readTime}>
                  <Clock size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {article.readTime}
                </span>
                <button
                  className={styles.readBtn}
                  aria-label={`Read article: ${article.title}`}
                  onClick={() => openArticle(article.id)}
                >
                  {rt.readMore || 'Read Article'}
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          {rt.disclaimer ||
            'Educational content only. Not investment advice. Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully.'}
        </p>
      </div>

      {/* Reader Modal */}
      {activeArticleData && (
        <div className={styles.modalBackdrop} onClick={closeArticle} role="dialog" aria-modal="true">
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalMeta}>
                <span className={styles.badge}>{activeArticleData.category}</span>
                <span className={styles.readTime}>
                  <Clock size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {activeArticleData.readTime}
                </span>
              </div>
              <button
                className={styles.closeBtn}
                onClick={closeArticle}
                aria-label="Close article"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{activeArticleData.title}</h2>
              <p className={styles.modalDate}>{activeArticleData.date}</p>
              <div className="gold-divider" style={{ margin: '16px 0 24px' }} />

              <div className={styles.articleSections}>
                {activeArticleData.content.map((sec, idx) => (
                  <section key={idx} className={styles.articleSection}>
                    <h3 className={styles.sectionTitle}>{sec.heading}</h3>
                    <p className={styles.sectionText}>{sec.text}</p>
                  </section>
                ))}
              </div>

              <div className={styles.articleNotice}>
                <p>
                  <strong>Disclaimer:</strong> This article is intended solely for educational and informational purposes. It does not constitute investment advice or solicitation. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
                </p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className="btn btn-outline btn-sm" onClick={closeArticle}>
                Close
              </button>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  closeArticle()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Discuss with Vinay Singh
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
