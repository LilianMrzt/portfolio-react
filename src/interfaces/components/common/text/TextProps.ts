import { type CSSProperties } from 'react'

export interface TextProps {
    children: string
    color?: CSSProperties['color']
    fontSize?: CSSProperties['fontSize']
    fontWeight?: CSSProperties['fontWeight']
    textAlign?: CSSProperties['textAlign']
    italic?: boolean
    numberOfLines?: number
    lineHeight?: CSSProperties['lineHeight']
}
