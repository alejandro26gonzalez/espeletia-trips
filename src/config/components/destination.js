import IMAGES from "../../assets/images";
import ICONOS from "../../assets/icons";

export const cardsInfoConfig = [
    {
        id:1,
        title:"Valle de las Tumbas",
        description:"description1",
        image:IMAGES.componentes.destinationCards.home1,
        icon: ICONOS.destination.montana,
        link:"/tours/valle-de-las-tumbas"
    },
    {
        id:2,
        title:"Termal de la Campanita",
        description:"description2",
        image:IMAGES.componentes.destinationCards.home2,
        icon: ICONOS.destination.calor,
        link:"/tours/termal-de-la-campanita"
    },
    {
        id:3,
        title: 'Termal de Canaan',
        description: 'description3',
        image: IMAGES.componentes.destinationCards.home3,
        icon: ICONOS.destination.gota,
        link: '/tours/termal-de-canaan'
    },
    {
        id:4,
        title: 'Mirador de los Nevados',
        description: 'description4',
        image: IMAGES.componentes.destinationCards.home4,
        icon: ICONOS.destination.binoculares,
        link: '/tours/mirador-de-los-nevados'
    },
    {
        id:5,
        title: 'Camino del Oso',
        description: 'description5',
        image: IMAGES.componentes.destinationCards.home5,
        icon: ICONOS.destination.walk,
        link: '/tours/camino-del-oso-mosul'
    },
    {
        id:6,
        title: 'Expedición al Nevado de Santa Isabel',
        description: 'description6',
        image: IMAGES.componentes.destinationCards.home6,
        icon: ICONOS.destination.nevado,
        link: '/tours/expedicion-nevado-santa-isabel'
    }
];
export const titlesConfig = {
    part1: "title-1",
    part2: "title-2",
    subtitle: "subtitle",
    paragraph: "paragraph",
    buttonKey: "button"
};

export const destinationConfig = {
    cardsInfoConfig,
    titlesConfig
};


