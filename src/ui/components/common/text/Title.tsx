import React, { type FC } from 'react'
import { type TitleProps } from '@interfaces/components/common/text/TitleProps'
import './title.css'

const Title: FC<TitleProps> = ({
    children
}) => {
    return (
        <h1
            className={'title'}
        >
            {children}
        </h1>
    )
}

export default Title
