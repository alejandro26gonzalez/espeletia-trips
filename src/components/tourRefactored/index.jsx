import TourHero from "./tourHero/TourHero";
import TourGallery from "./tourGallery/TourGallery";
import TourDescription from "./tourDescription/TourDescription";
import TourItinerary from "./tourItinerary/TourItinerary";
import TourSidebar from "./tourSidebar/TourSidebar";
import TourBenefits from "./tourBenefits/TourBenefits";
import NavbarHero from "../NavbarHero/NavbarHero";

import {
    PageContainer,
    ContentContainer,
    MainContent,
    SidebarContent
} from "../../pages/tourDetail/TourDetail.styles";

const TourRefactored = ({ tour, images}) => {

    if (!tour) {
        return <h2>Tour no encontrado.</h2>
    }

    return (
        <PageContainer>

            <NavbarHero />

            <TourHero 
            tour={tour}
            />

            {console.log(tour)}


            <ContentContainer>

                <MainContent>

                    <TourDescription 
                    description={tour.description}
                    />

                    <TourGallery 
                    gallery={images.gallery}
                    previewCount={5}
                    />

                    <TourItinerary 
                    itinerary={tour.itinerary}
                    equipment={tour.equipment}
                    tips={tour.tips}
                    />

                </MainContent>

                <SidebarContent>

                    <TourSidebar 
                    tour={tour}
                    />

                </SidebarContent>

            </ContentContainer>

            <TourBenefits />

        </PageContainer>
    );
};

export default TourRefactored;