import React, { type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import Title from '@components/common/text/Title'
import SubTitle from '@components/common/text/SubTitle'
import Button from '@components/common/pressable/Button'
import { ChevronDownIcon } from '@resources/Icons'
import theme from '@constants/Theme'
import { useWindowSize } from '@hooks/useWindowSize'
import { useTranslation } from '@hooks/TranslatonContext'
import screenSizes from '@constants/AppConstants'
import { scrollToSection } from '@utils/Animationutils'

const InitialSection = (): ReactNode => {
    const { width } = useWindowSize()
    const { translate } = useTranslation()

    return (
        <Column
            height={'calc(100vh - 64px)'}
            padding={32}
            gap={128}
        >
            <Column
                height={'fit-content'}
            >
                <Text
                    fontSize={24}
                >
                    {translate('homeScreen.initialSection.greetings')}
                </Text>
                <Title
                    fontSize={width < screenSizes.screenM ? 96 : 128}
                >
                    Lilian Marzet
                </Title>
                <SubTitle>
                    {translate('homeScreen.initialSection.fullStackDeveloper')}
                </SubTitle>
            </Column>
            <Button
                onClick={() => {
                    scrollToSection('about-me-section')
                }}
                icon={<ChevronDownIcon/>}
                padding={16}
                color={theme.text}
                backgroundColor={theme.background}
            />
        </Column>
    )
}

export default InitialSection
