import React, { type FC, type ReactNode } from 'react'
import { type ImageProps } from '@interfaces/components/common/resources/ImageProps'
import './image.css'

const Image: FC<ImageProps> = ({
    src,
    height,
    width,
    borderRadius,
    alt,
    objectFit,
    maxWidth,
    maxHeight
}): ReactNode => {
    return (
        <img
            className={'image'}
            src={src}
            alt={alt}
            style={{
                height,
                width,
                maxWidth,
                maxHeight,
                borderRadius,
                objectFit
            }}
        />
    )
}

export default Image
