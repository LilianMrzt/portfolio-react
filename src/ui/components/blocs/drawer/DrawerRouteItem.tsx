import React, { type FC, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import Text from '@components/common/text/Text'
import './drawer-route-item.css'
import { Link, useLocation } from 'react-router-dom'
import theme from '@constants/Theme'
import { type DrawerRouteItemProps } from '@interfaces/components/blocs/drawer/DrawerRouteItemProps'
import { useTranslation } from '@hooks/TranslatonContext'
import { darkenColor } from '@utils/ColorUtils'

const DrawerRouteItem: FC<DrawerRouteItemProps> = ({
    route,
    onClose
}): ReactNode => {
    const location = useLocation()
    const { translate } = useTranslation()

    const isSelected = location.pathname === route.route

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = (): void => {
        setIsHovered(true)
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <Link
            className={'drawer-route-item'}
            style={{
                backgroundColor: isSelected
                    ? isHovered ? darkenColor(theme.primaryOpacity) : theme.primaryOpacity
                    : isHovered ? darkenColor(theme.surface) : theme.surface
            }}
            onClick={onClose}
            to={route.route}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Row
                width={'100%'}
                justifyContent={'start'}
            >
                <Icon
                    color={isSelected ? theme.primary : theme.text}
                >
                    {route.icon}
                </Icon>
                <Text
                    color={isSelected ? theme.primary : theme.text}
                >
                    {translate(route.label)}
                </Text>
            </Row>
        </Link>
    )
}

export default DrawerRouteItem
