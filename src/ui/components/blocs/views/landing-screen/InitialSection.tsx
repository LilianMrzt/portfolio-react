import React, { type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import Title from '@components/common/text/Title'
import SubTitle from '@components/common/text/SubTitle'

const InitialSection = (): ReactNode => {
    return (
        <Column
            height={'calc(100vh - 64px)'}
            padding={32}
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
    )
}

export default InitialSection
