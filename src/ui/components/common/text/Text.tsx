import React, { type FC, type ReactNode } from 'react'
import { type TextProps } from '@interfaces/components/common/text/TextProps'
import './text.css'
import theme from '@constants/Theme'

const Text: FC<TextProps> = ({
    children,
    color = theme.text,
    fontSize = 16,
    italic,
    textAlign = 'start',
    numberOfLines,
    lineHeight
}): ReactNode => {
    return (
        <p
            className={`text ${italic && 'italic'} ${numberOfLines && 'clamp'}`}
            style={{
                color,
                fontSize,
                textAlign: textAlign as any,
                WebkitLineClamp: numberOfLines,
                lineHeight
            }}
        >
            {children}
        </p>
    )
}

export default Text
