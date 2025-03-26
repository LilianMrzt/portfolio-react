import React, { type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Row from '@components/common/layout/Row'
import Text from '@components/common/Text'
import './landing-screen.css'

const LandingScreen = (): ReactNode => {
    return (
        <Column
            maxWidth={1280}
            className={'landing-screen'}
        >
            <Row>
                <Text>
                  Lilian Marzet
                </Text>
            </Row>
        </Column>
    )
}

export default LandingScreen
