import {
    FiCalendar,
    FiShield,
    FiHeadphones,
    FiAward
} from "react-icons/fi";

import { features } from "./ToursBottomFeatures.data";

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

const iconMap = {
    calendar: FiCalendar,
    shield: FiShield,
    support: FiHeadphones,
    award: FiAward
};

const ToursBottomFeatures = () => {
    return (
        <Section>
            <Container>
                <FeaturesGrid>
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];

                        return (
                            <FeatureCard key={feature.id}>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>

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
            </Container>
        </Section>
    );
};

export default ToursBottomFeatures;