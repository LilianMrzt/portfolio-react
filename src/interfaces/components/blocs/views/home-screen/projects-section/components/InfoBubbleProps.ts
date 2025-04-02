import { type CSSProperties } from 'react'

export interface InfoBubbleProps {
    label: string
    color?: CSSProperties['color']
    backgroundColor?: CSSProperties['backgroundColor']
    blur?: boolean
    fontSize?: CSSProperties['fontSize']
}
