import ToursTemplate from "./ToursTemplate"
import { IMAGES_URLS } from "../constants/images"
import { ICONS_URLS } from "../constants/iconsLinks"

const Campanita = () => {

    const imagesCarousel = Object.values(
        import.meta.glob("../assets/Fotos/CANON DEL RECIO TERMAL DE LA CAMPANITA/*.{jpg,png,jpeg}", { eager: true })
    ).map((module) => module.default);

    const paragraphsText = [
        <>
        <p>En Murillo, donde las montañas se levantan como murallas vivas y las casas de madera con sus tejados oxidados contrastan con el realismo mágico de la neblina y un paisaje que parece pintado con paciencia. Inicia el recorrido a un lugar donde aún flotan las historias de arrieros y sus recuas de mulas, donde cada piedra del camino guarda relatos de caminantes y errantes que alguna vez cruzaron estos parajes acompañados en cada paso por el murmullo del río recio y el bosque de niebla; y donde el termal de la campanita aparece como un refugio tibio en medio del viento helado, donde el vapor se mezcla con risas, con memorias, con la voz de los guías y campesinos que narran secretos de montaña.</p>
        <p>El agua caliente acaricia la piel y ofrece un abrazo cálido devolviendo la energía, dando un descanso al cuerpo cansado de andar, como renovando el espíritu, así de simple y memorable es este recorrido, 5 kilómetros de caminata que invitan a retarse, a escuchar la naturaleza y a dejarse envolver por un baño de bosque y de montaña en un lugar enigmático y poco explorado.</p>
        <p>Espeletia Trips teje aquí una experiencia que no solo es aventura, sino también memoria y conexión profunda con la montaña y la naturaleza.</p>
        </>
    ]
    const cards = [
        {
            id:1,
            icono: ICONS_URLS.CAMPANITA1,
            text:"Senderismo de Herencia",
            backText: "Recorre caminos de herradura que guardan los secretos de antiguas recuas de mulas, atravesando bosques andinos y nuestro árbol nacional: la palma de cera.",
            color:"linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
            textColor: "white"
        },
        {
            id:2,
            icono: ICONS_URLS.CAMPANITA2,
            text: "Terapia de Contraste",
            backText: "Vive una experiencia de bienestar única alternando el calor profundo de las aguas termales con la pureza fría del Río Recio. Ideal para mejorar la circulación y reducir el estrés.",
            color: "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
            textColor: "white"
        },
        {
            id:3,
            icono: ICONS_URLS.CAMPANITA3,
            text: "Historias de Raíz",
            backText: "Degusta una 'mandrágora' mientras escuchas las historias de Don Alfonso (Burrito), guardián de las memorias de este cañón.",
            color:"linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
            textColor: "white"
        }
    ]
    const itinerarioInfo = [
        {
            dia:1,
            hora: "6:00 AM",
            activity: "Desayuno tradicional en Murillo."
            
        },
        {
            dia:1,
            hora: "6:30 AM",
            activity: "Traslado en 4x4 hacia Puerto Masato."
        },
        {
            dia:1,
            hora: "8:00 AM",
            activity: "08:00 AM	Inicio del trekking (5 km): Descenso por camino de herradura."
        },
        {
            dia:1,
            hora: "9:00 AM",
            activity: "Arribo al majestuoso Cañón del Río Recio."
        },
        {
            dia:1,
            hora: "10:00 AM",
            activity: "Baño en los Termales de la Campanita y terapia de contraste."
        },
        {
            dia:1,
            hora: "11:00 AM",
            activity: "Retorno hacia Puerto Masato (ascenso)."
        },
        {
            dia:1,
            hora: "2:00 PM",
            activity: "Almuerzo campesino en Murillo y cierre de la aventura."
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
                "Botas de senderismo",
                "Vestido de baño (con ropa de cambio y toalla)",
                "Pantalón cómodo de secado rápido",
                "Cuello buff",
                "Gafas de sol",
                "Gorra o sombrero",
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
                imagen: IMAGES_URLS.CAMPANITA_EXTRA1,
                texto: "Valle de las Tumbas",
                link: "/tours/valle-tumbas"            
            },
            {
                imagen: IMAGES_URLS.CAMPANITA_EXTRA2,
                texto: "Termal de Canaan",
                link: "/tours/campanita"
            },
            {
                imagen: IMAGES_URLS.CAMPANITA_EXTRA3,
                texto: "Mirador de los Nevados",
                link: "/tours/mirador-nevados"
            },
            {
                imagen: IMAGES_URLS.CAMPANITA_EXTRA4,
                texto: "Camino del oso",
                link: "/tours/camino-oso"
            },
            {
                imagen: IMAGES_URLS.CAMPANITA_EXTRA5,
                texto: "Expedición Santa Isabel",
                link: "/tours/nevado-santa-isabel"
            }
    ]
    const dataPrice = {
            bkgImg: IMAGES_URLS.CAMPANITA_PRICE_IMG,
            description:"Desconexión real en un entorno natural privilegiado. Las aguas termales de Canaan ofrecen equilibrio, relajación y renovación en medio de paisajes andinos que inspiran paz. Una experiencia cuidadosamente planificada para que disfrutes cada instante con seguridad y acompañamiento profesional.",
            textTooltipGrupal:"Grupal desde 4 personas, salidas todos los dias, cupos limitados maximo 12 personas ",
            textTooltipPersonalizado: "Personalizado 1 a 3 personas ",
            priceNational: "$180.000,00",
            priceAbroad: "$180.000,00",
            descriptionAbroad: "Comparte un momento de relajación en aguas termales naturales junto a otros viajeros en una experiencia organizada y segura.",
            descriptionNational: "Relájate con total privacidad y flexibilidad horaria en una experiencia diseñada solo para ti y tu grupo.",
            priceItems: [
                "Alimentación: 1 desayuno y 1 almuerzo campesino",
                "Transporte: Logística 4x4 (desde Murillo a Puerto Masato)",
                "Equipo: Bastones de senderismo y botas pantaneras (si se requieren)",
                "Seguridad: Guía local experto, ingresos y póliza de asistencia médica (Colasistencia)"
            ]
        }

    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.CAMPANITA_TOURS_BKG_IMG}
        Titulo={"Tour - Termal de la Campanita"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_CAMPANITA}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={true}
        />
    )
}

export default Campanita