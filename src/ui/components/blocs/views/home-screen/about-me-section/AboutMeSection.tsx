import React, { type ReactNode } from 'react'
import Section from '@components/common/layout/Section'
import Text from '@components/common/text/Text'
import Card from '@components/common/Card'
import Row from '@components/common/layout/Row'
import Image from '@components/common/resources/Image'
import Column from '@components/common/layout/Column'
import './about-me-section.css'
import Button from '@components/common/pressable/Button'
import { DownloadIcon } from '@resources/Icons'
import { useWindowSize } from '@hooks/useWindowSize'
import { useTranslation } from '@hooks/TranslatonContext'
import screenSizes from '@constants/ScreenSizes'
import { AppRoutes } from '@constants/DrawerRoutes'

const AboutMeSection = (): ReactNode => {
    const { width } = useWindowSize()
    const { translate } = useTranslation()

    const handleResumeDownload = (): void => {
        const link = document.createElement('a')
        link.href = '/files/CV_Lilian_MARZET.pdf'
        link.setAttribute('download', 'CV_Lilian_MARZET.pdf')
        link.setAttribute('target', '_blank')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Section
            label={translate('homeScreen.aboutMeSection.title')}
            id={'about-me-section'}
            viewDetailsRoute={AppRoutes.profile.route}
            viewDetailsButtonLabel={translate('buttons.viewDetails')}
        >
            <Card
                padding={width < screenSizes.screenM ? 32 : 64}
            >
                <Row
                    gap={64}
                    width={'100%'}
                    flexWrap={width < screenSizes.screenM ? 'wrap' : 'nowrap'}
                >
                    <Column
                        gap={32}
                        alignItems={width < screenSizes.screenS ? 'center' : 'start'}
                    >
                        <Column>
                            <Text
                                fontSize={18}
                            >
                                {translate('homeScreen.aboutMeSection.contentText1')}
                            </Text>
                            <Text
                                fontSize={18}
                            >
                                {translate('homeScreen.aboutMeSection.contentText2')}
                            </Text>
                        </Column>
                        <Button
                            onClick={handleResumeDownload}
                            icon={<DownloadIcon/>}
                            label={translate('homeScreen.aboutMeSection.buttonLabel')}
                        />
                    </Column>
                    <div
                        className={'about-me-section-image'}
                    >
                        <Image
                            src={'https://media.licdn.com/dms/image/v2/D5603AQHXsCF1ovgpQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693410201608?e=1748476800&v=beta&t=F7OApupk981tjvqfMgV0zys8Mtnk8Oe_2AgEDj3x2mg'}
                            alt={'Photo of Lilian Marzet'}
                            width={400}
                            height={400}
                            maxWidth={width - 128}
                            maxHeight={width - 128}
                            objectFit={'cover'}
                            borderRadius={32}
                        />
                        <div
                            className={'about-me-section-image-shadow'}
                        />
                    </div>
                </Row>
            </Card>
        </Section>
    )
}

export default AboutMeSection
