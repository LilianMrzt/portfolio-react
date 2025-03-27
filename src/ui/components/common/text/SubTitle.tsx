import React, { type FC, type ReactNode } from 'react'
import { type SubTitleProps } from '@interfaces/components/common/text/SubTitleProps'
import './sub-title.css'

const SubTitle: FC<SubTitleProps> = ({
    children,
    fontSize = 30
}): ReactNode => {
    return (
        <h2
            className={'sub-title'}
            style={{
                fontSize
            }}
        >
            {children}
        </h2>
    )
}

export default SubTitle
