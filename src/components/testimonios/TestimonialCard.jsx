import {
    FiChevronLeft,
    FiChevronRight,
    FiMapPin,
    FiStar,
    FiMessageCircle
} from "react-icons/fi";

import {
    Card,
    Background,
    Overlay,
    FeaturedBadge,
    BadgeText,
    Rating,
    Stars,
    RatingValue,
    Avatar,
    Content,
    Name,
    Location,
    Quote,
    NavigationButton,
    LeftButton,
    RightButton,
    QuoteIconLeft,
    QuoteIconRight
} from "./testimoniosStyles/cards.styles";

const TestimonialCard = ({
    testimonial,
    nextSlide,
    previousSlide
}) => {

    return (

        <Card>

            <Background $image={testimonial.background} />

            <Overlay />

            {/* EXPERIENCIA DESTACADA */}

            <FeaturedBadge>

                <FiMessageCircle />

                <BadgeText>

                    Experiencia destacada

                </BadgeText>

            </FeaturedBadge>

            {/* RATING */}

            <Rating>

                <Stars>

                    {/* Math.max(0, ...) evita números negativos y Math.floor(...) quita los decimales */}
                    {[...Array(Math.max(0, Math.floor(testimonial?.rating || 0)))].map((_, index) => (
                        <FiStar
                            key={index}
                            fill="#FFD43B"
                            color="#FFD43B"
                        />
                    ))}

                </Stars>

                <RatingValue>

                    {testimonial.rating}.0

                </RatingValue>

            </Rating>

            <NavigationButton
                as={LeftButton}
                onClick={previousSlide}
            >
                <FiChevronLeft />
            </NavigationButton>

            <NavigationButton
                as={RightButton}
                onClick={nextSlide}
            >
                <FiChevronRight />
            </NavigationButton>

            {/* CONTENIDO */}

            <Content>

                <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                />

                <Name>

                    {testimonial.name}

                </Name>

                <Location>

                    <FiMapPin />

                    {testimonial.city}

                </Location>

                <Quote>

                    <QuoteIconLeft />

                    {testimonial.review}

                    <QuoteIconRight />

                </Quote>

            </Content>

        </Card>

    );

};

export default TestimonialCard;