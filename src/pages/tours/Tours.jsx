import { useRef } from "react";

import TourCard from './components/TourCard/TourCard';
import TourCTA from './components/TourCta/TourCTA';
import ToursBottomFeatures from './components/ToursBottomFeatures/ToursBottomFeatures';
import ToursFeatures from './components/ToursFeatures/ToursFeatures';
import ToursHero from './components/ToursHero/ToursHero';
import ToursSection from './components/ToursSection/ToursSection';
import NavbarHero from '../../components/NavbarHero/NavbarHero';

import {
    ToursContainer,
    ToursWrapper
} from './Tours.styles';

const Tours = () => {

    const toursSectionRef = useRef(null);

    const scrollToTours = () => {
        toursSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <ToursContainer>

            <ToursWrapper>

                <NavbarHero />

                <ToursHero 
                onExplore={scrollToTours}
                />

                <ToursFeatures />

                <section ref={toursSectionRef}>
                    <ToursSection />
                </section>

                <TourCTA />

                <ToursBottomFeatures />

            </ToursWrapper>
        </ToursContainer>
    )
}

export default Tours;