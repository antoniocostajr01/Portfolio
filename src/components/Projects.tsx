import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import type { Project } from '../types'

interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <span className="section-badge">Projects</span>
            <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] tracking-[-0.05em] text-[var(--color-heading)] sm:text-[5rem]">
              Selected native apps.
            </h2>
          </div>
          <p className="max-w-[34rem] text-lg leading-8 text-[var(--color-muted)]">
            A curated set of projects showcasing product thinking, clean
            implementation, and modern iOS craftsmanship.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.01 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute right-5 top-5 text-[var(--color-accent)] opacity-80 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-5 w-5" />
              </div>

              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-[1.35rem] bg-[var(--surface-soft)]">
                  {project.iconSrc ? (
                    <img
                      alt={`${project.title} icon`}
                      className="h-full w-full object-cover"
                      src={project.iconSrc}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-[var(--color-heading)]">
                      {project.iconLabel ?? project.title.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {project.period}
                  </p>
                  <h3 className="mt-2 font-heading text-[2.2rem] leading-none text-[var(--color-heading)]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">
                {project.content.en.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="project-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.githubUrl ? (
                  <motion.a
                    className="project-button"
                    href={project.links.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </motion.a>
                ) : null}

                {project.links.appStoreUrl ? (
                  <motion.a
                    className="project-button project-button-accent"
                    href={project.links.appStoreUrl}
                    rel="noreferrer"
                    target="_blank"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demo
                  </motion.a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
