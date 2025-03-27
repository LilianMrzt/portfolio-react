import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import InitialSection from '@components/blocs/views/landing-screen/InitialSection'
import AboutMeSection from '@components/blocs/views/landing-screen/AboutMeSection'
import ContactMeSection from '@components/blocs/views/landing-screen/ContactMeSection'
import MyProjectsLandingScreenSection from '@components/blocs/views/landing-screen/MyProjectsLandingScreenSection'
import SkillsSection from '@components/blocs/views/landing-screen/SkillsSection'
import TestimonialsSection from '@components/blocs/views/landing-screen/TestimonialsSection'

const LandingScreen = (): ReactNode => {
    return (
        <Screen>
            <InitialSection/>
            <AboutMeSection/>
            <SkillsSection/>
            <MyProjectsLandingScreenSection/>
            <TestimonialsSection/>
            <ContactMeSection/>
        </Screen>
    )
}

export default LandingScreen
