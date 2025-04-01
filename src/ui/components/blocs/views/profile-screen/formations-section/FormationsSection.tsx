import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import { useTranslation } from '@hooks/TranslatonContext'
import frFormations from '@fixtures/formations/fr.json'
import enFormations from '@fixtures/formations/en.json'
import Card from '@components/common/Card'
import FormationCard from '@components/blocs/views/profile-screen/formations-section/components/FormationCard'

const FormationsSection = (): ReactNode => {
    const { language, translate } = useTranslation()
    const formations = language === 'fr' ? frFormations : enFormations
    return (
        <Section
            label={translate('profileScreen.formationsSection.title')}
            id={'formations-section'}
        >
            <Card
                gap={64}
                padding={'24px 24px 48px 24px'}
            >
                {formations.map((formation, index) => (
                    <FormationCard
                        key={index}
                        formation={formation}
                    />
                ))}
            </Card>
        </Section>
    )
}

export default FormationsSection
