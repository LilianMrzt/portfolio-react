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

import './home-screen-project-card.css'
import SubTitle from '@components/common/text/SubTitle'
import Row from '@components/common/layout/Row'
import InfoBubble
    from '@components/common/InfoBubble'
import { useTranslation } from '@hooks/TranslatonContext'
import { AppRoutes } from '@constants/DrawerRoutes'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@hooks/ThemeContext'

const HomeScreenProjectCard: FC<HomeScreenProjectCardProps> = ({
    project
}): ReactNode => {
    const { theme } = useTheme()
    const { translate } = useTranslation()
    const navigate = useNavigate()
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
                            <InfoBubble
                                key={index}
                                label={technology}
                                color={theme.surface}
                                backgroundColor={'rgba(255, 255, 255, 0.2)'}
                                blur
                                fontSize={13}
                            />
                        ))}
                        {remainingTechnologiesNumber > 0 && (
                            <InfoBubble
                                label={`+ ${remainingTechnologiesNumber}`}
                                color={theme.surface}
                                backgroundColor={'rgba(255, 255, 255, 0.2)'}
                                blur
                                fontSize={13}
                            />
                        )}
                    </Row>
                </Column>
            </div>
            <Column
                padding={'24px 24px 0 24px'}
                alignItems={'start'}
            >
                <Text
                    numberOfLines={2}
                    lineHeight={1.4}
                >
                    {project.overview}
                </Text>
            </Column>
            <Column
                padding={8}
                alignItems={'start'}
            >
                <Button
                    onClick={() => {
                        if (AppRoutes.projectDetails.routeFn) {
                            void navigate(AppRoutes.projectDetails.routeFn(project.slug))
                        }
                    }}
                    label={translate('homeScreen.projectsSection.buttonLabel')}
                    iconEnd={<ArrowRightIcon/>}
                    backgroundColor={theme.surface}
                    color={theme.primary}
                    padding={'8px 16px'}
                />
            </Column>
        </Card>
    )
}

export default HomeScreenProjectCard
