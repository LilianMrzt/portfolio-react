import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import Text from '@components/common/text/Text'
import './skills-card.css'
import Row from '@components/common/layout/Row'
import SubTitle from '@components/common/text/SubTitle'
import SkillMasteryBar from '@components/blocs/views/landing-screen/skills-section/components/SkillMasteryBar'
import {
    type SkillsCardProps
} from '@interfaces/components/blocs/views/landing-screen/skills-section/components/SkillsCardProps'
import SkillsMasteryIndicator
    from '@components/blocs/views/landing-screen/skills-section/components/SkillsMasteryIndicator'
import theme from '@constants/Theme'

const SkillsCard: FC<SkillsCardProps> = ({
    skill
}): ReactNode => {
    return (
        <Column
            className={'skills-card'}
            alignItems={'start'}
        >
            <Row
                justifyContent={'space-between'}
                width={'100%'}
            >
                <SubTitle
                    fontSize={20}
                >
                    {skill.label}
                </SubTitle>
                <SkillsMasteryIndicator
                    mastery={skill.mastery}
                />
            </Row>
            <Text
                fontSize={14}
                color={theme.onBackground}
            >
                {skill.description}
            </Text>
            <SkillMasteryBar
                mastery={skill.mastery}
            />
        </Column>
    )
}

export default SkillsCard
