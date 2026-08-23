import ICONOS from "../../../assets/icons";
import IMAGES from "../../../assets/images";

export const infoCardsConfig = [
    {
        id: "colasistencia",
        topicon: ICONOS.certificateIcons.colasistencia,
        logo: IMAGES.componentes.certificateRefactored.colasistencia,
        description: "mainCertificate.info_cards.colasistencia_description",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg1,
        alt: "colasistencia logo"
    },
    {
        id: "cortolima",
        topicon: ICONOS.certificateIcons.cortolima,
        logo: IMAGES.componentes.certificateRefactored.cortolima,
        description: "mainCertificate.info_cards.cortolima_description",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg2,
        alt: "cortolima logo"
    },
    {
        id: "escnna",
        topicon: ICONOS.certificateIcons.escnna,
        logo: IMAGES.componentes.certificateRefactored.escnna,
        description: "mainCertificate.info_cards.escnna_description",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg1,
        alt: "escnna logo"
    }
];
export const featuresConfig = [
    {
        featured: true,
        icon: ICONOS.certificateIcons.belowFeaturesIcons.main,
        title: "mainCertificate.features.main.title",
        description:"mainCertificate.features.main.description",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.primero,
        title: "mainCertificate.features.first.title",
        description: "mainCertificate.features.first.subtitle",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.segundo,
        title: "mainCertificate.features.second.title",
        description: "mainCertificate.features.second.subtitle",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.tercero,
        title: "mainCertificate.features.third.title",
        description: "mainCertificate.features.third.subtitle",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.cuarto,
        title: "mainCertificate.features.fourth.title",
        description: "mainCertificate.features.fourth.subtitle",
    }
];
export const plainTextConfig = {
    title: "mainCertificate.mainer.title",
    subtitle: "mainCertificate.mainer.subtitle"
};

export const mainConfig = {infoCardsConfig, featuresConfig, plainTextConfig};