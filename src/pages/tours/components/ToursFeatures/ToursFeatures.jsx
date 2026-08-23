import {
    FeaturesSection,
    FeaturesContainer,
    FeaturesGrid,
    FeatureCard,
    FeatureIcon,
    FeatureContent,
    FeatureTitle,
    FeatureDescription
} from "./ToursFeatures.styles";
import { featuresConfig } from "../../../../config/pages/allTours/hero";
import { useTranslation } from "react-i18next";

const ToursFeatures = () => {

    const {t} = useTranslation("tour");

    return (
        <FeaturesSection>

            <FeaturesContainer>

                <FeaturesGrid>

                    {featuresConfig.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <FeatureCard key={feature.id}>

                                <FeatureIcon>
                                    <Icon />
                                </FeatureIcon>

                                <FeatureContent>

                                    <FeatureTitle>
                                        {t(feature.titleKey)}
                                    </FeatureTitle>

                                    <FeatureDescription>
                                        {t(feature.descriptionKey)}
                                    </FeatureDescription>

                                </FeatureContent>

                            </FeatureCard>

                        );

                    })}

                </FeaturesGrid>

            </FeaturesContainer>

        </FeaturesSection>
    );
};

export default ToursFeatures;