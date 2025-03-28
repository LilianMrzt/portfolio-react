import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import SkillsSectionCard from '@components/blocs/views/landing-screen/skills-section/components/SkillsSectionCard'
import SkillsCard from '@components/blocs/views/landing-screen/skills-section/components/SkillsCard'
import { BackEndIcon, FrontEndIcon, ToolsIcon } from '@resources/Icons'

const SkillsSection = (): ReactNode => {
    return (
        <Section
            label={'Skills & Expertise'}
            id={'skill-section'}
        >
            <SkillsSectionCard
                title={'Frontend'}
                icon={<FrontEndIcon/>}
            >
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
            </SkillsSectionCard>
            <SkillsSectionCard
                title={'Backend'}
                icon={<BackEndIcon/>}
            >
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
            </SkillsSectionCard>
            <SkillsSectionCard
                title={'Tools'}
                icon={<ToolsIcon/>}
            >
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
            </SkillsSectionCard>
        </Section>
    )
}

export default SkillsSection
