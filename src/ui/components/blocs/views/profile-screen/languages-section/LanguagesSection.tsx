import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Card from '@components/common/Card'
import LanguageCard from '@components/blocs/views/profile-screen/languages-section/components/LanguageCard'
import { useTranslation } from '@hooks/TranslatonContext'
import frLanguages from '@fixtures/languages/fr.json'
import enLanguages from '@fixtures/languages/en.json'

const LanguagesSection = (): ReactNode => {
    const { language, translate } = useTranslation()
    const languages = language === 'fr' ? frLanguages : enLanguages

    return (
        <Section
            label={translate('profileScreen.languagesSection.title')}
            id={'languages-section'}
        >
            <Card>
                {languages.map((language, index) => (
                    <LanguageCard
                        key={index}
                        language={language}
                    />
                ))}
            </Card>
        </Section>
    )
}

export default LanguagesSection
