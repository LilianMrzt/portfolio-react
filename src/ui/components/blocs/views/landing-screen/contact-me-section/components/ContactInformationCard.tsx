import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Button from '@components/common/pressable/Button'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import {
    type ContactInformationCardProps
} from '@interfaces/components/blocs/views/landing-screen/contact-me-section/components/ContactInformationCardProps'

import { copyToClipboard } from '@utils/TextUtils'
import { useTheme } from '@hooks/ThemeContext'

const ContactInformationCard: FC<ContactInformationCardProps> = ({
    icon,
    label,
    content
}): ReactNode => {
    const { theme } = useTheme()
    return (
        <Row>
            <Button
                onClick={() => {
                    void copyToClipboard(content)
                }}
                padding={12}
                icon={icon}
                backgroundColor={theme.blue}
                color={theme.onBlue}
            />
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
