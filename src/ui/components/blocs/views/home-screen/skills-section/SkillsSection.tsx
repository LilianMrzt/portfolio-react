import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Grid from '@components/common/layout/Grid'
import SkillCardHomeScreen from '@components/blocs/views/home-screen/skills-section/components/SkillCardHomeScreen'
import { BackEndIcon, FrontEndIcon, ToolsIcon } from '@resources/Icons'
import { type SkillObject } from '@interfaces/objects/front-objects/SkillObject'
import { useTranslation } from '@hooks/TranslatonContext'
import frFrontEndSkills from '@fixtures/skills/front-end/fr.json'
import enFrontEndSkills from '@fixtures/skills/front-end/en.json'
import frBackEndSkills from '@fixtures/skills/back-end/fr.json'
import enBackEndSkills from '@fixtures/skills/back-end/en.json'
import frToolsSkills from '@fixtures/skills/tools/fr.json'
import enToolsSkills from '@fixtures/skills/tools/en.json'
import { AppRoutes } from '@constants/DrawerRoutes'

const SkillsSection = (): ReactNode => {
    const { language, translate } = useTranslation()

    const frontEndSkills = language === 'fr' ? frFrontEndSkills : enFrontEndSkills
    const backEndSkills = language === 'fr' ? frBackEndSkills : enBackEndSkills
    const toolsSkills = language === 'fr' ? frToolsSkills : enToolsSkills

    return (
        <Section
            label={translate('homeScreen.skillsSection.title')}
            id={'home-skill-section'}
            viewDetailsRoute={AppRoutes.profile.route}
            sectionScrollId={'skill-section'}
            viewDetailsButtonLabel={translate('buttons.viewDetails')}
        >
            <Grid>
                <SkillCardHomeScreen
                    title={translate('homeScreen.skillsSection.frontend')}
                    icon={<FrontEndIcon/>}
                    skills={frontEndSkills as SkillObject[]}
                />
                <SkillCardHomeScreen
                    title={translate('homeScreen.skillsSection.backend')}
                    icon={<BackEndIcon/>}
                    skills={backEndSkills as SkillObject[]}
                />
                <SkillCardHomeScreen
                    title={translate('homeScreen.skillsSection.tools')}
                    icon={<ToolsIcon/>}
                    skills={toolsSkills as SkillObject[]}
                />
            </Grid>
        </Section>
    )
}

export default SkillsSection
