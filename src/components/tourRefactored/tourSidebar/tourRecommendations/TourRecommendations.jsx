import { Link } from "react-router-dom";

import {
    Card,
    Header,
    Title,
    Subtitle,

    RecommendationList,
    RecommendationItem,

    TourImage,

    TourInfo,
    TourName,
    TourMeta,

    ViewAllButton
} from "./TourRecommendations.styles";

const TourRecommendations = ({ tours }) => {

    return (

        <Card>

            <Header>

                <Title>
                    También te puede interesar
                </Title>

                <Subtitle>
                    Descubre otras experiencias que podrían gustarte.
                </Subtitle>

            </Header>

            <RecommendationList>

                {
                    tours.map((tour) => (

                        <RecommendationItem
                            key={tour.id}
                            to={`/tours/${tour.slug}`}
                        >

                            <TourImage
                                src={tour.heroImage}
                                alt={tour.name}
                            />

                            <TourInfo>

                                <TourName>
                                    {tour.name}
                                </TourName>

                                <TourMeta>

                                    {tour.duration}

                                </TourMeta>

                            </TourInfo>

                        </RecommendationItem>

                    ))
                }

            </RecommendationList>

            <ViewAllButton
                as={Link}
                to="/tours"
            >
                Ver todos los tours
            </ViewAllButton>

        </Card>

    );

};

export default TourRecommendations;