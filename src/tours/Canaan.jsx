import ToursTemplate from "./ToursTemplate"
import { IMAGES_URLS } from "../constants/images"
import { ICONS_URLS } from "../constants/iconsLinks"
import { useCloudinaryImages } from "../hooks/useCloudinaryImages"

const Canaan = () => {

    const { imagesCarousel, loading} = useCloudinaryImages("canaan");
    
    const paragraphsText = [
            <>
            <p>Embárcate en una aventura 4x4 por la Ruta de la Templanza del Arriero y adéntrate en un territorio donde la cultura campesina y la naturaleza conviven en equilibrio permanente. Un escenario marcado por las historias de arrieros y campesinos, donde las recuas de mulas abrieron camino entre montañas y donde aún perviven los relatos de caminantes que cruzaron estos parajes, guiados por el pulso profundo del cañón del río Recio y el valle de Canaán, la tierra prometida de Murillo.</p>
            <p>La ruta conduce hasta la Cascada del Abuelo, guardián silencioso del recorrido, donde el agua cae con la fuerza del tiempo y refresca cuerpo y memoria, rodeada por el bosque alto andino y el río Recio, que protegen este santuario natural. Más adelante, el paisaje se abre para revelar el valle de palma de cera, esbelto y sagrado, símbolo de vida, resistencia y uno de los paisajes más representativos e identitarios de Murillo.</p>
            <p>Durante el recorrido, la cultura campesina se hace presente en los caminos heredados, en las manos que trabajan la tierra y en las historias compartidas por guías y habitantes locales, quienes narran la montaña desde el arraigo, la experiencia y el profundo respeto por el territorio.</p>
            <p>Como recompensa al camino, el Termal de Canaán aparece como un verdadero oasis en medio del verde de las montañas. Sus aguas calientes, envueltas en vapor, contrastan con el aire frío de altura y crean un espacio ideal para el descanso, la relajación y la renovación de energía.</p>
            <p>La experiencia finaliza con la hospitalidad de una familia campesina, que recibe a los visitantes con un auténtico almuerzo tradicional, cerrando el recorrido con sabores locales y calidez humana.</p>
            <p>Una experiencia completa de aventura, naturaleza, bienestar y cultura, en un destino auténtico y poco explorado que conserva la esencia viva de Murillo, Tolima.</p>
            <p>Espeletia Trips teje aquí una experiencia que no solo es aventura, sino también memoria y conexión profunda con la montaña y la naturaleza. </p>
            </>
    ]
    const cards = [
        {
            id:1,
            icono:ICONS_URLS.CANAAN1,
            text:"Aventura 4x4 Off-Road",
            backText: "50 km de adrenalina por la 'Ruta de la Templanza', atravesando bosques andinos y cascadas de aguas cristalinas.",
            color:"linear-gradient(90deg,rgba(70, 79, 73, 1) 1%, rgba(96, 79, 117, 1) 100%)",
            textColor: "white"
        },
        {
            id:2,
            icono:ICONS_URLS.CANAAN2,
            text: "Santuarios naturales",
            backText: "Conoce a la Cascada del Abuelo, guardiana del tiempo, y camina entre Palmas de Cera, nuestro árbol nacional, símbolo de resistencia.",
            color: "linear-gradient(90deg,rgba(34, 82, 37, 1) 1%, rgba(88, 79, 117, 1) 100%)",
            textColor: "white"
        },
        {
            id:3,
            icono: ICONS_URLS.CANAAN3,
            text: "Bienestar Ancestral",
            backText: "El Termal de Canaán es un oasis natural de aguas calientes que emergen de la tierra para renovar tu energía, mejorar la circulación y liberar el estrés.",
            color:"linear-gradient(90deg,rgba(117, 91, 79, 1) 1%, rgba(199, 122, 88, 1) 100%)",
            textColor: "white"
        }
    ]
    const itinerarioInfo = [
        {
            dia:1,
            hora: "5:00 AM",
            activity: "Desayuno tradicional en el casco urbano de Murillo."
            
        },
        {
            dia:1,
            hora: "5:40 AM",
            activity: "Inicio de la ruta 4x4 hacia Puerto Masato."
        },
        {
            dia:1,
            hora: "07:00 AM",
            activity: "Encuentro con la Cascada del Abuelo y bosque de niebla."
        },
        {
            dia:1,
            hora: "10:00 AM",
            activity: "Refrigerio en finca campesina y saberes locales.."
        },
        {
            dia:1,
            hora: "10:40 AM",
            activity: "Inmersión en las Aguas Termales de Canaán."
        },
        {
            dia:1,
            hora: "1:30 PM",
            activity: "Almuerzo campesino en la Finca La Esperanza."
        },
        {
            dia:1,
            hora: "4:00 PM",
            activity: "Retorno al corazón de Murillo."
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
                "Gafas de sol",
                "Vestido de baño y toalla"
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
                imagen: IMAGES_URLS.CANAAN_EXTRA1,
                texto: "Valle de las Tumbas",
                link: "/tours/valle-tumbas"
            },
            {
                imagen: IMAGES_URLS.CANAAN_EXTRA2,
                texto: "Termal de la Campanita",
                link: "/tours/campanita"
            },
            {
                imagen: IMAGES_URLS.CANAAN_EXTRA3,
                texto: "Mirador de los Nevados",
                link: "/tours/mirador"
            },
            {
                imagen: IMAGES_URLS.CANAAN_EXTRA4,
                texto: "Camino del oso",
                link: "/tours/camino-oso"
            },
            {
                imagen: IMAGES_URLS.CANAAN_EXTRA5,
                texto: "Expedición Santa Isabel",
                link: "/tours/nevado-santa-isabel"
            }
    ]
    const dataPrice = {
            bkgImg: IMAGES_URLS.CANAAN_PRICE_IMG,
            description:"Desconexión real en un entorno natural privilegiado. Las aguas termales de Canaan ofrecen equilibrio, relajación y renovación en medio de paisajes andinos que inspiran paz. Una experiencia cuidadosamente planificada para que disfrutes cada instante con seguridad y acompañamiento profesional.",
            textTooltipGrupal:"Grupal desde 5 personas, salidas todos los dias, cupos limitados grupos maximo de 14 personas",
            textTooltipPersonalizado: "Personalizado (1 a 4 personas)",
            priceNational: "$220.000,00",
            priceAbroad: "$220.000,00",
            descriptionAbroad: "Vive una experiencia termal guiada y acompañada, ideal para disfrutar en grupo a un precio especial.",
            descriptionNational: "Accede a una experiencia más íntima y personalizada, adaptando tiempos y detalles según tus preferencias.",
            priceItems: [
                "Alimentación completa: 1 desayuno, 1 medias nueves y 1 almuerzo campesino",
                "Transporte: Logística 4x4 (desde Murillo)",
                "Equipo: Bastones de trekking y botas pantaneras (si se requieren)",
                "Acompañamiento: Guía local experto en el territorio",
                "Seguridad: Ingreso a termales y póliza de asistencia médica (Colasistencia)"
            ]
        }
    if (loading) {
        return <div className="text-center p-10">Cargando galería del tour Canaan</div>
    }
    
    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.CANAAN_TOURS_BKG_IMG}
        Titulo={"Tour - Termal de Canaan"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_CANAAN}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={true}
        />
    )
}

export default Canaan