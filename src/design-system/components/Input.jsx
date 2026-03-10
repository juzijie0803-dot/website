/**
 * 設計系統：輸入框組件
 * 使用 tokens 邊框、字體、焦點樣式
 */
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

const input = tv({
  base: 'w-full rounded-lg border bg-[var(--color-background)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-[var(--text-base)] px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-[var(--color-border-focus)] disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    border: {
      default: 'border-[var(--color-border)]',
      error: 'border-[var(--color-error)] focus:ring-[var(--color-error)]',
    },
  },
  defaultVariants: {
    border: 'default',
  },
})

/**
 * @param {Object} props
 * @param {boolean} [props.error]
 * @param {string} [props.className]
 */
export function Input({ error, className, ...rest }) {
  return (
    <input
      className={clsx(input({ border: error ? 'error' : 'default' }), className)}
      {...rest}
    />
  )
}
