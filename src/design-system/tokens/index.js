/**
 * 設計系統 Tokens 統一導出與 CSS 變數注入
 */
export { colors, getColorVars } from './colors'
export { spacing, getSpacingVars } from './spacing'
export { fontFamily, fontSize, fontWeight, lineHeight, getTypographyVars } from './typography'
import { getColorVars } from './colors'
import { getSpacingVars } from './spacing'
import { getTypographyVars } from './typography'

/** 將所有 tokens 應用到 document.documentElement，供 Tailwind 與組件使用 */
export function applyDesignTokens() {
  const root = document.documentElement
  const vars = {
    ...getColorVars(),
    ...getSpacingVars(),
    ...getTypographyVars(),
  }
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}
