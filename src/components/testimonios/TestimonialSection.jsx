import TestimonialStats from "./TestimonialStats";
import TestimonialCard from './TestimonialCard'
import TestimonialFeatures from './TestimonialFeatures'
import useSliding from "../../hooks/useSlidingTestimonial";
import { useTranslation } from "react-i18next";
import { testimonioConfig } from "../../config/components/testimonios";
import {
    Section,
    Header,
    SmallTitle,
    Title,
    Subtitle,
    CarouselContainer,
    Indicators,
    Dot
} from "./testimoniosStyles/section.styles";

const TestimonialSection = () => {

    const { t } = useTranslation("testimonios");

    const {
        currentIndex,
        currentItem: testimonio,
        nextSlide,
        previousSlide,
        goToSlide
    } = useSliding(testimonioConfig.avatarsConfig)

    return (
        <Section>

            <Header>
                <SmallTitle>
                    {t(testimonioConfig.plainTextConfig.smallText)}
                </SmallTitle>

                <Title>
                    {t(testimonioConfig.plainTextConfig.title)}
                </Title>

                <Subtitle>
                    {t(testimonioConfig.plainTextConfig.subtitle)}
                </Subtitle>
            </Header>

            <CarouselContainer>
                <TestimonialStats side="left"/>
                <TestimonialCard
                    testimonial={testimonio}
                    nextSlide={nextSlide}
                    previousSlide={previousSlide}
                />
                <TestimonialStats side="right"/>
            </CarouselContainer>

            <Indicators>
                {
                    testimonioConfig.avatarsConfig.map((item,index)=>(
                        <Dot
                            key={item.id}
                            active={index===currentIndex}
                            onClick={()=>goToSlide(index)}
                        />
                    ))
                }
            </Indicators>
            <TestimonialFeatures/>
        </Section>
    )
}

export default TestimonialSection;
