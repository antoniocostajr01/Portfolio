import type { Language, Project, ProjectsCopy } from '../types'

interface ProjectsProps {
  projects: Project[]
  copy: ProjectsCopy
  language: Language
  onOpenProject: (slug: string) => void
}

function Projects({ projects, copy, language, onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="pb-2">
      <div className="flex flex-col gap-3 pb-6">
        <div>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--color-heading)] sm:text-3xl">
            {copy.kicker.toUpperCase()}
          </h2>
        </div>
        <p className="w-full max-w-none text-sm leading-6 text-[var(--color-subtle)]">
          {copy.description}
        </p>
      </div>

      <div className="mt-4">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className="project-row animate-project-in grid w-full cursor-pointer gap-4 border-b border-[var(--line-color)] py-5 text-left transition hover:opacity-90 md:grid-cols-[auto_1fr_auto] md:items-center"
            onClick={() => onOpenProject(project.slug)}
            style={{ animationDelay: `${index * 110}ms` }}
            type="button"
          >
            {project.iconSrc ? (
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.1rem] bg-transparent p-0">
                <img
                  alt={`${project.title} icon`}
                  className="h-full w-full rounded-[1.1rem] object-cover"
                  src={project.iconSrc}
                />
              </div>
            ) : (
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-gradient-to-br ${project.accent ?? 'from-slate-200 to-slate-100'} text-xl font-semibold text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_12px_24px_rgba(0,0,0,0.16)]`}
              >
                {project.iconLabel ?? project.title.charAt(0)}
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-heading)]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-subtle)]">
                {project.content[language].subtitle}
              </p>
            </div>

            <div className="text-sm text-[var(--color-subtle)] md:text-right">
              <span>{project.period}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Projects
