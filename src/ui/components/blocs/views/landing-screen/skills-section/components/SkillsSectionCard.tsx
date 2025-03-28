import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Icon from '@components/common/resources/Icon'
import theme from '@constants/Theme'
import SubTitle from '@components/common/text/SubTitle'
import Grid from '@components/common/layout/Grid'
import Card from '@components/common/Card'
import {
    type SkillsSectionCardProps
} from '@interfaces/components/blocs/views/landing-screen/skills-section/components/SkillsSectionCardProps'

const SkillsSectionCard: FC<SkillsSectionCardProps> = ({
    children,
    title,
    icon
}): ReactNode => {
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
                {children}
            </Grid>
        </Card>
    )
}

export default SkillsSectionCard
