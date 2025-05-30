import React, { type FC, type ReactNode, useState } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'

import SubTitle from '@components/common/text/SubTitle'
import Grid from '@components/common/layout/Grid'
import Card from '@components/common/Card'
import {
    type SkillsSectionCardProps
} from '@interfaces/components/blocs/views/profile-screen/skills-section/components/SkillsSectionCardProps'
import SkillsCard from '@components/blocs/views/profile-screen/skills-section/components/SkillsCard'
import Button from '@components/common/pressable/Button'
import { useWindowSize } from '@hooks/useWindowSize'
import AppConstants from '@constants/ScreenSizes'
import { AddIcon, SubstractIcon } from '@resources/Icons'
import { useTranslation } from '@hooks/TranslatonContext'
import { useTheme } from '@hooks/ThemeContext'

const SkillsSectionCard: FC<SkillsSectionCardProps> = ({
    skills,
    title,
    icon
}): ReactNode => {
    const { theme } = useTheme()
    const [showAll, setShowAll] = useState(false)
    const { width } = useWindowSize()
    const { translate } = useTranslation()

    const sortedSkills = [...skills].sort((a, b) => b.mastery - a.mastery)
    const shownItems = width < AppConstants.screenS ? 4 : 6
    const displayedSkills = showAll ? sortedSkills : sortedSkills.slice(0, shownItems)

    return (
        <Card>
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
            <Grid>
                {displayedSkills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))}
            </Grid>
            {skills.length > shownItems && (
                <Row
                    justifyContent={'center'}
                    width={'100%'}
                >
                    <Button
                        label={showAll ? translate('profileScreen.skillsSection.showLess') : translate('profileScreen.skillsSection.showMore')}
                        icon={showAll ? <SubstractIcon/> : <AddIcon/>}
                        onClick={() => { setShowAll(prev => !prev) }}
                        backgroundColor={theme.surface}
                        color={theme.primary}
                    />
                </Row>
            )}
        </Card>
    )
}

export default SkillsSectionCard
