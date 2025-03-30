import React, { type FC, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import Text from '@components/common/text/Text'
import './button.css'
import theme from '@constants/Theme'
import { type ButtonProps } from '@interfaces/components/common/pressable/ButtonProps'
import { darkenColor } from '@utils/ColorUtils'

const Button: FC<ButtonProps> = ({
    onClick,
    label,
    icon,
    iconEnd,
    backgroundColor = theme.primary,
    color = theme.onPrimary,
    hoverColor,
    padding = '12px 24px'
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
                backgroundColor: isHovered ? darkenColor(backgroundColor) : backgroundColor,
                padding,
                borderRadius: icon && !label ? '50%' : 8
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Row>
                {icon && (
                    <Icon
                        color={isHovered && hoverColor ? hoverColor : color}
                    >
                        {icon}
                    </Icon>
                )}
                {label && (
                    <Text
                        color={isHovered && hoverColor ? hoverColor : color}
                    >
                        {label}
                    </Text>
                )}
                {iconEnd && (
                    <Icon
                        color={isHovered && hoverColor ? hoverColor : color}
                    >
                        {iconEnd}
                    </Icon>
                )}
            </Row>
        </button>
    )
}

export default Button
