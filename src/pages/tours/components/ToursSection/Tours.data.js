import {
    FiMapPin,
    FiClock,
    FiUsers,
    FiTrendingUp
} from "react-icons/fi";

import IMAGES from "../../../../assets/images";

export const tours = [
    {
        id: "valle-tumbas",
        slug: "valle-de-las-tumbas",
        title: "Valle de las Tumbas",
        categories: [
            "paramos",
            "senderismo"
        ],
        badge: "Más popular",
        featured: true,
        image: IMAGES.tour.allToursHeros.valle,
        location: "Murillo, Tolima",
        shortDescription:
            "Explora formaciones rocosas únicas y descubre la historia del lugar.",
        duration: "6 - 7 horas",
        difficulty: "Moderada",
        people: "Desde 2 personas",
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
        badge: "Popular",
        image: IMAGES.tour.allToursHeros.campanita,
        location: "Murillo, Tolima",
        shortDescription:
            "Relájate en las cálidas aguas termales de la Campanita, un oasis natural rodeado de paisajes impresionantes.",
        duration: "4 - 5 horas",
        difficulty: "Intermedio",
        people: "Desde 2 personas",
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
        badge: "Relajación",
        image: IMAGES.tour.allToursHeros.canaan,
        location: "Murillo, Tolima",
        shortDescription:
            "Sumérgete en las aguas termales de Canaan, un refugio natural que ofrece una experiencia de relajación única.",
        duration: "4 - 5 horas",
        difficulty: "Fácil",
        people: "Desde 2 personas",
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
        badge: "Aventura",
        image: IMAGES.tour.allToursHeros.mirador,
        location: "Murillo, Tolima",
        shortDescription:
            "Admira vistas panorámicas impresionantes desde el Mirador de los Nevados, un punto estratégico para contemplar la majestuosidad de las montañas.",
        duration: "6 - 8 horas",
        difficulty: "Moderada",
        people: "Desde 2 personas",
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
        badge: "Paisajes",
        image: IMAGES.tour.allToursHeros.oso,
        location: "Murillo, Tolima",
        shortDescription:
            "Embárcate en el Camino del Oso, una ruta de senderismo que te llevará a través de paisajes impresionantes y la oportunidad de avistar la fauna local.",
        duration: "3 - 4 horas",
        difficulty: "Díficil",
        people: "Desde 2 personas",
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
        badge: "Aventura",
        image: IMAGES.tour.allToursHeros.nevado,
        location: "Murillo, Tolima",
        shortDescription:
            "Únete a la expedición al Nevado Santa Isabel, una aventura épica que te llevará a la cima de esta majestuosa montaña.",
        duration: "7 - 9 horas",
        difficulty: "Exigente",
        people: "Desde 2 personas",
        price: 290000,
        rating: 5
    }
];

