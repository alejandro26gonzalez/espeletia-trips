import ToursTemplate from "./ToursTemplate";
import { ICONS_URLS } from "../constants/iconsLinks";
import { IMAGES_URLS } from "../constants/images";
import { useCloudinaryImages } from "../hooks/useCloudinaryImages";

const Tumbas = () => {

    const { imagesCarousel, loading} = useCloudinaryImages("tumbas");

    const paragraphsText = [
        "El Parque Nacional Natural Los Nevados es el escenario perfecto para quienes buscan superar límites, vivir la montaña con intensidad y llevarse recuerdos inolvidables. En medio de frailejones gigantes, senderos que parecen no tener fin y cumbres que se pierden entre las nubes, descubrirás paisajes que te harán sentir pequeño frente a la grandeza de la naturaleza.",
        "Ascendiendo hasta los 4.450 msnm, llegando al Valle de las Tumbas, un paisaje lunar donde el aire es más puro, el silencio más profundo y cada paso es un reto que vale la pena. Entre glaciares, páramos y volcanes, vivirás la historia del mítico “león dormido” mientras tu espíritu explorador despierta.",
        "Si amas el disfrutar del paisaje, la historia, los buenos recuerdos, los retos al aire libre y los viajes que transforman, esta es tu experiencia."
    ]
    const cards = [
        {
            id:1,
            icono: ICONS_URLS.TUMBAS1,
            text:"Ruta escénica",
            backText: "Recorre la que es considerada la carretera más linda de Colombia, atravesando estribaciones volcánicas y miradores naturales.",
            color:"linear-gradient(90deg,rgba(85, 40, 40, 1) 1%, rgba(38, 93, 128, 1) 100%)",
            textColor: "white"
        },
        {
            id:2,
            icono: ICONS_URLS.TUMBAS2,
            text: "Geología viva",
            backText: "Explora el Cañón del Lagunilla, el Azufrado y la Laguna la Llorona, testigos de la erupción de 1985 y baluartes de la conservación hídrica.",
            color: "linear-gradient(90deg,rgba(136, 160, 104, 1) 1%, rgba(173, 245, 78, 1) 100%)",
            textColor: "black"
        },
        {
            id:3,
            icono: ICONS_URLS.TUMBAS3,
            text: "Paisaje Lunar",
            backText: "En el Valle de las Tumbas, el silencio es profundo y el aire es puro. Un lugar mágico que evidencia el retroceso glaciar y ofrece vistas inigualables de los macizos de La Olleta y el Ruiz.",
            color:"linear-gradient(90deg,rgba(84, 85, 37, 1) 1%, rgba(169, 169, 131, 1) 100%)",
            textColor: "white"
        }
    ]
    const itinerarioInfo = [
        {
            dia:1,
            hora: "4:40 AM",
            activity: <>
            Encuentro en la oficina de <strong>Espeletia Trips</strong>
            </>
        },
        {
            dia:1,
            hora: "5:00 AM",
            activity: "Desayuno tradicional en Murillo."
        },
        {
            dia:1,
            hora: "6:00 AM",
            activity: "Interpretación en el Cañón del Lagunilla."
        },
        {
            dia:1,
            hora: "7:30 AM",
            activity: "Historia geológica en el Cañón del Azufrado y sector Sifón."
        },
        {
            dia:1,
            hora: "8:00 AM",
            activity: "Charla técnica y registro en la taquilla del PNN Los Nevados."
        },
        {
            dia:1,
            hora: "9:00 AM",
            activity: <>
            Recorrido: Aguacerales, Arenales y <strong>Valle de las Tumbas</strong>
            </>
        },
        {
            dia:1,
            hora: "2:00 PM",
            activity: "Regreso a Murillo, almuerzo y cierre."
        }
    ]
    const moreToursInfo = [
        {
            imagen: IMAGES_URLS.TUMBAS_EXTRA1,
            texto: "Termal de la campanita",
            link: "/tours/campanita"
        },
        {
            imagen: IMAGES_URLS.TUMBAS_EXTRA2,
            texto: "Termal de Canaan",
            link: "/tours/canaan"
        },
        {
            imagen: IMAGES_URLS.TUMBAS_EXTRA3,
            texto: "Mirador de los Nevados",
            link: "/tours/mirador"
        },
        {
            imagen: IMAGES_URLS.TUMBAS_EXTRA4,
            texto: "Camino del oso",
            link: "/tours/camino-oso"
        },
        {
            imagen: IMAGES_URLS.TUMBAS_EXTRA5,
            texto: "Expedición Santa Isabel",
            link: "/tours/nevado-santa-isabel"
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
    const dataPrice = {
            bkgImg: IMAGES_URLS.TUMBAS_PRICE_IMG,
            description:"Una travesía que va más allá del paisaje. En el Valle de las Tumbas exploras formaciones volcánicas únicas, historia geológica viva y panorámicas imponentes, acompañado por guías expertos que convierten cada paso en aprendizaje y asombro. Una experiencia auténtica, segura y diseñada para que conectes con la fuerza natural del territorio.",
            textTooltipGrupal:"Grupal desde 5 personas, salidas todos los dias, cupos limitados maximo 20 personas ",
            textTooltipPersonalizado: "Personalizado 2 a 4 personas ",
            priceNational: "$260.000,00",
            priceAbroad: "$290.000,00",
            descriptionAbroad: "Únete a otros viajeros y vive la experiencia completa a un precio más accesible, con guía certificado y logística organizada.",
            descriptionNational: "Disfruta el recorrido a tu ritmo, con atención exclusiva y horarios flexibles adaptados a tu grupo.",
            priceItems: [
                "Alimentación: 1 desayuno y 1 almuerzo campesino",
                "Transporte: Logística 4x4 (desde Murillo)",
                "Entradas: Ingreso y reserva al PNN (Parque Nacional Natural Los Nevados)",
                "Acompañamiento: Guía local experto",
                "Seguridad: Póliza de asistencia médica (Colasistencia)"
            ]
        }

    if (loading) {
        return <div className="text-center p-10">Cargando galería del Valle de las Tumbas</div>
    }
    
    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.TUMBAS_TOURS_BKG_IMG}
        Titulo={"Tour - Valle de las Tumbas"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_TUMBAS}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={true}
        />
    
    )
}

export default Tumbas