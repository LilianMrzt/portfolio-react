export interface ProjectObject {
    id: number
    slug: string
    image: string
    name: string
    overview: string
    features: string[]
    technicalDetails: string
    technologies: string[]
    githubLink?: string
    appLink?: string
}
