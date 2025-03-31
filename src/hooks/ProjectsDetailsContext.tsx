import React, {
    createContext, type Dispatch,
    type FC, type ReactNode, type SetStateAction,
    useContext, useEffect,
    useState
} from 'react'
import { type ProjectObject } from '@interfaces/objects/front-objects/ProjectObject'

interface ProjectsDetailsContextValue {
    project: ProjectObject | null
    setProject: Dispatch<SetStateAction<ProjectObject | null>>
}

interface ProjectsDetailsContextProps {
    children: ReactNode
    projectSlug: string
}

const ProjectsDetailsContext = createContext<ProjectsDetailsContextValue | null>(null)

const ProjectsDetailsProvider: FC<ProjectsDetailsContextProps> = ({
    children,
    projectSlug
}) => {
    const [project, setProject] = useState<ProjectObject | null>(null)

    useEffect(() => {
        const loadExercises = async (): Promise<void> => {
            try {
                setProject(project)
            } catch (err) {
                console.error((err as Error).message, 'error')
            }
        }

        void loadExercises()
    }, [projectSlug])

    return (
        <ProjectsDetailsContext.Provider
            value={{
                project,
                setProject
            }}
        >
            {children}
        </ProjectsDetailsContext.Provider>
    )
}

/**
 * Hook personnalisé pour utiliser le contexte projectsDetails.
 * Si le contexte n'est pas trouvé, une erreur est levée.
 */
export const useProjectsDetails = (): ProjectsDetailsContextValue => {
    const context = useContext(ProjectsDetailsContext)
    if (!context) {
        throw new Error('useProjectsDetails must be used within an projectsDetailsProvider')
    }
    return context
}

export default ProjectsDetailsProvider
