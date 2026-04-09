import { motion } from 'framer-motion'

const stackGroups = [
  {
    label: '01',
    title: 'iOS Core',
    items: ['Swift', 'SwiftUI', 'UIKit', 'SpriteKit', 'SceneKit'],
  },
  {
    label: '02',
    title: 'Frameworks',
    items: ['MapKit', 'CoreMotion', 'AVFoundation', 'WidgetKit', 'SwiftData'],
  },
  {
    label: '03',
    title: 'Tools',
    items: ['Xcode', 'Git & GitHub', 'Figma', 'REST APIs', 'Node.js'],
  },
  {
    label: '04',
    title: 'Architecture',
    items: ['MVVM', 'Clean Arch', 'ECS', 'ViewCode', 'MVC'],
  },
]

function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Full-width dark panel */}
      <div className="absolute inset-0 bg-[var(--surface-dark)]" />

      {/* Speed lines in background */}
      <div className="speed-lines opacity-[0.06]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute left-0 top-[50%] -translate-y-1/2 select-none">
        <span
          className="block whitespace-nowrap font-display text-[14rem] font-black uppercase leading-none tracking-[-0.04em] lg:text-[20rem]"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255, 106, 0, 0.06)',
          }}
        >
          STACK
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center border-2 border-[var(--color-orange)] px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-orange)]">
            第二章 · Tech Stack
          </span>
          <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[var(--surface-dark-text)]">
            TOOLS &{' '}
            <span className="text-[var(--color-orange)]">SKILLS</span>
          </h2>
          <p className="mt-5 max-w-[32rem] text-sm leading-7 text-[rgba(255,255,255,0.45)] sm:text-base">
            A focused arsenal for building native Apple-platform products
            with structure, speed, and polished user experience.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group, i) => (
            <motion.article
              key={group.title}
              className="group relative border-2 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-300 hover:border-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange),0_0_24px_var(--color-orange-glow)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Kanji number */}
              <span className="absolute -right-1 -top-1 font-display text-6xl font-black text-[var(--color-orange)] opacity-10">
                {group.kanji}
              </span>

              {/* Number + Title */}
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-[var(--color-orange)]">
                {group.label}
              </p>
              <h3 className="mt-1.5 text-base font-bold uppercase tracking-[0.08em] text-[var(--surface-dark-text)]">
                {group.title}
              </h3>

              {/* Divider */}
              <div className="my-4 h-[2px] w-full bg-[rgba(255,255,255,0.08)] transition-colors group-hover:bg-[var(--color-orange)]" />

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-flex items-center border border-[rgba(255,255,255,0.12)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.55)] transition-all hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[0_0_12px_var(--color-orange-glow)]"
                    whileHover={{ scale: 1.06 }}
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
