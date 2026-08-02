import TourPricingCard from "./tourPricingCard/TourPricingCard";
import TourContactCard from "./tourContactCard/TourContactCard";
import TourRecommendations from "./tourRecommendations/TourRecommendations";
import useRelatedTours from "../../../hooks/useRelatedTour";

import {
    SidebarContainer,
    SidebarStack
} from "./TourSidebar.styles";

const TourSidebar = ({ tour }) => {

    const relatedTours = useRelatedTours(tour.slug);

    return (

        <SidebarContainer>

            <SidebarStack>

                <TourPricingCard
                    prices={tour.prices}
                    name={tour.name}
                />

                <TourContactCard />

                <TourRecommendations
                    tours={relatedTours}
                />

            </SidebarStack>

        </SidebarContainer>

    );
};

export default TourSidebar;