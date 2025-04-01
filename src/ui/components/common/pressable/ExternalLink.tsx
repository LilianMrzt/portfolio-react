import React, { type FC, type ReactNode, useState } from 'react'
import { type ExternalLinkProps } from '@interfaces/components/common/pressable/ExternalLinkProps'
import Icon from '@components/common/resources/Icon'
import './external-link.css'
import { useTheme } from '@hooks/ThemeContext'

const ExternalLink: FC<ExternalLinkProps> = ({
    children,
    href,
    hoverColor,
    color
}): ReactNode => {
    const [isHovered, setIsHovered] = useState(false)
    const { theme } = useTheme()

    const colorValue = color ?? theme.text

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
                color: isHovered && hoverColor ? hoverColor : colorValue
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
