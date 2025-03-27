import React, { type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import Title from '@components/common/text/Title'
import SubTitle from '@components/common/text/SubTitle'
import Button from '@components/common/pressable/Button'
import { ChevronDownIcon } from '@resources/Icons'
import theme from '@constants/Theme'

const InitialSection = (): ReactNode => {
    const scrollToSection = (): void => {
        const element = document.getElementById('about-me-section')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
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
                    Bonjour, je suis
                </Text>
                <Title
                    fontSize={128}
                >
                    Lilian Marzet
                </Title>
                <SubTitle>
                    Développeur Fullstack
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
