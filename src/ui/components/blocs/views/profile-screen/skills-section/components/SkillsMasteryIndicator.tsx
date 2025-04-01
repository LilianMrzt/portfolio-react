import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type SkillMasteryIndicatorProps
} from '@interfaces/components/blocs/views/profile-screen/skills-section/components/SkillMasteryIndicatorProps'
import './skills-mastery-indicator.css'
import { type MasteryIndicatorObject } from '@interfaces/objects/front-objects/MasteryIndicatorObject'

import { useTranslation } from '@hooks/TranslatonContext'
import { useTheme } from '@hooks/ThemeContext'

const SkillsMasteryIndicator: FC<SkillMasteryIndicatorProps> = ({
    mastery
}): ReactNode => {
    const { translate } = useTranslation()
    const { theme } = useTheme()

    /**
     * Retourne les valeurs d'affichage utilisées dans le composant en fonction du prop mastery
     */
    const getTextFromMastery = (): MasteryIndicatorObject => {
        if (mastery <= 2) {
            return {
                label: translate('profileScreen.skillsSection.beginner'),
                color: theme.onOrange,
                backgroundColor: theme.orange
            }
        } else if (mastery <= 6) {
            return {
                label: translate('profileScreen.skillsSection.intermediate'),
                color: theme.onYellow,
                backgroundColor: theme.yellow
            }
        } else if (mastery <= 8) {
            return {
                label: translate('profileScreen.skillsSection.advanced'),
                color: theme.onBlue,
                backgroundColor: theme.blue
            }
        }
        return {
            label: translate('profileScreen.skillsSection.expert'),
            color: theme.onGreen,
            backgroundColor: theme.green
        }
    }

    return (
        <div
            className={'skills-mastery-indicator'}
            style={{
                backgroundColor: getTextFromMastery().backgroundColor
            }}
        >
            <Text
                color={getTextFromMastery().color}
                fontSize={15}
            >
                {getTextFromMastery().label}
            </Text>
        </div>
    )
}

export default SkillsMasteryIndicator
