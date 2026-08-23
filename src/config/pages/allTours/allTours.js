import IMAGES from "../../../assets/images";
import {
    FiShield,
    FiCheckCircle,
    FiHeadphones,
    FiAward,
    FiClock
} from "react-icons/fi";
import { RiRoadMapFill } from "react-icons/ri";
import { TbTrekking } from "react-icons/tb";
import { MdCabin } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { 
    GiGrassMushroom, 
    GiWaterSplash,
    GiHillConquest
} from "react-icons/gi";
import {
    FaMountainSun, 
    FaTree,
    FaTruckMonster,
    FaMountain
} from "react-icons/fa6";
import { 
    FaCloudMoon, 
    FaHatCowboySide ,
    FaWater,
    FaLeaf,
    FaRegSnowflake
} from "react-icons/fa";

export const toursDetailPlainConfig = {
    
    homeKey: "tourDetail.plainText.home",
    opinionsKey: "tourDetail.plainText.comments",
    description: {
        title: "tourDetail.plainText.description"
    },
    gallery:{
        titleKey: "tourDetail.plainText.gallery.title",
        descriptionKey: "tourDetail.plainText.gallery.description",
        buttonKey: "tourDetail.plainText.gallery.button"
    },
    itinerary: {
        titleKey: "tourDetail.plainText.itinerary.title",
        titleRightKey: "tourDetail.plainText.itinerary.question"
    },
    contactCard: {
        titleKey: "tourDetail.plainText.contact.title",
        subtitleKey: "tourDetail.plainText.contact.subtitle",
        buttonKey: "tourDetail.plainText.contact.button",
        labels: {
            phoneKey: "tourDetail.plainText.contact.labels.phone",
            emailKey: "tourDetail.plainText.contact.labels.email",
            hoursKey: "tourDetail.plainText.contact.labels.schedule",
            daysKey: "tourDetail.plainText.contact.labels.days"
        }
    },
    recommendations: {
        titleKey: "tourDetail.plainText.recommendations.title",
        subtitleKey: "tourDetail.plainText.recommendations.subtitle",
        buttonKey: "tourDetail.plainText.recommendations.button"
    },
    pricesCard:{
        priceLabelKey: "tourDetail.plainText.prices.price",
        currencyKey: "tourDetail.plainText.prices.currency",
        nationalsKey: "tourDetail.plainText.prices.national",
        strangersKey: "tourDetail.plainText.prices.strangers",
        titleKey: "tourDetail.plainText.prices.title",
        subtitleKey: "tourDetail.plainText.prices.subtitle",
        buttonKey: "tourDetail.plainText.prices.button",
        benefits: [
            {
                icon: FiShield,
                id: 1,
                titleKey: "tourDetail.plainText.prices.benefits.one.title",
                subtitleKey: "tourDetail.plainText.prices.benefits.one.subtitle"
            },
            {
                icon: FiCheckCircle,
                id: 2,
                titleKey: "tourDetail.plainText.prices.benefits.two.title",
                subtitleKey: "tourDetail.plainText.prices.benefits.two.subtitle"
            },
            {
                icon: FiClock,
                id: 3,
                titleKey: "tourDetail.plainText.prices.benefits.three.title",
                subtitleKey: "tourDetail.plainText.prices.benefits.three.subtitle"
            }
        ],
        details: {
            titleKey: "tourDetail.plainText.prices.details.title",
            buttonKey: "tourDetail.plainText.prices.details.button",
            popTitleKey: "tourDetail.plainText.prices.details.popTitle",
            closePopKey: "tourDetail.plainText.prices.details.closePop",
            groupLabelkey: "tourDetail.plainText.prices.details.group",
            experLabelKey: "tourDetail.plainText.prices.details.experience",
            incluyeLabelKey: "tourDetail.plainText.prices.details.incluye"
        }
    },
    isabel: {
        expedition:{
            titleKey: "tourDetail.plainText.isabel.expedition.title",
            nightLabelKey: "tourDetail.plainText.isabel.expedition.night",
            acomodacion: [
                "tourDetail.plainText.isabel.expedition.accomodation.housing", 
                "tourDetail.plainText.isabel.expedition.accomodation.cabin"
            ],
            feedLabelKey: {
                titleKey: "tourDetail.plainText.isabel.expedition.feed.title",
                mealsKey: [
                    "tourDetail.plainText.isabel.expedition.feed.meals.1",
                    "tourDetail.plainText.isabel.expedition.feed.meals.2",
                    "tourDetail.plainText.isabel.expedition.feed.meals.3"
                ]
            }
        },
        experience: {
            titleKey: "tourDetail.plainText.isabel.experience.title",
            rows: [
                {
                    id:1,
                    labelKey: "tourDetail.plainText.isabel.experience.rows.1.label",
                    valueKey: "tourDetail.plainText.isabel.experience.rows.1.value",
                },
                {
                    id:2,
                    labelKey: "tourDetail.plainText.isabel.experience.rows.2.label",
                    valueKey: "18 km",
                },
                {
                    id:3,
                    labelKey: "tourDetail.plainText.isabel.experience.rows.3.label",
                    valueKey: "4.950 msnm",
                },
                {
                    id:4,
                    labelKey: "tourDetail.plainText.isabel.experience.rows.4.label",
                    valueKey: "tourDetail.plainText.isabel.experience.rows.4.value",
                }
            ]
        }
    }
};
export const benefitsConfig = [
    {
        id:1,
        icon:FiShield,
        titleKey:"tourDetail.benefits.one.title",
        subtitleKey:"tourDetail.benefits.one.subtitle"
    },
    {
        id:2,
        icon:FiCheckCircle,
        titleKey:"tourDetail.benefits.two.title",
        subtitleKey:"tourDetail.benefits.two.subtitle"
    },
    {
        id:3,
        icon:FiHeadphones,
        titleKey:"tourDetail.benefits.three.title",
        subtitleKey:"tourDetail.benefits.three.subtitle"
    },
    {
        id:4,
        icon:FiAward,
        titleKey:"tourDetail.benefits.four.title",
        subtitleKey:"tourDetail.benefits.four.subtitle"
    }
];
export const toursDetailConfig = [
    {
        id: 1,
        slug: "valle-de-las-tumbas",
        tag: "tumbas",
        nameKey: "Valle de las Tumbas",
        categoryKey: "tourDetail.tours.valle.category",
        altitude: "4.450 msnm",
        durationKey: "tourDetail.tours.valle.duration",
        heroImage: IMAGES.tour.subPages.valle,
        shortDescriptionKey: "tourDetail.tours.valle.summary",
        description: {
            introductionKey: "tourDetail.tours.valle.description.introduction",
            contentKey: "tourDetail.tours.valle.description.content",
            conclusionKey: "tourDetail.tours.valle.description.conclusion",
            highlights: [
                {
                    icon: RiRoadMapFill,
                    titleKey: "tourDetail.tours.valle.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.valle.description.highlights.1.description"
                },
                {
                    icon: FaMountainSun,
                    titleKey: "tourDetail.tours.valle.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.valle.description.highlights.2.description"
                },
                {
                    icon: FaCloudMoon,
                    titleKey: "tourDetail.tours.valle.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.valle.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                time: "4:40 AM",
                activityKey: "tourDetail.tours.valle.itinerary.1"
            },
            {
                time: "5:00 AM",
                activityKey: "tourDetail.tours.valle.itinerary.2"
            },
            {
                time: "6:00 AM",
                activityKey: "tourDetail.tours.valle.itinerary.3"
            },
            {
                time: "7:30 AM",
                activityKey: "tourDetail.tours.valle.itinerary.4"
            },
            {
                time: "8:00 AM",
                activityKey: "tourDetail.tours.valle.itinerary.5"
            },
            {
                time: "9:00 AM",
                activityKey: "tourDetail.tours.valle.itinerary.6"
            },
            {
                time: "2:00 PM",
                activityKey: "tourDetail.tours.valle.itinerary.7"
            }
      ],
        equipment: [
            {
                titleKey: "tourDetail.tours.valle.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.valle.equipment.1.items.1",
                    "tourDetail.tours.valle.equipment.1.items.2"
                ]
            },
            {
                titleKey: "tourDetail.tours.valle.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.valle.equipment.2.items.1"
                ]
            },
            {
                titleKey: "tourDetail.tours.valle.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.valle.equipment.3.items.1",
                    "tourDetail.tours.valle.equipment.3.items.2"
                ]
            },
            {
                titleKey: "tourDetail.tours.valle.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.valle.equipment.4.items.1",
                    "tourDetail.tours.valle.equipment.4.items.2",
                    "tourDetail.tours.valle.equipment.4.items.3",
                    "tourDetail.tours.valle.equipment.4.items.4",
                    "tourDetail.tours.valle.equipment.4.items.5"
                ]
            },
            {
                titleKey: "tourDetail.tours.valle.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.valle.equipment.5.items.1",
                    "tourDetail.tours.valle.equipment.5.items.2",
                    "tourDetail.tours.valle.equipment.5.items.3",
                    "tourDetail.tours.valle.equipment.5.items.4"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.valle.tips.1.title",
                descriptionKey: "tourDetail.tours.valle.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.valle.tips.2.title",
                descriptionKey: "tourDetail.tours.valle.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.valle.tips.3.title",
                descriptionKey: "tourDetail.tours.valle.tips.3.description"
            }
        ],
        prices: {
            national: "260.000",
            foreign: "290.000",

            groupInfo:
                "tourDetail.tours.valle.prices.group",

            privateInfo:
                "tourDetail.tours.valle.prices.private",

            includes: [
                "tourDetail.tours.valle.prices.includes.1",
                "tourDetail.tours.valle.prices.includes.2",
                "tourDetail.tours.valle.prices.includes.3",
                "tourDetail.tours.valle.prices.includes.4",
                "tourDetail.tours.valle.prices.includes.5"
            ]
        }
    },
    {
        id: 2,
        slug: "termal-de-la-campanita",
        tag: "campanita",
        nameKey: "Termal de la Campanita",
        categoryKey: "tourDetail.tours.campanita.category",
        altitude: "3.200 msnm",
        durationKey: "tourDetail.tours.campanita.duration",
        heroImage: IMAGES.tour.subPages.campanita ,
        shortDescriptionKey: "tourDetail.tours.campanita.summary",
        description: {
            introductionKey: "tourDetail.tours.campanita.description.introduction",
            contentKey: "tourDetail.tours.campanita.description.content",
            conclusionKey: "tourDetail.tours.campanita.description.conclusion",
            highlights: [
                {
                    icon: RiRoadMapFill,
                    titleKey: "tourDetail.tours.campanita.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.campanita.description.highlights.1.description"
                },
                {
                    icon: FaTree,
                    titleKey: "tourDetail.tours.campanita.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.campanita.description.highlights.2.description"
                },
                {
                    icon: FaHatCowboySide,
                    titleKey: "tourDetail.tours.campanita.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.campanita.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                time: "6:00 AM",
                activityKey: "tourDetail.tours.campanita.itinerary.1"
            },
            {
                time: "6:30 AM",
                activityKey: "tourDetail.tours.campanita.itinerary.2"
            },
            {
                time: "8:00 AM",
                activityKey: "tourDetail.tours.campanita.itinerary.3"
            },
            {
                time: "10:00 AM",
                activityKey: "tourDetail.tours.campanita.itinerary.4"
            },
            {
                time: "11:30 AM",
                activityKey: "tourDetail.tours.campanita.itinerary.5"
            },
            {
                time: "2:00 PM",
                activityKey: "tourDetail.tours.campanita.itinerary.6"
            }
        ],
        equipment: [
            {
                titleKey: "tourDetail.tours.campanita.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.campanita.equipment.1.items.1",
                    "tourDetail.tours.campanita.equipment.1.items.2",
                    "tourDetail.tours.campanita.equipment.1.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.campanita.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.campanita.equipment.2.items.1"
                ]
            },
            {
                titleKey: "tourDetail.tours.campanita.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.campanita.equipment.3.items.1",
                    "tourDetail.tours.campanita.equipment.3.items.2",
                    "tourDetail.tours.campanita.equipment.3.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.campanita.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.campanita.equipment.4.items.1",
                    "tourDetail.tours.campanita.equipment.4.items.2",
                    "tourDetail.tours.campanita.equipment.4.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.campanita.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.campanita.equipment.5.items.1",
                    "tourDetail.tours.campanita.equipment.5.items.2",
                    "tourDetail.tours.campanita.equipment.5.items.3",
                    "tourDetail.tours.campanita.equipment.5.items.4"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.campanita.tips.1.title",
                descriptionKey: "tourDetail.tours.campanita.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.campanita.tips.2.title",
                descriptionKey: "tourDetail.tours.campanita.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.campanita.tips.3.title",
                descriptionKey: "tourDetail.tours.campanita.tips.3.description"
            }
        ],
        prices: {
            national: "180.000",
            foreign: "180.000",
            groupInfo:
                "tourDetail.tours.campanita.prices.group",
            privateInfo:
                "tourDetail.tours.campanita.prices.private",
            includes: [
                "tourDetail.tours.campanita.prices.includes.1",
                "tourDetail.tours.campanita.prices.includes.2",
                "tourDetail.tours.campanita.prices.includes.3",
                "tourDetail.tours.campanita.prices.includes.4",
                "tourDetail.tours.campanita.prices.includes.5",
                "tourDetail.tours.campanita.prices.includes.6"
            ]
        }
    },
    {
        id: 3,
        slug: "termal-de-canaan",
        tag: "canaan",
        nameKey: "Termal de Canaán",
        categoryKey: "tourDetail.tours.canaan.category",
        location: "Murillo, Tolima",
        altitude: "3.000 msnm",
        durationKey: "tourDetail.tours.canaan.duration",
        distance: "50 km (Ruta 4x4)",
        heroImage: IMAGES.tour.subPages.canaan ,
        shortDescriptionKey: "tourDetail.tours.canaan.summary",
        description: {
            introductionKey: "tourDetail.tours.canaan.description.introduction",
            contentKey: "tourDetail.tours.canaan.description.content",
            conclusionKey: "tourDetail.tours.canaan.description.conclusion",
            highlights: [
                {
                    icon: FaTruckMonster,
                    titleKey: "tourDetail.tours.canaan.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.canaan.description.highlights.1.description"
                },
                {
                    icon: GiGrassMushroom,
                    titleKey: "tourDetail.tours.canaan.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.canaan.description.highlights.2.description"
                },
                {
                    icon: FaWater,
                    titleKey: "tourDetail.tours.canaan.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.canaan.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                timeKey: "5:00 AM",
                activityKey: "tourDetail.tours.canaan.itinerary.1"
            },
            {
                timeKey: "5:40 AM",
                activityKey: "tourDetail.tours.canaan.itinerary.2"
            },
            {
                timeKey: "7:00 AM",
                activityKey: "tourDetail.tours.canaan.itinerary.3"
            },
            {
                timeKey: "10:00 AM",
                activityKey: "tourDetail.tours.canaan.itinerary.4"
            },
            {
                timeKey: "10:40 AM",
                activityKey: "tourDetail.tours.canaan.itinerary.5"
            },
            {
                timeKey: "1:30 PM",
                activityKey: "tourDetail.tours.canaan.itinerary.6"
            },
            {
                timeKey: "4:00 PM",
                activityKey: "tourDetail.tours.canaan.itinerary.7"
            }
        ],
        equipment: [
            {
                titleKey: "tourDetail.tours.canaan.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.canaan.equipment.1.items.1",
                    "tourDetail.tours.canaan.equipment.1.items.2",
                    "tourDetail.tours.canaan.equipment.1.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.canaan.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.canaan.equipment.2.items.1"
                ]
            },
            {
                titleKey: "tourDetail.tours.canaan.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.canaan.equipment.3.items.1",
                    "tourDetail.tours.canaan.equipment.3.items.2",
                    "tourDetail.tours.canaan.equipment.3.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.canaan.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.canaan.equipment.4.items.1",
                    "tourDetail.tours.canaan.equipment.4.items.2",
                    "tourDetail.tours.canaan.equipment.4.items.3",
                    "tourDetail.tours.canaan.equipment.4.items.4"
                ]
            },
            {
                titleKey: "tourDetail.tours.canaan.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.canaan.equipment.5.items.1",
                    "tourDetail.tours.canaan.equipment.5.items.2",
                    "tourDetail.tours.canaan.equipment.5.items.3",
                    "tourDetail.tours.canaan.equipment.5.items.4"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.canaan.tips.1.title",
                descriptionKey: "tourDetail.tours.canaan.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.canaan.tips.2.title",
                descriptionKey: "tourDetail.tours.canaan.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.canaan.tips.3.title",
                descriptionKey: "tourDetail.tours.canaan.tips.3.description"
            }
        ],
        prices: {
            national: "220.000",
            foreign: "220.000",
            groupInfo:
                "tourDetail.tours.canaan.prices.group",
            privateInfo:
                "tourDetail.tours.canaan.prices.private",
            includes: [
                "tourDetail.tours.canaan.prices.includes.1",
                "tourDetail.tours.canaan.prices.includes.2",
                "tourDetail.tours.canaan.prices.includes.3",
                "tourDetail.tours.canaan.prices.includes.4",
                "tourDetail.tours.canaan.prices.includes.5",
                "tourDetail.tours.canaan.prices.includes.6",
                "tourDetail.tours.canaan.prices.includes.7"
            ]
        }
    },
    {
        id: 4,
        slug: "mirador-de-los-nevados",
        tag: "mirador",
        nameKey: "Mirador de los Nevados",
        categoryKey: "tourDetail.tours.mirador.category",
        location: "Murillo, Tolima",
        altitude: "3.743 msnm",
        durationKey: "tourDetail.tours.mirador.duration",
        distance: "9 km",
        heroImage: IMAGES.tour.subPages.mirador,
        shortDescriptionKey: "tourDetail.tours.mirador.summary",
        description: {
            introductionKey: "tourDetail.tours.mirador.description.introduction",
            contentKey: "tourDetail.tours.mirador.description.content",
            conclusionKey: "tourDetail.tours.mirador.description.conclusion",
            highlights: [
                {
                    icon: FaMountainSun,
                    titleKey: "tourDetail.tours.mirador.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.mirador.description.highlights.1.description"
                },
                {
                    icon: FaMountain,
                    titleKey: "tourDetail.tours.mirador.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.mirador.description.highlights.2.description"
                },
                {
                    icon: GiWaterSplash,
                    titleKey: "tourDetail.tours.mirador.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.mirador.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                timeKey: "4:30 AM",
                activityKey: "tourDetail.tours.mirador.itinerary.1"
            },
            {
                timeKey: "5:00 AM",
                activityKey: "tourDetail.tours.mirador.itinerary.2"
            },
            {
                timeKey: "6:10 AM",
                activityKey: "tourDetail.tours.mirador.itinerary.3"
            },
            {
                timeKey: "9:30 AM",
                activityKey: "tourDetail.tours.mirador.itinerary.4"
            },
            {
                timeKey: "10:30 AM",
                activityKey: "tourDetail.tours.mirador.itinerary.5"
            },
            {
                timeKey: "1:00 PM",
                activityKey: "tourDetail.tours.mirador.itinerary.6"
            },
            {
                timeKey: "2:10 PM",
                activityKey: "tourDetail.tours.mirador.itinerary.7"
            }
        ],
        equipment: [
            {
                titleKey: "tourDetail.tours.mirador.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.mirador.equipment.1.items.1",
                    "tourDetail.tours.mirador.equipment.1.items.2",
                    "tourDetail.tours.mirador.equipment.1.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.mirador.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.mirador.equipment.2.items.1"
                ]
            },
            {
                titleKey: "tourDetail.tours.mirador.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.mirador.equipment.3.items.1",
                    "tourDetail.tours.mirador.equipment.3.items.2",
                    "tourDetail.tours.mirador.equipment.3.items.3",
                    "tourDetail.tours.mirador.equipment.3.items.4"
                ]
            },
            {
                titleKey: "tourDetail.tours.mirador.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.mirador.equipment.4.items.1",
                    "tourDetail.tours.mirador.equipment.4.items.2",
                    "tourDetail.tours.mirador.equipment.4.items.3",
                    "tourDetail.tours.mirador.equipment.4.items.4"
                ]
            },
            {
                titleKey: "tourDetail.tours.mirador.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.mirador.equipment.5.items.1",
                    "tourDetail.tours.mirador.equipment.5.items.2",
                    "tourDetail.tours.mirador.equipment.5.items.3"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.mirador.tips.1.title",
                descriptionKey: "tourDetail.tours.mirador.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.mirador.tips.2.title",
                descriptionKey: "tourDetail.tours.mirador.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.mirador.tips.3.title",
                descriptionKey: "tourDetail.tours.mirador.tips.3.description"
            }
        ],
        prices: {
            national: "240.000",
            foreign: "240.000",
            groupInfo:
                "tourDetail.tours.mirador.prices.group",
            privateInfo:
                "tourDetail.tours.mirador.prices.private",
            includes: [
                "tourDetail.tours.mirador.prices.includes.1",
                "tourDetail.tours.mirador.prices.includes.2",
                "tourDetail.tours.mirador.prices.includes.3",
                "tourDetail.tours.mirador.prices.includes.4",
                "tourDetail.tours.mirador.prices.includes.5",
                "tourDetail.tours.mirador.prices.includes.6",
                "tourDetail.tours.mirador.prices.includes.7"
            ]
        }
    },
    {
        id: 5,
        slug: "camino-del-oso-mosul",
        tag: "oso",
        nameKey: "Camino del Oso - Mosul",
        categoryKey: "tourDetail.tours.oso.category",
        location: "Murillo, Tolima",
        altitude: "4.087 msnm",
        durationKey: "tourDetail.tours.oso.duration",
        distance: "Aprox. 24 km",
        heroImage: IMAGES.tour.subPages.oso ,
        shortDescriptionKey: "tourDetail.tours.oso.summary",
        description: {
            introductionKey: "tourDetail.tours.oso.description.introduction",
            contentKey: "tourDetail.tours.oso.description.content",
            conclusionKey: "tourDetail.tours.oso.description.conclusion",
            highlights: [
                {
                    icon: TbTrekking,
                    titleKey: "tourDetail.tours.oso.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.oso.description.highlights.1.description"
                },
                {
                    icon: MdCabin,
                    titleKey: "tourDetail.tours.oso.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.oso.description.highlights.2.description"
                },
                {
                    icon: GiHillConquest,
                    titleKey: "tourDetail.tours.oso.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.oso.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                timeKey: "tourDetail.tours.oso.itinerary.1.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.1.activity"
            },
            {
                timeKey: "tourDetail.tours.oso.itinerary.2.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.2.activity"
            },
            {
                timeKey: "tourDetail.tours.oso.itinerary.3.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.3.activity"
            },
            {
                timeKey: "tourDetail.tours.oso.itinerary.4.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.4.activity"
            },
            {
                timeKey: "tourDetail.tours.oso.itinerary.5.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.5.activity"
            },
            {
                timeKey: "tourDetail.tours.oso.itinerary.6.title",
                activityKey:
                    "tourDetail.tours.oso.itinerary.6.activity"
            }
        ],
        equipment: [
            {
                titleKey: "tourDetail.tours.oso.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.oso.equipment.1.items.1",
                    "tourDetail.tours.oso.equipment.1.items.2",
                    "tourDetail.tours.oso.equipment.1.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.oso.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.oso.equipment.2.items..1",
                    "tourDetail.tours.oso.equipment.2.items.2"
                ]
            },
            {
                titleKey: "tourDetail.tours.oso.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.oso.equipment.3.items.1",
                    "tourDetail.tours.oso.equipment.3.items.2",
                    "tourDetail.tours.oso.equipment.3.items.3",
                    "tourDetail.tours.oso.equipment.3.items.4",
                    "tourDetail.tours.oso.equipment.3.items.5"
                ]
            },
            {
                titleKey: "tourDetail.tours.oso.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.oso.equipment.4.items.1",
                    "tourDetail.tours.oso.equipment.4.items.2"
                ]
            },
            {
                titleKey: "tourDetail.tours.oso.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.oso.equipment.5.items.1",
                    "tourDetail.tours.oso.equipment.5.items.2",
                    "tourDetail.tours.oso.equipment.5.items.3",
                    "tourDetail.tours.oso.equipment.5.items.4",
                    "tourDetail.tours.oso.equipment.5.items.5"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.oso.tips.1.title",
                descriptionKey: "tourDetail.tours.oso.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.oso.tips.2.title",
                descriptionKey: "tourDetail.tours.oso.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.oso.tips.3.title",
                descriptionKey: "tourDetail.tours.oso.tips.3.description"
            }
        ],
        prices: {
            national: "850.000",
            foreign: "850.000",
            groupInfo:
                "tourDetail.tours.oso.prices.group",
            privateInfo:
                "tourDetail.tours.oso.prices.private",
            includes: [
                "tourDetail.tours.oso.prices.includes.1",
                "tourDetail.tours.oso.prices.includes.2",
                "tourDetail.tours.oso.prices.includes.3",
                "tourDetail.tours.oso.prices.includes.4",
                "tourDetail.tours.oso.prices.includes.5",
                "tourDetail.tours.oso.prices.includes.6",
                "tourDetail.tours.oso.prices.includes.7",
                "tourDetail.tours.oso.prices.includes.8",
                "tourDetail.tours.oso.prices.includes.9"
            ]
        }
    },
    {
        id: 6,
        slug: "expedicion-nevado-santa-isabel",
        tag: "nevado",
        nameKey: "Expedición Nevado Santa Isabel",
        categoryKey: "tourDetail.tours.nevado.category",
        location: "Parque Nacional Natural Los Nevados",
        altitude: "4.950 msnm",
        durationKey: "tourDetail.tours.nevado.duration",
        distance: "Aprox. 18 km",
        heroImage: IMAGES.tour.subPages.nevado ,
        shortDescriptionKey: "tourDetail.tours.nevado.summary",
        description: {
            introductionKey: "tourDetail.tours.nevado.description.introduction",
            contentKey: "tourDetail.tours.nevado.description.content",
            conclusionKey: "tourDetail.tours.nevado.description.conclusion",
            highlights: [
                {
                    icon: FaLeaf,
                    titleKey: "tourDetail.tours.nevado.description.highlights.1.title",
                    descriptionKey: "tourDetail.tours.nevado.description.highlights.1.description"
                },
                {
                    icon: FaRegSnowflake,
                    titleKey: "tourDetail.tours.nevado.description.highlights.2.title",
                    descriptionKey: "tourDetail.tours.nevado.description.highlights.2.description"
                },
                {
                    icon: PiMountainsFill,
                    titleKey: "tourDetail.tours.nevado.description.highlights.3.title",
                    descriptionKey: "tourDetail.tours.nevado.description.highlights.3.description"
                }
            ]
        },
        itinerary: [
            {
                timeKey: "tourDetail.tours.nevado.itinerary.1.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.1.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.2.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.2.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.3.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.3.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.4.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.4.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.5.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.5.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.6.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.6.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.7.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.7.activity"
            },
            {
                timeKey: "tourDetail.tours.nevado.itinerary.8.title",
                activityKey:
                    "tourDetail.tours.nevado.itinerary.8.activity"
            }
        ],
        equipment: [
            {
                titleKey: "tourDetail.tours.nevado.equipment.1.title",
                itemsKey: [
                    "tourDetail.tours.nevado.equipment.1.items.1",
                    "tourDetail.tours.nevado.equipment.1.items.2",
                    "tourDetail.tours.nevado.equipment.1.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.nevado.equipment.2.title",
                itemsKey: [
                    "tourDetail.tours.nevado.equipment.2.items.1",
                    "tourDetail.tours.nevado.equipment.2.items.2",
                    "tourDetail.tours.nevado.equipment.2.items.3"
                ]
            },
            {
                titleKey: "tourDetail.tours.nevado.equipment.3.title",
                itemsKey: [
                    "tourDetail.tours.nevado.equipment.3.items.1",
                    "tourDetail.tours.nevado.equipment.3.items.2",
                    "tourDetail.tours.nevado.equipment.3.items.3",
                    "tourDetail.tours.nevado.equipment.3.items.4"
                ]
            },
            {
                titleKey: "tourDetail.tours.nevado.equipment.4.title",
                itemsKey: [
                    "tourDetail.tours.nevado.equipment.4.items.1",
                    "tourDetail.tours.nevado.equipment.4.items.2",
                    "tourDetail.tours.nevado.equipment.4.items.3",
                    "tourDetail.tours.nevado.equipment.4.items.4",
                    "tourDetail.tours.nevado.equipment.4.items.5"
                ]
            },
            {
                titleKey: "tourDetail.tours.nevado.equipment.5.title",
                itemsKey: [
                    "tourDetail.tours.nevado.equipment.5.items.1",
                    "tourDetail.tours.nevado.equipment.5.items.2",
                    "tourDetail.tours.nevado.equipment.5.items.3",
                    "tourDetail.tours.nevado.equipment.5.items.4",
                    "tourDetail.tours.nevado.equipment.5.items.5"
                ]
            }
        ],
        tips: [
            {
                titleKey: "tourDetail.tours.nevado.tips.1.title",
                descriptionKey: "tourDetail.tours.nevado.tips.1.description"
            },
            {
                titleKey: "tourDetail.tours.nevado.tips.2.title",
                descriptionKey: "tourDetail.tours.nevado.tips.2.description"
            },
            {
                titleKey: "tourDetail.tours.nevado.tips.3.title",
                descriptionKey: "tourDetail.tours.nevado.tips.3.description"
            }
        ],
        prices: {
            national: "1.400.000",
            foreign: "1.400.000",
            groupInfo:
                "tourDetail.tours.nevado.prices.group",
            privateInfo:
                "tourDetail.tours.nevado.prices.private",
            includes: [
                "tourDetail.tours.nevado.prices.includes.1",
                "tourDetail.tours.nevado.prices.includes.2",
                "tourDetail.tours.nevado.prices.includes.3",
                "tourDetail.tours.nevado.prices.includes.4",
                "tourDetail.tours.nevado.prices.includes.5",
                "tourDetail.tours.nevado.prices.includes.6"
            ]
        }
    }
];


export const tourConfig = {
    toursDetailConfig,
    toursDetailPlainConfig,
    benefitsConfig
};
