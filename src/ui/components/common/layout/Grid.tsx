import React, { type FC, type ReactNode } from 'react'
import { type GridProps } from '@interfaces/components/common/layout/GridProps'
import './grid.css'

const Grid: FC<GridProps> = ({
    children
}): ReactNode => {
    return (
        <div
            className={'grid'}
        >
            {children}
        </div>
    )
}

export default Grid
