import React, { type FC, type ReactNode } from 'react'
import { type ImageProps } from '@interfaces/components/common/resources/ImageProps'
import './image.css'

const Image: FC<ImageProps> = ({
    src,
    height,
    width,
    borderRadius,
    alt,
    objectFit
}): ReactNode => {
    return (
        <img
            className={'image'}
            src={src}
            alt={alt}
            style={{
                height,
                width,
                minHeight: height,
                minWidth: width,
                borderRadius,
                objectFit
            }}
        />
    )
}

export default Image
