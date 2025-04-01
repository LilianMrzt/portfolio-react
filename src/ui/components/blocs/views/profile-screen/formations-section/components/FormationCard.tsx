import React, { type FC, type ReactNode } from 'react'
import Row from '@components/common/layout/Row'
import Text from '@components/common/text/Text'
import {
    type FormationCardProps
} from '@interfaces/components/blocs/views/profile-screen/formations-section/components/FormationCardProps'
import Icon from '@components/common/resources/Icon'

import { FormationIcon } from '@resources/Icons'
import VerticalSeparator
    from '@components/blocs/views/profile-screen/professional-experience-section/components/VerticalSeparator'
import Column from '@components/common/layout/Column'
import screenSizes from '@constants/ScreenSizes'
import { useWindowSize } from '@hooks/useWindowSize'
import './formation-card.css'
import { useTheme } from '@hooks/ThemeContext'

const FormationCard: FC<FormationCardProps> = ({
    formation
}): ReactNode => {
    const { width } = useWindowSize()
    const { theme } = useTheme()
    return (
        <Row
            width={'100%'}
            alignItems={'start'}
            height={'100%'}
            className={'formation-card'}
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
                    round
                >
                    <FormationIcon/>
                </Icon>
                <VerticalSeparator
                    className={'formation-card-timeline-line'}
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
                        {`${formation.startDate} - ${formation.endDate}`}
                    </Text>
                    <VerticalSeparator
                        className={'formation-card-separator'}
                    />
                    <Text
                        fontWeight={'bold'}
                    >
                        {formation.school}
                    </Text>
                    <VerticalSeparator
                        className={'formation-card-separator'}
                    />
                    <Text
                        color={theme.primary}
                    >
                        {formation.schoolType}
                    </Text>
                </Row>
                <Column
                    alignItems={'start'}
                    gap={4}
                >
                    <Text>
                        {formation.cursus}
                    </Text>
                    <Text
                        color={theme.textSecondary}
                        fontSize={14}
                    >
                        {formation.location}
                    </Text>
                </Column>
            </Column>
        </Row>
    )
}

export default FormationCard
