// SVG Logo component — manually constructed, no image generation
import React from 'react'
import styles from './VNLogo.module.css'

export default function VNLogo({ variant = 'primary', className = '' }) {
  if (variant === 'icon') {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="VN Financial Advisory icon"
        role="img"
      >
        {/* Shield shape */}
        <path
          d="M20 2L4 9v12c0 9 7 16 16 19 9-3 16-10 16-19V9L20 2z"
          fill="#102B46"
          stroke="#C9A45C"
          strokeWidth="1.5"
        />
        {/* VN monogram */}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#C9A45C"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
        >
          VN
        </text>
        {/* Growth arrow */}
        <polyline
          points="10,30 16,24 21,27 30,16"
          fill="none"
          stroke="#C9A45C"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    )
  }

  if (variant === 'navbar') {
    return (
      <div className={styles.navbarWrap}>
        {/* Compact shield icon */}
        <svg
          className={styles.navbarShield}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 2L4 9v12c0 9 7 16 16 19 9-3 16-10 16-19V9L20 2z"
            fill="#102B46"
            stroke="#C9A45C"
            strokeWidth="1.5"
          />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#C9A45C"
            fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="14"
            fontWeight="700"
          >
            VN
          </text>
        </svg>
        {/* Wordmark */}
        <div className={styles.navbarText}>
          <span className={styles.navbarBrand}>
            VN Financial Advisory
          </span>
          <span className={styles.navbarTagline}>
            Trust · Partnership · Growth
          </span>
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M20 2L4 9v12c0 9 7 16 16 19 9-3 16-10 16-19V9L20 2z"
            fill="rgba(255,255,255,0.08)"
            stroke="#C9A45C"
            strokeWidth="1.5"
          />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#C9A45C"
            fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="14"
            fontWeight="700"
          >
            VN
          </text>
        </svg>
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '0.06em',
          }}>
            VN Financial Advisory
          </div>
          <div style={{
            fontSize: '0.6rem',
            fontWeight: 500,
            color: '#C9A45C',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '2px',
          }}>
            Trust · Partnership · Growth
          </div>
        </div>
      </div>
    )
  }

  // primary / default — large horizontal
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className={className}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="VN Financial Advisory"
        style={{ flexShrink: 0 }}
      >
        {/* Shield */}
        <path
          d="M30 3L5 13.5v18c0 13.5 10.5 24 25 28.5C45 55.5 55 45 55 31.5v-18L30 3z"
          fill="#102B46"
          stroke="#C9A45C"
          strokeWidth="2"
        />
        {/* Family icon */}
        <circle cx="22" cy="34" r="2.5" fill="#C9A45C" opacity="0.6" />
        <circle cx="30" cy="32" r="3" fill="#C9A45C" opacity="0.8" />
        <circle cx="38" cy="34" r="2.5" fill="#C9A45C" opacity="0.6" />
        {/* Growth arrow */}
        <polyline
          points="14,42 22,34 29,38 42,22"
          fill="none"
          stroke="#C9A45C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="42,17 47,25 37,25" fill="#C9A45C" />
        {/* VN */}
        <text
          x="30"
          y="26"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2"
        >
          VN
        </text>
      </svg>
      <div>
        <div style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#102B46',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}>
          VN Financial Advisory
        </div>
        <div style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          color: '#C9A45C',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginTop: '5px',
        }}>
          Trust · Partnership · Growth
        </div>
        <div style={{
          fontSize: '0.6rem',
          color: '#718096',
          letterSpacing: '0.08em',
          marginTop: '3px',
        }}>
          Mutual Funds · Life Insurance · Health Insurance
        </div>
      </div>
    </div>
  )
}
