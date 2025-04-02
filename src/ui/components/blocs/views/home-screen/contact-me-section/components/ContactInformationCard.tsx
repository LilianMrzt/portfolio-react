import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import {
    type ContactInformationCardProps
} from '@interfaces/components/blocs/views/home-screen/contact-me-section/components/ContactInformationCardProps'
import { useTheme } from '@hooks/ThemeContext'
import Icon from '@components/common/resources/Icon'

const ContactInformationCard: FC<ContactInformationCardProps> = ({
    icon,
    label,
    content
}): ReactNode => {
    const { theme } = useTheme()
    return (
        <Row>
            <Icon
                padding={12}
                backgroundColor={theme.blue}
                color={theme.onBlue}
                round
            >
                {icon}
            </Icon>
            <Column
                alignItems={'start'}
                gap={8}
            >
                <Text
                    fontSize={14}
                    color={theme.textSecondary}
                >
                    {label}
                </Text>
                <Text>
                    {content}
                </Text>
            </Column>
        </Row>
    )
}

export default ContactInformationCard
