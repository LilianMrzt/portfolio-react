import React, { type FC, type ReactNode } from 'react'
import { type ColumnProps } from '@interfaces/components/ColumnProps'
import './column.css'

const Column: FC<ColumnProps> = ({
    children
}): ReactNode => {
    return (
        <div
            className={'column'}
        >
            {children}
        </div>
    )
}

export default Column
