import {
    FiUsers,
    FiShield,
    FiHeart,
    FiMapPin,
    FiTrendingUp
} from "react-icons/fi";
import { BsLeafFill } from "react-icons/bs";

import IMAGES from "../../assets/images";

export const aboutHero = {
    badge: "ACERCA DE NOSOTROS",

    title: "Somos Espeletia Trips",

    highlight: "Agencia de Turismo",

    description:
        "Nacimos en Murillo, Tolima, con el propósito de compartir la belleza de nuestro territorio de forma responsable, auténtica y sostenible, conectando a las personas con experiencias inolvidables en el corazón del páramo.",

    background: IMAGES.acercaDe.heroBks
};

export const aboutStory = {
    badge: "NUESTRA HISTORIA",

    title: "Pasión por nuestra tierra",

    description:
        "Somos un equipo local que conoce, ama y protege cada rincón de Murillo. Trabajamos junto a comunidades locales para ofrecer tours que generan impacto positivo, promueven la conservación y fortalecen la economía regional.",

    image: IMAGES.acercaDe.secondImg,

    stats: [
        {
            id: 1,
            icon: FiTrendingUp,
            value: "+5",
            label: "Años de experiencia"
        },
        {
            id: 2,
            icon: FiUsers,
            value: "+1.200",
            label: "Viajeros felices"
        },
        {
            id: 3,
            icon: FiMapPin,
            value: "6+",
            label: "Destinos únicos"
        },
        {
            id: 4,
            icon: BsLeafFill,
            value: "100%",
            label: "Turismo responsable"
        }
    ]
};

export const values = {
    badge: "NUESTROS VALORES",

    title: "Lo que nos guía",

    items: [
        {
            id: 1,
            icon: BsLeafFill,

            title: "Sostenibilidad",

            description:
                "Cuidamos el páramo y promovemos prácticas responsables en cada tour."
        },
        {
            id: 2,
            icon: FiUsers,

            title: "Comunidad",

            description:
                "Trabajamos de la mano con habitantes locales y generamos beneficios compartidos."
        },
        {
            id: 3,
            icon: FiShield,

            title: "Seguridad",

            description:
                "Priorizamos tu bienestar con guías certificados y rutas seguras."
        },
        {
            id: 4,
            icon: FiHeart,

            title: "Autenticidad",

            description:
                "Ofrecemos experiencias reales, culturales y transformadoras."
        }
    ]
};

export const cta = {
    title: "Viaja con propósito",

    description:
        "Más que un destino, te invitamos a ser parte de la conservación de un ecosistema único y de las historias que lo hacen especial.",

    button: {
        text: "CONOCE NUESTROS TOURS",
        href: "/tours"
    },

    image: IMAGES.acercaDe.footerImg
};