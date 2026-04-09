import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import type { Project } from '../types'


interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Full dark panel */}
      <div className="absolute inset-0 bg-[var(--surface-dark)]" />



      {/* Speed lines */}
      <div className="speed-lines opacity-[0.05]" />

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
            第四章 · Projects
          </span>
          <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[var(--surface-dark-text)]">
            SELECTED{' '}
            <span className="text-[var(--color-orange)]">WORKS</span>
          </h2>
          <p className="mt-5 max-w-[32rem] text-sm leading-7 text-[rgba(255,255,255,0.45)] sm:text-base">
            A curated set of projects showcasing product thinking, clean
            implementation, and modern iOS craftsmanship.
          </p>
        </motion.div>

        {/* Project cards — poster style */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative overflow-hidden border-2 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] transition-all duration-350 hover:border-[var(--color-orange)] hover:shadow-[6px_6px_0_var(--color-orange),0_0_30px_var(--color-orange-glow)]"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Orange top bar */}
              <div className="h-[4px] w-full bg-[var(--color-orange)]" />

              {/* Arrow hover indicator */}
              <div className="absolute right-4 top-6 text-[rgba(255,255,255,0.2)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-orange)] group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden border-2 border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)]">
                    {project.iconSrc ? (
                      <img
                        alt={`${project.title} icon`}
                        className="h-full w-full object-cover"
                        src={project.iconSrc}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-display text-lg font-black text-[var(--surface-dark-text)]">
                        {project.iconLabel ?? project.title.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                      {project.period}
                    </span>
                    <h3 className="font-display text-2xl font-black uppercase text-[var(--surface-dark-text)]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-[rgba(255,255,255,0.45)]">
                  {project.content.en.subtitle}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center border border-[rgba(255,255,255,0.1)] px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5">
                  {project.links.githubUrl && (
                    <motion.a
                      className="inline-flex items-center gap-2 border-2 border-[rgba(255,255,255,0.2)] px-4 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-[var(--surface-dark-text)] transition-all hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
                      href={project.links.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      GitHub
                    </motion.a>
                  )}
                  {project.links.appStoreUrl && (
                    <motion.a
                      className="inline-flex items-center gap-2 bg-[var(--color-orange)] px-4 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-white transition-all hover:bg-[var(--color-orange-fire)] hover:shadow-[0_0_16px_var(--color-orange-glow)]"
                      href={project.links.appStoreUrl}
                      rel="noreferrer"
                      target="_blank"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      App Store
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
