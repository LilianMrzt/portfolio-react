import React, { type FC, type ReactNode } from 'react'
import { type TextProps } from '@interfaces/components/TextProps'
import './text.css'

const Text: FC<TextProps> = ({
    children
}): ReactNode => {
    return (
        <p
            className={'text'}
        >
            {children}
        </p>
    )
}

export default Text
