import { motion } from 'framer-motion'

interface AboutProps {
  profileSrc: string
}

function About({ profileSrc }: AboutProps) {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[0.66fr_0.34fr]">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr]"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <span className="section-badge">About me</span>
            <h2 className="mt-6 max-w-[8ch] font-heading text-[3.6rem] leading-[0.9] tracking-[-0.05em] text-[var(--color-heading)] sm:text-[5rem]">
              Hello, I&apos;m Antonio
            </h2>

            <p className="mt-6 max-w-[35rem] text-lg leading-8 text-[var(--color-muted)]">
              I am an iOS Developer with 2 years of experience building
              applications for the Apple ecosystem. I started my journey in
              January 2025 at the Apple Developer Academy, where I developed
              strong skills in Swift, UIKit, and SwiftUI, focusing on user
              experience and scalable solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="about-tag">iOS Developer</span>
              <span className="about-tag">Brazil</span>
              <span className="about-tag">Apple Ecosystem</span>
            </div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-primary)] p-6 text-[var(--color-primary-contrast)] shadow-[0_24px_60px_rgba(16,26,56,0.18)]"
            initial={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/25" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/88" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="section-badge-dark w-fit">Memoji</span>
              <div className="mx-auto mt-6 w-full max-w-[320px]">
                {profileSrc ? (
                  <img
                    alt="Antonio memoji"
                    className="h-auto w-full object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.2)]"
                    src={profileSrc}
                  />
                ) : (
                  <div className="aspect-square w-full rounded-full bg-white/10" />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative overflow-hidden rounded-[2.25rem] bg-[var(--surface-strong)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-2">
            <span className="side-outline-text">ABOUT</span>
          </div>

          <div className="relative z-10 space-y-5">
            <span className="section-badge-dark">Quick facts</span>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Started
              </p>
              <p className="mt-2 text-xl text-[var(--surface-strong-contrast)]">
                January 2025
              </p>
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Background
              </p>
              <p className="mt-2 text-xl text-[var(--surface-strong-contrast)]">
                Apple Developer Academy
              </p>
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Focus
              </p>
              <p className="mt-2 text-xl text-[var(--surface-strong-contrast)]">
                Swift, UIKit, SwiftUI, UX, scalable solutions
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default About
