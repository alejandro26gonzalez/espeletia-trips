import { FiCalendar, FiClock, FiCloudRain } from 'react-icons/fi';

export const summary = [
    {
        icon: FiCalendar,
        title: "Cancelación con más de 15 días",
        badge: "90% de devolución",
        color:"green",
        description:
        "Cancela con más de 15 días de anticipación y recibe el 90% del valor pagado."
    },
    {
        icon: FiCalendar,
        title:"Entre 8 y 14 días",
        badge:"70% de devolución",
        color:"yellow",
        description:
        "Recibirás el 70% del valor de la reserva."
    },
    {
        icon: FiClock,
        title:"Entre 2 y 7 días",
        badge:"50% de devolución",
        color:"orange",
        description:
        "Se devolverá el 50% del valor pagado."
    },
    {
        icon: FiCloudRain,
        title:"Clima extremo",
        badge:"Reprogramación",
        color:"blue",
        description:
        "Si las condiciones climáticas impiden realizar el tour podrás reprogramarlo."
    }
];