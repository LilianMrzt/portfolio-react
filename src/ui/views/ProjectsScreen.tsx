import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import MyProjectsProjectsScreenSection from '@components/blocs/views/projects-screen/MyProjectsProjectsScreenSection'

const ProjectsScreen = (): ReactNode => {
    return (
        <Screen>
            <MyProjectsProjectsScreenSection/>
        </Screen>
    )
}

export default ProjectsScreen
