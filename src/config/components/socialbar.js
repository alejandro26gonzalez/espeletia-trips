import {
    FiInstagram,
    FiFacebook,
    FiChevronUp,
} from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import openWhatsappMessage from '../../helpers/openWhatsappMessage';

export const socialLinks = [
    {
        id: 1,
        title: "Instagram",
        subtitleKey: "instagram",
        icon: FiInstagram,
        href: "https://www.instagram.com/espeletia.trips.murillo?utm_source=qr&igsh=MTBmaGUyaDJya3o5dg==",
        color: "#E4405F"
    },
    {
        id: 2,
        title: "Facebook",
        subtitleKey: "facebook",
        icon: FiFacebook,
        href: "https://www.facebook.com/share/18CTDhNeVe/",
        color: "#1877F2"
    },
    {
        id: 3,
        title: "Facebook",
        subtitleKey: "facebook2",
        icon: FiFacebook,
        href: "https://www.facebook.com/share/1JGsDNWJzt/",
        color: "#1877F2"
    },
    {
        id: 4,
        title: "WhatsApp",
        subtitleKey: "whatsapp",
        icon: RiWhatsappFill,
        onClick: () => openWhatsappMessage(),
        color: "#25D366"
    },
];

export const actionsText = {
    actionsTitle: "actionsTitle",
    actionsSubtitle: "actionsSubtitle"
};

export const floatingSocialbarConfig = {
    socialLinks,
    actionsText
};