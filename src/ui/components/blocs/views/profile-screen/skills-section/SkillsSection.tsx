import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import SkillsSectionCard from '@components/blocs/views/profile-screen/skills-section/components/SkillsSectionCard'
import { BackEndIcon, FrontEndIcon, ToolsIcon } from '@resources/Icons'
import { useTranslation } from '@hooks/TranslatonContext'
import enFrontEndSkills from '@fixtures/skills/front-end/en.json'
import frFrontEndSkills from '@fixtures/skills/front-end/fr.json'
import enBackEndSkills from '@fixtures/skills/back-end/en.json'
import frBackEndSkills from '@fixtures/skills/back-end/fr.json'
import enToolsSkills from '@fixtures/skills/tools/en.json'
import frToolsSkills from '@fixtures/skills/tools/fr.json'
import { type SkillObject } from '@interfaces/objects/front-objects/SkillObject'

const SkillsSection = (): ReactNode => {
    const { language, translate } = useTranslation()

    const frontEndSkills = language === 'fr' ? frFrontEndSkills : enFrontEndSkills
    const backEndSkills = language === 'fr' ? frBackEndSkills : enBackEndSkills
    const toolsSkills = language === 'fr' ? frToolsSkills : enToolsSkills

    return (
        <Section
            label={translate('profileScreen.skillsSection.title')}
            id={'skill-section'}
        >
            <SkillsSectionCard
                title={translate('profileScreen.skillsSection.frontend')}
                icon={<FrontEndIcon/>}
                skills={frontEndSkills as SkillObject[]}
            />
            <SkillsSectionCard
                title={translate('profileScreen.skillsSection.backend')}
                icon={<BackEndIcon/>}
                skills={backEndSkills as SkillObject[]}
            />
            <SkillsSectionCard
                title={translate('profileScreen.skillsSection.tools')}
                icon={<ToolsIcon/>}
                skills={toolsSkills as SkillObject[]}
            />
        </Section>
    )
}

export default SkillsSection
