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
        window.open('/files/CV_Lilian_MARZET.pdf', '_blank')
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
                            src={'/images/lilian-marzet.jpg'}
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
