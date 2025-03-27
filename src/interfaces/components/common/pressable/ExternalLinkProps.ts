import { type CSSProperties, type ReactElement } from 'react'

export interface ExternalLinkProps {
    children: ReactElement
    href: string
    color?: CSSProperties['color']
    hoverColor?: CSSProperties['color']
}
