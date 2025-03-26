import React, { type FC } from 'react'
import { type RowProps } from '@interfaces/components/common/layout/RowProps'
import './row.css'

const Row: FC<RowProps> = ({
    children,
    className
}) => {
    return (
        <div
            className={`row ${className}`}
        >
            {children}
        </div>
    )
}

export default Row
