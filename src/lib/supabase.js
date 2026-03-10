/**
 * Supabase 客戶端：訪問記錄、交個朋友表單寫入
 * 需配置 VITE_SUPABASE_URL、VITE_SUPABASE_ANON_KEY
 */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/** 是否已配置 Supabase */
export function isSupabaseConfigured() {
  return !!supabase
}
