import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import {
    type TechnologyIndicatorProps
} from '@interfaces/components/blocs/views/landing-screen/projects-section/components/TechnologyIndicatorProps'
import './technology-indicator.css'
import theme from '@constants/Theme'

const TechnologyIndicator: FC<TechnologyIndicatorProps> = ({
    label
}): ReactNode => {
    return (
        <div
            className={'technology-indicator'}
        >
            <Text
                color={theme.surface}
                fontSize={13}
            >
                {label}
            </Text>
        </div>
    )
}

export default TechnologyIndicator
