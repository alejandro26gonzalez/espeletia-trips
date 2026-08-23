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
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../config/pages/allTours/allTours";

import { Link } from "react-router-dom";

const TourHero = ({ tour }) => {

    const {t} = useTranslation("tour");

    return (

        <HeroSection image={tour.heroImage}>

            <HeroOverlay />

            <HeroContainer>

                <Breadcrumb>
                    <Link to="/">
                        {t(toursDetailPlainConfig.homeKey)}
                    </Link>
                    /
                    <Link to="/tours">
                        Tours
                    </Link>
                    /
                    <span>
                        {tour.nameKey}
                    </span>
                </Breadcrumb>

                <Badge>
                    {t(tour.categoryKey)}
                </Badge>

                <Title>
                    {tour.nameKey}
                </Title>

                <Description>
                    {t(tour.shortDescriptionKey)}
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
                        ({tour.reviews} {t(toursDetailPlainConfig.opinionsKey)})
                    </RatingText>

                </Rating>

            </HeroContainer>

        </HeroSection>

    );

};

export default TourHero;