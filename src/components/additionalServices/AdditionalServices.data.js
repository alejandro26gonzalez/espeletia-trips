import {
    FiTruck,
    FiMapPin,
    FiCheckCircle,
    FiActivity,
    FiMoon,
    FiHome
} from "react-icons/fi";
import IMAGES from "../../assets/images"

export const additionalServices = [
    {
        id: 1,
        title: "Ecobicicletas",
        subtitle:
            "Explora a tu ritmo y vive el destino sobre dos ruedas.",

        image: IMAGES.componentes.additionalServ.card1,

        badge: FiActivity,

        button: "Aventura sobre ruedas",

        features: [
            {
                icon: FiCheckCircle,
                text: "Bicicletas proporcionadas por la agencia"
            },
            {
                icon: FiMapPin,
                text: "El costo depende del destino y kilometraje"
            },
            {
                icon: FiTruck,
                text: "Consulta disponibilidad antes de reservar"
            }
        ]
    },

    {
        id: 2,

        title: "Campings",

        subtitle:
            "Descansa bajo las estrellas en zonas exclusivas de Murillo.",

        image: IMAGES.componentes.additionalServ.card2,

        badge: FiMoon,

        button: "Conexión natural",

        features: [
            {
                icon: FiCheckCircle,
                text: "Zonas de camping seguras y naturales"
            },
            {
                icon: FiHome,
                text: "Implementos incluidos (tienda, aislante y sleeping)"
            },
            {
                icon: FiCheckCircle,
                text: "Una experiencia diferente para conectar con la montaña"
            }
        ]
    }
];