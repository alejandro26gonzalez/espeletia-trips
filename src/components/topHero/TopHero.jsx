import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    FiMapPin,
    FiUsers,
    FiArrowRight
} from "react-icons/fi";
import { TbLeafFilled as FiLeaf } from "react-icons/tb";

import {
    HeroSection,
    Overlay,
    HeroContainer,
    HeroContent,
    Eyebrow,
    Title,
    Subtitle,
    CTAButton,
    BottomFeatures,
    Feature,
    FeatureIcon,
    FeatureText,
    FeatureTitle,
    FeatureDescription
} from "./topHero.styles";

import { heroDataConfig } from "../../config/components/topHero";

const TopHero = () => {

    const navigate = useNavigate();

    const { t } = useTranslation("topHero");

    return (

        <HeroSection background={heroDataConfig.background}> 

            <Overlay />

            <HeroContainer>

                <HeroContent>

                    <Eyebrow>
                        {t(heroDataConfig.eyebrow)}
                    </Eyebrow>

                    <Title>
                        {heroDataConfig.title.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                    </Title>

                    <Subtitle>
                        {t(heroDataConfig.subtitle)}
                    </Subtitle>

                    <CTAButton onClick={() => navigate("/tours")}>
                        <FiArrowRight />
                        {t(heroDataConfig.button)}
                    </CTAButton>

                </HeroContent>
            </HeroContainer>

            <BottomFeatures>
                {heroDataConfig.features.map((feature) => (

                    <Feature key={feature.title}>

                        <FeatureIcon>
                            {feature.icon === "map" && <FiMapPin />}
                            {feature.icon === "leaf" && <FiLeaf />}
                            {feature.icon === "users" && <FiUsers />}
                        </FeatureIcon>

                        <FeatureText>
                            <FeatureTitle>
                                {t(feature.title)}
                            </FeatureTitle>

                            <FeatureDescription>
                                {t(feature.description)}
                            </FeatureDescription>
                        </FeatureText>
                    </Feature>
                ))}
            </BottomFeatures>
        </HeroSection>
    );
};

export default TopHero;