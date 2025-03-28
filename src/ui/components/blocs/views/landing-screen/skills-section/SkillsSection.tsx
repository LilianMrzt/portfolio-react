import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Card from '@components/common/Card'
import SkillsCard from '@components/blocs/views/landing-screen/skills-section/components/SkillsCard'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import { ProjectsIcon } from '@resources/Icons'
import SubTitle from '@components/common/text/SubTitle'
import theme from '@constants/Theme'

const SkillsSection = (): ReactNode => {
    return (
        <Section
            label={'Skills'}
            id={'skill-section'}
        >
            <Card>
                <Row
                    gap={8}
                    width={'100%'}
                    justifyContent={'start'}
                >
                    <Icon
                        color={theme.primary}
                    >
                        <ProjectsIcon/>
                    </Icon>
                    <SubTitle
                        fontSize={20}
                    >
                        Frontend
                    </SubTitle>
                </Row>
                <SkillsCard
                    mastery={2}
                />
                <SkillsCard
                    mastery={5}
                />
                <SkillsCard
                    mastery={7}
                />
                <SkillsCard
                    mastery={9}
                />

            </Card>
        </Section>
    )
}

export default SkillsSection
