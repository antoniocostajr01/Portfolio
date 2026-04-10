import { motion } from 'framer-motion'

import konohaImg from '../assets/konoha-skyline.png'

import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'

function Experience() {
  const { language } = useI18n()
  const t = translations[language].experience

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Konoha skyline at the bottom
      <div className="konoha-backdrop">
        <img alt="" className="h-auto w-full object-contain" src={konohaImg} />
      </div> */}

      {/* Orange top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-orange)] opacity-50" />

      {/* Background watermark */}
      <div className="pointer-events-none absolute left-0 top-[45%] -translate-y-1/2 select-none">
        <span className="watermark-text block whitespace-nowrap">EXPERIENCE</span>
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
          <span className="seal-badge">{t.badge}</span>
          <h2 className="section-title mt-5">
            {t.title1}{' '}
            <span className="text-[var(--color-orange)]">{t.title2}</span>
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-[var(--color-orange)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-3 border-l-[3px] border-[var(--color-orange)] pl-8 lg:ml-8 lg:pl-14"
          style={{ borderImage: 'linear-gradient(to bottom, var(--color-orange), transparent) 1' }}
        >
          {t.items.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Chakra dot */}
              <div className="chakra-dot absolute -left-[calc(2rem+11px)] top-2 lg:-left-[calc(3.5rem+11px)]" />

              {/* Content wrapped in manga panel */}
              <div className="manga-panel p-6">
                {/* Period stamp */}
                <div className="mb-4 inline-flex bg-[var(--color-orange)] px-3 py-1.5">
                  <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black uppercase text-[var(--color-heading)] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-orange)]">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>

                {/* Highlights as stamps */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="ink-tag text-[0.6rem]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
