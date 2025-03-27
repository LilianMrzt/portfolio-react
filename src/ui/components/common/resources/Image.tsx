import React, { type FC, type ReactNode } from 'react'
import { type ImageProps } from '@interfaces/components/common/resources/ImageProps'

const Image: FC<ImageProps> = ({
    src,
    height,
    width,
    borderRadius,
    alt
}): ReactNode => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                height,
                width,
                borderRadius
            }}
        />
    )
}

export default Image
