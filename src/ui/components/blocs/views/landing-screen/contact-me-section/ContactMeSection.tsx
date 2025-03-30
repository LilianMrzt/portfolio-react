import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'
import Row from '@components/common/layout/Row'
import ContactInformationCard
    from '@components/blocs/views/landing-screen/contact-me-section/components/ContactInformationCard'
import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from '@resources/Icons'
import ExternalLink from '@components/common/pressable/ExternalLink'
import theme from '@constants/Theme'
import frContactInformation from '@fixtures/contact/fr.json'
import { useTranslation } from '@hooks/TranslatonContext'
import { useWindowSize } from '@hooks/useWindowSize'
import screenSizes from '@constants/AppConstants'

const ContactMeSection = (): ReactNode => {
    const { translate } = useTranslation()
    const { width } = useWindowSize()
    const data = frContactInformation

    return (
        <Section
            label={translate('homeScreen.contactMeSection.title')}
            id={'contact-me-section'}
        >
            <Card
                gap={32}
            >
                <Text>
                    {translate('homeScreen.contactMeSection.openToDiscuss')}
                </Text>
                <Row
                    width={'100%'}
                    justifyContent={width < screenSizes.screenS ? 'start' : 'space-around' }
                    flexWrap={'wrap'}
                >
                    <ContactInformationCard
                        icon={<MailIcon/>}
                        label={translate('homeScreen.contactMeSection.email')}
                        content={data.email}
                    />
                    <ContactInformationCard
                        icon={<PhoneIcon/>}
                        label={translate('homeScreen.contactMeSection.phone')}
                        content={data.phone}
                    />
                    <ContactInformationCard
                        icon={<LocationIcon/>}
                        label={translate('homeScreen.contactMeSection.location')}
                        content={data.location}
                    />
                </Row>
                <Row>
                    <ExternalLink
                        hoverColor={theme.primary}
                        href={'https://github.com/LilianMrzt'}
                    >
                        <GithubIcon/>
                    </ExternalLink>
                    <ExternalLink
                        hoverColor={theme.primary}
                        href={'https://www.linkedin.com/in/lilian-marzet/'}
                    >
                        <LinkedinIcon/>
                    </ExternalLink>
                    <ExternalLink
                        hoverColor={theme.primary}
                        href={'mailto:lilian.marzet@gmail.com'}
                    >
                        <MailIcon/>
                    </ExternalLink>
                </Row>
            </Card>
        </Section>
    )
}

export default ContactMeSection
