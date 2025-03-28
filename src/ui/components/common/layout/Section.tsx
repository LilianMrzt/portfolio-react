import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import { type SectionProps } from '@interfaces/components/common/layout/SectionProps'
import SubTitle from '@components/common/text/SubTitle'
import { useWindowSize } from '@hooks/useWindowSize'
import screenSizes from '@constants/AppConstants'

const Section: FC<SectionProps> = ({
    label,
    id,
    children
}): ReactNode => {
    const { width } = useWindowSize()
    return (
        <Column
            alignItems={'start'}
            padding={width < screenSizes.screenM ? 16 : 32}
            id={id}
        >
            <SubTitle>
                {label}
            </SubTitle>
            {children}
        </Column>
    )
}

export default Section
