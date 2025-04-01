import React, { type FC, type ReactNode } from 'react'
import { type SubTitleProps } from '@interfaces/components/common/text/SubTitleProps'
import './sub-title.css'
import { useTheme } from '@hooks/ThemeContext'

const SubTitle: FC<SubTitleProps> = ({
    children,
    fontSize = 30,
    color
}): ReactNode => {
    const { theme } = useTheme()

    const colorValue = color ?? theme.text

    return (
        <h2
            className={'sub-title'}
            style={{
                fontSize,
                color: colorValue
            }}
        >
            {children}
        </h2>
    )
}

export default SubTitle
