import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Grid from '@components/common/layout/Grid'
import Card from '@components/common/Card'

const SkillsSection = (): ReactNode => {
    return (
        <Section
            label={'Skills & Expertise'}
            id={'skill-section'}
        >
            <Grid>
                <Card>
                    <Text>
                        Frontend
                    </Text>
                </Card>
                <Card>
                    <Text>
                        Backend
                    </Text>

                </Card>
                <Card>
                    <Text>
                        Tools
                    </Text>

                </Card>
            </Grid>
        </Section>
    )
}

export default SkillsSection
