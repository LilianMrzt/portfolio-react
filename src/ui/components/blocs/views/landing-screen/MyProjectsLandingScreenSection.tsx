import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const MyProjectsLandingScreenSection = (): ReactNode => {
    return (
        <Section
            label={'My projects'}
            id={'my-projects-section'}
        >
            <Card>
                <Text>
                    Test
                </Text>
            </Card>
        </Section>
    )
}

export default MyProjectsLandingScreenSection
