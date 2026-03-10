/**
 * 設計系統：卡片組件
 * 使用 tokens 背景、邊框、間距
 */
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

const card = tv({
  base: 'rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden',
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
    },
  },
  defaultVariants: {
    padding: 'md',
    shadow: 'sm',
  },
})

/**
 * @param {Object} props
 * @param {'none'|'sm'|'md'|'lg'} [props.padding]
 * @param {'none'|'sm'|'md'} [props.shadow]
 * @param {string} [props.className]
 */
export function Card({ padding, shadow, className, ...rest }) {
  return <div className={clsx(card({ padding, shadow }), className)} {...rest} />
}
