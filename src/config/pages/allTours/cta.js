import IMAGES from "../../../assets/images";
import {
    FiCalendar,
    FiShield,
    FiHeadphones,
    FiAward
} from "react-icons/fi";

export const ctaDataConfig = {
    background: IMAGES.tour.main.cta,
    badgeKey: "cta.badge",
    titleKey: "cta.title",
    highlightKey: "cta.highlight",
    descriptionKey: "cta.description",
    primaryButtonKey: "cta.primButton",
    secondaryButtonKey: "cta.secndButton"
};
export const featuresConfig = [
    {
        id: 1,
        icon: FiCalendar,
        titleKey: "cta.features.one.title",
        descriptionKey: "cta.features.one.description"
    },

    {
        id: 2,
        icon: FiShield,
        titleKey: "cta.features.two.title",
        descriptionKey: "cta.features.two.description"
    },

    {
        id: 3,
        icon: FiHeadphones,
        titleKey: "cta.features.three.title",
        descriptionKey: "cta.features.three.description"
    },

    {
        id: 4,
        icon: FiAward,
        titleKey: "cta.features.four.title",
        descriptionKey: "cta.features.four.description"
    }
]