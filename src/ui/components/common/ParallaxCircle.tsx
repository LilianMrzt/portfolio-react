import React, { useEffect, useState } from 'react'
import './parallax-circle.css'
import { type ParallaxCircleProps } from '@interfaces/components/common/ParallaxCircleProps'

const ParallaxCircle: React.FC<ParallaxCircleProps> = ({
    size,
    speed = 0.3,
    path = 'vertical',
    horizontalDirection = 'right',
    initialX,
    initialY
}) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = (): void => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    const offset = scrollY * speed

    const top =
        path === 'horizontal'
            ? initialY
            : initialY - offset

    const left =
        path === 'vertical'
            ? initialX
            : horizontalDirection === 'right'
                ? initialX + offset
                : initialX - offset

    return (
        <div
            className={'parallax-circle'}
            style={{
                width: size,
                height: size,
                top,
                left
            }}
        />
    )
}

export default ParallaxCircle
