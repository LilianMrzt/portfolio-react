import React, { type FC, type ReactNode } from 'react'
import './carousel-dot.css'
import {
    type CarouselDotProps
} from '@interfaces/components/blocs/views/home-screen/testimonials-section/components/CarouselDotProps'

import { darkenOrLightenColor } from '@utils/ColorUtils'
import { useTheme } from '@hooks/ThemeContext'

const CarouselDot: FC<CarouselDotProps> = ({
    onClick,
    isActive
}): ReactNode => {
    const { theme, themeName } = useTheme()
    return (
        <div
            className={'carousel-dot'}
            onClick={onClick}
            style={{
                backgroundColor: isActive ? theme.primary : darkenOrLightenColor(theme.surfaceSecondary, themeName)
            }}
        />
    )
}

export default CarouselDot
