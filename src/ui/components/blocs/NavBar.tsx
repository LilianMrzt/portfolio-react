import React, { type ReactNode } from 'react'
import Row from '@components/common/Row'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { CodeIcon, MenuIcon } from '@resources/Icons'

const NavBar = (): ReactNode => {
    return (
        <Row>
            <Icon>
                <MenuIcon/>
            </Icon>
            <Icon>
                <CodeIcon/>
            </Icon>
            <Text>
                Lilian Marzet
            </Text>
        </Row>
    )
}

export default NavBar
