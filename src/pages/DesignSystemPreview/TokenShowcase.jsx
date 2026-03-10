/**
 * 設計系統預覽：Tokens 展示區塊（顏色、間距、字體）
 */
import { colors, spacing, fontSize, fontWeight } from '@/design-system'

export function TokenShowcase() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-[var(--color-text)]">设计标记</h2>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">颜色</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(colors).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <div
                className="w-12 h-12 rounded-lg border border-[var(--color-border)]"
                style={{ backgroundColor: value }}
              />
              <span className="text-xs text-[var(--color-text-muted)]">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">间距</h3>
        <div className="flex flex-wrap items-end gap-1">
          {Object.entries(spacing).slice(0, 8).map(([name, value]) => (
            <div
              key={name}
              className="bg-[var(--color-primary-muted)] rounded"
              style={{ width: value, height: value }}
              title={`${name}: ${value}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">字体</h3>
        <div className="space-y-2">
          {Object.entries(fontSize).map(([name, value]) => (
            <p key={name} style={{ fontSize: value }} className="text-[var(--color-text)]">
              {name}: {value}
            </p>
          ))}
          <p className="text-[var(--color-text-muted)]">
            fontWeight: {Object.keys(fontWeight).join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
