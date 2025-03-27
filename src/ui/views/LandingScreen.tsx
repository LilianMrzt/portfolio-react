import React, { type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import Section from '@components/common/layout/Section'
import Screen from '@components/common/layout/Screen'
import InitialSection from '@components/blocs/views/landing-screen/InitialSection'

const LandingScreen = (): ReactNode => {
    return (
        <Screen>
            <InitialSection/>
            <Section
                label={'About me'}
                id={'about-me-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'Skills'}
                id={'skill-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'My projects'}
                id={'my-projects-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'What people say'}
                id={'testimonials-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'Get in touch'}
                id={'contact-me-section'}
            >
                <Text>
                    Test
                </Text>
            </Section>
        </Screen>
    )
}

export default LandingScreen
