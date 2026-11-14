import { useEffect } from 'react'

/**
 * useScrollReveal — applies 'visible' class to .reveal elements
 * when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
