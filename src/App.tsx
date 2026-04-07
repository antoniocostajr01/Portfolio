import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectDetail from './components/ProjectDetail'
import Projects from './components/Projects'
import { projects } from './data/projects'
import type { Language, SocialLink, Theme } from './types'

const memojiModules = import.meta.glob('./assets/memoji*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const memojiImages = Object.entries(memojiModules).map(([path, src]) => ({
  name: path.split('/').pop() ?? path,
  src,
}))

const memojiScaleMap: Record<string, string> = {
  'memoji1.png': 'scale-[1.05]',
  'memoji2.png': 'scale-[1.12]',
  'memoji3.png': 'scale-[1.08]',
  'memoji4.png': 'scale-[1.08]',
  'memoji5.png': 'scale-[1.08]',
  'memoji6.png': 'scale-[1.12]',
  'memoji7.png': 'scale-[1.04]',
}

const translations = {
  en: {
    controls: {
      preferences: 'Accessibility settings',
      theme: 'Theme',
      language: 'Language',
      light: 'Light',
      dark: 'Dark',
      portuguese: '',
      english: '',
    },
    hero: {
      title: "Hello World! I'm Antonio!",
      description:
        'I’m an iOS developer with 2 years of experience building native apps in Swift, with focus on clean architecture, performance, and polished user experiences. I have 3 apps published on the App Store and I’m open to mobile development opportunities in general, with special interest in the Apple ecosystem.',
      imageAlt: 'Antonio Costa Jr memoji avatar',
    },
    projects: {
      kicker: 'Projects',
      title: 'Selected apps',
      description:
        'A selection of iOS projects built with Swift, showcasing my experience in developing and delivering native applications. Focused on clean architecture, performance, and intuitive user experiences.',
      openProject: 'Open',
    },
    detail: {
      backToHome: '← Back to home',
      projectLinks: 'Links',
      technologies: 'Technologies',
      github: 'GitHub',
      appStore: 'App Store',
      noLinks: 'No public links available for this project yet.',
      contributionHeading: 'My contribution',
      membersHeading: 'Team members',
      screenshotsHeading: 'Screenshots',
    },
  },
  pt: {
    controls: {
      preferences: 'Configurações de acessibilidade',
      theme: 'Tema',
      language: 'Idioma',
      light: 'Claro',
      dark: 'Escuro',
      portuguese: '',
      english: '',
    },
    hero: {
      title: 'Olá mundo! Eu sou o Antonio.',
      description:
        'Sou um desenvolvedor iOS com 2 anos de experiência criando apps nativos em Swift, com foco em arquitetura limpa, performance e experiências de uso bem acabadas. Tenho 3 apps publicados na App Store e estou aberto a oportunidades em desenvolvimento mobile de forma geral, com interesse especial no ecossistema Apple.',
      imageAlt: 'Avatar memoji de Antonio Costa Jr',
    },
    projects: {
      kicker: 'Projetos',
      title: 'Apps selecionados',
      description:
        'Uma seleção de projetos iOS desenvolvidos com Swift, mostrando minha experiência na criação e entrega de aplicações nativas. Com foco em arquitetura limpa, performance e experiências de uso intuitivas.',
      openProject: 'Abrir',
    },
    detail: {
      backToHome: '← Voltar para a home',
      projectLinks: 'Links',
      technologies: 'Tecnologias',
      github: 'GitHub',
      appStore: 'App Store',
      noLinks: 'Este projeto ainda não possui links públicos disponíveis.',
      contributionHeading: 'Minha contribuição',
      membersHeading: 'Membros do time',
      screenshotsHeading: 'Telas',
    },
  },
} as const

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/antoniocosta001',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/antoniocostajr01',
  },
]

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt'
  }

  const storedLanguage = window.localStorage.getItem('language')
  if (storedLanguage === 'pt' || storedLanguage === 'en') {
    return storedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function getRandomMemoji() {
  if (memojiImages.length === 0) {
    return {
      name: '',
      src: '',
    }
  }

  const randomIndex = Math.floor(Math.random() * memojiImages.length)
  return memojiImages[randomIndex]
}

function getProjectSlugFromPath(pathname: string) {
  const match = pathname.match(/^\/projects\/([^/]+)$/)
  return match?.[1] ?? null
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [selectedMemoji] = useState(getRandomMemoji)
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const currentYear = new Date().getFullYear()
  const sortedProjects = [...projects].sort((firstProject, secondProject) => {
    return secondProject.id - firstProject.id
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const copy = translations[language]
  const projectSlug = getProjectSlugFromPath(pathname)
  const selectedProject = sortedProjects.find((project) => project.slug === projectSlug)

  const navigateTo = (nextPath: string) => {
    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => navigateTo('/')

  return (
    <div className="relative min-h-screen overflow-x-hidden pt-28 sm:pt-36 pb-12 px-4 sm:px-8 flex flex-col items-center">
      <Header
        controls={copy.controls}
        name="Antonio Costa Jr"
        onHomeClick={goHome}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
        selectedLanguage={language}
        selectedTheme={theme}
        socialLinks={socialLinks}
      />

      {selectedProject ? (
        <div className="vision-glass relative mx-auto w-full max-w-5xl rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 mb-8 overflow-hidden">
          <ProjectDetail
            copy={copy.detail}
            language={language}
            onBackHome={goHome}
            project={selectedProject}
          />
        </div>
      ) : (
        <main className="vision-glass relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 sm:px-12 py-10 sm:py-14 rounded-[2.5rem] sm:rounded-[3rem] mb-8">
          <Hero
            copy={copy.hero}
            imageAlt={copy.hero.imageAlt}
            imageScaleClass={memojiScaleMap[selectedMemoji.name] ?? ''}
            imageSrc={selectedMemoji.src}
          />
          <Projects
            copy={copy.projects}
            language={language}
            onOpenProject={(slug) => navigateTo(`/projects/${slug}`)}
            projects={sortedProjects}
          />

          <div
            id="contact"
            className="border-t border-[var(--glass-border)] pt-6 pb-2 text-center text-[0.85rem] font-medium text-[var(--color-subtle)]"
          >
            &copy; {currentYear} Antonio Costa Jr
          </div>
        </main>
      )}
    </div>
  )
}

export default App
