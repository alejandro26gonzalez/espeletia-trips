import IMAGES from "../../../assets/images";
import { FiCalendar, FiClock, FiCloudRain } from 'react-icons/fi';

export const infoConfig = [
    {
        id: "general",
        titleKey: "content.sections.general.title",
        type: "paragraph",
        contentKey: "content.sections.general.content",
    },

    {
        id: "retracto",
        titleKey: "content.sections.retracto.title",
        type: "fields",
        fields: [
            {
                labelKey: "content.sections.retracto.fields.term.label",
                valueKey: "content.sections.retracto.fields.term.value",
            },
            {
                labelKey: "content.sections.retracto.fields.condition.label",
                valueKey: "content.sections.retracto.fields.condition.value",
            },
            {
                labelKey: "content.sections.retracto.fields.refund.label",
                valueKey: "content.sections.retracto.fields.refund.value",
            },
        ],
    },

    {
        id: "userCancellation",
        titleKey: "content.sections.userCancellation.title",
        type: "table",
        table: {
            headers: [
                "content.sections.userCancellation.table.advance",
                "content.sections.userCancellation.table.refund",
            ],

            rows: [
                [
                    "content.sections.userCancellation.table.rows.moreThan15",
                    "90%",
                ],
                [
                    "content.sections.userCancellation.table.rows.between8And14",
                    "70%",
                ],
                [
                    "content.sections.userCancellation.table.rows.between2And7",
                    "50%",
                ],
                [
                    "content.sections.userCancellation.table.rows.lessThan48",
                    "content.sections.userCancellation.table.rows.noRefund",
                ],
            ],
        },

        noteKey: "content.sections.userCancellation.note",
    },

    {
        id: "agencyCancellation",
        titleKey: "content.sections.agencyCancellation.title",
        type: "iconList",

        items: [
            {
                icon: "check",
                textKey: "content.sections.agencyCancellation.items.reschedule",
            },
            {
                icon: "check",
                textKey: "content.sections.agencyCancellation.items.refund",
            },
        ],
    },

    {
        id: "exceptionalSituations",
        titleKey: "content.sections.exceptionalSituations.title",
        type: "iconText",

        icon: "warning",

        contentKey: "content.sections.exceptionalSituations.content",
    },

    {
        id: "reservationTransfer",
        titleKey: "content.sections.reservationTransfer.title",
        type: "list",

        items: [
            "content.sections.reservationTransfer.items.deadline",
            "content.sections.reservationTransfer.items.notification",
            "content.sections.reservationTransfer.items.requirements",
        ],
    },

    {
        id: "unusedServices",
        titleKey: "content.sections.unusedServices.title",
        type: "list",

        introKey: "content.sections.unusedServices.intro",

        items: [
            "content.sections.unusedServices.items.userDecision",
            "content.sections.unusedServices.items.lateArrival",
            "content.sections.unusedServices.items.altitudeSickness",
            "content.sections.unusedServices.items.healthProblems",
        ],
    },

    {
        id: "contact",
        titleKey: "content.sections.contact.title",
        type: "contact",

        introKey: "content.sections.contact.intro",

        items: [
            {
                icon: "phone",
                value: "+57 322 563 2587",
            },
            {
                icon: "mail",
                value: "turismo@gmail.com",
            },
            {
                icon: "location",
                value: "Calle 4 # 8-5 – Galería Municipal, Murillo, Tolima.",
            },
        ],
    },
];

export default infoConfig;

export const heroConfig  = {
    breadcrumbKey: "hero.bread",
    titleKey: "hero.title",
    descriptionKey: "hero.description"
};
export const plainTextConfig = {
    information: {
        badgeKey: "content.information.badge",
        titleKey: "content.information.title",
        descriptionKey: "content.information.description"
    },
    importantNotice: {
        decorator: IMAGES.helpers.cancellation.mountain,
        titleKey: "content.notice.title",
        descriptionKey: "content.notice.description",
        descriptionKey2: "content.notice.description2"
    },
    summary:{
        badgeKey: "content.summary.badge",
        titleKey: "content.summary.title",
        descriptionKey: "content.summary.description"
    }
};

export const summaryConfig = [
    {
        icon: FiCalendar,
        titleKey: "content.summary.cards.item1.title",
        badgeKey: "content.summary.cards.item1.badge",
        color:"green",
        descriptionKey: "content.summary.cards.item1.description"
    },
    {
        icon: FiCalendar,
        titleKey:"content.summary.cards.item2.title",
        badgeKey:"content.summary.cards.item2.badge",
        color:"yellow",
        descriptionKey: "content.summary.cards.item2.description"
    },
    {
        icon: FiClock,
        titleKey:"content.summary.cards.item3.title",
        badgeKey:"content.summary.cards.item3.badge",
        color:"orange",
        descriptionKey: "content.summary.cards.item3.description"
    },
    {
        icon: FiCloudRain,
        titleKey:"content.summary.cards.item4.title",
        badgeKey:"content.summary.cards.item4.badge",
        color:"blue",
        descriptionKey: "content.summary.cards.item4.description"
    }
];

export const cancellationConfig = {
    infoConfig,
    heroConfig,
    plainTextConfig,
    summaryConfig
};