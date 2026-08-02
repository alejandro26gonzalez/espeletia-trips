import { useNavigate } from "react-router-dom";
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

import { heroData } from "./topHero.data";

const TopHero = () => {

    const navigate = useNavigate();

    return (

        <HeroSection background={heroData.background}> 

            <Overlay />

            <HeroContainer>

                <HeroContent>

                    <Eyebrow>
                        {heroData.eyebrow}
                    </Eyebrow>

                    <Title>

                        {heroData.title.map((line) => (
                            <span key={line}>{line}</span>
                        ))}

                    </Title>

                    <Subtitle>
                        {heroData.subtitle}
                    </Subtitle>

                    <CTAButton onClick={() => navigate("/tours")}>

                        <FiArrowRight />

                        {heroData.button}

                    </CTAButton>

                </HeroContent>

            </HeroContainer>

            <BottomFeatures>

                {heroData.features.map((feature) => (

                    <Feature key={feature.title}>

                        <FeatureIcon>

                            {feature.icon === "map" && <FiMapPin />}

                            {feature.icon === "leaf" && <FiLeaf />}

                            {feature.icon === "users" && <FiUsers />}

                        </FeatureIcon>

                        <FeatureText>

                            <FeatureTitle>

                                {feature.title}

                            </FeatureTitle>

                            <FeatureDescription>

                                {feature.description}

                            </FeatureDescription>

                        </FeatureText>

                    </Feature>

                ))}

            </BottomFeatures>

        </HeroSection>

    );

};

export default TopHero;