import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import Text from '@components/common/text/Text'
import './drawer-route-item.css'
import { Link, useLocation } from 'react-router-dom'
import theme from '@constants/Theme'
import { type DrawerRouteItemProps } from '@interfaces/components/blocs/drawer/DrawerRouteItemProps'

const DrawerRouteItem: FC<DrawerRouteItemProps> = ({
    route,
    onClose
}): ReactNode => {
    const location = useLocation()

    const isSelected = location.pathname === route.route

    return (
        <Link
            className={'drawer-route-item'}
            style={{
                backgroundColor: isSelected ? theme.primaryOpacity : theme.surface
            }}
            onClick={onClose}
            to={route.route}
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
                    {route.label}
                </Text>
            </Row>
        </Link>
    )
}

export default DrawerRouteItem
