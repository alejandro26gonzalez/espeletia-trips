import {
    FiMessageCircle,
    FiShield,
    FiFeather,
    FiCamera
} from "react-icons/fi";

import {
    FeaturesGrid,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    FeatureContent
} from "./testimoniosStyles/features.styles";
import { useTranslation } from "react-i18next";
import { featuresConfig } from "../../config/components/testimonios";

const TestimonialFeatures = ()=>{

    const { t } = useTranslation("testimonios");

    return(

        <FeaturesGrid>
            {
                featuresConfig.map((feature)=>{
                    const Icon = feature.icon;
                    return(
                        <FeatureCard
                            key={feature.id}
                        >
                            <FeatureIcon>
                                <Icon/>
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
                })
            }
        </FeaturesGrid>
    );
};

export default TestimonialFeatures;