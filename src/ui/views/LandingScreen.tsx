import React, { type ReactNode } from 'react'
import Column from '@components/Column'
import Row from '@components/Row'
import Text from '@components/Text'

const LandingScreen = (): ReactNode => {
    return (
        <Column>
            <Row>
                <Text>
                  Lilian Marzet
                </Text>
            </Row>
        </Column>
    )
}

export default LandingScreen
