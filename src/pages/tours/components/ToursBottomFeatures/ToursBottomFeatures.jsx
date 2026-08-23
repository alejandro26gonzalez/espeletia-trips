import {
    Section,
    Container,
    FeaturesGrid,
    FeatureCard,
    IconWrapper,
    FeatureContent,
    FeatureTitle,
    FeatureDescription
} from "./ToursBottomFeatures.styles";
import { useTranslation } from "react-i18next";
import { featuresConfig } from "../../../../config/pages/allTours/cta";

const ToursBottomFeatures = () => {

    const {t} = useTranslation("tour");

    return (
        <Section>
            <Container>
                <FeaturesGrid>
                    {featuresConfig.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <FeatureCard key={feature.id}>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>

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
            </Container>
        </Section>
    );
};

export default ToursBottomFeatures;