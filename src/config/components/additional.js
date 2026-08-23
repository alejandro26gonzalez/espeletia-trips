import {
    FiTruck,
    FiMapPin,
    FiCheckCircle,
    FiActivity,
    FiMoon,
    FiHome
} from "react-icons/fi";
import IMAGES from "../../assets/images";

export const additionalServicesConfig = [
    {
        id: 1,
        title: "bicycles.title",
        subtitle: "bicycles.subtitle",
        image: IMAGES.componentes.additionalServ.card1,
        badge: FiActivity,
        button: "bicycles.button",
        features: [
            {
                icon: FiCheckCircle,
                text: "bicycles.features.one"
            },
            {
                icon: FiMapPin,
                text: "bicycles.features.two"
            },
            {
                icon: FiTruck,
                text: "bicycles.features.three"
            }
        ]
    },
    {
        id: 2,
        title: "Campings",
        subtitle: "campings.subtitle",
        image: IMAGES.componentes.additionalServ.card2,
        badge: FiMoon,
        button: "campings.button",
        features: [
            {
                icon: FiCheckCircle,
                text: "campings.features.one"
            },
            {
                icon: FiHome,
                text: "campings.features.two"
            },
            {
                icon: FiCheckCircle,
                text: "campings.features.three"
            }
        ]
    }
];
export const plainTextConfig = {
    eyebrow: "main.eyebrow",
    title: "main.title",
    description: "main.description",
    footer_text: "main.footer.text",
    footer_button: "main.footer.button"
};
export const additionalConfigData = {
    additionalServicesConfig,
    plainTextConfig
};
