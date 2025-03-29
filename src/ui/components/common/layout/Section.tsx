import React, { type FC, type ReactNode } from 'react'
import Column from '@components/common/layout/Column'
import { type SectionProps } from '@interfaces/components/common/layout/SectionProps'
import SubTitle from '@components/common/text/SubTitle'
import { useWindowSize } from '@hooks/useWindowSize'
import screenSizes from '@constants/AppConstants'
import Row from '@components/common/layout/Row'
import Button from '@components/common/pressable/Button'
import { ArrowRightIcon } from '@resources/Icons'
import theme from '@constants/Theme'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '@hooks/TranslatonContext'

const Section: FC<SectionProps> = ({
    label,
    id,
    children,
    viewDetailsRoute,
    sectionScrollId
}): ReactNode => {
    const { width } = useWindowSize()
    const navigate = useNavigate()
    const { translate } = useTranslation()
    const isSmallScreen = width < screenSizes.screenS

    return (
        <Column
            alignItems={'start'}
            padding={width < screenSizes.screenM ? 16 : 32}
            id={id}
        >
            <Row
                justifyContent={'space-between'}
                width={'100%'}
                height={40}
            >
                <SubTitle>
                    {label}
                </SubTitle>
                {viewDetailsRoute && !isSmallScreen && (
                    <Button
                        label={translate('buttons.viewDetails')}
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
            {viewDetailsRoute && isSmallScreen && (
                <Row
                    width={'100%'}
                    justifyContent={'end'}
                >
                    <Button
                        label={'View more'}
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
