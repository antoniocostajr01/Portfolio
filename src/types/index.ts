export interface Project {
  id: number
  title: string
  description: string
  techs: string[]
  repoUrl: string
  liveUrl?: string
  imageUrl?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}