import React, { type FC, type ReactNode } from 'react'
import Text from '@components/common/text/Text'
import theme from '@constants/Theme'
import Column from '@components/common/layout/Column'
import {
    type CarouselItemProps
} from '@interfaces/components/blocs/views/landing-screen/testimonials-section/components/CarouselItemProps'
import Image from '@components/common/resources/Image'
import { useTranslation } from '@hooks/TranslatonContext'
import { useWindowSize } from '@hooks/useWindowSize'
import screenSizes from '@constants/AppConstants'

const CarouselItem: FC<CarouselItemProps> = ({
    currentItem
}): ReactNode => {
    const { width } = useWindowSize()
    const { translate } = useTranslation()
    return (
        <Column
            gap={32}
            maxWidth={width < screenSizes.screenS ? '100%' : '70%'}
        >
            <Image
                src={currentItem.image}
                alt={currentItem.name}
                width={100}
                height={100}
                borderRadius={'50%'}
            />
            <Text
                color={theme.textSecondary}
                italic
                textAlign={'center'}
                lineHeight={1.2}
            >
                {`"${currentItem.content}"`}
            </Text>
            <Column
                gap={8}
            >
                <Text>
                    {currentItem.name}
                </Text>
                <Text
                    color={theme.textSecondary}
                >
                    {`${currentItem.role} ${translate('homeScreen.testimonialsSection.at')} ${currentItem.company}`}
                </Text>
            </Column>
        </Column>
    )
}

export default CarouselItem
