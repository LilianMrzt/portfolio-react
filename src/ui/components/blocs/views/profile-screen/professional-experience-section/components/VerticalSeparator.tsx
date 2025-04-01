import React, { type FC, type ReactNode } from 'react'
import './vertical-separator.css'
import {
    type VerticalSeparatorProps
} from '@interfaces/components/blocs/views/profile-screen/professional-experiences-section/components/VerticalSeparatorProps'
import { darkenColor } from '@utils/ColorUtils'
import theme from '@constants/Theme'

const VerticalSeparator: FC<VerticalSeparatorProps> = ({
    className
}): ReactNode => {
    return (
        <div
            className={`vertical-separator ${className}`}
            style={{
                backgroundColor: darkenColor(theme.surfaceSecondary)
            }}
        />
    )
}

export default VerticalSeparator
