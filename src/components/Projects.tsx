import type { Language, Project, ProjectsCopy } from '../types'

interface ProjectsProps {
  projects: Project[]
  copy: ProjectsCopy
  language: Language
  onOpenProject: (slug: string) => void
}

function Projects({ projects, copy, language, onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="pb-12 pt-8">
      <div className="flex flex-col gap-5 pb-8">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-heading)] sm:text-5xl drop-shadow-sm">
            {copy.kicker}
          </h2>
        </div>
        <p className="w-full max-w-2xl text-[1.05rem] font-medium leading-relaxed text-[var(--color-text)] opacity-90 drop-shadow-sm">
          {copy.description}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className="group project-row animate-project-in flex flex-col w-full cursor-pointer text-left transition-all duration-300 vision-glass-strong rounded-[2.5rem] p-6 sm:p-8 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] focus-visible:outline-none focus:ring-4 focus:ring-[var(--focus-ring)]"
            onClick={() => onOpenProject(project.slug)}
            style={{ animationDelay: `${index * 110}ms` }}
            type="button"
          >
            <div className="w-full flex items-center justify-between mb-6">
               <span className="inline-flex items-center rounded-full bg-[var(--color-heading)] px-3 py-1.5 text-[0.7rem] font-semibold tracking-wider text-[var(--color-bg-mesh-1)] shadow-sm">
                  {project.period}
               </span>
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--control-surface)] text-[var(--color-heading)] opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
               </div>
            </div>

            {project.iconSrc ? (
              <div className="mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-[1.2rem] shadow-sm bg-white">
                <img
                  alt={`${project.title} icon`}
                  className="h-full w-full object-cover"
                  src={project.iconSrc}
                />
              </div>
            ) : (
              <div
                className={`mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.2rem] shadow-sm bg-gradient-to-br ${project.accent ?? 'from-slate-200 to-slate-100'} text-2xl font-bold text-slate-900`}
              >
                {project.iconLabel ?? project.title.charAt(0)}
              </div>
            )}

            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-heading)]">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-[0.95rem] font-medium leading-relaxed text-[var(--color-text)] opacity-90">
              {project.content[language].subtitle}
            </p>

            <div className="mt-8 secondary-chip w-fit self-start font-semibold border-none bg-[var(--color-text)] text-[var(--color-bg-mesh-1)] shadow-md group-hover:scale-105">
              {copy.openProject}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Projects
