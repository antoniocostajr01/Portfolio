import { motion } from 'framer-motion'

const stackGroups = [
  {
    title: 'iOS Development',
    items: ['Swift', 'SwiftUI', 'UIKit'],
  },
  {
    title: 'Tools',
    items: ['Xcode', 'Git & GitHub', 'Figma'],
  },
  {
    title: 'Concepts',
    items: ['MVVM', 'Clean Architecture', 'REST APIs'],
  },
]

function TechStack() {
  return (
    <section id="stack" className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <span className="section-badge">Tech stack</span>
            <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] tracking-[-0.05em] text-[var(--color-heading)] sm:text-[5rem]">
              Tools, frameworks, and concepts.
            </h2>
          </div>
          <p className="max-w-[34rem] text-lg leading-8 text-[var(--color-muted)]">
            A focused toolkit for building native Apple-platform products with
            structure, speed, and polished user experience.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent)]" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {group.title}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    className="stack-chip"
                    whileHover={{ scale: 1.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
