import React, { type FC, type ReactNode } from 'react'
import './skill-mastery-bar.css'
import { darkenColor } from '@utils/ColorUtils'
import theme from '@constants/Theme'
import {
    type SkillMasteryBarProps
} from '@interfaces/components/blocs/views/profile-screen/skills-section/components/SkillMasteryBarProps'

const SkillMasteryBar: FC<SkillMasteryBarProps> = ({
    mastery
}): ReactNode => {
    const barPercentage = mastery / 10
    return (
        <div
            className={'skill-mastery-bar'}
            style={{
                backgroundColor: darkenColor(theme.background)
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
