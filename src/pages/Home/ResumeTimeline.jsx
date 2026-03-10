/**
 * 04 個人履歷時間線（橫向）：節點與卡片對齊，履歷卡為液態玻璃風格
 */
const defaultItems = [
  { period: '2024 — 至今', title: '贝壳找房', desc: '商业分析师' },
  { period: '2023.4 — 2023.9', title: '百度', desc: '战略分析师' },
  { period: '2022.9 — 2023.3', title: '国金证券', desc: '计算机研究所行研' },
]

export function ResumeTimeline({ items = defaultItems }) {
  return (
    <section className="py-10 md:py-12 overflow-x-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-10">履历</h2>
      <ul className="timeline flex flex-row gap-0 min-w-max md:min-w-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="timeline-item flex flex-1 flex-col items-center min-w-[220px] md:min-w-0"
          >
            {/* 橫線段 + 居中節點：左半線 | 點 | 右半線，使節點對齊下方卡片中軸 */}
            <div className="flex w-full items-center justify-center">
              <span
                className="flex-1 h-0.5 bg-gray-600"
                aria-hidden
              />
              <span
                className="shrink-0 w-4 h-4 rounded-full border-2 border-gray-600 bg-[var(--color-page-background)] mx-0.5"
                aria-hidden
              />
              <span
                className="flex-1 h-0.5 bg-gray-600"
                aria-hidden
              />
            </div>
            {/* 履歷卡：半透明玻璃，懸停時邊框白色光暈 */}
            <div className="mt-4 w-full px-2">
              <div
                className="rounded-xl border border-white/40 bg-white/30 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.55)_0_0_56px_rgba(255,255,255,0.25)_inset_0_1px_0_rgba(255,255,255,0.9)]"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)' }}
              >
                <p className="text-sm text-[var(--color-text-muted)]">{item.period}</p>
                <h3 className="font-medium text-[var(--color-text)] mt-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
