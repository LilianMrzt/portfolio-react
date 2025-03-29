import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type SkillMasteryIndicatorProps
} from '@interfaces/components/blocs/views/landing-screen/skills-section/components/SkillMasteryIndicatorProps'
import './skills-mastery-indicator.css'
import { type MasteryIndicatorObject } from '@interfaces/objects/front-objects/MasteryIndicatorObject'
import theme from '@constants/Theme'

const SkillsMasteryIndicator: FC<SkillMasteryIndicatorProps> = ({
    mastery
}): ReactNode => {
    /**
     * Retourne les valeurs d'affichage utilisées dans le composant en fonction du prop mastery
     */
    const getTextFromMastery = (): MasteryIndicatorObject => {
        if (mastery <= 2) {
            return {
                label: 'Beginner',
                color: theme.onOrange,
                backgroundColor: theme.orange
            }
        } else if (mastery <= 6) {
            return {
                label: 'Intermediate',
                color: theme.onYellow,
                backgroundColor: theme.yellow
            }
        } else if (mastery <= 8) {
            return {
                label: 'Advanced',
                color: theme.onBlue,
                backgroundColor: theme.blue
            }
        }
        return {
            label: 'Expert',
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
