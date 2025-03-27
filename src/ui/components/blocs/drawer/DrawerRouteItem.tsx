import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/Icon'
import Text from '@components/common/Text'
import './drawer-route-item.css'
import { useLocation, useNavigate } from 'react-router-dom'
import theme from '@constants/Theme'
import { type DrawerRouteItemProps } from '@interfaces/components/blocs/drawer/DrawerRouteItemProps'

const DrawerRouteItem: FC<DrawerRouteItemProps> = ({
    route
}): ReactNode => {
    const location = useLocation()
    const navigate = useNavigate()

    const isSelected = location.pathname === route.route

    return (
        <button
            className={'drawer-route-item'}
            style={{
                backgroundColor: isSelected ? theme.primary : theme.surface
            }}
            onClick={() => {
                void navigate(route.route)
            }}
        >
            <Row
                width={'100%'}
            >
                <Icon>
                    {route.icon}
                </Icon>
                <Text>
                    {route.label}
                </Text>
            </Row>
        </button>
    )
}

export default DrawerRouteItem
