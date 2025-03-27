import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const SkillsSection = (): ReactNode => {
    return (
        <Section
            label={'Skills'}
            id={'skill-section'}
        >
            <Card>
                <Text>
                    Test
                </Text>
            </Card>
        </Section>
    )
}

export default SkillsSection
