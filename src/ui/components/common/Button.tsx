import React, { type CSSProperties, type FC, type ReactElement, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/Icon'
import Text from '@components/common/Text'
import './button.css'
import theme from '@constants/Theme'

export interface ButtonProps {
    label?: string
    icon?: ReactElement
    backgroundColor?: CSSProperties['backgroundColor']
    color?: CSSProperties['color']
    hoverColor?: CSSProperties['color']
    padding?: CSSProperties['padding']
}

const Button: FC<ButtonProps> = ({
    label,
    icon,
    backgroundColor = theme.primary,
    color = theme.onPrimary,
    hoverColor,
    padding = '8px 12px'
}): ReactNode => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = (): void => {
        setIsHovered(true)
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <button
            className={'button'}
            style={{
                backgroundColor,
                color: isHovered && hoverColor ? hoverColor : color,
                padding
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Row>
                {icon && (
                    <Icon>
                        {icon}
                    </Icon>
                )}
                {label && (
                    <Text>
                        {label}
                    </Text>
                )}
            </Row>
        </button>
    )
}

export default Button
