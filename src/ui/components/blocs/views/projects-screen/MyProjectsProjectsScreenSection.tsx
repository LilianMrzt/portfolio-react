import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Grid from '@components/common/layout/Grid'
import ProjectsScreenProjectCard from '@components/blocs/views/projects-screen/components/ProjectsScreenProjectCard'
import { useTranslation } from '@hooks/TranslatonContext'
import frProjects from '@fixtures/projects/fr.json'
import enProjects from '@fixtures/projects/en.json'

const MyProjectsProjectsScreenSection = (): ReactNode => {
    const { language } = useTranslation()

    const projects = language === 'fr' ? frProjects : enProjects

    return (
        <Section
            label={'My projects'}
            id={'my-projects-section'}
        >
            <Grid>
                {projects.map((project, index) => (
                    <ProjectsScreenProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </Grid>
        </Section>
    )
}

export default MyProjectsProjectsScreenSection
