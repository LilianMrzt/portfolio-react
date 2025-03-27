import React, { type FC } from 'react'
import { type TitleProps } from '@interfaces/components/common/text/TitleProps'
import './title.css'

const Title: FC<TitleProps> = ({
    children,
    fontSize = 20
}) => {
    return (
        <h1
            className={'title'}
            style={{
                fontSize
            }}
        >
            {children}
        </h1>
    )
}

export default Title
