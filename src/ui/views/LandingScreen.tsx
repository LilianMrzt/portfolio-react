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
                label={'Skills'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'About me'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'My projects'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'What people say'}
            >
                <Text>
                    Test
                </Text>
            </Section>
            <Section
                label={'Get in touch'}
            >
                <Text>
                    Test
                </Text>
            </Section>
        </Screen>
    )
}

export default LandingScreen
