import React, { type FC, type ReactNode } from 'react'
import { type SubTitleProps } from '@interfaces/components/common/text/SubTitleProps'
import './sub-title.css'
import theme from '@constants/Theme'

const SubTitle: FC<SubTitleProps> = ({
    children,
    fontSize = 30,
    color = theme.text
}): ReactNode => {
    return (
        <h2
            className={'sub-title'}
            style={{
                fontSize,
                color
            }}
        >
            {children}
        </h2>
    )
}

export default SubTitle
