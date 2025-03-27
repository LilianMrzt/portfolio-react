import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import { type ScreenProps } from '@interfaces/components/common/layout/ScreenProps'
import './screen.css'

const Screen: FC<ScreenProps> = ({
    children
}): ReactNode => {
    return (
        <Column
            maxWidth={1280}
            className={'screen'}
        >
            {children}
        </Column>
    )
}

export default Screen
