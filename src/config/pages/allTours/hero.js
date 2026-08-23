import IMAGES from "../../../assets/images"
import { BsLeafFill } from "react-icons/bs";
import {
    FiMap,
    FiShield,
    FiUsers
} from "react-icons/fi";

export const heroDataConfig = {
    eyebrowKey: "hero.eyebrow",
    titleKey: "hero.title",
    highlight: "Los Nevados",
    subtitleKey: "hero.subtitle",
    descriptionKey: "hero.description",
    primaryButtonKey: "hero.primButton",
    secondaryButtonKey: "hero.secndButton",
    image: IMAGES.tour.main.hero
}
export const featuresConfig = [
        {
            id: 1,
            icon: FiMap,
            titleKey: "hero.features.one.title",
            descriptionKey: "hero.features.one.description"
        },
    
        {
            id: 2,
            icon: FiShield,
            titleKey: "hero.features.two.title",
            descriptionKey: "hero.features.two.description"
        },
    
        {
            id: 3,
            icon: FiUsers,
            titleKey: "hero.features.three.title",
            descriptionKey: "hero.features.three.description"
        },
    
        {
            id: 4,
            icon: BsLeafFill,
            titleKey: "hero.features.four.title",
            descriptionKey: "hero.features.four.description"
        }
]