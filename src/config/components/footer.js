import {
    FiArrowRight,
    FiPhone,
    FiMapPin,
    FiMail,
    FiInstagram
} from "react-icons/fi";
import { FaFaceAngry } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import IMAGES from "../../assets/images";

export const brandInfoConfig = {
    logo: IMAGES.logo,
    key: "description",
    responsibleSeal: IMAGES.turismoResponsableLogo
};
export const columnTitlesConfig = {
    first: "column1",
    second: "column2",
    third: "column3",
    copyright: "copyright"
};
export const exploreLinksConfig = [
    {
        id: "tours",
        titleKey: "tours",
        path: "/tours",
        icon: FiArrowRight
    },
    {
        id: "blog",
        titleKey: "blog",
        path: "/blog",
        icon: FiArrowRight
    },
    {
        id: "privacy",
        titleKey: "privacy",
        path: "/privacy",
        icon: FiArrowRight
    },
    {
        id: "policy",
        titleKey: "policy",
        path: "/policy",
        icon: FiArrowRight
    },
    {
        id: "about",
        titleKey: "about",
        path: "/about",
        icon: FiArrowRight
    }
];
export const contactInfoConfig = [
    {
        id: "phone1",
        icon: FiPhone,
        labelKey: "phone1",
        value: "+57 317 530 1103"
    },
    {
        id: "phone2",
        icon: FiPhone,
        labelKey: "phone2",
        value: "+57 317 056 6675"
    },
    {
        id: "location",
        icon: FiMapPin,
        labelKey: "location",
        value: [
            "Calle 4 # 8-5",
            "Galería Municipal",
            "Murillo, Tolima"
        ]
    },
    {
        id: "email",
        icon: FiMail,
        labelKey: "Email",
        value: "espeletia.trips@gmail.com"
    }
];
export const socialLinksConfig = [
    {
        titleKey: "Facebook",
        subtitle: "Espeletia Trips Murillo",
        href: "https://www.facebook.com/share/18CTDhNeVe/",
        icon: FaFacebookF
    },
    {
        titleKey: "Facebook",
        subtitle: "Breyler Tours",
        href: "https://www.facebook.com/share/1JGsDNWJzt/",
        icon: FaFacebookF
    },
    {
        titleKey: "Instagram",
        subtitle: "@ESPELETIA.TRIPS.MURILLO",
        href: "#",
        icon: FiInstagram
    }
];
export const bottomLinksConfig = [
    {
        id: "bottomLinks1",
        titleKey: "bottomLinks1",
        href: "#privacy"
    },
    {
        id: "bottomLinks2",
        titleKey: "bottomLinks2",
        href: "#terms"
    }
];
export const footerDataConfig = {
    brandInfoConfig: brandInfoConfig,
    exploreLinksConfig,
    contactInfoConfig,
    socialLinksConfig,
    bottomLinksConfig,
    columnTitlesConfig
};