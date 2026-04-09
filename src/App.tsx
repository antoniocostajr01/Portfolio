import { useEffect, useMemo, useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
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
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [activeSection, setActiveSection] = useState('hero')

  const selectedMemoji = useMemo(() => {
    if (memojiImages.length === 0) {
      return ''
    }

    const randomIndex = Math.floor(Math.random() * memojiImages.length)
    return memojiImages[randomIndex]
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
    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-24% 0px -48% 0px',
        threshold: [0.2, 0.35, 0.55],
      },
    )

    observedSections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
      />

      <main className="relative">
        <Hero profileSrc={selectedMemoji} />
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
