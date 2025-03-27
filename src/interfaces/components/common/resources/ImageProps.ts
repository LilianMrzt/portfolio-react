import { type CSSProperties } from 'react'

export interface ImageProps {
    src: string
    alt: string
    width: CSSProperties['width']
    height: CSSProperties['height']
    borderRadius?: CSSProperties['borderRadius']
    objectFit?: CSSProperties['objectFit']
}
