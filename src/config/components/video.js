import {
    FiInstagram,
    FiArrowRight,
    FiMap,
    FiUsers,
    FiFeather 
} from "react-icons/fi";

import IMAGES from "../../assets/images";

export const videoConfig = {
    instagram: "https://www.instagram.com/p/DSNEujljI8e/",
    phone: {
        video: IMAGES.componentes.videoSection.video,
        background: IMAGES.componentes.videoSection.background
    },
    texts: {
        badgeKey: "badge",
        titleKey: "title",
        descriptionKey: "description",
        instagramButtonKey: "instagramButton"
    },
    features: [
        {
            id: "landscapes",
            textKey: "features.one",
            icon: FiMap
        },
        {
            id: "community",
            textKey: "features.two",
            icon: FiUsers
        },
        {
            id: "nature",
            textKey: "features.three",
            icon: FiFeather
        }
    ],
    cards: [
        {
            id: 1,
            image: IMAGES.componentes.videoSection.backCard1,
            rotate: "-18deg",
            left: "-70px",
            top: "90px"
        },
        {
            id: 2,
            image: IMAGES.componentes.videoSection.backCard2,
            rotate: "-6deg",
            left: "30px",
            top: "20px"
        },
        {
            id: 3,
            image: IMAGES.componentes.videoSection.backCard3,
            rotate: "10deg",
            right: "-20px",
            top: "35px"
        },
        {
            id: 4,
            image: IMAGES.componentes.videoSection.backCard4,
            rotate: "22deg",
            right: "-80px",
            top: "110px"
        }
    ]
};