import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import { type SectionProps } from '@interfaces/components/common/layout/SectionProps'
import SubTitle from '@components/common/text/SubTitle'
import { useWindowSize } from '@hooks/useWindowSize'
import Row from '@components/common/layout/Row'
import Button from '@components/common/pressable/Button'
import { ArrowRightIcon } from '@resources/Icons'

import { useNavigate } from 'react-router-dom'
import screenSizes from '@constants/ScreenSizes'
import { useTheme } from '@hooks/ThemeContext'

const Section: FC<SectionProps> = ({
    label,
    id,
    children,
    viewDetailsRoute,
    sectionScrollId,
    viewDetailsButtonLabel
}): ReactNode => {
    const { width } = useWindowSize()
    const { theme } = useTheme()
    const navigate = useNavigate()
    const isSmallScreen = width < screenSizes.screenS

    return (
        <Column
            alignItems={'start'}
            padding={width < screenSizes.screenM ? 16 : 32}
            id={id}
        >
            <Row
                justifyContent={isSmallScreen ? 'start' : 'space-between'}
                width={'100%'}
                minHeight={40}
            >
                <SubTitle>
                    {label}
                </SubTitle>
                {viewDetailsRoute && !isSmallScreen && (
                    <Button
                        label={viewDetailsButtonLabel}
                        iconEnd={<ArrowRightIcon/>}
                        onClick={() => {
                            void navigate(viewDetailsRoute ?? '', {
                                state: { scrollTo: sectionScrollId }
                            })
                        }}
                        backgroundColor={theme.background}
                        color={theme.primary}
                        padding={'8px 12px'}
                    />
                )}
            </Row>
            {children}
            {viewDetailsRoute && viewDetailsButtonLabel && isSmallScreen && (
                <Row
                    width={'100%'}
                    justifyContent={'end'}
                >
                    <Button
                        label={viewDetailsButtonLabel}
                        iconEnd={<ArrowRightIcon/>}
                        onClick={() => {
                            void navigate(viewDetailsRoute ?? '', {
                                state: { scrollTo: sectionScrollId }
                            })
                        }}
                        backgroundColor={theme.background}
                        color={theme.primary}
                        padding={'8px 12px'}
                    />
                </Row>
            )}
        </Column>
    )
}

export default Section
