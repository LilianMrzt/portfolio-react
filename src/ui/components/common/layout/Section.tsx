import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import { type SectionProps } from '@interfaces/components/common/layout/SectionProps'
import SubTitle from '@components/common/text/SubTitle'

const Section: FC<SectionProps> = ({
    label,
    children
}): ReactNode => {
    return (
        <Column
            alignItems={'start'}
        >
            <SubTitle>
                {label}
            </SubTitle>
            {children}
        </Column>
    )
}

export default Section
