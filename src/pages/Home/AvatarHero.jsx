/**
 * 01 頭像：左側展示，較大尺寸，與姓名介紹左右排布
 */
export function AvatarHero() {
  return (
    <div className="shrink-0">
      <img
        src="/avatar.png"
        alt="头像"
        className="avatar-img w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-4 border-white object-cover shadow-lg"
      />
    </div>
  )
}
