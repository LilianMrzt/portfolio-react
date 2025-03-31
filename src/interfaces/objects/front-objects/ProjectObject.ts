export interface ProjectObject {
    id: number
    slug: string
    image: string
    name: string
    description: string
    technologies: string[]
    githubLink?: string
    appLink?: string
}
