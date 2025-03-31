import React, { type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Button from '@components/common/pressable/Button'
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from '@resources/Icons'
import theme from '@constants/Theme'
import Card from '@components/common/Card'
import SubTitle from '@components/common/text/SubTitle'
import frProjects from '@fixtures/projects/fr.json'
import enProjects from '@fixtures/projects/en.json'
import { useTranslation } from '@hooks/TranslatonContext'
import { useNavigate, useParams } from 'react-router-dom'
import { type ProjectObject } from '@interfaces/objects/front-objects/ProjectObject'
import { AppRoutes } from '@constants/DrawerRoutes'
import Row from '@components/common/layout/Row'
import ExternalLink from '@components/common/pressable/ExternalLink'
import Image from '@components/common/resources/Image'
import InfoBubble from '@components/common/InfoBubble'
import Title from '@components/common/text/Title'
import Text from '@components/common/text/Text'
import { darkenColor } from '@utils/ColorUtils'

const ProjectDetailsSection = (): ReactNode => {
    const { language, translate } = useTranslation()
    const navigate = useNavigate()

    const projects = language === 'fr' ? frProjects : enProjects

    const { projectSlug } = useParams<{ projectSlug: string }>()
    const project = projects.find((p: ProjectObject) => p.slug === projectSlug)

    if (!project) {
        return <p>Project not found</p>
    }

    return (
        <Column
            padding={24}
            alignItems={'start'}
        >
            <Button
                label={translate('projectsDetailsScreen.backToProjects')}
                icon={<ArrowLeftIcon/>}
                onClick={() => {
                    void navigate(AppRoutes.projects.route ?? '')
                }}
                backgroundColor={theme.background}
                color={theme.primary}
            />
            <Card
                padding={0}
                gap={0}
            >
                <Image
                    src={project.image}
                    alt={project.name}
                    width={'100%'}
                    height={380}
                    objectFit={'cover'}
                />
                <Column
                    padding={24}
                    alignItems={'start'}
                    gap={24}
                >
                    <Column>
                        <Row
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            <Title>
                                {project.name}
                            </Title>
                            <Row>
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
                        <Row
                            width={'100%'}
                            justifyContent={'start'}
                            flexWrap={'wrap'}
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
                        alignItems={'start'}
                        gap={24}
                    >
                        <Column
                            alignItems={'start'}
                            gap={8}
                        >
                            <SubTitle
                                fontSize={20}
                            >
                                {translate('projectsDetailsScreen.projectOverview')}
                            </SubTitle>
                            <Text
                                color={darkenColor(theme.textSecondary)}
                                lineHeight={1.5}
                            >
                                {project.overview}
                            </Text>
                        </Column>
                        <Column
                            alignItems={'start'}
                            gap={8}
                        >
                            <SubTitle
                                fontSize={20}
                            >
                                {translate('projectsDetailsScreen.keyFeatures')}
                            </SubTitle>
                            { project.features.map((feature, index) => (
                                <Text
                                    key={index}
                                    color={darkenColor(theme.textSecondary)}
                                    lineHeight={1.5}
                                >
                                    {`• ${feature}`}
                                </Text>
                            ))}
                        </Column>
                        <Column
                            alignItems={'start'}
                            gap={8}
                        >
                            <SubTitle
                                fontSize={20}
                            >
                                {translate('projectsDetailsScreen.technicalDetails')}
                            </SubTitle>
                            <Text
                                color={darkenColor(theme.textSecondary)}
                                lineHeight={1.5}
                            >
                                {project.technicalDetails}
                            </Text>
                        </Column>
                    </Column>
                    <Row>
                        {project.appLink && (
                            <Button
                                label={'View live demo'}
                                icon={<ExternalLinkIcon/>}
                                onClick={() => {
                                    window.open(project.appLink, '_blank')
                                }}
                            />
                        )}
                        {project.githubLink && (
                            <Button
                                label={'View source'}
                                icon={<GithubIcon/>}
                                onClick={() => {
                                    window.open(project.githubLink, '_blank')
                                }}
                                backgroundColor={theme.surface}
                                borderColor={theme.outline}
                                color={theme.text}
                            />
                        )}
                    </Row>
                </Column>
            </Card>
        </Column>
    )
}

export default ProjectDetailsSection
