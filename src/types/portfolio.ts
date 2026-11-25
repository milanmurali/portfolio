export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'Automation' | 'Academic'

export interface ProjectArchitectureNode {
  layer: string
  summary: string
  modules: string[]
}

export interface ProjectItem {
  slug: string
  index: string
  title: string
  subtitle: string
  year: string
  status: string
  category: ProjectCategory
  featured: boolean
  summary: string
  overview: string
  problem: string
  approach: string
  techStack: string[]
  keyFeatures: string[]
  architecture: ProjectArchitectureNode[]
  challengesAndLearnings: string[]
  repoUrl: string
  liveUrl?: string
  previewKind: 'mediq' | 'civiceye' | 'careersync' | 'taskflow' | 'cryptify' | 'busnav' | 'n8n'
}

export interface StackGroup {
  id: string
  label: string
  description: string
  items: {
    name: string
    iconKey: string
  }[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: string
  featured?: boolean
  summary: string
  responsibilities: string[]
  technologies: string[]
  repoUrl?: string
  modulesExplored?: {
    area: string
    detail: string
  }[]
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  highlights: string[]
}

export interface CertificationItem {
  title: string
  issuer: string
}
