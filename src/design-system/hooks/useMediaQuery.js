/**
 * 設計系統：響應式媒體查詢 Hook
 * 訂閱 matchMedia，回傳是否符合查詢
 */
import { useState, useEffect } from 'react'

/**
 * @param {string} query - 媒體查詢字串，如 '(min-width: 768px)'
 * @returns {boolean} 是否匹配
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    media.addEventListener('change', handler)
    setMatches(media.matches)
    return () => media.removeEventListener('change', handler)
  }, [query])

  return matches
}
