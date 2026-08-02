import IMAGES from "../../assets/images"
import { tours } from "../../pages/tours/tours.data";

export const navbarData = {

    logo: IMAGES.componentes.navbar.logo,

    background: IMAGES.componentes.navbar.backgroundMobile,

    company: "Espeletia Trips",

    links: [

        {
            id: 'home',
            label: "Inicio",
            path: "/"
        },

        {
            id: 'tours',
            label: "Tours",
            path: "/tours",
            children: [
                {
                    label: "Todos los tours",
                    path:"/tours"
                },
                ...tours.map((tour) => ({
                    label: tour.name,
                    path: `/tours/${tour.slug}`
                }))
            ]
        },

        {
            id: 'blog',
            label: "Blog",
            path: "/blog"
        },
    {
        id: 'about',
        label: "Nosotros",
        path: "/about"
    },
    {
        id: 'contact',
        label: "Contacto",
        path: "/contact"
    }
    ]

};