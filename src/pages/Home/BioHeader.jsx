/**
 * 02 名稱 + 一句話簡介（右側，與頭像左右排布）
 */
export function BioHeader({ displayName = '张宇情', tagline = 'ENTJ不卷版   狮子座   小橘子一枚' }) {
  return (
    <div className="flex flex-col text-left">
      <h1 className="display-name text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] tracking-tight">
        {displayName}
      </h1>
      <p className="tagline mt-3 text-red-300 text-[var(--text-base)] md:text-lg font-bold">
        {tagline}
      </p>
    </div>
  )
}
