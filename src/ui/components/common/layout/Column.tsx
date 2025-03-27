import React, { type FC, type ReactNode } from 'react'
import { type ColumnProps } from '@interfaces/components/common/layout/ColumnProps'
import './column.css'

const Column: FC<ColumnProps> = ({
    children,
    className,
    maxWidth,
    padding,
    gap = 16,
    justifyContent = 'center',
    alignItems = 'center',
    height = '100%',
    id
}): ReactNode => {
    return (
        <div
            className={`column ${className ?? ''}`}
            id={id}
            style={{
                maxWidth,
                padding,
                gap,
                justifyContent,
                alignItems,
                height
            }}
        >
            {children}
        </div>
    )
}

export default Column
