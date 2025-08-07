import React, { type FC, type ReactNode } from 'react'
import { type DrawerProps } from '@interfaces/components/blocs/drawer/DrawerProps'
import './drawer.css'
import Row from '@components/common/layout/Row'
import { CloseIcon, GithubIcon, LinkedinIcon, MailIcon } from '@resources/Icons'
import Button from '@components/common/pressable/Button'

import { DrawerRoutes } from '@constants/DrawerRoutes'
import DrawerRouteItem from '@components/blocs/drawer/DrawerRouteItem'
import Column from '@components/common/layout/Column'
import ExternalLink from '@components/common/pressable/ExternalLink'
import Title from '@components/common/text/Title'
import Text from '@components/common/text/Text'
import Image from '@components/common/resources/Image'
import { useTranslation } from '@hooks/TranslatonContext'
import { useTheme } from '@hooks/ThemeContext'

const Drawer: FC<DrawerProps> = ({
    isDrawerOpen,
    onClose
}): ReactNode => {
    const { theme } = useTheme()
    const { translate } = useTranslation()
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
                        color={theme.text}
                    />
                </Row>
                <Column
                    padding={16}
                    gap={48}
                    justifyContent={'start'}
                    height={'calc(100% - 44px)'}
                >
                    <Column
                        height={'fit-content'}
                        gap={8}
                    >
                        <Image
                            src={'/images/lilian-marzet.jpg'}
                            alt={'Photo of Lilian Marzet'}
                            height={180}
                            width={180}
                            borderRadius={180}
                        />
                        <Title>
                            Lilian Marzet
                        </Title>
                        <Text>
                            {translate('drawer.fullStackDeveloper')}
                        </Text>
                    </Column>
                    <Column
                        height={'fit-content'}
                    >
                        <nav
                            className={'drawer-nav'}
                        >
                            {Object.entries(DrawerRoutes).map(([key, route]) => (
                                <DrawerRouteItem
                                    key={key}
                                    route={route}
                                    onClose={onClose}
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
                </Column>
            </div>
        </>
    )
}

export default Drawer
