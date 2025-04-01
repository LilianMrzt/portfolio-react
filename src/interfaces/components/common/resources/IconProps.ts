import { type CSSProperties, type ReactElement } from 'react'

export interface IconProps {
    children: ReactElement
    size?: CSSProperties['width'] | CSSProperties['height']
    color?: CSSProperties['color']
    backgroundColor?: CSSProperties['backgroundColor']
    padding?: CSSProperties['padding']
    alignSelf?: CSSProperties['alignSelf']
}
