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

export const PRIVACY_PAGE_DATA = {

    hero: {
        title: "Privacidad y Términos",
        description:
            "Transparencia, confianza y respeto por tu información. Conoce cómo protegemos tus datos y las condiciones que rigen nuestros servicios.",
    },

    tabs: [
        {
            id: "privacy",
            title: "Política de privacidad",
            icon: ShieldCheck
        },
        {
            id: "terms",
            title: "Términos y condiciones",
            icon: BadgeInfo
        }
    ],

    highlights: [
        {
            icon: ShieldCheck,
            title: "Protegemos tu información",
            description:
                "Aplicamos medidas técnicas y organizativas para mantener tus datos seguros."
        },
        {
            icon: Lock,
            title: "Usamos tus datos con responsabilidad",
            description:
                "Solo recopilamos la información necesaria para brindarte la mejor experiencia."
        },
        {
            icon: Leaf,
            title: "Transparencia total",
            description:
                "Te informamos de manera clara cómo recopilamos, usamos y protegemos tu información."
        },
        {
            icon: Users,
            title: "Cumplimos la ley",
            description:
                "Cumplimos con la Ley 1581 de 2012 y demás normas colombianas sobre protección de datos."
        }
    ],

    privacy: {
        title: "Política de privacidad",

        description:
            "En Espeletia Trips valoramos tu privacidad y nos comprometemos con el tratamiento responsable de tu información personal.",

        sections: [

            {
                icon: User,
                title: "¿Quiénes somos?",
                content: [
                    "Nos comprometemos con tu privacidad y el manejo responsable de la información.",
                    "En este aviso explicamos cómo tratamos los datos personales que nos facilitas para reservas y atención."
                ]
            },

            {
                icon: PieChart,
                title: "¿Qué datos recolectamos?",
                content: [
                    "Nombre completo",
                    "Correo electrónico",
                    "Número de teléfono (WhatsApp)"
                ],
                note:
                    "No recolectamos datos sensibles ni información financiera desde la plataforma."
            },

            {
                icon: Share2,
                title: "¿Para qué usamos tus datos?",
                content: [
                    "Confirmar reservas",
                    "Coordinar el tour",
                    "Contactarte por correo o WhatsApp",
                    "Responder solicitudes"
                ]
            },

            {
                icon: Shield,
                title: "Comunicación y manejo de reservas",
                content: [
                    "Las reservas se gestionan por WhatsApp o correo.",
                    "No almacenamos tarjetas.",
                    "No procesamos pagos desde el sitio web."
                ]
            },

            {
                icon: Lock,
                title: "Seguridad de la información",
                content: [
                    "Protegemos tus datos mediante medidas técnicas y organizativas.",
                    "Solo el personal autorizado puede acceder a la información."
                ]
            },

            {
                icon: BadgeInfo,
                title: "Derechos del titular",

                content: [
                    "Acceder a tus datos",
                    "Rectificar información",
                    "Solicitar eliminación",
                    "Revocar el consentimiento"
                ],

                contact: {
                    phone: "+57 322 563 2587",
                    email: "turismo@gmail.com"
                }
            },

            {
                icon: RefreshCcw,
                title: "Tiempo de conservación",
                content: [
                    "Mientras la reserva esté activa.",
                    "Durante el tiempo requerido por la ley.",
                    "Hasta resolver solicitudes posteriores."
                ]
            },

            {
                icon: ShieldCheck,
                title: "Si decides no proporcionar tus datos",
                content: [
                    "No podremos confirmar la reserva.",
                    "No podremos coordinar pagos.",
                    "No podremos comunicarnos contigo."
                ]
            },

            {
                icon: CheckCircle,
                title: "Aceptación del aviso",
                content: [
                    "Aceptas esta política.",
                    "Comprendes el tratamiento de tus datos.",
                    "Autorizas el uso para los fines descritos."
                ]
            }

        ]
    },

    terms: {

        title: "Términos y condiciones",

        description:
            "Al utilizar nuestros servicios turísticos aceptas las siguientes condiciones.",

        cards: [

            {
                icon: CheckCircle,
                title: "Aceptación de los términos",
                description:
                    "El uso del sitio implica la aceptación de estas condiciones."
            },

            {
                icon: Mountain,
                title: "Servicios",
                description:
                    "Ofrecemos experiencias turísticas enfocadas en naturaleza, aventura y sostenibilidad."
            },

            {
                icon: CreditCard,
                title: "Reservas y pagos",
                description:
                    "Las reservas están sujetas a disponibilidad y el pago se coordina directamente."
            },

            {
                icon: RefreshCcw,
                title: "Cancelaciones",
                description:
                    "Las condiciones de cancelación se especifican en cada tour."
            },

            {
                icon: Shield,
                title: "Responsabilidades",
                description:
                    "No respondemos por eventos externos fuera de nuestro control."
            },

            {
                icon: Copyright,
                title: "Propiedad intelectual",
                description:
                    "Todo el contenido del sitio pertenece a Espeletia Trips."
            },

            {
                icon: Pencil,
                title: "Cambios",
                description:
                    "Podemos actualizar estos términos cuando sea necesario."
            }

        ]
    },

    cta: {
        title: "¿Tienes preguntas?",
        description:
            "Si deseas ejercer tus derechos sobre tus datos personales o tienes dudas sobre nuestras políticas, escríbenos. Estamos para ayudarte.",
        button: "Contáctanos"
    }

};