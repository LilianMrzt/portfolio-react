import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import frProfesionalExperiences from '@fixtures/professional-experiences/fr.json'
import enrofesionalExperiences from '@fixtures/professional-experiences/en.json'
import { useTranslation } from '@hooks/TranslatonContext'
import Card from '@components/common/Card'
import ProfessionalExperienceCard
    from '@components/blocs/views/profile-screen/professional-experience-section/components/ProfessionalExperienceCard'

const ProfessionalExperienceSection = (): ReactNode => {
    const { language, translate } = useTranslation()
    const professionalExperiences = language === 'fr' ? frProfesionalExperiences : enrofesionalExperiences
    return (
        <Section
            label={translate('profileScreen.professionalExperiencesSection.title')}
            id={'professional-experience-section'}
        >
            <Card
                gap={64}
                padding={'24px 24px 48px 24px'}
            >
                {professionalExperiences.map((professionalExperience, index) => (
                    <ProfessionalExperienceCard
                        key={index}
                        professionalExperience={professionalExperience}
                    />
                ))}
            </Card>
        </Section>
    )
}

export default ProfessionalExperienceSection
