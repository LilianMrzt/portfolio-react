import React, { type ReactNode } from 'react'
import Screen from '@components/common/layout/Screen'
import { useNavigate } from 'react-router-dom'
import { DrawerRoutes } from '@constants/DrawerRoutes'
import Text from '@components/common/text/Text'
import Button from '@components/common/pressable/Button'
import Column from '@components/common/layout/Column'
import SubTitle from '@components/common/text/SubTitle'
import { useTranslation } from '@hooks/TranslatonContext'

const Error404Screen = (): ReactNode => {
    const navigate = useNavigate()
    const { translate } = useTranslation()

    return (
        <Screen>
            <Column
                height={'calc(100vh - 134px)'}
                padding={32}
            >
                <SubTitle>
                    {translate('error404Screen.error404')}
                </SubTitle>
                <Text>
                    {translate('error404Screen.pageNotFound')}
                </Text>
                <Button
                    label={translate('error404Screen.backToHomeScreen')}
                    onClick={() => {
                        void navigate(DrawerRoutes.home.route!)
                    }}
                />
            </Column>
        </Screen>
    )
}

export default Error404Screen
