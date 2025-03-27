import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import { CodeIcon, MenuIcon } from '@resources/Icons'
import './nav-bar.css'
import theme from '@constants/Theme'
import Button from '@components/common/pressable/Button'
import { type NavBarProps } from '@interfaces/components/blocs/nav-bar/NavBarProps'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@constants/AppRoutes'
import Title from '@components/common/text/Title'

const NavBar: FC<NavBarProps> = ({
    onMenuClick
}): ReactNode => {
    return (
        <nav
            className={'nav-bar'}
        >
            <Button
                onClick={onMenuClick}
                icon={<MenuIcon/>}
                color={theme.onSurface}
                backgroundColor={theme.surface}
                hoverColor={theme.primary}
                padding={8}
            />
            <Link
                to={AppRoutes.home.route}
                className={'nav-bar-link'}
            >
                <Row
                    justifyContent={'start'}
                >
                    <Icon
                        color={theme.primary}
                    >
                        <CodeIcon/>
                    </Icon>
                    <Title>
                        Portfolio - Lilian Marzet
                    </Title>
                </Row>
            </Link>
        </nav>
    )
}

export default NavBar
