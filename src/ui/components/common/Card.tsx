import React, { type FC, type ReactNode } from 'react'
import './card.css'
import { type CardProps } from '@interfaces/components/common/CardProps'
import Column from '@components/common/layout/Column'

const Card: FC<CardProps> = ({
    children,
    padding = 24,
    gap,
    justifyContent,
    className
}): ReactNode => {
    return (
        <Column
            className={`card ${className}`}
            padding={padding}
            gap={gap}
            justifyContent={justifyContent}
        >
            {children}
        </Column>
    )
}

export default Card
