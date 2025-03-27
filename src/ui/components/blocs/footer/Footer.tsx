import React, { type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/text/Text'
import './footer.css'
import theme from '@constants/Theme'

const Footer = (): ReactNode => {
    return (
        <footer
            className={'footer'}
        >
            <Row
                justifyContent={'center'}
                width={'100%'}
            >
                <Text
                    color={theme.textSecondary}
                >
                    {`© ${new Date().getFullYear().toString()} • Portfolio - Lilian Marzet. All rights reserved.`}
                </Text>
            </Row>
        </footer>
    )
}

export default Footer
