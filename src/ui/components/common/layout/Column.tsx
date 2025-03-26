import React, { type FC, type ReactNode } from 'react'
import { type ColumnProps } from '@interfaces/components/common/layout/ColumnProps'
import './column.css'

const Column: FC<ColumnProps> = ({
    children,
    className,
    maxWidth,
    padding
}): ReactNode => {
    return (
        <div
            className={`column ${className ?? ''}`}
            style={{
                maxWidth,
                padding
            }}
        >
            {children}
        </div>
    )
}

export default Column
