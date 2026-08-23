import {
    HeroContainer,
    HeroOverlay,
    HeroContent,
    HeroBreadcrumb,
    HeroTitle,
    HeroDescription,
} from "./CancellationHero.styles";
import { useTranslation } from "react-i18next";
import { cancellationConfig } from "../../../../config/pages/cancellation/cancellationConfig";

const CancellationHero = () => {
    const {t} = useTranslation("cancellation");

    return (
        <HeroContainer>

            <HeroOverlay />

            <HeroContent>

                <HeroBreadcrumb>
                    {t(cancellationConfig.heroConfig.breadcrumbKey)}
                </HeroBreadcrumb>

                <HeroTitle>
                    {t(cancellationConfig.heroConfig.titleKey)}
                </HeroTitle>

                <HeroDescription>
                    {t(cancellationConfig.heroConfig.descriptionKey)}
                </HeroDescription>

            </HeroContent>

        </HeroContainer>
    );
};

export default CancellationHero;