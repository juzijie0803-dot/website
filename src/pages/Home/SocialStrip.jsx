/**
 * 03 社媒鏈接條
 * 使用設計系統 Button/ghost 或純鏈接樣式，圖標來自 lucide-react
 */
import { Github, Linkedin, Mail } from 'lucide-react'

const defaultLinks = [
  { label: 'GitHub', href: 'https://github.com/juzijie0803-dot', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E5%AE%87%E6%83%85-%E5%BC%A0-a351483b6/', Icon: Linkedin },
  { label: '邮箱', href: 'mailto:zhangyuqing0803@126.com', Icon: Mail },
]

export function SocialStrip({ links = defaultLinks }) {
  return (
    <section className="flex justify-start w-full">
      <ul className="social-icons flex flex-wrap gap-2 pl-0">
        {links.map(({ label, href, Icon }, i) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg py-2 text-[var(--color-text-muted)] hover:bg-[var(--color-primary-muted)] hover:text-[var(--color-text)] transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] ${i === 0 ? 'pl-0 pr-3' : 'px-3'}`}
              aria-label={label}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
