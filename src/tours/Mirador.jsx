import ToursTemplate from "./ToursTemplate"
import { ICONS_URLS } from "../constants/iconsLinks"
import { IMAGES_URLS } from "../constants/images"
import { useCloudinaryImages } from "../hooks/useCloudinaryImages"

const Mirador = () => {

    const { imagesCarousel, loading} = useCloudinaryImages("mirador");
    
    const paragraphsText = [
            <>
            <p>El Mirador de los Nevados es una experiencia que invita a caminar con los sentidos despiertos, adentrándote en un territorio donde el páramo respira, el bosque altoandino se alza como un templo natural y la cultura campesina late en el corazón de la montaña.</p>
            <p>La aventura comienza en el municipio de Murillo, Tolima, con un reconfortante desayuno campesino que prepara el cuerpo y el espíritu antes de partir. Desde allí, ingresamos al sendero: una puerta silenciosa hacia paisajes mágicos y escondidos, entre frailejones, montañas, nacimientos de aguas azufradas y el constante paso de las aves.</p>
            <p>El recorrido nos conduce hasta un mirador natural, desde donde se revela la inmensa belleza de los Andes colombianos. Una actividad de un día capaz de regalarte conexión, asombro y una nueva forma de ver la montaña… y el mundo.</p>
            </>
    ]
    const cards = [
        {
            id:1,
            icono: ICONS_URLS.MIRADOR_1,
            text:"Trekking de Altura",
            backText: "Un circuito de 9 km que inicia a los 3,743 msnm, recorriendo el majestuoso Páramo del Oso, un ecosistema donde la vida se adapta al frío y al silencio profundo.",
            color:"linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
            textColor: "black"
        },
        {
            id:2,
            icono: ICONS_URLS.MIRADOR_2,
            text: "El gran Horizonte",
            backText: "Nuestro destino es un mirador natural privilegiado. Si la montaña nos da su permiso, seremos testigos de la vista panorámica de los gigantes: Nevado del Ruiz, Santa Isabel, Paramillo del Cisne y el imponente Nevado del Tolima.",
            color: "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
            textColor: "black"
        },
        {
            id:3,
            icono: ICONS_URLS.MIRADOR_3,
            text: "Conexión con el Agua",
            backText: "Caminarás entre nacimientos de aguas azufradas y bosques de niebla, comprendiendo por qué el páramo es la fábrica de agua de nuestro territorio.",
            color:"linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
            textColor: "black"
        }
    ]
    const itinerarioInfo = [
        {
            dia:1,
            hora: "4:30 AM",
            activity: "Encuentro y Desayuno Campesino en Murillo."
        },
        {
            dia:1,
            hora: "05:00 AM",
            activity: "Traslado en 4x4 hacia el sector de Casa Roja."
        },
        {
            dia:1,
            hora: "6:10 AM",
            activity: "Inicio del ascenso: hiking por páramo y bosque andino."
        },
        {
            dia:1,
            hora: "9:30 AM",
            activity: "Arribo al Mirador de los Nevados (Tiempo de contemplación)."
        },
        {
            dia:1,
            hora: "10:30 AM",
            activity: "Inicio del descenso y retorno al sendero."
        },
        {
            dia:1,
            hora: "1:00 PM",
            activity: "Regreso a Casa Roja y traslado a Murillo"
        },
        {
            dia:1,
            hora: "2:10 PM",
            activity: "Almuerzo de cierre en Murillo y despedida."
        }
    ]
    const accesoriosInfo = [
        {
            id: 1,
            question: "Primera capa",
            answer: "Es una capa que está en contacto directo con la piel. Hecha de materiales que se secan con rapidez, su función es apartar la sudoración del cuerpo, llevándola a la capa exterior. Ayuda a que el cuerpo permanezca seco. Durante el invierno, con ropa más gruesa y cálida, también debe contribuir a mantener el calor.",
            items: [
                "Buso licrado",
                "Pantalón de secado rápido"
            ]
        },
        {
            id: 2,
            question: "Segunda capa",
            answer: "Su objetivo es ofrecer calor. Además, tiene que absorber la humedad que sale de la primera capa y llevarla hacia fuera. Anteriormente, se fabricaba con forros de poliéster o tejidos más deportivos como el Powerstrech; actualmente, las prendas delgadas de material sintético son las más comunes.",
            items: [
                "Saco polar o térmico"
            ]
        },
        {
            id: 3,
            question: "Tercera capa",
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
                "Botas de caña media/alta",
                "Gorro",
                "Guantes",
                "Cuello buff",
                "Gafas de sol UV"
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
                "Bloqueador solar",
                "Ropa de cambio (aislada de la humedad)",
                "Manta térmica de emergencia",
                "Hidratación extra",
            ]
        }
    ]
    const moreToursInfo = [
            {
                imagen: IMAGES_URLS.MIRADOR_EXTRA1,
                texto: "Valle de las Tumbas",
                link: "/tours/valle-tumbas"
            },
            {
                imagen: IMAGES_URLS.MIRADOR_EXTRA2,
                texto: "Termal de la Campanita",
                link: "/tours/campanita"
            },
            {
                imagen: IMAGES_URLS.MIRADOR_EXTRA3,
                texto: "Termal de Canaan",
                link: "/tours/canaan"
            },
            {
                imagen: IMAGES_URLS.MIRADOR_EXTRA4,
                texto: "Camino del oso",
                link: "/tours/camino-oso"
            },
            {
                imagen: IMAGES_URLS.MIRADOR_EXTRA5,
                texto: "Expedición Santa Isabel",
                link: "/tours/nevado-santa-isabel"
            }
    ]
    const dataPrice = {
            bkgImg: IMAGES_URLS.MIRADOR_PRICE_IMG,
            description:"Una vista que transforma perspectivas. Desde el Mirador Los Nevados contemplas la majestuosidad de los volcanes y la inmensidad del paisaje andino en un escenario inolvidable. Más que una parada panorámica, es un encuentro con la grandeza natural, guiado con responsabilidad y profundo respeto por el entorno.",
            textTooltipGrupal:"Grupal desde 4 personas, salidas todos los dias, cupos limitados maximo 10 personas ",
            textTooltipPersonalizado: "Personalizado (1 a 3 personas)",
            priceNational: "$240.000,00",
            priceAbroad: "$240.000,00",
            descriptionAbroad: "Comparte vistas panorámicas únicas junto a otros viajeros con acompañamiento profesional incluido.",
            descriptionNational: "Disfruta el mirador con mayor tranquilidad, tiempos flexibles y atención exclusiva para tu grupo.",
            priceItems: [
                "Alimentación: 1 desayuno y 1 almuerzo tradicional",
                "Transporte: Logística 4x4 (ida y vuelta desde Murillo a Casa Roja)",
                "Equipo: Bastones de trekking y botas pantaneras (bajo solicitud)",
                "Seguridad: Guía especializada y póliza de asistencia médica (Colasistencia)"
            ]
        }

    if (loading) {
        return <div className="text-center p-10">Cargando galería del tour Mirador los Nevados</div>
    }

    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.MIRADOR_TOURS_BKG_IMG}
        Titulo={"Tour - Mirador de los Nevados"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_MIRADOR}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={true}
        />
    )
}

export default Mirador