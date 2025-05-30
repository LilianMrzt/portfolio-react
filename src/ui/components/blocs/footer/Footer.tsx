import React, { type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/text/Text'
import './footer.css'

import { useTranslation } from '@hooks/TranslatonContext'
import { useTheme } from '@hooks/ThemeContext'

const Footer = (): ReactNode => {
    const { translate } = useTranslation()
    const { theme } = useTheme()
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
                    textAlign={'center'}
                >
                    {`© ${new Date().getFullYear().toString()} • Portfolio - Lilian Marzet. ${translate('footer.allRightsReserved')}.`}
                </Text>
            </Row>
        </footer>
    )
}

export default Footer
