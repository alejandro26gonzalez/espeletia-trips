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

import { features } from "./ToursFeatures.data";

const ToursFeatures = () => {
    return (
        <FeaturesSection>

            <FeaturesContainer>

                <FeaturesGrid>

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <FeatureCard key={feature.id}>

                                <FeatureIcon>

                                    <Icon />

                                </FeatureIcon>

                                <FeatureContent>

                                    <FeatureTitle>
                                        {feature.title}
                                    </FeatureTitle>

                                    <FeatureDescription>
                                        {feature.description}
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