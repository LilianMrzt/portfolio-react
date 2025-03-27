export interface ParallaxCircleProps {
    size: number
    speed?: number
    path?: 'vertical' | 'horizontal' | 'diagonal'
    horizontalDirection?: 'left' | 'right'
    initialX: number
    initialY: number
}
