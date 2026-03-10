/**
 * 設計系統：顏色 Tokens
 * 可依 Figma 設計稿替換為實際色值；用於 CSS 變數注入與組件
 */
export const colors = {
  // 主色
  primary: '#646cff',
  primaryHover: '#535bf2',
  primaryMuted: 'rgba(100, 108, 255, 0.12)',
  // 中性色
  background: '#ffffff',
  backgroundAlt: '#f8f9fa',
  /** 頁面內容區背景：微微發銀光的淺藍，與頂部藍色背景呼應 */
  pageBackground: '#eef2f8',
  text: '#1a1a1a',
  textMuted: '#6b7280',
  border: '#e5e7eb',
  borderFocus: '#646cff',
  // 語意
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  info: '#3b82f6',
}

/** 轉為可注入 :root 的 CSS 變數鍵值對 */
export function getColorVars() {
  return {
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover,
    '--color-primary-muted': colors.primaryMuted,
    '--color-background': colors.background,
    '--color-background-alt': colors.backgroundAlt,
    '--color-page-background': colors.pageBackground,
    '--color-text': colors.text,
    '--color-text-muted': colors.textMuted,
    '--color-border': colors.border,
    '--color-border-focus': colors.borderFocus,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--color-info': colors.info,
  }
}
