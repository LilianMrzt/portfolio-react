import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'

const SkillsSection = (): ReactNode => {
    return (
        <Section
            label={'Skills & Expertise'}
            id={'skill-section'}
        >
            <Text>
                Skills
            </Text>
        </Section>
    )
}

export default SkillsSection
