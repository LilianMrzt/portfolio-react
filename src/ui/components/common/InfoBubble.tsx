import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type InfoBubbleProps
} from '@interfaces/components/blocs/views/landing-screen/projects-section/components/InfoBubbleProps'
import './info-bubble.css'
import { useTheme } from '@hooks/ThemeContext'

const InfoBubble: FC<InfoBubbleProps> = ({
    label,
    backgroundColor,
    color,
    blur,
    fontSize = 15
}): ReactNode => {
    const { theme } = useTheme()

    const colorValue = color ?? theme.text
    const backgroundColorValue = backgroundColor ?? theme.surfaceSecondary

    return (
        <div
            className={`info-bubble ${blur && 'blur'}`}
            style={{
                backgroundColor: backgroundColorValue
            }}
        >
            <Text
                color={colorValue}
                fontSize={fontSize}
            >
                {label}
            </Text>
        </div>
    )
}

export default InfoBubble
