import {
    Card,
    CardImageWrapper,
    CardImage,
    CardOverlay,
    CardBadge,
    CardContent,
    CardHeader,
    CardTitle,
    CardLocation,
    CardDescription,
    CardInfo,
    InfoItem,
    CardFooter,
    PriceContainer,
    PriceLabel,
    Price,
    ExploreButton,
    Rating
} from "./TourCard.styles";

import {
    FiArrowRight,
    FiClock,
    FiMapPin,
    FiUsers,
    FiTrendingUp,
    FiStar
} from "react-icons/fi";

import { useTranslation } from "react-i18next";
import { toursSectionPlainConfig } from "../../../../config/pages/allTours/section";

import { useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/tours/${tour.slug}`);
    };

    const {t} = useTranslation("tour");

    return (

        <Card onClick={handleNavigate}>

            <CardImageWrapper>

                <CardImage
                    src={tour.image}
                    alt={tour.title}
                />
                <CardOverlay />
                {t(tour.badgeKey) && (
                    <CardBadge>
                        {t(tour.badgeKey)}
                    </CardBadge>
                )}

            </CardImageWrapper>

            <CardContent>
                <CardHeader>
                    <CardLocation>
                        <FiMapPin />
                        {tour.location}
                    </CardLocation>

                    <Rating>
                        <FiStar />
                        {tour.rating}
                    </Rating>
                </CardHeader>

                <CardTitle>
                    {tour.title}
                </CardTitle>

                <CardDescription>
                    {t(tour.shortDescriptionKey)}
                </CardDescription>

                <CardInfo>
                    <InfoItem>
                        <FiClock />
                        {t(tour.durationKey)}
                    </InfoItem>

                    <InfoItem>
                        <FiTrendingUp />
                        {t(tour.difficultyKey)}
                    </InfoItem>

                    <InfoItem>
                        <FiUsers />
                        {t(tour.peopleKey)}
                    </InfoItem>
                </CardInfo>

                <CardFooter>
                    <PriceContainer>
                        <PriceLabel>
                            {t(toursSectionPlainConfig.priceLabelKey)}
                        </PriceLabel>

                        <Price>
                            ${tour.price.toLocaleString("es-CO")}
                        </Price>
                    </PriceContainer>

                    <ExploreButton>
                        {t(toursSectionPlainConfig.buttonKey)}
                        <FiArrowRight />
                    </ExploreButton>
                </CardFooter>
            </CardContent>
        </Card>
    );
};

export default TourCard;