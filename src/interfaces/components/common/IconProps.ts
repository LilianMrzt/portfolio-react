import { type CSSProperties, type ReactElement } from 'react'

export interface IconProps {
    children: ReactElement
    size?: CSSProperties['width'] | CSSProperties['height']
}
