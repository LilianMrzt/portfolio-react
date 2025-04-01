import React, { type FC, type ReactNode } from 'react'
import './skill-mastery-bar.css'
import { darkenOrLightenColor } from '@utils/ColorUtils'

import {
    type SkillMasteryBarProps
} from '@interfaces/components/blocs/views/profile-screen/skills-section/components/SkillMasteryBarProps'
import { useTheme } from '@hooks/ThemeContext'

const SkillMasteryBar: FC<SkillMasteryBarProps> = ({
    mastery
}): ReactNode => {
    const { theme, themeName } = useTheme()
    const barPercentage = mastery / 10
    return (
        <div
            className={'skill-mastery-bar'}
            style={{
                backgroundColor: darkenOrLightenColor(theme.background, themeName)
            }}
        >
            <div
                className={'skill-mastery-bar-content'}
                style={{
                    width: `calc(100% * ${barPercentage})`
                }}
            />
        </div>
    )
}

export default SkillMasteryBar
