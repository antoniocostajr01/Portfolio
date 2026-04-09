import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import antonioPhoto from '../assets/antonio-photo.jpg'
import inkBrush from '../assets/ink-brush.png'

interface AboutProps {
  profileSrc: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const tags = ['iOS Developer', 'Brazil 🇧🇷', 'Apple Ecosystem', 'Swift', 'SwiftUI']

function About({ profileSrc }: AboutProps) {
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(false)
  const photoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(photoRef, { once: true, amount: 0.5 })

  // On mobile, reveal when scrolled into view
  const shouldReveal = isPhotoRevealed || isInView

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background watermark */}
      <div className="pointer-events-none absolute right-0 top-0 select-none overflow-hidden">
        <span className="watermark-text block -translate-y-[15%] translate-x-[8%]">
          ABOUT
        </span>
      </div>

      {/* Ink brush decoration */}
      <div className="pointer-events-none absolute -right-[10%] top-[20%] w-[25%] opacity-[0.03] mix-blend-multiply">
        <img alt="" className="h-auto w-full rotate-45" src={inkBrush} />
      </div>

      {/* Orange horizontal accent */}
      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[var(--color-orange)] opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section header (manga chapter style) */}
        <motion.div
          className="mb-14 flex items-end gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <span className="seal-badge">第一章 · ABOUT ME </span>
          </motion.div>
          <motion.div className="h-[2px] flex-1 bg-[var(--border-soft)]" variants={fadeUp} />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* LEFT — Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2 className="section-title" variants={fadeUp}>
              HELLO,
              <br />
              I'M <span className="text-[var(--color-orange)]">ANTONIO</span>
            </motion.h2>

            {/* Editorial text inside manga panels */}
            <motion.div className="mt-8 space-y-4" variants={fadeUp}>
              <div className="manga-panel p-5">
                <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">
                  I am an iOS Developer with 2 years of experience building
                  applications for the Apple ecosystem. I started my journey in
                  January 2025 at the{' '}
                  <strong className="text-[var(--color-orange)]">
                    Apple Developer Academy
                  </strong>
                  , where I developed strong skills in Swift, UIKit, and SwiftUI,
                  focusing on user experience and scalable solutions.
                </p>
              </div>
              <div className="manga-panel p-5">
                <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">
                  My work ranges from reading-tracking apps to immersive educational
                  games, always prioritizing native performance and thoughtful design.
                  I believe in building products that feel{' '}
                  <strong className="text-[var(--color-orange)]">premium</strong> from
                  the very first tap.
                </p>
              </div>
            </motion.div>

            {/* Tags as seal stamps */}
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="ink-tag"
                  whileHover={{ scale: 1.06 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Key facts with orange accents */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-5 border-t-2 border-[var(--border-hard)] pt-6"
              variants={fadeUp}
            >
              {[
                { label: 'Started', value: 'Jan 2025' },
                { label: 'Background', value: 'Academy' },
                { label: 'Focus', value: 'Native iOS' },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-base font-bold text-[var(--color-heading)] sm:text-lg">
                    {fact.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo with reveal animation */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Offset orange border layer */}
            <div
              className="absolute right-0 top-6 h-[calc(100%+12px)] w-[88%] border-[var(--color-orange)] opacity-40 lg:right-[-10px] lg:top-[14px]"
              style={{ borderWidth: '3px', borderStyle: 'solid' }}
            />

            {/* Main frame with photo reveal */}
            <div
              ref={photoRef}
              className="group relative w-[88%] cursor-pointer"
              onMouseEnter={() => setIsPhotoRevealed(true)}
            >
              <div className="manga-panel relative overflow-hidden p-4">
                {/* MEMOJI layer — visible by default, fades out on reveal */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    opacity: shouldReveal ? 0 : 1,
                    scale: shouldReveal ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {profileSrc ? (
                    <img
                      alt="Antonio memoji"
                      className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                      src={profileSrc}
                    />
                  ) : (
                    <div className="aspect-[4/5] w-full bg-[var(--surface-ink)]" />
                  )}
                </motion.div>

                {/* REAL PHOTO layer — hidden by default, slides up + fades in on reveal */}
                <motion.div
                  className="absolute inset-0 z-20 overflow-hidden p-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: shouldReveal ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Curtain wipe effect */}
                  <motion.div
                    className="absolute inset-0 z-30 origin-top bg-[var(--color-orange)]"
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: shouldReveal ? [0, 1, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 1,
                      times: [0, 0.35, 0.65, 1],
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.img
                    alt="Antonio Costa Jr — iOS Developer"
                    className="h-full w-full object-cover"
                    src={antonioPhoto}
                    initial={{ scale: 1.15, filter: 'grayscale(1) contrast(1.3)' }}
                    animate={{
                      scale: shouldReveal ? 1 : 1.15,
                      filter: shouldReveal
                        ? 'grayscale(0) contrast(1)'
                        : 'grayscale(1) contrast(1.3)',
                    }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>

                {/* Hover hint (only on desktop, before reveal) */}
                {!shouldReveal && (
                  <div className="pointer-events-none absolute inset-0 z-30 hidden items-center justify-center lg:flex">
                    <motion.div
                      className="rounded-none border-2 border-[var(--color-orange)] bg-[var(--color-bg)] px-4 py-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-[var(--color-orange)]">
                        Hover to reveal
                      </span>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Corner kanji seal */}
              <div className="absolute -right-4 -top-4 z-30 flex h-16 w-16 items-center justify-center border-2 border-[var(--color-orange)] bg-[var(--color-bg)]">
                <span className="font-display text-xl font-black text-[var(--color-orange)]">
                  忍
                </span>
              </div>

              {/* Bottom identifier */}
              <motion.div
                className="absolute -bottom-3 left-4 z-30 bg-[var(--surface-dark)] px-4 py-1.5"
                animate={{
                  backgroundColor: shouldReveal ? 'var(--color-orange)' : undefined,
                }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <span className="text-[0.55rem] font-extrabold uppercase tracking-[0.3em] text-[var(--surface-dark-text)]">
                  {shouldReveal ? 'Antonio Costa Jr' : 'iOS Developer · Brazil'}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
