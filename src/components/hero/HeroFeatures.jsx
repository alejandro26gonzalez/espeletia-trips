import {
    FeaturesContainer,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    FeatureContent
} from "./heroStyles/heroFeatures.styles";

import { useTranslation } from "react-i18next";
import { heroConfig } from "../../config/components/hero";

const HeroFeatures = () => {

    const { t } = useTranslation("hero");

    return (
        <FeaturesContainer>
            {
                heroConfig.map((item) => {
                    const Icon = item.icon;
                    return (
                        <FeatureCard key={item.id}>
                            <FeatureIcon>
                                <Icon />
                            </FeatureIcon>

                            <FeatureContent>
                                <FeatureTitle>
                                    {t(item.title)}
                                </FeatureTitle>

                                <FeatureDescription>
                                    {t(item.description)}
                                </FeatureDescription>
                            </FeatureContent>
                        </FeatureCard>
                    )
                }
            )}
        </FeaturesContainer>
    );
};

export default HeroFeatures;