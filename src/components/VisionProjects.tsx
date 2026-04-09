import { projects } from '../data/projects'
import { Play } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function VisionProjects() {
  return (
    <div className="vision-glass flex flex-col p-6 rounded-3xl h-full w-full col-span-full xl:col-span-2 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white/90">Selected Projects</h2>
        <div className="text-[var(--color-subtle)] text-xs font-semibold px-3 py-1 bg-[var(--control-surface)] rounded-full border border-[var(--glass-border)]">
          Swipe &rarr;
        </div>
      </div>
      
      {/* Horizontal Carousel */}
      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[var(--control-surface)] border border-[var(--glass-border)] rounded-2xl p-4 flex flex-col gap-3 transition-all hover:bg-[var(--control-hover)] snap-center group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px] shadow-lg shrink-0">
                <div className="w-full h-full rounded-xl bg-[#1e1e22] flex items-center justify-center overflow-hidden">
                  {project.iconSrc ? (
                    <img src={project.iconSrc} alt={project.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <span className="text-white font-bold">{project.iconLabel}</span>
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base truncate">{project.title}</h3>
                <p className="text-[var(--color-subtle)] text-[0.7rem] uppercase tracking-wider">{project.period}</p>
              </div>
            </div>
            
            <p className="text-[var(--color-muted)] text-xs leading-relaxed flex-1 line-clamp-3">
              {project.content.en.overview}
            </p>
            
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[0.65rem] px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/5">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-white/5 text-[var(--color-subtle)]">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[var(--glass-border)]">
              {project.links.appStoreUrl && (
                <a 
                  href={project.links.appStoreUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex justify-center items-center gap-1.5 py-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg-mesh-1)] text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <Play className="w-3.5 h-3.5" /> App Store
                </a>
              )}
              {project.links.githubUrl && (
                <a 
                  href={project.links.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex justify-center items-center gap-1.5 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors border border-white/10"
                >
                  <FaGithub className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
