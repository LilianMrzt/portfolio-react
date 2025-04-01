import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import { LanguageIcon } from '@resources/Icons'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import './language-card.css'

import {
    type LanguageCardProps
} from '@interfaces/components/blocs/views/profile-screen/language-section/components/LanguageCardProps'
import SubTitle from '@components/common/text/SubTitle'
import { darkenColor } from '@utils/ColorUtils'
import InfoBubble from '@components/common/InfoBubble'
import { useTheme } from '@hooks/ThemeContext'

const LanguageCard: FC<LanguageCardProps> = ({
    language
}): ReactNode => {
    const { theme } = useTheme()
    return (
        <Column
            alignItems={'start'}
            width={'100%'}
            className={'language-card'}
        >
            <Row
                width={'100%'}
                justifyContent={'space-between'}
            >
                <Row
                    width={'fit-content'}
                >
                    <Icon
                        color={theme.primary}
                        alignSelf={'start'}
                    >
                        <LanguageIcon/>
                    </Icon>
                    <SubTitle
                        fontSize={18}
                    >
                        {language.language}
                    </SubTitle>
                </Row>
                <InfoBubble
                    label={language.level}
                    color={theme.onBlue}
                    backgroundColor={theme.blue}
                />
            </Row>
            {language.certifications.length > 0 && (
                <Column
                    gap={8}
                    alignItems={'start'}
                    padding={'0 0 0 44px'}
                >
                    {language.certifications.map((certification, index) => (
                        <Text
                            key={index}
                            color={darkenColor(theme.textSecondary)}
                        >
                            {certification}
                        </Text>
                    ))}
                </Column>
            )}
        </Column>
    )
}

export default LanguageCard
