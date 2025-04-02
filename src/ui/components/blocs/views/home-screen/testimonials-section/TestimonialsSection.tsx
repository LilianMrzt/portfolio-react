import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Card from '@components/common/Card'
import Carousel from '@components/blocs/views/home-screen/testimonials-section/components/Carousel'
import frTestimonials from '@fixtures/testimonials/fr.json'
import enTestimonials from '@fixtures/testimonials/en.json'
import { useTranslation } from '@hooks/TranslatonContext'

const TestimonialsSection = (): ReactNode => {
    const { language, translate } = useTranslation()
    const testimonials = language === 'fr' ? frTestimonials : enTestimonials

    return (
        <Section
            label={translate('homeScreen.testimonialsSection.title')}
            id={'testimonials-section'}
        >
            <Card>
                <Carousel
                    testimonials={testimonials}
                />
            </Card>
        </Section>
    )
}

export default TestimonialsSection
