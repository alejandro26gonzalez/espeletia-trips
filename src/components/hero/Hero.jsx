import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";
import HeroStats from "./HeroStats";

import {
    HeroContainer,
    HeroOverlay,
    HeroWrapper
} from "./heroStyles/hero.styles";

const Hero = () => {

    return (
        <HeroContainer>

            <HeroBackground />

            <HeroOverlay />

            <HeroWrapper>

                <HeroContent />

                <HeroFeatures />

                <HeroStats />

            </HeroWrapper>

        </HeroContainer>
    );

};

export default Hero;