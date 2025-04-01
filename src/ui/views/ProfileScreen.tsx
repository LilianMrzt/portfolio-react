import React, { type ReactNode, useEffect } from 'react'
import Screen from '@components/common/layout/Screen'
import SkillsSection from '@components/blocs/views/profile-screen/skills-section/SkillsSection'
import { scrollToSection } from '@utils/Animationutils'
import { useLocation, useNavigate } from 'react-router-dom'
import LanguagesSection from '@components/blocs/views/profile-screen/languages-section/LanguagesSection'
import ProfessionalExperienceSection
    from '@components/blocs/views/profile-screen/professional-experience-section/ProfessionalExperienceSection'

const ProfileScreen = (): ReactNode => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const state = location.state as { scrollTo?: string }
        if (state?.scrollTo) {
            setTimeout(() => {
                scrollToSection(state.scrollTo!)
                // Suppression du state
                void navigate(location.pathname, { replace: true, state: null })
            }, 10)
        }
    }, [location, navigate])

    return (
        <Screen>
            <ProfessionalExperienceSection/>
            <LanguagesSection/>
            <SkillsSection/>
        </Screen>
    )
}

export default ProfileScreen
