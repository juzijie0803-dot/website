/**
 * 05 作品集網格
 * grid.portfolio-card，使用設計系統 Card，圖片淡灰占位
 */
import { Card } from '@/design-system'

const defaultItems = [
  { title: '作品一', desc: '简短说明' },
  { title: '作品二', desc: '简短说明' },
  { title: '作品三', desc: '简短说明' },
]

export function PortfolioGallery({ items = defaultItems }) {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">作品集</h2>
      <div className="grid portfolio-card grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Card key={i} padding="none" shadow="sm" className="overflow-hidden">
            <div
              className="w-full aspect-video bg-[var(--color-border)]"
              aria-hidden
            />
            <div className="p-4">
              <h3 className="font-medium text-[var(--color-text)]">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
