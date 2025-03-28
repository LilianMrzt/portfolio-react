import React, { type FC, type ReactNode } from 'react'
import './card.css'
import { type CardProps } from '@interfaces/components/common/CardProps'
import Column from '@components/common/layout/Column'

const Card: FC<CardProps> = ({
    children,
    padding = 24
}): ReactNode => {
    return (
        <Column
            className={'card'}
            padding={padding}
        >
            {children}
        </Column>
    )
}

export default Card
