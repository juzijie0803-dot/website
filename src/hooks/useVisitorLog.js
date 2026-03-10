/**
 * 訪問記錄：頁面載入時寫入 Supabase visitor_logs
 */
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useVisitorLog() {
  useEffect(() => {
    if (!supabase) return
    supabase
      .from('visitor_logs')
      .insert({
        path: typeof window !== 'undefined' ? window.location.pathname : '/',
        referrer: typeof document !== 'undefined' ? document.referrer || null : null,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      })
      .then(({ error }) => {
        if (error) console.warn('[VisitorLog]', error.message)
      })
  }, [])
}
