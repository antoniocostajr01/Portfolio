import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

interface HeroProps {
  profileSrc: string
}

const floatingTransition = {
  duration: 6,
  ease: 'easeInOut' as const,
  repeat: Infinity,
  repeatType: 'mirror' as const,
}

function Hero({ profileSrc }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:min-h-screen lg:px-10 lg:pb-16 lg:pt-32"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        className="pointer-events-none absolute left-[6%] top-28 h-24 w-24 rounded-full bg-[var(--shape-primary)] blur-3xl"
        transition={floatingTransition}
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        className="pointer-events-none absolute right-[10%] top-48 h-20 w-20 rounded-full bg-[var(--shape-secondary)] blur-2xl"
        transition={{ ...floatingTransition, duration: 7 }}
      />

      <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-[var(--hero-surface)] px-6 py-7 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:px-8 lg:min-h-[78vh] lg:px-10 lg:py-9"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[var(--hero-floor)]" />

          <motion.div
            animate={{ x: [0, 10, 0] }}
            className="pointer-events-none absolute -right-[8%] top-[16%] flex flex-col leading-none"
            transition={{ ...floatingTransition, duration: 8 }}
          >
            <span className="editorial-outline-text">PORTFOLIO</span>
            <span className="editorial-outline-text translate-x-[-14%]">PORTFOLIO</span>
            <span className="editorial-outline-text translate-x-[-4%]">PORTFOLIO</span>
          </motion.div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-soft)] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              Premium portfolio
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-soft)] px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Antonio
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <h1 className="max-w-[8ch] font-heading text-[4.6rem] leading-[0.82] tracking-[-0.06em] text-[var(--hero-heading)] sm:text-[6.4rem] lg:text-[8.6rem]">
                PORTFOLIO
              </h1>

              <p className="mt-6 max-w-[20rem] text-lg leading-8 text-[var(--hero-copy)]">
                iOS Developer focused on building solutions for the Apple ecosystem
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="floating-tag">iOS Developer</span>
                <span className="floating-tag">Brazil</span>
                <span className="floating-tag">Apple Ecosystem</span>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-visible rounded-[2rem] bg-[var(--shape-secondary)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                className="absolute -left-5 top-10"
                transition={{ ...floatingTransition, duration: 5 }}
              >
                <Star className="h-9 w-9 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                className="absolute -left-1 top-24"
                transition={{ ...floatingTransition, duration: 6.4 }}
              >
                <Star className="h-6 w-6 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              </motion.div>

              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[var(--hero-floor)]" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                className="absolute bottom-0 left-1/2 w-[116%] -translate-x-1/2"
                transition={{ ...floatingTransition, duration: 6.6 }}
              >
                {profileSrc ? (
                  <img
                    alt="Antonio memoji placeholder"
                    className="h-auto w-full object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.28)]"
                    src={profileSrc}
                  />
                ) : (
                  <div className="aspect-[4/5] w-full rounded-[2rem] bg-[var(--surface-soft)]" />
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="grid gap-6 self-end lg:pb-10"
          initial={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Snapshot
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              2 years of iOS experience, Swift-first development, and a strong
              focus on premium native experiences.
            </p>
          </div>

          <motion.a
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] shadow-[0_12px_30px_rgba(246,170,61,0.28)]"
            href="#contact"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.aside>
      </div>
    </section>
  )
}

export default Hero
