import React, { type FC, type ReactNode } from 'react'
import { type DrawerProps } from '@interfaces/components/blocs/drawer/DrawerProps'
import './drawer.css'
import Row from '@components/common/layout/Row'
import { CloseIcon } from '@resources/Icons'
import Button from '@components/common/Button'
import theme from '@constants/Theme'
import Column from '@components/common/layout/Column'
import { AppRoutes } from '@constants/AppRoutes'
import DrawerRouteItem from '@components/blocs/drawer/DrawerRouteItem'

const Drawer: FC<DrawerProps> = ({
    isDrawerOpen,
    onClose
}): ReactNode => {
    return (
        <>
            <div
                className={`drawer-background-wrapper ${isDrawerOpen && 'visible'}`}
            >
                <div
                    className={'drawer-background'}
                    onClick={onClose}
                />
            </div>
            <div
                className={`drawer ${isDrawerOpen && 'open'}`}
            >
                <Row
                    justifyContent={'end'}
                    width={'100%'}
                >
                    <Button
                        icon={<CloseIcon/>}
                        onClick={onClose}
                        padding={10}
                        backgroundColor={theme.surface}
                        color={theme.onSurface}
                    />
                </Row>
                <Column>
                    {Object.entries(AppRoutes).map(([key, route]) => (
                        <DrawerRouteItem
                            key={key}
                            route={route}
                        />
                    ))}
                </Column>
            </div>
        </>
    )
}

export default Drawer
