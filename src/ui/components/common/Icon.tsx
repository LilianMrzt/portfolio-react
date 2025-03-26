import React, { type FC, type ReactNode } from 'react'
import './icon.css'
import { type IconProps } from '@interfaces/components/common/IconProps'

const Icon: FC<IconProps> = ({
    children,
    size = 24
}): ReactNode => {
    return (
        <div
            className={'icon'}
            style={{
                height: size,
                width: size,
                minWidth: size,
                minHeight: size
            }}
        >
            {children}
        </div>
    )
}

export default Icon
