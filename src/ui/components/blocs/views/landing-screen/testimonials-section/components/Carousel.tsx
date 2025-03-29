import React, { type FC, type ReactNode, useEffect, useRef, useState } from 'react'
import {
    type CarouselProps
} from '@interfaces/components/blocs/views/landing-screen/testimonials-section/components/CarouselProps'
import Column from '@components/common/layout/Column'
import Row from '@components/common/layout/Row'
import Button from '@components/common/pressable/Button'
import './carousel.css'
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from '@resources/Icons'
import theme from '@constants/Theme'
import CarouselDot from '@components/blocs/views/landing-screen/testimonials-section/components/CarouselDot'
import CarouselItem from '@components/blocs/views/landing-screen/testimonials-section/components/CarouselItem'
import Icon from '@components/common/resources/Icon'

const Carousel: FC<CarouselProps> = ({
    testimonials
}): ReactNode => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const testimonialRef = useRef<HTMLDivElement | null>(null)

    const goToPrevious = (): void => {
        setIsAutoPlaying(false)
        setCurrentIndex((current) =>
            current === 0 ? testimonials.length - 1 : current - 1
        )
    }

    const goToNext = (): void => {
        setIsAutoPlaying(false)
        setCurrentIndex((current) =>
            (current + 1) % testimonials.length
        )
    }

    const goToSlide = (index: number): void => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
    }

    /**
     * Animation de fade-in lors du changement d'index
     */
    useEffect(() => {
        const el = testimonialRef.current
        if (el) {
            el.classList.remove('fade-in')
            void el.offsetHeight
            el.classList.add('fade-in')
        }
    }, [currentIndex])

    /**
     * Gestion de la lecture automatique des slides
     */
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % testimonials.length)
        }, 10000)

        return () => { clearInterval(interval) }
    }, [isAutoPlaying])

    return (
        <Column>
            <div
                className={'carousel'}
            >
                <div
                    key={testimonials[currentIndex].id}
                    className={'testimonial'}
                    ref={testimonialRef}
                >
                    <CarouselItem
                        currentItem={testimonials[currentIndex]}
                    />
                </div>
                <div
                    className={'testimonial-icon'}
                >
                    <Icon
                        color={theme.tertiary}
                        size={40}
                    >
                        <QuoteIcon/>
                    </Icon>
                </div>
            </div>
            <Row>
                <Button
                    icon={<ChevronLeftIcon/>}
                    onClick={goToPrevious}
                    padding={8}
                    backgroundColor={theme.surfaceSecondary}
                    color={theme.text}
                />
                <Row
                    gap={8}
                >
                    {testimonials.map((testimonial, index) => (
                        <CarouselDot
                            key={index}
                            isActive={index === currentIndex}
                            onClick={() => {
                                goToSlide(index)
                            }}
                        />
                    ))}
                </Row>
                <Button
                    icon={<ChevronRightIcon/>}
                    onClick={goToNext}
                    padding={8}
                    backgroundColor={theme.surfaceSecondary}
                    color={theme.text}
                />
            </Row>
        </Column>
    )
}

export default Carousel
