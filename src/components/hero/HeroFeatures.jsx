import {
    FiShield,
    FiCamera,
    FiUsers,
    FiFeather
} from "react-icons/fi";

import {
    FeaturesContainer,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    FeatureContent
} from "./heroStyles/heroFeatures.styles";

const features = [

    {
        icon: <FiFeather />,
        title: "Turismo sostenible",
        description:
            "Cuidamos lo que amas explorar."
    },

    {
        icon: <FiUsers />,
        title: "Grupos pequeños",
        description:
            "Experiencias más cercanas y auténticas."
    },

    {
        icon: <FiShield />,
        title: "Seguridad garantizada",
        description:
            "Guías expertos y equipos de primera calidad."
    },

    {
        icon: <FiCamera />,
        title: "Recuerdos inolvidables",
        description:
            "Momentos únicos que te acompañarán siempre."
    }

];

const HeroFeatures = () => {

    return (

        <FeaturesContainer>

            {

                features.map((item) => (

                    <FeatureCard key={item.title}>

                        <FeatureIcon>

                            {item.icon}

                        </FeatureIcon>

                        <FeatureContent>

                            <FeatureTitle>

                                {item.title}

                            </FeatureTitle>

                            <FeatureDescription>

                                {item.description}

                            </FeatureDescription>

                        </FeatureContent>

                    </FeatureCard>

                ))

            }

        </FeaturesContainer>

    );

};

export default HeroFeatures;