import IMAGES from "../../assets/images";
import { toursDetailConfig as tours } from "../pages/allTours/allTours";

export const navbarConfig = {
    logo: IMAGES.componentes.navbar.logo,
    background: IMAGES.componentes.navbar.backgroundMobile,
    company: "Espeletia Trips",
    links: [{
                id: 'home',
                labelKey: "home",
                path: "/"
            },
    
            {
                id: 'tours',
                labelKey: "tours",
                path: "/tours",
                children: [
                    {
                        id: "allTours",
                        labelKey: "allTours",
                        path:"/tours"
                    },
                    ...tours.map((tour) => ({
                        id: tour.id,
                        labelKey: tour.nameKey,
                        path: `/tours/${tour.slug}`
                    }))
                ]
            },
    
            {
                id: 'blog',
                labelKey: "blog",
                path: "/blog"
            },
        {
            id: 'about',
            labelKey: "about",
            path: "/about"
        },
        {
            id: 'contact',
            labelKey: "contact",
            path: "/contact"
        }
    ]
};