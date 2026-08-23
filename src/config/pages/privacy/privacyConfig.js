import {
    ShieldCheck,
    Lock,
    Leaf,
    Users,
    User,
    PieChart,
    Share2,
    Shield,
    BadgeInfo,
    CheckCircle,
    Mountain,
    CreditCard,
    RefreshCcw,
    Copyright,
    Pencil
} from "lucide-react";
import IMAGES from "../../../assets/images";

export const privacyConfig = {
    hero: {
        badgeKey: "hero.badge",
        background: IMAGES.privacy.hero,
        titleKey: "hero.title",
        descriptionKey: "hero.description"
    },
    plainTextTabs: {
        subtitleKey: "tabs.plain_text.subtitle",
        titleKey: "tabs.plain_text.title",
        descriptionKey: "tabs.plain_text.description",
        highlightTitleKey: "highlights.plain_text.title",
        highlightSubtitleKey: "highlights.plain_text.subtitle"
    },
    tabs: [
        {
            id: "privacy",
            titleKey: "tabs.1",
            icon: ShieldCheck
        },
        {
            id: "terms",
            titleKey: "tabs.2",
            icon: BadgeInfo
        }
    ],
    highlights: [
        {
            icon: ShieldCheck,
            titleKey: "highlights.1.title",
            descriptionKey: "highlights.1.description"
        },
        {
            icon: Lock,
            titleKey: "highlights.2.title",
            descriptionKey: "highlights.2.description"
        },
        {
            icon: Leaf,
            titleKey: "highlights.3.title",
            descriptionKey: "highlights.3.description"
        },
        {
            icon: Users,
            titleKey: "highlights.4.title",
            descriptionKey: "highlights.4.description"
        }
    ],
    privacy: {
        title: "privacy.title",
        description: "privacy.description",
        sections: [
            {
                icon: User,
                titleKey: "privacy.sections.1.title",
                contentKey: [
                    "privacy.sections.1.content.1",
                    "privacy.sections.1.content.2"
                ]
            },

            {
                icon: PieChart,
                titleKey: "privacy.sections.2.title",
                contentKey: [
                    "privacy.sections.2.content.1",
                    "privacy.sections.2.content.2",
                    "privacy.sections.2.content.3"
                ],
                noteKey: "privacy.sections.2.content.note"
            },

            {
                icon: Share2,
                titleKey: "privacy.sections.3.title",
                contentKey: [
                    "privacy.sections.3.content.1",
                    "privacy.sections.3.content.2",
                    "privacy.sections.3.content.3",
                    "privacy.sections.3.content.4"
                ]
            },

            {
                icon: Shield,
                titleKey: "privacy.sections.4.title",
                contentKey: [
                    "privacy.sections.4.content.1",
                    "privacy.sections.4.content.2",
                    "privacy.sections.4.content.3"
                ]
            },

            {
                icon: Lock,
                titleKey: "privacy.sections.5.title",
                contentKey: [
                    "privacy.sections.5.content.1",
                    "privacy.sections.5.content.2"
                ]
            },

            {
                icon: BadgeInfo,
                titleKey: "privacy.sections.6.title",

                contentKey: [
                    "privacy.sections.6.content.1",
                    "privacy.sections.6.content.2",
                    "privacy.sections.6.content.3",
                    "privacy.sections.6.content.4"
                ],

                contact: {
                    phone: "+57 322 563 2587",
                    email: "turismo@gmail.com"
                }
            },

            {
                icon: RefreshCcw,
                titleKey: "privacy.sections.7.title",
                contentKey: [
                    "privacy.sections.7.content.1",
                    "privacy.sections.7.content.2",
                    "privacy.sections.7.content.3"
                ]
            },

            {
                icon: ShieldCheck,
                titleKey: "privacy.sections.8.title",
                contentKey: [
                    "privacy.sections.8.content.1",
                    "privacy.sections.8.content.2",
                    "privacy.sections.8.content.3"
                ]
            },

            {
                icon: CheckCircle,
                titleKey: "privacy.sections.9.title",
                contentKey: [
                    "privacy.sections.9.content.1",
                    "privacy.sections.9.content.2",
                    "privacy.sections.9.content.3"
                ]
            }

        ],
        subCard: {
            titleKey: "privacy.sections.sub_card.latest",
            dateKey: "privacy.sections.sub_card.date",
            questionKey: "privacy.sections.sub_card.help"
        }
    },
    terms: {
        title: "terms.title",
        description: "terms.description",
        cards: [

            {
                icon: CheckCircle,
                titleKey: "terms.cards.1.title",
                descriptionKey: "terms.cards.1.description"
            },

            {
                icon: Mountain,
                titleKey: "terms.cards.2.title",
                descriptionKey: "terms.cards.2.description"
            },

            {
                icon: CreditCard,
                titleKey: "terms.cards.3.title",
                descriptionKey: "terms.cards.3.description"
            },

            {
                icon: RefreshCcw,
                titleKey: "terms.cards.4.title",
                descriptionKey: "terms.cards.4.description"
            },

            {
                icon: Shield,
                titleKey: "terms.cards.5.title",
                descriptionKey: "terms.cards.5.description"
            },

            {
                icon: Copyright,
                titleKey: "terms.cards.6.title",
                descriptionKey: "terms.cards.6.description"
            },

            {
                icon: Pencil,
                titleKey: "terms.cards.7.title",
                descriptionKey: "terms.cards.7.description"
            }

        ]
    },
    cta: {
        background: IMAGES.helpers.privacy.plant,
        titleKey: "cta.title",
        descriptionKey: "cta.description",
        buttonKey: "cta.button",
        homeKey: "cta.home"
    }
};