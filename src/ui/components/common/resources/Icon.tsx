import React, { type FC, type ReactNode } from 'react'
import './icon.css'
import { type IconProps } from '@interfaces/components/common/resources/IconProps'

const Icon: FC<IconProps> = ({
    children,
    size = 24,
    color,
    alignSelf,
    backgroundColor,
    padding,
    round
}): ReactNode => {
    return (
        <div
            className={'icon'}
            style={{
                height: size,
                width: size,
                minWidth: size,
                minHeight: size,
                color,
                alignSelf,
                backgroundColor,
                padding,
                borderRadius: round ? '50%' : 'none'
            }}
        >
            {children}
        </div>
    )
}

export default Icon
