

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiFacebook,
    FiInstagram,
    FiMessageCircle,
    FiShield,
    FiHeart,
    FiUsers,
    FiMap,
    FiAward
} from "react-icons/fi";
import { BsLeafFill } from "react-icons/bs";

/* ===========================================
   HERO
=========================================== */

export const heroContactInfo = [
    {
        id: 1,
        icon: FiPhone,
        label: "Llámanos",
        value: "+57 320 123 4567"
    },
    {
        id: 2,
        icon: FiMail,
        label: "Correo",
        value: "info@espeletiatrips.com"
    },
    {
        id: 3,
        icon: FiMapPin,
        label: "Ubicación",
        value: "Murillo, Tolima"
    }
];

/* ===========================================
   FORMULARIO / INFORMACIÓN
=========================================== */

export const contactInfo = [
    {
        id: 1,
        icon: FiPhone,
        label: "Teléfono",
        value: "+57 320 123 4567"
    },
    {
        id: 2,
        icon: FiMail,
        label: "Correo electrónico",
        value: "info@espeletiatrips.com"
    },
    {
        id: 3,
        icon: FiMapPin,
        label: "Dirección",
        value: "Murillo, Tolima, Colombia"
    },
    {
        id: 4,
        icon: FiClock,
        label: "Horario",
        value: "Lunes a Domingo · 7:00 AM - 6:00 PM"
    }
];

/* ===========================================
   REDES SOCIALES
=========================================== */

export const socialMedia = [
    {
        id: 1,
        icon: FiFacebook,
        url: "https://www.facebook.com/share/18CTDhNeVe/"
    },
    {
        id: 2,
        icon: FiInstagram,
        url: "https://www.instagram.com/espeletia.trips.murillo?utm_source=qr&igsh=MTBmaGUyaDJya3o5dg=="
    },
    {
        id: 3,
        icon: FiMessageCircle,
        url: "https://wa.me/573175301103"
    }
];

/* ===========================================
   BENEFICIOS
=========================================== */

export const features = [
    {
        id: 1,
        icon: BsLeafFill,
        title: "Turismo sostenible",
        description:
            "Cada experiencia está diseñada para proteger el ecosistema del páramo y promover prácticas responsables con la naturaleza."
    },
    {
        id: 2,
        icon: FiShield,
        title: "Seguridad garantizada",
        description:
            "Contamos con protocolos, equipos y acompañamiento permanente durante cada recorrido."
    },
    {
        id: 3,
        icon: FiUsers,
        title: "Guías locales",
        description:
            "Nuestro equipo conoce el territorio, su biodiversidad y la cultura de la región para brindarte una experiencia auténtica."
    },
    {
        id: 4,
        icon: FiMap,
        title: "Rutas únicas",
        description:
            "Explora senderos, lagunas y paisajes exclusivos del Parque Nacional Natural Los Nevados."
    },
    {
        id: 5,
        icon: FiAward,
        title: "Calidad certificada",
        description:
            "Trabajamos bajo altos estándares de atención y compromiso con el turismo responsable."
    },
    {
        id: 6,
        icon: FiHeart,
        title: "Experiencias memorables",
        description:
            "Creamos recorridos personalizados para que vivas una aventura inolvidable junto a quienes más quieres."
    }
];

/* ===========================================
   MAPA
=========================================== */

export const contactMap = {
    title: "Espeletia Trips",

    address:
        "Murillo, Tolima, Colombia",

    embed:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.3884923281066!2d-75.17492252501957!3d4.874416395101332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInMjcuOSJOIDc1wrAxMCcyMC41Ilc!5e0!3m2!1ses!2sco!4v1771737431146!5m2!1ses!2sco",

    url:
        "https://www.google.com/maps?ll=4.874416,-75.174923&z=17&t=m&hl=es&gl=CO&mapclient=embed&q=4%C2%B052%2727.9%22N+75%C2%B010%2720.5%22W+4.874417,+-75.172361@4.874416699999999,-75.1723611"
};