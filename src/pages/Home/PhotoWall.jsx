/**
 * 照片墙：气泡风格排布，悬停时突出显示，人脸居中展示，右上角红色蝴蝶结
 */

/** 小红色蝴蝶结徽章 */
function BowBadge() {
  return (
    <span
      className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-white/90 rounded-full shadow-sm"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#ef4444">
        <ellipse cx="9" cy="12" rx="4" ry="5" transform="rotate(-30 9 12)" />
        <ellipse cx="15" cy="12" rx="4" ry="5" transform="rotate(30 15 12)" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    </span>
  )
}

const defaultPhotos = [
  { src: '/photo1.png', size: 'lg', offset: '', position: 'center 18%' },
  { src: '/photo2.png', size: 'sm', offset: '-translate-y-2', position: 'center 22%' },
  { src: '/photo3.png', size: 'md', offset: 'translate-x-2 translate-y-1', position: 'center 28%' },
  { src: '/photo4.png', size: 'md', offset: '-translate-x-1 -translate-y-3', position: 'center 35%' },
  { src: '/photo5.png', size: 'lg', offset: 'translate-y-2', position: 'center 30%' },
  { src: '/photo6.png', size: 'sm', offset: 'translate-x-3', position: 'center 35%' },
]

const sizeMap = { sm: 'w-20 h-20 md:w-24 md:h-24', md: 'w-28 h-28 md:w-32 md:h-32', lg: 'w-36 h-36 md:w-40 md:h-40' }

export function PhotoWall({ photos = defaultPhotos }) {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">照片墙</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`relative ${sizeMap[photo.size]} ${photo.offset || ''} rounded-full overflow-visible border-2 border-white/50 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-[var(--color-primary)]/25 hover:z-20 hover:border-white`}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: photo.position || 'center 30%' }}
              />
            </div>
            <BowBadge />
          </div>
        ))}
      </div>
    </section>
  )
}
