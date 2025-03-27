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

const AboutMeSection = (): ReactNode => {
    const { width } = useWindowSize()
    return (
        <Section
            label={'A propos de moi'}
            id={'about-me-section'}
        >
            <Card
                padding={width < 960 ? 32 : 64}
            >
                <Row
                    gap={64}
                    width={'100%'}
                >
                    <Column
                        gap={32}
                    >
                        <Column>
                            <Text
                                fontSize={18}
                            >
                                Mon expertise se situe principalement dans les technologies modernes telles que React et React Native pour le front-end, où je m’épanouis dans la gestion d’interface utilisateur dynamiques et intuitives.
                                Côté back-end, je me distingue par ma maîtrise de PHP, permettant la mise en oeuvre de fonctionnalités robustes et la gestion efficace des données.
                            </Text>
                            <Text
                                fontSize={18}
                            >
                                Mon parcours récent témoingne de ma détermanitation à apprendre et à évoluer constamment dans le domaine du développement, avec un engagement résolu envers l’excellence technique et l’innovation.
                            </Text>
                        </Column>
                        <Button
                            onClick={() => {}}
                            icon={<DownloadIcon/>}
                            label={'Télécharger mon CV'}
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
