import { motion } from 'framer-motion'

const experienceItems = [
  {
    period: '2025 — Present',
    title: 'Apple Developer Academy',
    bullets: ['iOS Development', 'Team projects', 'UX/UI and prototyping'],
  },
  {
    period: '2024 — 2025',
    title: 'Personal Projects / Freelance',
    bullets: ['Development of iOS apps', 'UI/UX design'],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[0.58fr_0.42fr]">
        <motion.div
          className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-primary)] p-8 text-[var(--color-primary-contrast)] shadow-[0_24px_60px_rgba(16,26,56,0.18)]"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-6">
            <span className="experience-outline-text">RESUME</span>
          </div>

          <div className="relative z-10">
            <span className="section-badge-dark">Experience</span>
            <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] tracking-[-0.05em] sm:text-[5rem]">
              Timeline
            </h2>

            <div className="relative mt-10 space-y-8 before:absolute before:bottom-0 before:left-[0.8rem] before:top-3 before:w-px before:bg-white/20">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <span className="absolute left-0 top-2 h-4 w-4 rounded-full border border-white/40 bg-[var(--color-accent)]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.bullets.map((bullet) => (
                      <span key={bullet} className="timeline-pill">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2.25rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="section-badge">Focus areas</span>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            My experience is centered on native mobile development, thoughtful
            interface design, and collaboration across product and engineering.
          </p>

          <div className="mt-8 grid gap-4">
            {['Swift', 'Native UI', 'Product thinking', 'Scalable solutions'].map((item) => (
              <motion.div
                key={item}
                className="rounded-[1.4rem] bg-[var(--surface-soft)] px-4 py-4 text-base font-medium text-[var(--color-heading)]"
                whileHover={{ x: 6 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
