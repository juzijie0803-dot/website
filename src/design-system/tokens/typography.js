/**
 * 設計系統：字體與字級 Tokens
 * 可依 Figma 設計稿替換 font-family、size、weight、lineHeight
 */
export const fontFamily = {
  sans: "ui-sans-serif, system-ui, 'Segoe UI', Roboto, sans-serif",
  mono: "ui-monospace, Consolas, 'Courier New', monospace",
}

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
}

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}

export const lineHeight = {
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
}

/** 轉為可注入 :root 的 CSS 變數 */
export function getTypographyVars() {
  return {
    '--font-sans': fontFamily.sans,
    '--font-mono': fontFamily.mono,
    ...Object.fromEntries(Object.entries(fontSize).map(([k, v]) => [`--text-${k}`, v])),
    ...Object.fromEntries(Object.entries(fontWeight).map(([k, v]) => [`--font-${k}`, v])),
    ...Object.fromEntries(Object.entries(lineHeight).map(([k, v]) => [`--leading-${k}`, v])),
  }
}
