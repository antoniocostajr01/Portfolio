export type Theme = 'light' | 'dark'

export type Language = 'pt' | 'en'

export interface ProjectScreenshot {
  id: string
  title: string
  imageSrc?: string
}

export interface ProjectMember {
  name: string
  role: string
  linkedinUrl?: string
}

export interface ProjectLinks {
  githubUrl?: string
  appStoreUrl?: string
}

export interface ProjectLocalizedContent {
  subtitle: string
  overview: string
  contribution: string[]
}

export interface Project {
  id: number
  slug: string
  title: string
  period: string
  origin?: string
  screenshotOrientation?: 'portrait' | 'landscape'
  iconSrc?: string
  iconLabel?: string
  accent?: string
  technologies: string[]
  links: ProjectLinks
  members: ProjectMember[]
  screenshots: ProjectScreenshot[]
  content: Record<Language, ProjectLocalizedContent>
}

export interface SocialLink {
  name: string
  url: string
}

export interface HeaderControlsCopy {
  preferences: string
  theme: string
  language: string
  light: string
  dark: string
  portuguese: string
  english: string
}

export interface HeroCopy {
  title: string
  description: string
  imageAlt: string
}

export interface ProjectsCopy {
  kicker: string
  title: string
  description: string
  openProject: string
}

export interface ProjectDetailCopy {
  backToHome: string
  projectLinks: string
  technologies: string
  github: string
  appStore: string
  noLinks: string
  contributionHeading: string
  membersHeading: string
  screenshotsHeading: string
}
