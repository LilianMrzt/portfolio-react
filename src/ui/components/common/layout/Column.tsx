import React, { type FC, type ReactNode } from 'react'
import { type ColumnProps } from '@interfaces/components/common/layout/ColumnProps'
import './column.css'

const Column: FC<ColumnProps> = ({
    children,
    className
}): ReactNode => {
    return (
        <div
            className={`column ${className ?? ''}`}
        >
            {children}
        </div>
    )
}

export default Column
