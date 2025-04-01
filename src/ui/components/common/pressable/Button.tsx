import React, { type FC, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import Text from '@components/common/text/Text'
import './button.css'
import { type ButtonProps } from '@interfaces/components/common/pressable/ButtonProps'
import { darkenOrLightenColor } from '@utils/ColorUtils'
import { useTheme } from '@hooks/ThemeContext'

const Button: FC<ButtonProps> = ({
    onClick,
    label,
    icon,
    iconEnd,
    backgroundColor,
    color,
    borderColor = 'transparent',
    hoverColor,
    padding = '12px 24px'
}): ReactNode => {
    const [isHovered, setIsHovered] = useState(false)
    const { theme, themeName } = useTheme()

    const backgroundColorValue = backgroundColor ?? theme.primary
    const colorValue = color ?? theme.onPrimary

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
                backgroundColor: isHovered ? darkenOrLightenColor(backgroundColorValue, themeName) : backgroundColorValue,
                padding,
                borderRadius: icon && !label ? '50%' : 8,
                border: `1px solid ${borderColor}`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Row>
                {icon && (
                    <Icon
                        color={isHovered && hoverColor ? hoverColor : colorValue}
                    >
                        {icon}
                    </Icon>
                )}
                {label && (
                    <Text
                        color={isHovered && hoverColor ? hoverColor : colorValue}
                    >
                        {label}
                    </Text>
                )}
                {iconEnd && (
                    <Icon
                        color={isHovered && hoverColor ? hoverColor : colorValue}
                    >
                        {iconEnd}
                    </Icon>
                )}
            </Row>
        </button>
    )
}

export default Button
