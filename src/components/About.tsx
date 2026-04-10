import { motion } from 'framer-motion'
import { useState } from 'react'
import antonioMemoji from '../assets/antonio-memoji.png'
import antonioPhoto from '../assets/antonio-photo.jpg'
import inkBrush from '../assets/ink-brush.png'
import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'

interface AboutProps {
  profileSrc: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const curtainTransition = {
  duration: 0.8,
  times: [0, 0.4, 0.6, 1],
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
}

function About({ profileSrc }: AboutProps) {
  const { language } = useI18n()
  const t = translations[language].about

  const [isHovered, setIsHovered] = useState(false)
  const [trigger, setTrigger] = useState(0)

  function handleEnter() {
    if (!isHovered) {
      setIsHovered(true)
      setTrigger((t) => t + 1)
    }
  }

  function handleLeave() {
    if (isHovered) {
      setIsHovered(false)
      setTrigger((t) => t + 1)
    }
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 select-none overflow-hidden">
        <span className="watermark-text block -translate-y-[15%] translate-x-[8%]">ABOUT</span>
      </div>

      <div className="pointer-events-none absolute -right-[10%] top-[20%] w-[25%] opacity-[0.03] mix-blend-multiply">
        <img alt="" className="h-auto w-full rotate-45" src={inkBrush} />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[var(--color-orange)] opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          className="mb-14 flex items-end gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <span className="seal-badge">{t.badge}</span>
          </motion.div>
          <motion.div className="h-[2px] flex-1 bg-[var(--border-soft)]" variants={fadeUp} />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >

          <motion.h2 className="section-title" variants={fadeUp}>
            {t.hello}
            <br />
            {t.im} <span className="normal-case text-[var(--color-orange)]">antonio</span>
          </motion.h2>


          <motion.div className="mt-8" variants={fadeUp}>
            <div className="manga-panel p-5">
              <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">
                {t.text1}
                <br />
                {t.text2}
                <br />
                {t.text3}{' '}
                <strong className="text-[var(--color-orange)]">{t.academy}</strong>
                {t.text4}
              </p>
            </div>
          </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
              {t.tags.map((tag) => (
                <span key={tag} className="ink-tag transition-all duration-150 ease-out hover:scale-[1.04]">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-5 border-t-2 border-[var(--border-hard)] pt-6"
              variants={fadeUp}
            >
              {[t.fact1, t.fact2, t.fact3].map((fact) => (
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

          {/* RIGHT — Immersive reveal */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div
              className="absolute right-0 top-6 h-[calc(100%+12px)] w-[88%] border-[var(--color-orange)] opacity-40 lg:right-[-10px] lg:top-[14px]"
              style={{ borderWidth: '3px', borderStyle: 'solid' }}
            />

            {(!isHovered && trigger === 0) && (
              <motion.div
                className="pointer-events-none absolute inset-0 w-[88%] bg-[var(--color-orange)]"
                animate={{ opacity: [0.04, 0.12, 0.04] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            <div
              className="relative w-[88%] cursor-pointer"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <div className="manga-panel relative overflow-hidden" style={{ aspectRatio: '4/5' }}>

                {/* LAYER 1 — MEMOJI */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-bg)] p-6"
                  animate={
                    isHovered
                      ? { opacity: 0, scale: 1.1, filter: 'blur(8px)' }
                      : { opacity: 1, scale: 1, filter: 'blur(0px)' }
                  }
                  transition={{ 
                    duration: 0.5, 
                    delay: isHovered ? 0 : 0.4,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  <img
                    alt="Antonio Costa Jr — memoji"
                    className="h-full w-full object-contain"
                    src={antonioMemoji}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 z-20"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.01, delay: 0.38 }}
                >
                  <motion.img
                    alt="Antonio Costa Jr — iOS Developer"
                    className="h-full w-full object-cover"
                    src={antonioPhoto}
                    animate={
                      isHovered
                        ? { filter: 'saturate(1) brightness(1)', scale: 1 }
                        : { filter: 'saturate(0) brightness(1.3)', scale: 1.06 }
                    }
                    transition={{ duration: 0.65, delay: 0.42, ease: 'easeOut' }}
                  />
                </motion.div>

                {/* LAYER 3 — CURTAIN: Wipe effect both ways */}
                <motion.div
                  key={`curtain-${trigger}`}
                  className="absolute inset-0 z-30 origin-left bg-[var(--color-orange)]"
                  animate={trigger > 0 ? { scaleX: [0, 1, 1, 0] } : { scaleX: 0 }}
                  transition={curtainTransition}
                />
              </div>

              {/* Corner seal */}
              <div className="absolute -right-4 -top-4 z-50 flex h-16 w-16 items-center justify-center border-2 border-[var(--color-orange)] bg-[var(--color-bg)]">
                <span className="font-display text-xl font-black text-[var(--color-orange)]">忍</span>
              </div>

              {/* Bottom label — fixo */}
              <div className="absolute -bottom-3 left-4 z-50 bg-[var(--surface-dark)] px-4 py-2.5">
                <span className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] text-[var(--surface-dark-text)]">
                  Antonio Costa Jr
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About