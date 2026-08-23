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
import { useTranslation } from "react-i18next";

const HeroSection = ({ data }) => {

    const { t } = useTranslation("about");

    return (
        <HeroSectionContainer $background={data.background}>

            <HeroOverlay />

            <HeroContent>

                <HeroBadge>
                    {t(data.badgeKey)}
                </HeroBadge>

                <HeroTitle>
                    {t(data.titleKey)}{" "}
                    <HeroHighlight>
                        {t(data.highlightKey)}
                    </HeroHighlight>
                </HeroTitle>

                <HeroDivider />

                <HeroDescription>
                    {t(data.descriptionKey)}
                </HeroDescription>
            </HeroContent>
        </HeroSectionContainer>
    );
};

export default HeroSection;