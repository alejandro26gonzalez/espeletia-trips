import { FiCamera, FiFeather, FiMessageCircle, FiShield } from "react-icons/fi";
import IMAGES from "../../assets/images";

export const avatarsConfig = [
    {
        id:1,
        name:"Camila Torres",
        city:"Bogotá, Colombia",
        rating:5,
        avatar: IMAGES.componentes.testimonio.avatar1.profile,
        background:IMAGES.componentes.testimonio.avatar1.background,
        review:"one",
    },
    {
        id:2,
        name:"Andrés Gómez",
        city: "Neiva",
        rating: 5,
        avatar: IMAGES.componentes.testimonio.avatar2.profile,
        background: IMAGES.componentes.testimonio.avatar2.background,
        review:"two",
    },
    {
        id:3,
        name:"Mariana López",
        city: "Barranquilla",
        rating: 4.9,
        avatar: IMAGES.componentes.testimonio.avatar3.profile,
        background: IMAGES.componentes.testimonio.avatar3.background,
        review:"three",
    }
];
export const plainTextConfig = {
    smallText: "badge",
    title: "title",
    subtitle: "subtitle",
    bubble: "bubble"
};
export const featuresConfig = [
    {
        id: 1,
        titleKey: "features.first.title",
        descriptionKey: "features.first.description",
        icon: FiMessageCircle
    },
    {
        id: 2,
        titleKey: "features.second.title",
        descriptionKey: "features.second.description",
        icon: FiShield
    },
    {
        id: 3,
        titleKey: "features.third.title",
        descriptionKey: "features.third.description",
        icon: FiFeather
    },
    {
        id: 4,
        titleKey: "features.fourth.title",
        descriptionKey: "features.fourth.description",
        icon: FiCamera
    }
];
export const statsConfig = {
    leftKey: "stats.left",
    rightKey: "stats.right"
};
export const testimonioConfig = {
    avatarsConfig,
    plainTextConfig,
    featuresConfig,
    statsConfig
};