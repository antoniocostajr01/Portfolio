const experienceItems = [
  {
    year: '2025 — Present',
    title: 'Apple Developer Academy',
    description:
      'Started my iOS journey in January 2025, building native apps, exploring Apple frameworks, and collaborating on product-driven experiences.',
  },
  {
    year: '2025 — Present',
    title: 'Projects & collaborations',
    description:
      'Working across app concepts, published products, backend integrations, game experiences, and collaborative team deliveries.',
  },
]

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="editorial-panel relative snap-start bg-[var(--color-panel-cream)] px-4 py-16 sm:px-6 lg:min-h-screen lg:px-10 lg:py-20"
    >
      <div className="editorial-shell relative grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[var(--color-panel-orange)] p-8 text-black shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
          <span className="section-chip">Experience</span>
          <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] sm:text-[5rem]">
            Timeline
          </h2>

          <div className="relative mt-10 space-y-8 before:absolute before:bottom-0 before:left-[1.05rem] before:top-2 before:w-px before:bg-black/25">
            {experienceItems.map((item) => (
              <div key={item.title} className="relative pl-10">
                <span className="absolute left-0 top-2 h-5 w-5 rounded-full border-2 border-black bg-[var(--color-accent-yellow)]" />
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-black/70">
                  {item.year}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-[32rem] text-base leading-7 text-black/78">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.4rem] bg-[var(--color-panel-green)] p-8 text-[var(--color-cream)]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-4">
            <span className="resume-outline-stack">
              RESUME
              <br />
              RESUME
              <br />
              RESUME
            </span>
          </div>

          <div className="relative z-10 max-w-[24rem] space-y-6">
            <span className="section-chip section-chip-dark">Highlights</span>
            <p className="text-lg leading-8 text-[var(--color-cream-muted)]">
              My experience combines academy-based product development, team
              collaboration, and hands-on delivery across native iOS, backend
              integrations, and interactive app concepts.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="floating-pill">Swift</span>
              <span className="floating-pill">SwiftUI</span>
              <span className="floating-pill">UIKit</span>
              <span className="floating-pill">App Store delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
