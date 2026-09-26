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

export const heroContactInfoConfig = [
    {
        id: 1,
        icon: FiPhone,
        labelKey: "hero.cards.one",
        value: "+57 320 123 4567"
    },
    {
        id: 2,
        icon: FiMail,
        labelKey: "hero.cards.two",
        value: "info@espeletiatrips.com"
    },
    {
        id: 3,
        icon: FiMapPin,
        labelKey: "hero.cards.three",
        value: "Murillo, Tolima"
    }
];
export const heroPlainTextConfig = {
    badgeKey : "hero.plain.badge",
    titleKey: "hero.plain.title",
    descriptionKey: "hero.plain.description"
}

/* ===========================================
   FORMULARIO / INFORMACIÓN
=========================================== */

export const contactInfoConfig = [
    {
        id: 1,
        icon: FiPhone,
        labelKey: "section.cards.one",
        value: "+57 320 123 4567"
    },
    {
        id: 2,
        icon: FiMail,
        labelKey: "section.cards.two",
        value: "info@espeletiatrips.com"
    },
    {
        id: 3,
        icon: FiMapPin,
        labelKey: "section.cards.three",
        value: "Murillo, Tolima, Colombia"
    },
    {
        id: 4,
        icon: FiClock,
        labelKey: "section.cards.four.label",
        value: "section.cards.four.value"
    }
];
export const contactFormPlainConfig ={
    titleKey: "section.plain.title",
    subtitleKey: "section.plain.subtitle",
    placeholdersKey: {
        nameKey: "section.plain.placeholders.name",
        emailKey: "section.plain.placeholders.email",
        subjectKey: "section.plain.placeholders.subject",
        messageKey: "section.plain.placeholders.body",
        phoneKey: "section.plain.placeholders.phone"
    },
    checkboxKey: "section.plain.placeholders.checkbox",
    buttonKey: "section.plain.submit",
    asideTitleKey: "section.cards.title",
    successModal: {
        title: "section.plain.successModal.title",
        description: "section.plain.successModal.description"
    }
}

/* ===========================================
   REDES SOCIALES
=========================================== */

export const socialMediaConfig = [
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

export const featuresConfig = [
    {
        id: 1,
        icon: BsLeafFill,
        titleKey: "features.cards.one.title",
        descriptionKey: "features.cards.one.description"
    },
    {
        id: 2,
        icon: FiShield,
        titleKey: "features.cards.two.title",
        descriptionKey: "features.cards.two.description"
    },
    {
        id: 3,
        icon: FiUsers,
        titleKey: "features.cards.three.title",
        descriptionKey: "features.cards.three.description"
    },
    {
        id: 4,
        icon: FiMap,
        titleKey: "features.cards.four.title",
        descriptionKey: "features.cards.four.description"
    },
    {
        id: 5,
        icon: FiAward,
        titleKey: "features.cards.five.title",
        descriptionKey: "features.cards.five.description"
    },
    {
        id: 6,
        icon: FiHeart,
        titleKey: "features.cards.six.title",
        descriptionKey: "features.cards.six.description"
    }
];
export const featuresPlainConfig = {
    titleKey: "features.plain.title",
    subtitleKey: "features.plain.subtitle"
}

/* ===========================================
   MAPA
=========================================== */

export const contactMapConfig = {
    title: "Espeletia Trips",
    address:
        "Murillo, Tolima, Colombia",
    embed:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.3884923281066!2d-75.17492252501957!3d4.874416395101332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInMjcuOSJOIDc1wrAxMCcyMC41Ilc!5e0!3m2!1ses!2sco!4v1771737431146!5m2!1ses!2sco",
    url:
        "https://www.google.com/maps?ll=4.874416,-75.174923&z=17&t=m&hl=es&gl=CO&mapclient=embed&q=4%C2%B052%2727.9%22N+75%C2%B010%2720.5%22W+4.874417,+-75.172361@4.874416699999999,-75.1723611",
    titleKey: "map.title",
    subtitleKey: "map.subtitle",
    buttonKey: "map.button"
};
export const ContactConfig = {
    contactInfoConfig,
    heroContactInfoConfig,
    heroPlainTextConfig,
    socialMediaConfig,
    featuresConfig,
    featuresPlainConfig,
    contactMapConfig,
    contactFormPlainConfig
};