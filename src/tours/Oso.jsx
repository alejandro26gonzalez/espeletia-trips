import ToursTemplate from "./ToursTemplate"
import { ICONS_URLS } from "../constants/iconsLinks";
import { IMAGES_URLS } from "../constants/images";
import { useCloudinaryImages } from "../hooks/useCloudinaryImages";

const Oso = () => {

    const {imagesCarousel, loading} = useCloudinaryImages("oso");

    const paragraphsText = [
            <>
            <h2>Dos días entre páramo, cultura campesina y bosque altoandino</h2>
            <p>El Camino del Oso – Mosul es una travesía que invita a caminar con los sentidos despiertos. Durante dos días, el viajero se sumerge en un territorio donde el páramo respira, el bosque altoandino se eleva como un templo natural y la cultura campesina se convierte en el corazón vivo de la montaña.</p>
            <p>La ruta inicia en el municipio de Murillo, Tolima, donde un buen desayuno campesino reconforta el cuerpo y el espíritu antes de partir. luego tomamos la entrada al sendero, una puerta silenciosa hacia la montaña que nos lleva por lugares mágicos y escondidos, entre frailejones, montañas, lagunas de azul profundo que brilla al sol, ríos y cascadas. </p>
            <p>Al final de la jornada, una humilde casa campesina aparece entre la neblina y el humo que sale del techo. Su estructura de madera, sencilla y cálida es el reflejo de la vida rural que se teje en estas montañas. Allí, el viajero encuentra refugio, conversación y la hospitalidad de quienes habitan estos lugares desde generaciones, recargando energía para el siguiente día, que nos llevara por un bosque de niebla por el cañón del Río Azul hasta nuestro objetivo final la Estrella y luego Murillo.</p>
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
            dia:1,
            hora: "Hacia las nubes",
            activity: "Partimos desde los 3,743 msnm en Casa Roja, atravesando la Reserva del Oso y Siete Cabezas."
            
        },
        {
            dia:1,
            hora: "Espejos de agua",
            activity: "Almuerzo a la orilla del Río Recio y contemplación de la Laguna de Romerales y el mirador de Laguna Verde."
        },
        {
            dia:1,
            hora: "Techo del camino",
            activity: "Superaremos el Boquerón, el punto más alto de la ruta a 4,087 msnm, antes de descender hacia el Cañón del Río Azul."
        },
        {
            dia:1,
            hora: "Refugio Mosul",
            activity: "Al caer el sol, nos recibe la Finca Mosul. Una casa campesina de madera donde la cena y la conversación al calor del hogar cierran un día épico."
        },
        {
            dia:2,
            hora: "Descenso vital",
            activity: "Tras un desayuno al alba, caminamos por el bosque de niebla, un ecosistema vibrante donde la biodiversidad estalla en cada rama."
        },
        {
            dia:2,
            hora: "Regreso al origen",
            activity: "Finalizamos el descenso en la vereda La Estrella, donde nuestro transporte nos espera para retornar a Murillo con el espíritu renovado."
        }
    ]
    const accesoriosInfo = [
        {
            id: 1,
            question: "Primera capa (térmica o capa base)",
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
            question: "Seguridad Personal",
            answer: "En el montañismo, la seguridad personal es fundamental para garantizar una experiencia segura y exitosa. Esto implica llevar el equipo adecuado, como botas de caña media/alta para proteger los tobillos, un gorro para mantener la cabeza caliente, guantes para proteger las manos del frío, un cuello buff para resguardar el cuello y gafas de sol UV para proteger los ojos de los rayos UV y el reflejo en la nieve. Estos elementos no solo brindan comodidad, sino que también son esenciales para prevenir lesiones y mantener la salud en condiciones climáticas adversas.",
            items: [
                "Botas de caña media/alta",
                "Gorro",
                "Guantes",
                "Cuello buff",
                "Bloqueador",
                "Gafas de sol UV",
                "Manta térmica de emergencia",
                "Muda de cambio de ropa completa (protegida en olsas secas)"
            ]
        },
        {
            id: 5,
            question: "Calzado para el senderismo y extras de seguridad",
            answer: "Para el senderismo, es esencial contar con un calzado adecuado que brinde soporte, tracción y comodidad durante largas caminatas. Las botas de trekking o senderismo son ideales, ya que ofrecen un buen agarre en terrenos irregulares y protegen los pies de posibles lesiones. Además, es recomendable llevar bastones de trekking para mejorar la estabilidad y reducir la fatiga en las piernas. Otros elementos de seguridad incluyen un botiquín de primeros auxilios, una linterna frontal con baterías adicionales, un silbato para emergencias y un mapa o dispositivo GPS para orientación en caso de perderse.",
            items: [
                "Morral 25L",
                "1 litro de agua",
                "Snacks",
                "Bloqueador solar",
                "Carpa de lluvia",
                "Botas de caña alta para trekking",
                "Calzado de descanso para la finca"
            ]
        }
    ]
    const moreToursInfo = [
        {
            imagen: IMAGES_URLS.OSO_EXTRA1,
            texto: "Valle de las Tumbas",
            link: "/tours/valle-tumbas"
        },
        {
            imagen: IMAGES_URLS.OSO_EXTRA2,
            texto: "Termal de la Campanita",
            link: "/tours/campanita"
        },
        {
            imagen: IMAGES_URLS.OSO_EXTRA3,
            texto: "Termal de Canaan",
            link: "/tours/canaan"
        },
        {
            imagen: IMAGES_URLS.OSO_EXTRA4,
            texto: "Mirador de los Nevados",
            link: "/tours/mirador"
        },
        {
            imagen: IMAGES_URLS.OSO_EXTRA5,
            texto: "Camino del oso ",
            link: "/tours/camino-oso"
        }
    ]
    const dataPrice = {
            bkgImg: IMAGES_URLS.OSO_PRICE_IMG,
            description:"Una ruta que te conecta con la esencia más pura del bosque altoandino. El Camino del Oso es senderismo consciente entre frailejones, neblina y ecos de vida silvestre, en un territorio donde la naturaleza aún marca el ritmo. Guiado por expertos locales, vivirás una experiencia auténtica, segura y profundamente inspiradora, diseñada para que descubras la magia del páramo con respeto y conexión real.",
            textTooltipGrupal:"Grupal desde 4 personas, salidas todos los dias, cupos limitados maximo 10 personas ",
            textTooltipPersonalizado: "Personalizado ( 1  a 3 personas)",
            priceNational: "$850.000,00",
            priceAbroad: "$850.000,00",
            descriptionAbroad: "Explora el sendero en compañía de otros aventureros con guía experto y experiencia organizada.",
            descriptionNational: "Recorre el bosque a tu propio ritmo con acompañamiento privado y mayor conexión con la naturaleza.",
            priceItems: [
                "Alimentación completa: 2 desayunos, 2 almuerzos y 1 cena tradicional en finca",
                "Transporte: Logística 4x4 (Murillo - Casa Roja / La Estrella - Murillo)",
                "Alojamiento: 1 noche en casa campesina (habitación/camarotes compartidos)",
                "Equipo de apoyo: Bastones de trekking y botas pantaneras",
                "Seguridad: Guía profesional y póliza de asistencia médica"
            ]
        }
    if (loading) {
        return <div className="text-center p-10">Cargando galería del tour Oso de Mosul</div>
    }

    return (
        <ToursTemplate 
        bgImage={IMAGES_URLS.OSO_TOURS_BKG_IMG}
        Titulo={"Tour - Trekking al Camino del Oso"}
        imagesCarousel={imagesCarousel}
        paragraphsText={paragraphsText}
        cardsInfo={cards}
        itinerarioInfo={itinerarioInfo}
        accesoriosInfo={accesoriosInfo}
        CTAPicture={IMAGES_URLS.CTA_IMAGEN_OSO}
        moreToursInfo={moreToursInfo}
        dataPrice={dataPrice}
        nottwoDays={false}
        />
    )
}   
export default Oso