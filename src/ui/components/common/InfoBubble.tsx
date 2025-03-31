import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type InfoBubbleProps
} from '@interfaces/components/blocs/views/landing-screen/projects-section/components/InfoBubbleProps'
import './info-bubble.css'
import theme from '@constants/Theme'

const InfoBubble: FC<InfoBubbleProps> = ({
    label,
    backgroundColor = theme.surfaceSecondary,
    color = theme.text,
    blur,
    fontSize = 15
}): ReactNode => {
    return (
        <div
            className={`info-bubble ${blur && 'blur'}`}
            style={{
                backgroundColor
            }}
        >
            <Text
                color={color}
                fontSize={fontSize}
            >
                {label}
            </Text>
        </div>
    )
}

export default InfoBubble
