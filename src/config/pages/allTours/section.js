import {
    FiMapPin,
    FiClock,
    FiUsers,
    FiTrendingUp
} from "react-icons/fi";
import IMAGES from "../../../assets/images";

export const filtersConfig = [
    {
        id: 1,
        labelKey: "filters.one",
        value: "all"
    },

    {
        id: 2,
        labelKey: "filters.two",
        value: "nevados"
    },

    {
        id: 3,
        labelKey: "filters.three",
        value: "paramos"
    },

    {
        id: 4,
        labelKey: "filters.four",
        value: "termales"
    },

    {
        id: 5,
        labelKey: "filters.five",
        value: "senderismo"
    },

    {
        id: 6,
        labelKey: "filters.six",
        value: "personalizados"
    }
];
export const plainSectionConfig = {
    badgeKey: "section.main.badge",
    titleKey: "section.main.title",
    highlightKey: "section.main.highlight",
    descriptionKey: "section.main.description"
};
export const toursConfig = [
     {
        id: "valle-tumbas",
        slug: "valle-de-las-tumbas",
        title: "Valle de las Tumbas",
        categories: [
            "paramos",
            "senderismo"
        ],
        badgeKey: "section.cards.tumbas.badge",
        featured: true,
        image: IMAGES.tour.allToursHeros.valle,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.tumbas.description",
        durationKey: "section.cards.tumbas.duration",
        difficultyKey: "section.cards.tumbas.difficulty",
        peopleKey: "section.cards.tumbas.people",
        price: 260000,
        rating: 4.9
    },

    {
        id: "termal-campanita",
        slug: "termal-de-la-campanita",
        title: "Termal de la Campanita",
        categories: [
            "termales"
        ],
        badgeKey: "section.cards.campanita.badge",
        image: IMAGES.tour.allToursHeros.campanita,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.campanita.description",
        durationKey: "section.cards.campanita.duration",
        difficultyKey: "section.cards.campanita.difficulty",
        peopleKey: "section.cards.campanita.people",
        price: 320000,
        rating: 5
    },

    {
        id: "canaan",
        slug: "termal-de-canaan",
        title: "Termales de Canaan",
        categories: [
            "termales"
        ],
        badgeKey: "section.cards.canaan.badge",
        image: IMAGES.tour.allToursHeros.canaan,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.canaan.description",
        durationKey: "section.cards.canaan.duration",
        difficultyKey: "section.cards.canaan.difficulty",
        peopleKey: "section.cards.canaan.people",
        price: 180000,
        rating: 4.8
    },

    {
        id: "mirador-nevados",
        slug: "mirador-de-los-nevados",
        title: "Mirador de Los Nevados",
        categories: [
            "nevados",
            "senderismo"
        ],
        badgeKey: "section.cards.mirador.badge",
        image: IMAGES.tour.allToursHeros.mirador,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.mirador.description",
        durationKey: "section.cards.mirador.duration",
        difficultyKey: "section.cards.mirador.difficulty",
        peopleKey: "section.cards.mirador.people",
        price: 240000,
        rating: 4.7
    },

    {
        id: "camino-oso",
        slug: "camino-del-oso-mosul",
        title: "Camino del Oso Mosul",
        categories: [
            "senderismo",
            "paramos"
        ],
        badgeKey: "section.cards.oso.badge",
        image: IMAGES.tour.allToursHeros.oso,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.oso.description",
        durationKey: "section.cards.oso.duration",
        difficultyKey: "section.cards.oso.difficulty",
        peopleKey: "section.cards.oso.people",
        price: 150000,
        rating: 4.9
    },

    {
        id: "nevado-santa-isabel",
        slug: "expedicion-nevado-santa-isabel",
        title: "Expedición al Nevado de Santa Isabel",
        categories: [
            "nevados",
            "senderismo"
        ],
        badgeKey: "section.cards.isabel.badge",
        image: IMAGES.tour.allToursHeros.nevado,
        location: "Murillo, Tolima",
        shortDescriptionKey: "section.cards.isabel.description",
        durationKey: "section.cards.isabel.duration",
        difficultyKey: "section.cards.isabel.difficulty",
        peopleKey: "section.cards.isabel.people",
        price: 290000,
        rating: 5
    }
];
export const toursSectionPlainConfig = {
    priceLabelKey: "section.cards.priceLabel",
    buttonKey: "section.cards.priceLabelButton"
};
export const sectionConfig = {
    filtersConfig,
    plainSectionConfig,
    toursConfig,
    toursSectionPlainConfig
}