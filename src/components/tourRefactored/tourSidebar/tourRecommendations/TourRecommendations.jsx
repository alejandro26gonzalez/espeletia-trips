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
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../../config/pages/allTours/allTours";

const TourRecommendations = ({ tours }) => {

    const {t} = useTranslation("tour");

    return (

        <Card>

            <Header>

                <Title>
                    {t(toursDetailPlainConfig.recommendations.titleKey)}
                </Title>

                <Subtitle>
                    {t(toursDetailPlainConfig.recommendations.subtitleKey)}
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
                                    {t(tour.nameKey)}
                                </TourName>

                                <TourMeta>
                                    {t(tour.durationKey)}
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
                {t(toursDetailPlainConfig.recommendations.buttonKey)}
            </ViewAllButton>
        </Card>
    );
};

export default TourRecommendations;