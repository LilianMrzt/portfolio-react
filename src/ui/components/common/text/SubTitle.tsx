import React, { type FC, type ReactNode } from 'react'
import { type SubTitleProps } from '@interfaces/components/common/text/SubTitleProps'
import './sub-title.css'

const SubTitle: FC<SubTitleProps> = ({
    children
}): ReactNode => {
    return (
        <h2
            className={'sub-title'}
        >
            {children}
        </h2>
    )
}

export default SubTitle
