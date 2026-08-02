import {
    HeroSection,
    HeroOverlay,
    HeroContainer,
    Breadcrumb,
    Badge,
    Title,
    Description,
    Rating,
    Stars,
    RatingText,
} from "./TourHero.styles";

import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const TourHero = ({ tour }) => {

    return (

        <HeroSection image={tour.heroImage}>

            <HeroOverlay />

            <HeroContainer>

                <Breadcrumb>

                    <Link to="/">
                        Inicio
                    </Link>

                    /

                    <Link to="/tours">
                        Tours
                    </Link>

                    /

                    <span>
                        {tour.name}
                    </span>

                </Breadcrumb>

                <Badge>

                    {tour.category}

                </Badge>

                <Title>

                    {tour.name}

                </Title>

                <Description>

                    {tour.shortDescription}

                </Description>

                <Rating>

                    <Stars>

                        <FaStar />

                        <FaStar />

                        <FaStar />

                        <FaStar />

                        <FaStar />

                    </Stars>

                    <RatingText>

                        {tour.rating}

                        {" "}

                        ({tour.reviews} opiniones)

                    </RatingText>

                </Rating>

            </HeroContainer>

        </HeroSection>

    );

};

export default TourHero;