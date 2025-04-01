import React, { type FC, type ReactNode } from 'react'
import './vertical-separator.css'
import {
    type VerticalSeparatorProps
} from '@interfaces/components/blocs/views/profile-screen/professional-experiences-section/components/VerticalSeparatorProps'
import { darkenOrLightenColor } from '@utils/ColorUtils'
import { useTheme } from '@hooks/ThemeContext'

const VerticalSeparator: FC<VerticalSeparatorProps> = ({
    className
}): ReactNode => {
    const { theme, themeName } = useTheme()
    return (
        <div
            className={`vertical-separator ${className}`}
            style={{
                backgroundColor: darkenOrLightenColor(theme.surfaceSecondary, themeName)
            }}
        />
    )
}

export default VerticalSeparator
