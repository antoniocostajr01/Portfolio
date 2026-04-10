import { motion } from 'framer-motion'

import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'

function TechStack() {
  const { language } = useI18n()
  const t = translations[language].stack

  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[var(--color-bg-alt)] px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Orange section divider */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-orange)] opacity-50" />

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
            {t.badge}
          </span>
          <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[var(--color-heading)]">
            {t.title1}{' '}
            <span className="text-[var(--color-orange)]">{t.title2}</span>
          </h2>
          <p className="mt-5 max-w-[38rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {t.desc}
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative h-full border-2 border-[var(--border-soft)] bg-[var(--surface-ink)] p-6 transition-all duration-150 ease-out hover:-translate-y-2 hover:border-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange),0_0_24px_var(--color-orange-glow)]">

                {/* Number + Title */}
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-[var(--color-orange)]">
                  {group.label}
                </p>
                <h3 className="mt-1.5 text-base font-bold uppercase tracking-[0.08em] text-[var(--color-heading)]">
                  {group.title}
                </h3>

                {/* Divider */}
                <div className="my-4 h-[2px] w-full bg-[var(--border-soft)] transition-colors duration-150 group-hover:bg-[var(--color-orange)]" />

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center border border-[var(--border-soft)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)] transition-all duration-150 ease-out hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[0_0_12px_var(--color-orange-glow)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
