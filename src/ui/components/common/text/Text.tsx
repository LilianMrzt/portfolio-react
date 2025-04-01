import React, { type FC, type ReactNode } from 'react'
import { type TextProps } from '@interfaces/components/common/text/TextProps'
import './text.css'
import { useTheme } from '@hooks/ThemeContext'

const Text: FC<TextProps> = ({
    children,
    color,
    fontSize = 16,
    italic,
    textAlign = 'start',
    numberOfLines,
    lineHeight,
    fontWeight
}): ReactNode => {
    const { theme } = useTheme()

    const colorValue = color ?? theme.text

    return (
        <p
            className={`text ${italic && 'italic'} ${numberOfLines && 'clamp'}`}
            style={{
                color: colorValue,
                fontSize,
                textAlign: textAlign as any,
                WebkitLineClamp: numberOfLines,
                lineHeight,
                fontWeight
            }}
        >
            {children}
        </p>
    )
}

export default Text
