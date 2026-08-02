import {
    HeroSectionContainer,
    HeroOverlay,
    HeroContent,
    HeroBadge,
    HeroTitle,
    HeroHighlight,
    HeroDescription,
    HeroDivider
} from "./HeroSection.styles";

const HeroSection = ({ data }) => {
    return (
        <HeroSectionContainer $background={data.background}>

            <HeroOverlay />

            <HeroContent>

                <HeroBadge>
                    {data.badge}
                </HeroBadge>

                <HeroTitle>
                    {data.title}{" "}
                    <HeroHighlight>
                        {data.highlight}
                    </HeroHighlight>
                </HeroTitle>

                <HeroDivider />

                <HeroDescription>
                    {data.description}
                </HeroDescription>

            </HeroContent>

        </HeroSectionContainer>
    );
};

export default HeroSection;