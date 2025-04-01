import React, { type FC, type ReactNode } from 'react'
import './carousel-dot.css'
import {
    type CarouselDotProps
} from '@interfaces/components/blocs/views/landing-screen/testimonials-section/components/CarouselDotProps'

import { darkenColor } from '@utils/ColorUtils'
import { useTheme } from '@hooks/ThemeContext'

const CarouselDot: FC<CarouselDotProps> = ({
    onClick,
    isActive
}): ReactNode => {
    const { theme } = useTheme()
    return (
        <div
            className={'carousel-dot'}
            onClick={onClick}
            style={{
                backgroundColor: isActive ? theme.primary : darkenColor(theme.surfaceSecondary)
            }}
        />
    )
}

export default CarouselDot
