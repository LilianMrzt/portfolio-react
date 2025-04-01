import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Column from '@components/common/layout/Column'
import Icon from '@components/common/resources/Icon'
import { WorkIcon } from '@resources/Icons'
import {
    type ProfessionalExperienceCardProps
} from '@interfaces/components/blocs/views/profile-screen/professional-experiences-section/components/ProfessionalExperienceCardProps'
import Text from '@components/common/text/Text'
import theme from '@constants/Theme'
import InfoBubble from '@components/common/InfoBubble'
import VerticalSeparator
    from '@components/blocs/views/profile-screen/professional-experience-section/components/VerticalSeparator'
import { useWindowSize } from '@hooks/useWindowSize'
import screenSizes from '@constants/AppConstants'
import './professional-experience-card.css'

const ProfessionalExperienceCard: FC<ProfessionalExperienceCardProps> = ({
    professionalExperience
}): ReactNode => {
    const { width } = useWindowSize()
    return (
        <Row
            width={'100%'}
            alignItems={'start'}
            height={'100%'}
            className={'professional-experience-card'}
        >
            <Column
                gap={8}
                width={40}
            >
                <Icon
                    color={theme.onBlue}
                    backgroundColor={theme.blue}
                    padding={8}
                    size={16}
                >
                    <WorkIcon/>
                </Icon>
                <VerticalSeparator
                    className={'professional-experience-card-timeline-line'}
                />
            </Column>
            <Column
                alignItems={'start'}
                gap={12}
            >
                <Row
                    justifyContent={width < screenSizes.screenS ? 'start' : 'center'}
                    gap={8}
                    flexWrap={'wrap'}
                >
                    <Text
                        color={theme.textSecondary}
                    >
                        {`${professionalExperience.startDate} - ${professionalExperience.endDate}`}
                    </Text>
                    <VerticalSeparator
                        className={'professional-experience-card-separator'}
                    />
                    <Text
                        fontWeight={'bold'}
                    >
                        {professionalExperience.position}
                    </Text>
                    <VerticalSeparator
                        className={'professional-experience-card-separator'}
                    />
                    <Text
                        color={theme.primary}
                    >
                        {professionalExperience.jobType}
                    </Text>
                </Row>
                <Column
                    alignItems={'start'}
                    gap={4}
                >
                    <Text>
                        {professionalExperience.company}
                    </Text>
                    <Text
                        color={theme.textSecondary}
                        fontSize={14}
                    >
                        {professionalExperience.location}
                    </Text>
                </Column>
                <Text>
                    {professionalExperience.description}
                </Text>
                <Row
                    justifyContent={width < screenSizes.screenS ? 'start' : 'center'}
                    flexWrap={'wrap'}
                >
                    {professionalExperience.technologies.map((technology, index) => (
                        <InfoBubble
                            key={index}
                            label={technology}
                            fontSize={14}
                        />
                    ))}
                </Row>
            </Column>
        </Row>
    )
}

export default ProfessionalExperienceCard
