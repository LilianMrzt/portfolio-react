import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import { CodeIcon, MenuIcon, MoonIcon, SunIcon } from '@resources/Icons'
import './nav-bar.css'

import Button from '@components/common/pressable/Button'
import { type NavBarProps } from '@interfaces/components/blocs/nav-bar/NavBarProps'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@constants/DrawerRoutes'
import Title from '@components/common/text/Title'
import { useTheme } from '@hooks/ThemeContext'
import ThemeConstants from '@constants/ThemeConstants'

const NavBar: FC<NavBarProps> = ({
    onMenuClick
}): ReactNode => {
    const { toggleTheme, themeName, theme } = useTheme()
    return (
        <nav
            className={'nav-bar'}
        >
            <Row>
                <Button
                    onClick={onMenuClick}
                    icon={<MenuIcon/>}
                    color={theme.text}
                    backgroundColor={theme.surface}
                    hoverColor={theme.primary}
                    padding={8}
                />
                <Link
                    to={AppRoutes.home.route ?? ''}
                    className={'nav-bar-link'}
                >
                    <Row
                        justifyContent={'start'}
                        gap={8}
                    >
                        <Icon
                            color={theme.primary}
                        >
                            <CodeIcon/>
                        </Icon>
                        <Title>
                            Portfolio
                        </Title>
                    </Row>
                </Link>
            </Row>
            <Button
                onClick={toggleTheme}
                icon={themeName === ThemeConstants.light ? <SunIcon/> : <MoonIcon/>}
                padding={8}
                color={theme.primary}
                backgroundColor={theme.surface}
            />

        </nav>
    )
}

export default NavBar
