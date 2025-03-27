import React, { type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/text/Text'
import './footer.css'
import theme from '@constants/Theme'
import { useTranslation } from '@hooks/TranslatonContext'

const Footer = (): ReactNode => {
    const { translate } = useTranslation()
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
                    {`© ${new Date().getFullYear().toString()} • Portfolio - Lilian Marzet. ${translate('footer.allRightsReserved')}.`}
                </Text>
            </Row>
        </footer>
    )
}

export default Footer
