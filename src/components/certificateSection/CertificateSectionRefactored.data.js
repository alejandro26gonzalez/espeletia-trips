import ICONOS from "../../assets/icons";
import IMAGES from "../../assets/images";

const infoCards = [
    {
        id: "colasistencia",
        topicon: ICONOS.certificateIcons.colasistencia,
        logo: IMAGES.componentes.certificateRefactored.colasistencia,
        description: "Contamos con seguro de viaje a través de Colasistencia para que disfrutes con total tranquilidad",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg1,
        alt: "colasistencia logo"
    },
    {
        id: "cortolima",
        topicon: ICONOS.certificateIcons.cortolima,
        logo: IMAGES.componentes.certificateRefactored.cortolima,
        description: "Contamos con certificado de Sello Verde a traves de Cortolima, comprometidos con el turismo sostenible y responsable.",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg2,
        alt: "cortolima logo"
    },
    {
        id: "escnna",
        topicon: ICONOS.certificateIcons.escnna,
        logo: IMAGES.componentes.certificateRefactored.escnna,
        description: "Contamos con certificación ESCNNA, garantizando la seguridad y bienestar de nuestros visitantes.",
        fondo: IMAGES.componentes.certificateRefactored.cardBkg1,
        alt: "escnna logo"
    }
];

const features = [
    {
        featured: true,
        icon: ICONOS.certificateIcons.belowFeaturesIcons.main,
        title: "Turismo responsable",
        description:
            "Cuidamos de ti, de nuestra gente y de los lugares que hacen únicas nuestras experiencias.",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.primero,
        title: "Experiencias",
        description: "seguras",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.segundo,
        title: "Compromiso con",
        description: "el medio ambiente",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.tercero,
        title: "Aliados que",
        description: "nos respaldan",
    },
    {
        icon: ICONOS.certificateIcons.belowFeaturesIcons.cuarto,
        title: "Viaja tranquilo,",
        description: "viaja con propósito",
    }
];
export default {infoCards, features};