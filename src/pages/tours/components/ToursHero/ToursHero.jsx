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
import { useTranslation } from "react-i18next";
import { heroDataConfig } from "../../../../config/pages/allTours/hero";

import {
    FiArrowRight,
    FiMessageCircle,
    FiChevronDown
} from "react-icons/fi";

const ToursHero = ({ onExplore }) => {

    const {t} = useTranslation("tour");

    return (
        <HeroSection>

            <HeroBackground image={heroDataConfig.image} />

            <HeroOverlay />

            <HeroContainer>

                <HeroContent>

                    <HeroEyebrow>
                        {t(heroDataConfig.eyebrowKey)}
                    </HeroEyebrow>

                    <HeroTitle>
                        {t(heroDataConfig.titleKey)}
                        <HeroHighlight>
                            {" "}
                            {heroDataConfig.highlight}
                        </HeroHighlight>
                    </HeroTitle>

                    <HeroSubtitle>
                        {t(heroDataConfig.subtitleKey)}
                    </HeroSubtitle>

                    <HeroDescription>
                        {t(heroDataConfig.descriptionKey)}
                    </HeroDescription>

                    <HeroButtons>

                        <PrimaryButton onClick={onExplore}>

                            {t(heroDataConfig.eyebrowKey)}

                            <FiArrowRight />

                        </PrimaryButton>

                        <SecondaryButton onClick={openWhatsappMessage}>

                            <FiMessageCircle />

                            {t(heroDataConfig.secondaryButtonKey)}

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