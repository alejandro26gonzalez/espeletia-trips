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

import { useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/tours/${tour.slug}`);
    };

    return (

        <Card onClick={handleNavigate}>

            <CardImageWrapper>

                <CardImage
                    src={tour.image}
                    alt={tour.title}
                />
                <CardOverlay />
                {tour.badge && (
                    <CardBadge>
                        {tour.badge}
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
                    {tour.shortDescription}
                </CardDescription>

                <CardInfo>
                    <InfoItem>
                        <FiClock />
                        {tour.duration}
                    </InfoItem>

                    <InfoItem>
                        <FiTrendingUp />
                        {tour.difficulty}
                    </InfoItem>

                    <InfoItem>
                        <FiUsers />
                        {tour.people}
                    </InfoItem>
                </CardInfo>

                <CardFooter>
                    <PriceContainer>
                        <PriceLabel>
                            Desde
                        </PriceLabel>

                        <Price>
                            ${tour.price.toLocaleString("es-CO")}
                        </Price>
                    </PriceContainer>

                    <ExploreButton>
                        Ver experiencia
                        <FiArrowRight />
                    </ExploreButton>
                </CardFooter>
            </CardContent>
        </Card>
    );
};

export default TourCard;