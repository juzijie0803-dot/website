/**
 * 設計系統：間距 Tokens（4px 基準）
 * 可依 Figma 設計稿調整 scale
 */
const scale = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128]

export const spacing = {
  0: `${scale[0]}px`,
  1: `${scale[1]}px`,
  2: `${scale[2]}px`,
  3: `${scale[3]}px`,
  4: `${scale[4]}px`,
  5: `${scale[5]}px`,
  6: `${scale[6]}px`,
  8: `${scale[7]}px`,
  10: `${scale[8]}px`,
  12: `${scale[9]}px`,
  16: `${scale[10]}px`,
  20: `${scale[11]}px`,
  24: `${scale[12]}px`,
}

/** 轉為可注入 :root 的 CSS 變數 */
export function getSpacingVars() {
  return Object.fromEntries(
    Object.entries(spacing).map(([k, v]) => [`--spacing-${k}`, v])
  )
}
