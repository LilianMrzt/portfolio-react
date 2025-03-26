import React, { type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { CodeIcon, MenuIcon } from '@resources/Icons'
import './nav-bar.css'
import theme from '@constants/Theme'

const NavBar = (): ReactNode => {
    return (
        <nav
            className={'nav-bar'}
        >
            <Icon>
                <MenuIcon/>
            </Icon>
            <Row
                justifyContent={'start'}
                width={'fit-content'}
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
