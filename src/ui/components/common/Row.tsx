import React, { type FC } from 'react'
import { type RowProps } from '@interfaces/components/common/RowProps'
import './row.css'

const Row: FC<RowProps> = ({
    children
}) => {
    return (
        <div
            className={'row'}
        >
            {children}
        </div>
    )
}

export default Row
