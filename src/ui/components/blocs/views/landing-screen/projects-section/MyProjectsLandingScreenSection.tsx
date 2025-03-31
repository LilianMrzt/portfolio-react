import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Grid from '@components/common/layout/Grid'
import HomeScreenProjectCard
    from '@components/blocs/views/landing-screen/projects-section/components/HomeScreenProjectCard'
import { useTranslation } from '@hooks/TranslatonContext'
import frProjects from '@fixtures/projects/fr.json'
import enProjects from '@fixtures/projects/en.json'
import { type ProjectObject } from '@interfaces/objects/front-objects/ProjectObject'
import { AppRoutes } from '@constants/AppRoutes'

const MyProjectsLandingScreenSection = (): ReactNode => {
    const { language, translate } = useTranslation()

    const projects = language === 'fr' ? frProjects : enProjects
    const renderedProjects = projects.slice(0, 2)

    return (
        <Section
            label={translate('homeScreen.projectsSection.title')}
            id={'my-projects-section'}
            viewDetailsRoute={AppRoutes.projects.route}
            viewDetailsButtonLabel={translate('buttons.viewAllProjects')}
        >
            <Grid>
                {renderedProjects.map((project: ProjectObject) => (
                    <HomeScreenProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </Grid>
        </Section>
    )
}

export default MyProjectsLandingScreenSection
