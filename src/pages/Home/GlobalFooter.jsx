/**
 * 07 頁腳：版權與備案信息
 * .footer-meta，僅設計系統 tokens
 */
export function GlobalFooter({
  copyright = '© 2025',
  beian,
}) {
  return (
    <footer className="border-t border-[var(--color-border)] mt-12 bg-white/40 backdrop-blur-sm">
      <div className="footer-meta py-6 px-6 md:px-10 text-center text-sm text-[var(--color-text-muted)]">
        <p>{copyright}</p>
        {beian && <p className="mt-1">{beian}</p>}
      </div>
    </footer>
  )
}
