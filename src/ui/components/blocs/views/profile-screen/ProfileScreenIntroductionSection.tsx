import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'

const ProfileScreenIntroductionSection = (): ReactNode => {
    return (
        <Section
            label={'My Profile'}
            id={'my-projects-section'}
        >
            <Card>
                <Text>
        Test
                </Text>
            </Card>
        </Section>
    )
}

export default ProfileScreenIntroductionSection
