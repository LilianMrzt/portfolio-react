import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type SkillIndicatorProps
} from '@interfaces/components/blocs/views/home-screen/skills-section/components/SkillIndicatorProps'
import './skill-indicator.css'
import Row from '@components/common/layout/Row'
import { useTheme } from '@hooks/ThemeContext'

const SkillIndicator: FC<SkillIndicatorProps> = ({
    label
}): ReactNode => {
    const { theme } = useTheme()
    return (
        <Row
            className={'skill-indicator'}
        >
            <Text
                color={theme.onBlue}
            >
                {label}
            </Text>
        </Row>
    )
}

export default SkillIndicator
