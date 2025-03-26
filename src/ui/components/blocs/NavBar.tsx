import React, { type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { CodeIcon, MenuIcon } from '@resources/Icons'
import './nav-bar.css'
import theme from '@constants/Theme'
import Button from '@components/common/Button'

const NavBar = (): ReactNode => {
    return (
        <nav
            className={'nav-bar'}
        >
            <Button
                icon={<MenuIcon/>}
                color={theme.onSurface}
                backgroundColor={theme.surface}
                hoverColor={theme.primary}
                padding={8}
            />
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
        </nav>
    )
}

export default NavBar
