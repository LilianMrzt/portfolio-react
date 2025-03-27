import React, { type FC, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/Icon'
import Text from '@components/common/text/Text'
import './button.css'
import theme from '@constants/Theme'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'

const Button: FC<ButtonProps> = ({
    onClick,
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
            onClick={onClick}
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
