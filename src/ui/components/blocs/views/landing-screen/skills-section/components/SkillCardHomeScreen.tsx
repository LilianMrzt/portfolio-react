import React, { type FC, type ReactNode } from 'react'
import Card from '@components/common/Card'
import Icon from '@components/common/resources/Icon'
import theme from '@constants/Theme'
import SubTitle from '@components/common/text/SubTitle'
import Row from '@components/common/layout/Row'
import {
    type SkillCardHomeScreenProps
} from '@interfaces/components/blocs/views/landing-screen/skills-section/components/SkillCardHomeScreenProps'
import SkillIndicator from '@components/blocs/views/landing-screen/skills-section/components/SkillIndicator'

const SkillCardHomeScreen: FC<SkillCardHomeScreenProps> = ({
    icon,
    title,
    skills
}): ReactNode => {
    const sortedSkills = [...skills].sort((a, b) => b.mastery - a.mastery)

    return (
        <Card
            gap={24}
            justifyContent={'start'}
        >
            <Row
                gap={8}
                width={'100%'}
                justifyContent={'start'}
            >
                <Icon
                    color={theme.primary}
                >
                    {icon}
                </Icon>
                <SubTitle
                    fontSize={20}
                >
                    {title}
                </SubTitle>
            </Row>
            <Row
                flexWrap={'wrap'}
                justifyContent={'start'}
            >
                {sortedSkills.map((skill, index) => (
                    <SkillIndicator
                        key={index}
                        label={skill.label}
                    />
                ))}
            </Row>
        </Card>
    )
}

export default SkillCardHomeScreen
