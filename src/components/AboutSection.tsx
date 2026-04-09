interface AboutSectionProps {
  profileSrc: string
}

function AboutSection({ profileSrc }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="editorial-panel relative snap-start bg-[var(--color-panel-cream)] px-4 py-16 sm:px-6 lg:min-h-screen lg:px-10 lg:py-20"
    >
      <div className="editorial-shell relative grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="space-y-8 rounded-[2.3rem] bg-[rgba(255,252,244,0.88)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div>
              <span className="section-chip">About me</span>
              <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] text-[var(--color-ink)] sm:text-[5rem]">
                Hello, I&apos;m Antonio.
              </h2>
            </div>

            <p className="max-w-[34rem] text-lg leading-8 text-[var(--color-ink-soft)]">
              I&apos;m an iOS Developer with 2 years of experience building native
              applications using Swift. My journey started in January 2025 at the
              Apple Developer Academy, and since then I&apos;ve focused on creating
              polished experiences for the Apple ecosystem with Swift, SwiftUI,
              and UIKit.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="floating-pill floating-pill-light">iOS Developer</span>
              <span className="floating-pill floating-pill-light">Brazil</span>
              <span className="floating-pill floating-pill-light">Apple Ecosystem</span>
              <span className="floating-pill floating-pill-light">Swift / SwiftUI / UIKit</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.3rem] bg-[var(--color-panel-green)] p-6 text-[var(--color-cream)]">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-[rgba(247,241,229,0.3)]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-black" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="rounded-full bg-[rgba(247,241,229,0.12)] px-4 py-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--color-accent-yellow)] w-fit">
                Memoji
              </div>

              <div className="relative mx-auto mt-8 w-full max-w-[320px]">
                {profileSrc ? (
                  <img
                    alt="Antonio Costa Jr memoji avatar"
                    className="h-auto w-full object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.22)]"
                    src={profileSrc}
                  />
                ) : (
                  <div className="aspect-square w-full rounded-full bg-[rgba(255,255,255,0.1)]" />
                )}
              </div>
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2.3rem] bg-black p-8 text-[var(--color-cream)]">
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] flex items-center">
            <span className="rotated-outline-text">ABOUT</span>
          </div>

          <div className="relative z-10 space-y-6">
            <span className="section-chip section-chip-dark">Quick facts</span>
            <div className="space-y-5">
              <div>
                <p className="text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--color-accent-yellow)]">
                  Started
                </p>
                <p className="mt-2 text-xl text-[var(--color-cream)]">
                  January 2025
                </p>
              </div>

              <div>
                <p className="text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--color-accent-yellow)]">
                  Background
                </p>
                <p className="mt-2 text-xl text-[var(--color-cream)]">
                  Apple Developer Academy
                </p>
              </div>

              <div>
                <p className="text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--color-accent-yellow)]">
                  Focus
                </p>
                <p className="mt-2 text-xl text-[var(--color-cream)]">
                  Native iOS apps with strong UX and scalable architecture
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutSection
