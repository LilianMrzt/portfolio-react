import React, { type FC, type ReactNode } from 'react'
import { type DrawerProps } from '@interfaces/components/blocs/drawer/DrawerProps'
import './drawer.css'
import Row from '@components/common/layout/Row'
import { CloseIcon, GithubIcon, LinkedinIcon, MailIcon } from '@resources/Icons'
import Button from '@components/common/pressable/Button'
import theme from '@constants/Theme'
import { AppRoutes } from '@constants/AppRoutes'
import DrawerRouteItem from '@components/blocs/drawer/DrawerRouteItem'
import Column from '@components/common/layout/Column'
import ExternalLink from '@components/common/pressable/ExternalLink'
import Title from '@components/common/text/Title'
import Text from '@components/common/text/Text'
import Image from '@components/common/resources/Image'

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
                            src={'https://media.licdn.com/dms/image/v2/D5603AQHXsCF1ovgpQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693410201608?e=1748476800&v=beta&t=F7OApupk981tjvqfMgV0zys8Mtnk8Oe_2AgEDj3x2mg'}
                            alt={'Photo of Lilian Marzet'}
                            height={180}
                            width={180}
                            borderRadius={180}
                        />
                        <Title>
                            Lilian Marzet
                        </Title>
                        <Text>
                            Développeur Fullstack
                        </Text>
                    </Column>
                    <Column
                        height={'fit-content'}
                    >
                        <nav
                            className={'drawer-nav'}
                        >
                            {Object.entries(AppRoutes).map(([key, route]) => (
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
