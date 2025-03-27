import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const ContactMeSection = (): ReactNode => {
    return (
        <Section
            label={'Get in touch'}
            id={'contact-me-section'}
        >
            <Card>
                <Text>
                    Test
                </Text>
            </Card>
        </Section>
    )
}

export default ContactMeSection
