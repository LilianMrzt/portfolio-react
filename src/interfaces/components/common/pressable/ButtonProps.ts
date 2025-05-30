import { type CSSProperties, type ReactElement } from 'react'

export interface ButtonProps {
    onClick: () => void
    label?: string
    icon?: ReactElement
    iconEnd?: ReactElement
    backgroundColor?: CSSProperties['backgroundColor']
    color?: CSSProperties['color']
    hoverColor?: CSSProperties['color']
    borderColor?: CSSProperties['borderColor']
    padding?: CSSProperties['padding']
}
