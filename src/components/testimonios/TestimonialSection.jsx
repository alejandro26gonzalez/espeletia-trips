import { testimonials } from "./testimonialData";
import TestimonialStats from "./TestimonialStats";
import TestimonialCard from './TestimonialCard'
import TestimonialFeatures from './TestimonialFeatures'
import useSliding from "../../hooks/useSlidingTestimonial";
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

    const {
        currentIndex,
        currentItem: testimonial,
        nextSlide,
        previousSlide,
        goToSlide
    } = useSliding(testimonials)

    return (
        <Section>

            <Header>

                <SmallTitle>

                    EXPERIENCIAS REALES

                </SmallTitle>

                <Title>

                    Esto es lo que ya han vivido otros clientes

                </Title>

                <Subtitle>

                    Tú puedes ser el siguiente

                </Subtitle>

            </Header>

            <CarouselContainer>

                <TestimonialStats side="left"/>

                <TestimonialCard
                    testimonial={testimonial}
                    nextSlide={nextSlide}
                    previousSlide={previousSlide}
                />

                <TestimonialStats side="right"/>

            </CarouselContainer>

            <Indicators>

                {

                    testimonials.map((item,index)=>(

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
