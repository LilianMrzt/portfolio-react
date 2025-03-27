import React, { type FC, type ReactNode } from 'react'
import { type TextProps } from '@interfaces/components/common/text/TextProps'
import './text.css'
import theme from '@constants/Theme'

const Text: FC<TextProps> = ({
    children,
    color = theme.text,
    fontSize = 16
}): ReactNode => {
    return (
        <p
            className={'text'}
            style={{
                color,
                fontSize
            }}
        >
            {children}
        </p>
    )
}

export default Text
