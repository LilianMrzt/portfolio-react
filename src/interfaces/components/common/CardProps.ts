import { type CSSProperties, type ReactNode } from 'react'

export interface CardProps {
    children: ReactNode
    padding?: CSSProperties['padding']
    gap?: CSSProperties['gap']
    justifyContent?: CSSProperties['justifyContent']
}
