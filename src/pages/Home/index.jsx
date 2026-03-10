/**
 * 個人主頁：組裝 01～07 區塊，Web 端寬版佈局，全頁背景圖
 */
import { AvatarHero } from './AvatarHero'
import { BioHeader } from './BioHeader'
import { SocialStrip } from './SocialStrip'
import { ResumeTimeline } from './ResumeTimeline'
import { PhotoWall } from './PhotoWall'
import { PortfolioGallery } from './PortfolioGallery'
import { ContactSection } from './ContactSection'
import { GlobalFooter } from './GlobalFooter'

export function HomePage() {
  return (
    <div
      className="min-h-screen text-[var(--color-text)]"
      style={{
        backgroundImage: 'url(/site-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        <section className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start pt-16 pb-8 md:pt-20 md:pb-10">
          <AvatarHero />
          <div className="flex-1 min-w-0 flex flex-col gap-4 ml-4 md:ml-8 mt-2 md:mt-4">
            <BioHeader />
            <SocialStrip />
          </div>
        </section>
        <ResumeTimeline />
        <PhotoWall />
        <PortfolioGallery />
        <ContactSection />
      </main>
      <GlobalFooter />
    </div>
  )
}
