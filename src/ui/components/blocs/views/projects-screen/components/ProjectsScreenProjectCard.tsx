import React, { type FC, type ReactNode } from 'react'
import Card from '@components/common/Card'
import Text from '@components/common/text/Text'
import Image from '@components/common/resources/Image'
import {
    type ProjectsScreenProjectCardProps
} from '@interfaces/components/blocs/views/projects-screen/components/ProjectsScreenProjectCardProps'
import './project-screen-project-card.css'
import Column from '@components/common/layout/Column'
import SubTitle from '@components/common/text/SubTitle'
import InfoBubble from '@components/common/InfoBubble'
import Row from '@components/common/layout/Row'
import Button from '@components/common/pressable/Button'
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from '@resources/Icons'

import { useTranslation } from '@hooks/TranslatonContext'
import ExternalLink from '@components/common/pressable/ExternalLink'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@constants/DrawerRoutes'
import { useTheme } from '@hooks/ThemeContext'

const ProjectsScreenProjectCard: FC<ProjectsScreenProjectCardProps> = ({
    project
}): ReactNode => {
    const { translate } = useTranslation()
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <Card
            className={'project-screen-project-card'}
            padding={0}
            gap={0}
        >
            <Image
                src={project.image}
                alt={project.name}
                width={'100%'}
                height={192}
                objectFit={'cover'}
                borderRadius={'8px 8px 0 0'}
            />
            <Column
                padding={'24px 24px 8px 24px'}
                alignItems={'start'}
            >
                <SubTitle
                    fontSize={24}
                >
                    {project.name}
                </SubTitle>
                <Text
                    lineHeight={1.5}
                    numberOfLines={3}
                >
                    {project.overview}
                </Text>
                <Row
                    gap={8}
                    flexWrap={('wrap')}
                    justifyContent={'start'}
                >
                    {project.technologies.map((technology, index) => (
                        <InfoBubble
                            key={index}
                            label={technology}
                        />
                    ))}
                </Row>
            </Column>
            <Column
                padding={8}
                alignItems={'start'}
            >
                <Row
                    width={'100%'}
                    justifyContent={'space-between'}
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
                    <Row
                        padding={'0 8px'}
                    >
                        {project.githubLink && (
                            <ExternalLink
                                href={project.githubLink}
                                color={theme.text}
                                hoverColor={theme.primary}
                            >
                                <GithubIcon/>
                            </ExternalLink>
                        )}
                        {project.appLink && (
                            <ExternalLink
                                href={project.appLink}
                                color={theme.text}
                                hoverColor={theme.primary}
                            >
                                <ExternalLinkIcon/>
                            </ExternalLink>
                        )}
                    </Row>
                </Row>
            </Column>
        </Card>
    )
}

export default ProjectsScreenProjectCard
