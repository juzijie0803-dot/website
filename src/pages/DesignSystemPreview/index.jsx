/**
 * 設計系統預覽頁：展示 tokens 與所有組件，供驗收與文檔用
 */
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/design-system'
import { TokenShowcase } from './TokenShowcase'
import { ComponentShowcase } from './ComponentShowcase'

export function DesignSystemPreview() {
  const isMd = useMediaQuery('(min-width: 768px)')

  return (
    <motion.div
      className="min-h-screen bg-[var(--color-background-alt)] text-[var(--color-text)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <header className="border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4 md:px-6">
        <h1 className="text-xl font-semibold md:text-2xl">设计系统预览</h1>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          响应式：{isMd ? '桌面' : '手机'}
        </p>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 space-y-12">
        <TokenShowcase />
        <ComponentShowcase />
      </main>
    </motion.div>
  )
}
