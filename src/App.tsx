import { useEffect, useMemo, useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import GrainOverlay from './components/GrainOverlay'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import { projects } from './data/projects'
import type { Theme } from './types'

const memojiModules = import.meta.glob('./assets/memoji*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const memojiImages = Object.values(memojiModules)

const sectionIds = ['hero', 'about', 'stack', 'experience', 'projects', 'contact']

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [activeSection, setActiveSection] = useState('hero')

  const selectedMemoji = useMemo(() => {
    if (memojiImages.length === 0) return ''
    return memojiImages[Math.floor(Math.random() * memojiImages.length)]
  }, [])

  const featuredProjects = useMemo(() => {
    return [...projects].sort((a, b) => b.id - a.id).slice(0, 3)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-24% 0px -48% 0px', threshold: [0.2, 0.35, 0.55] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <GrainOverlay />
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      />
      <main className="relative">
        <About profileSrc={selectedMemoji} />
        <TechStack />
        <Experience />
        <Projects projects={featuredProjects} />
        <Contact />
      </main>
    </div>
  )
}

export default App
