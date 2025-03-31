import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import ProjectDetailsSection from '@components/blocs/views/project-details-screen/ProjectDetailsSection'

const ProjectDetailsScreen = (): ReactNode => {
    return (
        <Screen>
            <ProjectDetailsSection/>
        </Screen>
    )
}

export default ProjectDetailsScreen
