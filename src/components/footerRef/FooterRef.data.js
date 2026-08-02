import {
    FiArrowRight,
    FiPhone,
    FiMapPin,
    FiMail,
    FiInstagram
} from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";

import IMAGES from "../../assets/images";

import { FaFaceAngry } from "react-icons/fa6";

export const brandInfo = {
    logo: IMAGES.logo,

    description:
        "Descubre los paisajes más impresionantes del Parque Nacional Natural Los Nevados mediante experiencias responsables, seguras y guiadas por expertos locales.",

    responsibleSeal: IMAGES.turismoResponsableLogo
};

export const exploreLinks = [
    {
        title: "Tours",
        href: "/tours",
        icon: FiArrowRight
    },
    {
        title: "Blog y FAQ",
        href: "/blog",
        icon: FiArrowRight
    },
    {
        title: "Aviso de privacidad",
        href: "/privacy",
        icon: FiArrowRight
    },
    {
        title: "Política de cancelación",
        href: "/policy",
        icon: FiArrowRight
    },
    {
        title: "Acerca de nosotros",
        href: "/about",
        icon: FiArrowRight
    }
];

export const contactInfo = [
    {
        icon: FiPhone,
        label: "Teléfono 1",
        value: "+57 317 530 1103"
    },
    {
        icon: FiPhone,
        label: "Teléfono 2",
        value: "+57 317 056 6675"
    },
    {
        icon: FiMapPin,
        label: "Ubicación",
        value: [
            "Calle 4 # 8-5",
            "Galería Municipal",
            "Murillo, Tolima"
        ]
    },
    {
        icon: FiMail,
        label: "Email",
        value: "espeletia.trips@gmail.com"
    }
];

export const socialLinks = [
    
    {
        title: "Facebook",
        subtitle: "Espeletia Trips Murillo",
        href: "https://www.facebook.com/share/18CTDhNeVe/",
        icon: FaFacebookF
    },
    {
        title: "Facebook",
        subtitle: "Breyler Tours",
        href: "https://www.facebook.com/share/1JGsDNWJzt/",
        icon: FaFacebookF
    },
    {
        title: "Instagram",
        subtitle: "@ESPELETIA.TRIPS.MURILLO",
        href: "#",
        icon: FiInstagram
    }
];

export const bottomLinks = [
    {
        title: "Privacidad",
        href: "#privacy"
    },
    {
        title: "Términos",
        href: "#terms"
    }
];

export const footerData = {
    brand: brandInfo,
    exploreLinks,
    contactInfo,
    socialLinks,
    bottomLinks
};
