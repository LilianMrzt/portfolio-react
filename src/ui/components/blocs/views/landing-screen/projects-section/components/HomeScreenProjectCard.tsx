import React, { type FC, type ReactNode } from 'react'
import Card from '@components/common/Card'
import Text from '@components/common/text/Text'
import Image from '@components/common/resources/Image'
import {
    type HomeScreenProjectCardProps
} from '@interfaces/components/blocs/views/landing-screen/projects-section/components/HomeScreenProjectCardProps'
import Column from '@components/common/layout/Column'
import Button from '@components/common/pressable/Button'
import { ArrowRightIcon } from '@resources/Icons'
import theme from '@constants/Theme'
import './home-screen-project-card.css'
import SubTitle from '@components/common/text/SubTitle'
import Row from '@components/common/layout/Row'
import TechnologyIndicator
    from '@components/blocs/views/landing-screen/projects-section/components/TechnologyIndicator'
import { useTranslation } from '@hooks/TranslatonContext'

const HomeScreenProjectCard: FC<HomeScreenProjectCardProps> = ({
    project
}): ReactNode => {
    const { translate } = useTranslation()
    const renderedTechnologies = project.technologies.slice(0, 3)
    const remainingTechnologiesNumber = project.technologies.length - renderedTechnologies.length

    return (
        <Card
            padding={0}
            gap={0}
            className={'home-screen-project-card'}
        >
            <Image
                src={project.image}
                alt={project.name}
                width={'100%'}
                height={192}
                objectFit={'cover'}
                borderRadius={'8px 8px 0 0'}
            />
            <div
                className={'home-screen-project-card-content gradient-overlay'}
            />
            <div
                className={'home-screen-project-card-content content'}
            >
                <Column
                    alignItems={'start'}
                    justifyContent={'end'}
                    padding={16}
                    gap={8}
                >
                    <SubTitle
                        color={theme.surface}
                        fontSize={20}
                    >
                        {project.name}
                    </SubTitle>
                    <Row
                        gap={8}
                        flexWrap={('wrap')}
                    >
                        {renderedTechnologies.map((technology, index) => (
                            <TechnologyIndicator
                                key={index}
                                label={technology}
                            />
                        ))}
                        {remainingTechnologiesNumber > 0 && (
                            <TechnologyIndicator
                                label={`+ ${remainingTechnologiesNumber}`}
                            />
                        )}
                    </Row>
                </Column>
            </div>
            <Column
                padding={24}
                alignItems={'start'}
            >
                <Text
                    numberOfLines={2}
                    lineHeight={1.4}
                >
                    {project.description}
                </Text>
                <Button
                    onClick={() => {}}
                    label={translate('homeScreen.projectsSection.buttonLabel')}
                    iconEnd={<ArrowRightIcon/>}
                    backgroundColor={theme.surface}
                    color={theme.primary}
                    padding={0}
                />
            </Column>
        </Card>
    )
}

export default HomeScreenProjectCard
