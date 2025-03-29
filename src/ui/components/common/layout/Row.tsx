import React, { type FC } from 'react'
import { type RowProps } from '@interfaces/components/common/layout/RowProps'
import './row.css'

const Row: FC<RowProps> = ({
    children,
    className,
    justifyContent = 'center',
    alignItems = 'center',
    width = 'fit-content',
    gap = 16,
    flexWrap = 'nowrap'
}) => {
    return (
        <div
            className={`row ${className ?? ''}`}
            style={{
                alignItems,
                justifyContent,
                gap,
                width,
                flexWrap: flexWrap as any
            }}
        >
            {children}
        </div>
    )
}

export default Row
