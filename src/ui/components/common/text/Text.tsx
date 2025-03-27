import React, { type FC, type ReactNode } from 'react'
import { type TextProps } from '@interfaces/components/common/text/TextProps'
import './text.css'
import theme from '@constants/Theme'

const Text: FC<TextProps> = ({
    children,
    color = theme.text
}): ReactNode => {
    return (
        <p
            className={'text'}
            style={{
                color
            }}
        >
            {children}
        </p>
    )
}

export default Text
