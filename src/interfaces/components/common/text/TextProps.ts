import { type CSSProperties } from 'react'

export interface TextProps {
    children: string
    color?: CSSProperties['color']
    fontSize?: CSSProperties['fontSize']
}
