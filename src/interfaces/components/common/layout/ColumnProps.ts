import { type CSSProperties, type ReactNode } from 'react'

export interface ColumnProps {
    children: ReactNode
    className?: string
    maxWidth?: CSSProperties['maxWidth']
    padding?: CSSProperties['padding']
    gap?: CSSProperties['gap']
    justifyContent?: CSSProperties['justifyContent']
    alignItems?: CSSProperties['alignItems']
    height?: CSSProperties['height']
}
