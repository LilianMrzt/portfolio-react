import React, { type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import Section from '@components/common/layout/Section'
import Screen from '@components/common/layout/Screen'

const ProjectsScreen = (): ReactNode => {
    return (
        <Screen>
            <Section
                label={'My projects'}
                id={'my-projects-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
        </Screen>
    )
}

export default ProjectsScreen
