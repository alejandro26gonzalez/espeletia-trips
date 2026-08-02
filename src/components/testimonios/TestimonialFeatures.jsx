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

const features = [

    {

        id:1,

        title:"Historias reales",

        description:"Personas reales, experiencias inolvidables.",

        icon:FiMessageCircle

    },

    {

        id:2,

        title:"Confianza",

        description:"Opiniones verificadas de viajeros como tú.",

        icon:FiShield

    },

    {

        id:3,

        title:"Inspiración",

        description:"Descubre lo que te espera en cada aventura.",

        icon:FiFeather

    },

    {

        id:4,

        title:"Momentos únicos",

        description:"Recuerdos que se quedan para siempre.",

        icon:FiCamera

    }

];

const TestimonialFeatures = ()=>{

    return(

        <FeaturesGrid>

            {

                features.map((feature)=>{

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

                                    {feature.title}

                                </FeatureTitle>

                                <FeatureDescription>

                                    {feature.description}

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