/**
 * 設計系統：按鈕組件
 * 支援 variant、size，使用 tokens 與 tailwind-variants
 */
import { tv } from 'tailwind-variants'
import { clsx } from 'clsx'

const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    variant: {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
      secondary: 'bg-[var(--color-background-alt)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-border)]',
      ghost: 'text-[var(--color-text)] hover:bg-[var(--color-primary-muted)]',
      danger: 'bg-[var(--color-error)] text-white hover:opacity-90',
    },
    size: {
      sm: 'text-[var(--text-sm)] px-3 py-1.5 gap-1.5',
      md: 'text-[var(--text-base)] px-4 py-2 gap-2',
      lg: 'text-[var(--text-lg)] px-5 py-2.5 gap-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

/**
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'|'danger'} [props.variant]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {string} [props.className]
 */
export function Button({ variant, size, className, ...rest }) {
  return (
    <button
      type="button"
      className={clsx(button({ variant, size }), className)}
      {...rest}
    />
  )
}
