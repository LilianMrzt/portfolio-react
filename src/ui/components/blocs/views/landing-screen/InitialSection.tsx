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

const InitialSection = (): ReactNode => {
    const { width } = useWindowSize()
    const { translate } = useTranslation()

    const scrollToSection = (): void => {
        const element = document.getElementById('about-me-section')
        if (element) {
            const offset = 64
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset

            window.scrollTo({
                top,
                behavior: 'smooth'
            })
        }
    }

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
                    fontSize={width < 960 ? 96 : 128}
                >
                    Lilian Marzet
                </Title>
                <SubTitle>
                    {translate('homeScreen.initialSection.fullStackDeveloper')}
                </SubTitle>
            </Column>
            <Button
                onClick={scrollToSection}
                icon={<ChevronDownIcon/>}
                padding={16}
                color={theme.text}
                backgroundColor={theme.background}
            />
        </Column>
    )
}

export default InitialSection
