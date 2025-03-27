import React, { type FC, type ReactNode, useState } from 'react'
import { type ExternalLinkProps } from '@interfaces/components/common/pressable/ExternalLinkProps'
import Icon from '@components/common/resources/Icon'
import './external-link.css'
import theme from '@constants/Theme'

const ExternalLink: FC<ExternalLinkProps> = ({
    children,
    href,
    hoverColor,
    color = theme.text
}): ReactNode => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = (): void => {
        setIsHovered(true)
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <a
            className={'external-link'}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                color: isHovered && hoverColor ? hoverColor : color
            }}
        >
            <Icon
                size={20}
            >
                {children}
            </Icon>
        </a>
    )
}

export default ExternalLink
