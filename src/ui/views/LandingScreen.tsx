import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import InitialSection from '@components/blocs/views/landing-screen/InitialSection'
import AboutMeSection from '@components/blocs/views/landing-screen/AboutMeSection'
import ContactMeSection from '@components/blocs/views/landing-screen/ContactMeSection'
import MyProjectsLandingScreenSection from '@components/blocs/views/landing-screen/MyProjectsLandingScreenSection'
import SkillsSection from '@components/blocs/views/landing-screen/skills-section/SkillsSection'
import TestimonialsSection from '@components/blocs/views/landing-screen/TestimonialsSection'
import ParallaxCircle from '@components/common/ParallaxCircle'
import { useWindowSize } from '@hooks/useWindowSize'

const LandingScreen = (): ReactNode => {
    const { width, height } = useWindowSize()

    return (
        <>
            <Screen>
                <InitialSection/>
                <AboutMeSection/>
                <SkillsSection/>
                <MyProjectsLandingScreenSection/>
                <TestimonialsSection/>
                <ContactMeSection/>

            </Screen>
            <ParallaxCircle
                size={100}
                path={'vertical'}
                initialX={300}
                initialY={110}
                speed={0.2}
            />
            <ParallaxCircle
                size={80}
                path={'horizontal'}
                initialX={50}
                initialY={90}
            />
            <ParallaxCircle
                size={120}
                path={'diagonal'}
                initialX={100}
                initialY={200}
            />
            <ParallaxCircle
                size={200}
                path={'vertical'}
                initialX={width - 250}
                initialY={height - 250}
            />
            <ParallaxCircle
                size={80}
                path={'diagonal'}
                initialX={width - 130}
                initialY={height - 350}
                horizontalDirection={'left'}
            />
        </>
    )
}

export default LandingScreen
