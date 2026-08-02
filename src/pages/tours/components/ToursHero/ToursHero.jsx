import {
    HeroSection,
    HeroBackground,
    HeroOverlay,
    HeroContainer,
    HeroContent,
    HeroEyebrow,
    HeroTitle,
    HeroHighlight,
    HeroSubtitle,
    HeroDescription,
    HeroButtons,
    PrimaryButton,
    SecondaryButton,
    HeroScrollIndicator
} from "./ToursHero.styles";
import openWhatsappMessage from "../../../../helpers/openWhatsappMessage";

import { heroData } from "./ToursHero.data";

import {
    FiArrowRight,
    FiMessageCircle,
    FiChevronDown
} from "react-icons/fi";

const ToursHero = ({ onExplore }) => {

    return (
        <HeroSection>

            <HeroBackground image={heroData.image} />

            <HeroOverlay />

            <HeroContainer>

                <HeroContent>

                    <HeroEyebrow>
                        {heroData.eyebrow}
                    </HeroEyebrow>

                    <HeroTitle>
                        {heroData.title}
                        <HeroHighlight>
                            {" "}
                            {heroData.highlight}
                        </HeroHighlight>
                    </HeroTitle>

                    <HeroSubtitle>
                        {heroData.subtitle}
                    </HeroSubtitle>

                    <HeroDescription>
                        {heroData.description}
                    </HeroDescription>

                    <HeroButtons>

                        <PrimaryButton onClick={onExplore}>

                            Explorar experiencias

                            <FiArrowRight />

                        </PrimaryButton>

                        <SecondaryButton onClick={openWhatsappMessage}>

                            <FiMessageCircle />

                            Hablar con un asesor

                        </SecondaryButton>

                    </HeroButtons>

                </HeroContent>

            </HeroContainer>

            <HeroScrollIndicator>

                <FiChevronDown />

            </HeroScrollIndicator>

        </HeroSection>
    );
};

export default ToursHero;