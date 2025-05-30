import { type CSSProperties } from 'react'

export interface ImageProps {
    src: string
    alt: string
    width: CSSProperties['width']
    height: CSSProperties['height']
    maxHeight?: CSSProperties['maxHeight']
    maxWidth?: CSSProperties['maxWidth']
    borderRadius?: CSSProperties['borderRadius']
    objectFit?: CSSProperties['objectFit']
}
