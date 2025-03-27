import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const AboutMeSection = (): ReactNode => {
    return (
        <Section
            label={'About me'}
            id={'about-me-section'}
        >
            <Card>
                <Text>
                   Test
                </Text>
            </Card>
        </Section>
    )
}

export default AboutMeSection
