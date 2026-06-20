import ToursTemplate from "./ToursTemplate"
import {ICONS_URLS} from "../constants/iconsLinks";
import {IMAGES_URLS} from "../constants/images";
import { useCloudinaryImages } from "../hooks/useCloudinaryImages";

const Nevado = () => {

    const {imagesCarousel, loading} = useCloudinaryImages("nevado");

    const paragraphsText = [
            <>
            <h2>¿Listo para una aventura memorable?</h2>
            <p>El Nevado de Santa Isabel te invita a vivir una expedición donde la aventura y la grandeza natural se encuentran. En el corazón de la cordillera Central, este coloso de hielo emerge como un escenario épico para quienes buscan desafiar sus límites y conectar con la esencia más pura de la montaña.</p>
            <p>Nuestros recorridos atraviesan páramos dorados y senderos ancestrales, guiándote paso a paso hacia glaciares milenarios que brillan bajo el sol andino. El viento frío, limpio y vibrante acompaña la travesía, mientras cada paisaje revela panoramas imponentes que parecen sacados de otro mundo.</p>
            <p>Al amanecer, la cima se ilumina con tonos dorados y las nubes descansan a tus pies como un océano silencioso. Es el momento en que la montaña muestra toda su majestuosidad y el esfuerzo se transforma en asombro. Allí arriba, rodeado de hielo, cielo y silencio, sentirás la emoción única de conquistar un santuario natural que pocos han tenido el privilegio de explorar.</p>
            <p>Explorar el Nevado de Santa Isabel no es solo un viaje: es una experiencia de aventura diseñada para despertar tus sentidos, elevar tu espíritu y regalarte recuerdos imborrables en una de las joyas más impresionantes de Colombia.</p>
            </>
    ]
    const cards = [
        {
            id:1,
            icono: ICONS_URLS.NEVADO_OSO_1,
            text:"Aclimatación en Laguna Verde",
            backText: "Un encuentro íntimo con la altitud donde el cuerpo se adapta mientras la vista se pierde en un espejo de tonos esmeralda rodeado de frailejones gigantes.",
            color:"linear-gradient(90deg,rgba(204, 182, 182, 1) 1%, rgba(119, 69, 69, 1) 100%)",
            textColor: "black"
        },
        {
            id:2,
            icono: ICONS_URLS.NEVADO_OSO_2,
            text: "El gigante Luminoso",
            backText: "Un ascenso constante por morrenas y paisajes volcánicos hasta alcanzar el borde glaciar, donde el hielo milenario brilla bajo el sol andino.",
            color: "linear-gradient(90deg,rgba(199, 116, 87, 1) 1%, rgba(133, 199, 88, 1) 100%)",
            textColor: "black"
        },
        {
            id:3,
            icono: ICONS_URLS.NEVADO_OSO_3,
            text: "Panoramas del Infinito",
            backText: "Desde la zona alta, el mundo se despliega bajo tus pies: un mar de nubes y las siluetas de los nevados del Tolima, Ruiz, El Cisne y Quindío.",
            color:"linear-gradient(90deg,rgba(199, 88, 136, 1) 1%, rgba(133, 199, 88, 1) 100%)",
            textColor: "black"
        }
    ]
    const itinerarioInfo = [
        {
            dia: 1,
            hora: "5:00 AM",
            activity: "Salida desde Manizales hacia el PNN Los Nevados."
        },
        {
            dia: 1,
            hora: "Desayuno",
            activity: "Hospitalidad campesina en el camino."
        },
        {
            dia: 1,
            hora: "Hiking de aclimatación",
            activity: "Caminata hacia el mirador de Laguna Verde del Cisne."
        },
        {
            dia: 1,
            hora: "Tarde",
            activity: "Almuerzo, charla técnica de manejo de equipos de alta montaña y cena."
        },
        {
            dia: 1,
            hora: "Descanso",
            activity: "Noche en el refugio de montaña El Cisne (acomodación designada)."
        },
        {
            dia: 2,
            hora: "Madrugada",
            activity: "Inicio del ascenso desde el sector de Conejeras bajo las estrellas."
        },
        {
            dia: 2,
            hora: "El Glaciar",
            activity: "Equipamiento técnico (crampones, piolet, arnés) para el ascenso final."
        },
        {
            dia: 2,
            hora: "Cumbre",
            activity: "Tiempo de contemplación y fotografía en la zona alta permitida."
        },
        {
            dia: 2,
            hora: "Retorno",
            activity: "Descenso hacia Manizales con la satisfacción del objetivo cumplido."
        }
    ]
    const accesoriosInfo = [
        {
            id: 1,
            question: "Primera capa (base o capa interior)",
            answer: "Es una capa que está en contacto directo con la piel. Hecha de materiales que se secan con rapidez, su función es apartar la sudoración del cuerpo, llevándola a la capa exterior. Ayuda a que el cuerpo permanezca seco. Durante el invierno, con ropa más gruesa y cálida, también debe contribuir a mantener el calor.",
            items: [
                "Buso licrado",
                "Pantalón de secado rápido"
            ]
        },
        {
            id: 2,
            question: "Segunda capa (aislante o capa intermedia)",
            answer: "Su objetivo es ofrecer calor. Además, tiene que absorber la humedad que sale de la primera capa y llevarla hacia fuera. Anteriormente, se fabricaba con forros de poliéster o tejidos más deportivos como el Powerstrech; actualmente, las prendas delgadas de material sintético son las más comunes.",
            items: [
                "Saco polar o térmico"
            ]
        },
        {
            id: 3,
            question: "Tercera capa (protectora o capa externa)",
            answer: "Chaquetas que cuentan con una membrana que las hace resistentes al agua, además de permitir la transpiración y proteger del viento.  Su función es bloquear la entrada de lluvia, viento y nieve, mientras que también permiten que la humedad interna sea eliminada.",
            items: [
                "Chaqueta impermeable y cortavientos"
            ]
        },
        {
            id: 4,
            question: "Accesorios",
            answer: "En el montañismo los accesorios son fundamentales porque garantizan la seguridad, aumentan la comodidad y mejoran la eficiencia en condiciones extremas o adversas. Protegen contra las inclemencias meteorológicas, previenen lesiones y facilitan la orientación y movilidad en terrenos difíciles, convirtiendo una actividad de riesgo en una experiencia segura y disfrutable",
            items: [
                "Botas de caña alta",
                "Polainas",
                "Medias térmicas",
                "Gorro",
                "Guantes",
                "Cuello buff",
                "Gafas de sol"
            ]
        },
        {
            id: 5,
            question: "Extras",
            answer: "Los extras en el montañismo (ropa de abrigo extra, comida/agua de reserva, botiquín, frontal, herramientas de navegación) son cruciales para garantizar la seguridad, la supervivencia y la comodidad ante cambios bruscos de tiempo o imprevistos. Estos elementos permiten afrontar riesgos como hipotermia, lesiones o pérdida de ruta, convirtiéndose en el margen de seguridad indispensable entre una experiencia segura y una situación de emergencia.",
            items: [
                "Morral 25L",
                "1 litro de agua",
                "Snacks",
                "Bloqueador solar"
            ]
        }
    ]
    const moreToursInfo = [
        {
            imagen: IMAGES_URLS.NEVADO_EXTRA1,
            texto: "Valle de las Tumbas",
            link: "/tours/valle-tumbas"
        },
        {
            imagen: IMAGES_URLS.NEVADO_EXTRA2,
            texto: "Termal de la Campanita",
            link: "/tours/campanita"
        },
        {
            imagen: IMAGES_URLS.NEVADO_EXTRA3,
            texto: "Termal de Canaan",
            link: "/tours/canaan"
        },
        {
            imagen: IMAGES_URLS.NEVADO_EXTRA4,
            texto: "Mirador de los Nevados",
            link: "/tours/mirador"
        },
        {
            imagen: IMAGES_URLS.NEVADO_EXTRA5,
            texto: "Camino del oso ",
            link: "/tours/camino-oso"
        }
    ]
    const dataPrice = {
            bkgImg: IMAGES_URLS.NEVADO_PRICE_IMG,
            description:"Una aventura de alta montaña diseñada para quienes buscan superar límites y vivir la nieve de cerca. La expedición al Nevado Santa Isabel combina preparación, acompañamiento experto y logística profesional para que alcances la cima con seguridad y confianza. Una experiencia intensa, desafiante y absolutamente inolvidable.",
            textTooltipGrupal:"Grupal entre 4 a 10 personas maximo",
            textTooltipPersonalizado: "Personalizado (1 a 3 personas)",
            priceNational: "$1.400.000,00",
            priceAbroad: "$1.400.000,00",
            descriptionAbroad: "Únete a una expedición guiada con logística completa y comparte el desafío con otros montañistas.",
            descriptionNational: "Vive una expedición exclusiva con planificación personalizada y acompañamiento técnico dedicado.",
            priceItems: [
                "Alojamiento: 1 noche en refugio de montaña el Cisne",
                "Alimentación completa: 2 desayunos y 2 almuerzos de montaña",
                "Transporte: Logística 4x4 (desde Manizales a PNN Los Nevados y regreso a Manizales)",
                "Equipo de cumbre: Piolet, crampones, arnés, cuerdas, casco, linterna frontal y bastones.",
                "Acompañamiento: Guías especializados avalos en alta montaña",
                "Seguridad: Ingreso a PNN Los Nevados y póliza de asistencia médica (Colasistencia)"
            ]
        }
    if (loading) {
        return <div className="text-center p-10">Cargando galería del tour del Nevado de Santa Isabel</div>
    }

    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.NEVADO_TOURS_BKG_IMG}
        Titulo={"Tour - Expedición al Nevado de Santa Isabel"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_NEVADO}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={false}
        />
    )
}

export default Nevado