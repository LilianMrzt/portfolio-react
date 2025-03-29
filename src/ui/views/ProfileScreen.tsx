import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import ProfileScreenIntroductionSection from '@components/blocs/views/profile-screen/ProfileScreenIntroductionSection'
import SkillsSection from '@components/blocs/views/profile-screen/skills-section/SkillsSection'

const ProfileScreen = (): ReactNode => {
    return (
        <Screen>
            <ProfileScreenIntroductionSection/>
            <SkillsSection/>
        </Screen>
    )
}

export default ProfileScreen
