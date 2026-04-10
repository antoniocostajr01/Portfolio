import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

import type { Project } from '../types'
import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'

interface ProjectsProps {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

type OriginKey = 'Apple Developer Academy' | 'Swift Student Challenge' | 'Personal Project'

const ORIGIN_STYLES: Record<
  OriginKey,
  { border: string; text: string; bg: string; dot: string }
> = {
  'Apple Developer Academy': {
    border: 'border-[var(--color-orange)]',
    text: 'text-[var(--color-orange)]',
    bg: 'bg-[rgba(255,106,0,0.08)]',
    dot: 'bg-[var(--color-orange)]',
  },
  'Swift Student Challenge': {
    border: 'border-violet-400',
    text: 'text-violet-400',
    bg: 'bg-[rgba(167,139,250,0.08)]',
    dot: 'bg-violet-400',
  },
  'Personal Project': {
    border: 'border-[var(--color-blue)]',
    text: 'text-[var(--color-blue)]',
    bg: 'bg-[rgba(74,144,217,0.1)]',
    dot: 'bg-[var(--color-blue)]',
  },
}

function getOriginStyle(origin?: string) {
  if (!origin) return null
  return ORIGIN_STYLES[origin as OriginKey] ?? ORIGIN_STYLES['Personal Project']
}

// ─── Infinite loop helpers ───────────────────────────────────────────────────
// Render three copies of the list. On scroll end, silently jump to the
// middle copy so there is always room to scroll in both directions.

function Projects({ projects, onSelectProject }: ProjectsProps) {
  const { language } = useI18n()
  const t = translations[language].projects

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout>>()
  const [currentIndex, setCurrentIndex] = useState(0)

  const n = projects.length
  const tripled = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects],
  )

  // Start scrolled to the middle copy
  useEffect(() => {
    requestAnimationFrame(() => {
      const el = scrollRef.current
      if (!el) return
      const children = Array.from(el.children) as HTMLElement[]
      const midStart = children[n]
      if (midStart) el.scrollLeft = midStart.offsetLeft
    })
  }, [n])

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    const scrollLeft = el.scrollLeft

    // The leftmost visible card is the last card whose left edge
    // is at or before the current scroll position.
    let leftmost = 0
    children.forEach((child, i) => {
      if ((child as HTMLElement).offsetLeft <= scrollLeft + 1) {
        leftmost = i
      }
    })

    setCurrentIndex(leftmost % n)

    // After scroll settles (~150 ms), silently jump to the middle copy
    // so there is always room to keep scrolling in both directions.
    clearTimeout(scrollEndTimer.current)
    scrollEndTimer.current = setTimeout(() => {
      const el2 = scrollRef.current
      if (!el2) return
      const ch = Array.from(el2.children) as HTMLElement[]
      const sl = el2.scrollLeft

      let lm = 0
      ch.forEach((child, i) => {
        if ((child as HTMLElement).offsetLeft <= sl + 1) lm = i
      })

      if (lm < n || lm >= n * 2) {
        const target = ch[(lm % n) + n] as HTMLElement | undefined
        if (target) el2.scrollLeft = target.offsetLeft
      }
    }, 150)
  }

  // Always navigate within the middle copy so there is always room left/right
  const goTo = (rawIndex: number) => {
    const wrapped = ((rawIndex % n) + n) % n
    setCurrentIndex(wrapped)
    const el = scrollRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    const child = children[wrapped + n] as HTMLElement | undefined
    if (!child) return
    el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--color-bg-alt)] px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Orange section divider */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-orange)] opacity-50" />
      <div className="speed-lines opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section header */}
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
          <p className="mt-5 max-w-[32rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {t.desc}
          </p>
        </motion.div>

        {/* ── Carousel ─────────────────────────────────────────────────── */}
        {/*
          pt-3 gives 12px headroom so the CSS -translate-y-1.5 (6px) hover
          effect is not clipped by the scroll container's overflow context.
          touch-action: pan-x keeps scroll horizontal-only on touch devices.
        */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-scroll overflow-y-hidden pb-4 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          style={{ touchAction: 'pan-x' }}
          onScroll={handleScroll}
        >
          {tripled.map((project, i) => {
            const style = getOriginStyle(project.origin)
            const isMiddle = i >= n && i < n * 2
            return (
              /*
                motion.div → handles the section entrance animation (one-time)
                article    → handles hover via pure CSS so enter & exit are
                             both instant (duration-150) without the slow
                             Framer Motion spring on the way out.
              */
              <motion.div
                key={`${project.slug}-${i}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                initial={isMiddle ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 }}
                whileInView={isMiddle ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (i % n) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden border-2 border-[var(--border-soft)] bg-[var(--surface-ink)] transition-all duration-150 ease-out hover:-translate-y-1.5 hover:border-[var(--color-orange)] hover:shadow-[6px_6px_0_var(--color-orange),0_0_30px_var(--color-orange-glow)]"
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={isMiddle ? 0 : -1}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && onSelectProject(project)
                  }
                >
                  {/* Arrow hover indicator */}
                  <div className="absolute right-4 top-6 text-[var(--color-muted)] opacity-0 transition-all duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-orange)] group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {/* Origin badge */}
                    {style && project.origin && (
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.55rem] font-extrabold uppercase tracking-[0.18em] ${style.border} ${style.text} ${style.bg}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${style.dot}`}
                          />
                          {project.origin}
                        </span>
                      </div>
                    )}

                    {/* Icon + title */}
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 flex-shrink-0 overflow-hidden border-2 border-[var(--border-soft)] bg-[var(--surface-ink)]">
                        {project.iconSrc ? (
                          <img
                            alt={`${project.title} icon`}
                            className="h-full w-full object-cover"
                            src={project.iconSrc}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center font-display text-lg font-black text-[var(--color-heading)]">
                            {project.iconLabel ?? project.title.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                          {project.period}
                        </span>
                        <h3 className="font-display text-2xl font-black uppercase text-[var(--color-heading)]">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                      {project.content.en.subtitle}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center border border-[var(--border-soft)] bg-[var(--surface-ink)] px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[var(--color-text)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View details hint */}
                    <div className="mt-5 border-t border-[var(--border-soft)] pt-4">
                      <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors duration-150 group-hover:text-[var(--color-orange)]">
                        View Details →
                      </span>
                    </div>
                  </div>
                </article>
              </motion.div>
            )
          })}
        </div>

        {/* ── Controls ─────────────────────────────────────────────────── */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators + counter */}
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para projeto ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-12 bg-[var(--color-orange)]'
                    : 'w-2.5 bg-[var(--color-muted)] hover:bg-[var(--color-heading)]'
                }`}
                onClick={() => goTo(i)}
              />
            ))}
            <span className="ml-4 font-display text-[0.65rem] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(n).padStart(2, '0')}
            </span>
          </div>

          {/* Prev / Next — no disabled state (infinite loop) */}
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Projeto anterior"
              className="flex h-12 w-12 items-center justify-center border-[2px] border-[var(--border-soft)] bg-[var(--surface-ink)] text-[var(--color-heading)] transition-all duration-150 ease-out hover:-translate-y-1 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
              onClick={() => goTo(currentIndex - 1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo projeto"
              className="flex h-12 w-12 items-center justify-center border-[2px] border-[var(--border-soft)] bg-[var(--surface-ink)] text-[var(--color-heading)] transition-all duration-150 ease-out hover:-translate-y-1 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
              onClick={() => goTo(currentIndex + 1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
