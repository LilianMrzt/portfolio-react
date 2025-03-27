import React, { type FC, type ReactNode } from 'react'
import { type ColumnProps } from '@interfaces/components/common/layout/ColumnProps'
import './column.css'

const Column: FC<ColumnProps> = ({
    children,
    className,
    maxWidth,
    padding,
    gap,
    justifyContent = 'center',
    height = '100%'
}): ReactNode => {
    return (
        <div
            className={`column ${className ?? ''}`}
            style={{
                maxWidth,
                padding,
                gap,
                justifyContent,
                height
            }}
        >
            {children}
        </div>
    )
}

export default Column
