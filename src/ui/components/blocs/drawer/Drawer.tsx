import React, { type FC, type ReactNode } from 'react'
import { type DrawerProps } from '@interfaces/components/blocs/drawer/DrawerProps'
import './drawer.css'
import Row from '@components/common/layout/Row'
import { CloseIcon, GithubIcon, LinkedinIcon, MailIcon } from '@resources/Icons'
import Button from '@components/common/Button'
import theme from '@constants/Theme'
import { AppRoutes } from '@constants/AppRoutes'
import DrawerRouteItem from '@components/blocs/drawer/DrawerRouteItem'
import Column from '@components/common/layout/Column'
import ExternalLink from '@components/common/ExternalLink'

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
                <Column
                    padding={16}
                    gap={16}
                    justifyContent={'start'}
                    height={'calc(100% - 44px)'}
                >
                    <nav
                        className={'drawer-nav'}
                    >
                        {Object.entries(AppRoutes).map(([key, route]) => (
                            <DrawerRouteItem
                                key={key}
                                route={route}
                            />
                        ))}
                    </nav>
                    <div
                        className={'drawer-separator'}
                    />
                    <Row>
                        <ExternalLink
                            hoverColor={theme.primary}
                            href={'https://github.com/LilianMrzt'}
                        >
                            <GithubIcon/>
                        </ExternalLink>
                        <ExternalLink
                            hoverColor={theme.primary}
                            href={'https://www.linkedin.com/in/lilian-marzet/'}
                        >
                            <LinkedinIcon/>
                        </ExternalLink>
                        <ExternalLink
                            hoverColor={theme.primary}
                            href={'mailto:lilian.marzet@gmail.com'}
                        >
                            <MailIcon/>
                        </ExternalLink>
                    </Row>
                </Column>
            </div>
        </>
    )
}

export default Drawer
