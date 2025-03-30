import React, { type ReactNode, useEffect } from 'react'
import Screen from '@components/common/layout/Screen'
import ProfileScreenIntroductionSection from '@components/blocs/views/profile-screen/ProfileScreenIntroductionSection'
import SkillsSection from '@components/blocs/views/profile-screen/skills-section/SkillsSection'
import { scrollToSection } from '@utils/Animationutils'
import { useLocation, useNavigate } from 'react-router-dom'

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
            <ProfileScreenIntroductionSection/>
            <SkillsSection/>
        </Screen>
    )
}

export default ProfileScreen
