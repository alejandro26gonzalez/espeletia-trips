import {
    FiUsers,
    FiShield,
    FiHeart,
    FiMapPin,
    FiTrendingUp
} from "react-icons/fi";
import { BsLeafFill } from "react-icons/bs";

import IMAGES from "../../../assets/images";

export const aboutHeroConfig = {
    badgeKey: "hero.badge",
    titleKey: "hero.title",
    highlightKey: "hero.highlight",
    descriptionKey: "hero.description",
    background: IMAGES.acercaDe.heroBks
};
export const aboutStoryConfig = {
    badgeKey: "story.badge",
    titleKey: "story.title",
    descriptionKey: "story.description",
    image: IMAGES.acercaDe.secondImg,
    stats: [
        {
            id: 1,
            icon: FiTrendingUp,
            value: "+5",
            labelKey: "story.stats.one"
        },
        {
            id: 2,
            icon: FiUsers,
            value: "+1.200",
            labelKey: "story.stats.two"
        },
        {
            id: 3,
            icon: FiMapPin,
            value: "6+",
            labelKey: "story.stats.three"
        },
        {
            id: 4,
            icon: BsLeafFill,
            value: "100%",
            labelKey: "story.stats.four"
        }
    ]
};
export const valuesConfig = {
    badgeKey: "values.badge",
    titleKey: "values.title",
    items: [
        {
            id: 1,
            icon: BsLeafFill,
            titleKey: "values.items.one.title",
            descriptionKey: "values.items.one.description"
        },
        {
            id: 2,
            icon: FiUsers,
            titleKey: "values.items.two.title",
            descriptionKey: "values.items.two.description"
        },
        {
            id: 3,
            icon: FiShield,
            titleKey: "values.items.three.title",
            descriptionKey: "values.items.three.description"
        },
        {
            id: 4,
            icon: FiHeart,
            titleKey: "values.items.four.title",
            descriptionKey: "values.items.four.description"
        }
    ]
};
export const ctaConfig = {
    titleKey: "cta.title",
    descriptionKey: "cta.description",
    button: {
        textKey: "cta.button",
        href: "/tours"
    },
    image: IMAGES.acercaDe.footerImg
};
export const aboutUsConfig = {
    aboutHeroConfig,
    aboutStoryConfig,
    valuesConfig,
    ctaConfig
} 