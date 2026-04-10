import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Wrench, Images } from 'lucide-react'
import { FaGithub, FaApple } from 'react-icons/fa'

import type { Project } from '../types'
import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'

interface ProjectDetailProps {
  project: Project
  onBackHome: () => void
}

function ProjectDetail({ project, onBackHome }: ProjectDetailProps) {
  const { language } = useI18n()
  const content = project.content[language as keyof typeof project.content] || project.content.en
  const t = translations[language].projectDetail

  const [selectedScreenshot, setSelectedScreenshot] = useState<
    Project['screenshots'][number] | null
  >(null)
  const screenshotAspectClass =
    project.screenshotOrientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[9/18]'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!selectedScreenshot) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedScreenshot(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedScreenshot])

  return (
    <motion.div
      className="relative min-h-screen px-6 py-20 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Speed lines */}
      <div className="speed-lines opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Top actions */}
        <div className="mb-12 border-b-2 border-[var(--border-soft)] pb-8">
          <button
            className="group flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-orange)] transition-all hover:text-[var(--color-orange-fire)]"
            onClick={onBackHome}
            type="button"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </button>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 overflow-hidden border-2 border-[var(--border-soft)] bg-[var(--surface-ink)]">
                  {project.iconSrc ? (
                    <img
                      alt={`${project.title} icon`}
                      className="h-full w-full object-cover"
                      src={project.iconSrc}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-2xl font-black text-[var(--color-heading)]">
                      {project.iconLabel ?? project.title.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="font-display text-5xl font-black uppercase leading-[0.9] text-[var(--color-heading)]">
                    {project.title}
                  </h1>
                </div>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted)]">
                {content.overview}
              </p>
            </div>
            <div className="border-2 border-[var(--border-soft)] p-4 text-center">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                {t.period}
              </p>
              <p className="mt-1 font-display text-xl font-bold uppercase text-[var(--color-heading)]">
                {project.period}
              </p>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-12">
            {/* My Contribution */}
            <div>
              <h2 className="mb-6 inline-flex items-center border-[3px] border-[var(--color-orange)] bg-[var(--surface-dark)] px-4 py-2 font-display text-xl font-black uppercase text-[var(--surface-dark-text)]">
                {t.myContribution} <Wrench className="ml-3 h-5 w-5 text-[var(--color-orange)] opacity-50" />
              </h2>
              <div className="space-y-4">
                {content.contribution.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 chakra-dot" style={{ transform: 'scale(0.5)' }} />
                    <p className="text-base leading-relaxed text-[var(--color-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="mb-6 inline-flex items-center border-[3px] border-[var(--color-orange)] bg-[var(--surface-dark)] px-4 py-2 font-display text-xl font-black uppercase text-[var(--surface-dark-text)]">
                {t.gallery} <Images className="ml-3 h-5 w-5 text-[var(--color-orange)] opacity-50" />
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {project.screenshots.map((screenshot) => (
                  <button
                    key={screenshot.id}
                    className="group relative overflow-hidden border-2 border-[var(--border-soft)] bg-[var(--surface-ink)] text-left transition-all hover:border-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
                    onClick={() => screenshot.imageSrc && setSelectedScreenshot(screenshot)}
                    type="button"
                  >
                    {screenshot.imageSrc ? (
                      <img
                        alt={screenshot.title}
                        className={`${screenshotAspectClass} w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0`}
                        src={screenshot.imageSrc}
                      />
                    ) : (
                      <div
                        className={`flex ${screenshotAspectClass} items-center justify-center px-5 text-center text-sm text-[var(--color-muted)]`}
                      >
                        {screenshot.title}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--surface-dark)] to-transparent p-4 align-bottom opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-orange)]">
                        + Enlarge
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Links */}
            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {t.linksSource}
              </h2>
              <div className="flex flex-col gap-3">
                {project.links.githubUrl && (
                  <a
                    className="group border-2 border-[var(--border-soft)] bg-[var(--surface-ink)] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-heading)] transition-all duration-150 ease-out hover:-translate-y-1 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
                    href={project.links.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaGithub className="h-4 w-4" />
                        <span>{t.sourceCode}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[var(--color-orange)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </a>
                )}
                {project.links.appStoreUrl && (
                  <a
                    className="group border-2 border-[var(--border-soft)] bg-[var(--surface-ink)] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-heading)] transition-all duration-150 ease-out hover:-translate-y-1 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
                    href={project.links.appStoreUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaApple className="h-4 w-4" />
                        <span>{t.appStore}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[var(--color-orange)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </a>
                )}
                {!project.links.githubUrl && !project.links.appStoreUrl && (
                  <p className="text-sm text-[var(--color-muted)]">{t.internalConfidential}</p>
                )}
              </div>
            </div>

            {/* Tech */}
            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {t.technologies}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center border border-[var(--border-soft)] bg-[var(--surface-ink)] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {t.squadTeam}
              </h2>
              <div className="space-y-3">
                {project.members.map((member) => {
                  const cardClasses =
                    'group block manga-panel flex flex-col gap-1 p-3 transition-all duration-150 ease-out hover:-translate-y-1 hover:border-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]'

                  const innerContent = (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-orange)]">
                          {member.name}
                        </span>
                        {member.linkedinUrl && (
                          <ArrowUpRight className="h-4 w-4 text-[var(--color-orange)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        )}
                      </div>
                      <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[var(--color-orange)]">
                        {member.role}
                      </span>
                    </>
                  )

                  if (member.linkedinUrl) {
                    return (
                      <a
                        key={`${member.name}-${member.role}`}
                        className={cardClasses}
                        href={member.linkedinUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {innerContent}
                      </a>
                    )
                  }

                  return (
                    <div key={`${member.name}-${member.role}`} className={cardClasses}>
                      {innerContent}
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>
        </section>
      </div>

      {/* Screenshot modal */}
      {selectedScreenshot?.imageSrc && (
        <div
          aria-label={selectedScreenshot.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(11,11,11,0.9)] px-4 py-8 backdrop-blur-md"
          onClick={() => setSelectedScreenshot(null)}
          role="dialog"
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl items-center justify-center p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close screenshot preview"
              className="absolute -top-4 right-0 z-10 flex h-12 w-12 items-center justify-center border-2 border-[var(--color-orange)] bg-[var(--surface-dark)] text-2xl font-black text-[var(--color-orange)] transition-colors hover:bg-[var(--color-orange)] hover:text-white"
              onClick={() => setSelectedScreenshot(null)}
              type="button"
            >
              ×
            </button>
            <img
              alt={selectedScreenshot.title}
              className="max-h-[85vh] max-w-full border-4 border-[var(--border-soft)] object-contain drop-shadow-[0_0_40px_rgba(255,106,0,0.2)]"
              src={selectedScreenshot.imageSrc}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectDetail
