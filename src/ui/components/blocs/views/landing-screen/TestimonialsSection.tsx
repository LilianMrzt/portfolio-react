import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const TestimonialsSection = (): ReactNode => {
    return (
        <Section
            label={'What people say'}
            id={'testimonials-section'}
        >
            <Card>
                <Text>
                    Test
                </Text>
            </Card>
        </Section>
    )
}

export default TestimonialsSection
