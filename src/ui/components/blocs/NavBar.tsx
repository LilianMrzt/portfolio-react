import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { CodeIcon, MenuIcon } from '@resources/Icons'
import './nav-bar.css'
import theme from '@constants/Theme'
import Button from '@components/common/Button'
import { type NavBarProps } from '@interfaces/components/blocs/NavBarProps'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@constants/AppRoutes'

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
                    <Text>
                        Lilian Marzet
                    </Text>
                </Row>
            </Link>
        </nav>
    )
}

export default NavBar
