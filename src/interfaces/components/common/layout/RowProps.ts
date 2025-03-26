import { type CSSProperties, type ReactNode } from 'react'

export interface RowProps {
    children: ReactNode
    className?: string
    alignItems?: CSSProperties['alignItems']
    justifyContent?: CSSProperties['justifyContent']
    gap?: CSSProperties['gap']
    width?: CSSProperties['width']
}
