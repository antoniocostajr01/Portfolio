const stackGroups = [
  {
    title: 'Languages',
    items: ['Swift'],
    accent: 'bg-[var(--color-panel-orange)] text-black',
  },
  {
    title: 'Frameworks',
    items: ['SwiftUI', 'UIKit'],
    accent: 'bg-[var(--color-panel-green)] text-[var(--color-cream)]',
  },
  {
    title: 'Tools',
    items: ['Xcode', 'Git', 'Figma'],
    accent: 'bg-black text-[var(--color-cream)]',
  },
]

function TechStackSection() {
  return (
    <section className="editorial-panel relative snap-start bg-[var(--color-panel-green)] px-4 py-16 sm:px-6 lg:min-h-screen lg:px-10 lg:py-20">
      <div className="editorial-shell grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="space-y-6 text-[var(--color-cream)]">
          <span className="section-chip section-chip-dark">Tech stack</span>
          <h2 className="font-heading text-[3.5rem] leading-[0.9] sm:text-[5rem]">
            Built for the Apple ecosystem.
          </h2>
          <p className="max-w-[24rem] text-lg leading-8 text-[var(--color-cream-muted)]">
            Swift-first development with native UI frameworks, a reliable toolchain,
            and design collaboration tools that support polished product delivery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stackGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className={`relative overflow-hidden rounded-[2.2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] ${group.accent} ${groupIndex === 1 ? 'lg:-translate-y-8' : ''}`}
            >
              <span className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase opacity-70">
                {group.title}
              </span>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
