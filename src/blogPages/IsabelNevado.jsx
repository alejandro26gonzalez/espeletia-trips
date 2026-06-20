import styled from "styled-components"
import Subtitle from "../components/Subtitle"
<<<<<<< HEAD
=======
import Pic1 from "../assets/Backgrounds/SI1.png"
import Pic2 from "../assets/Backgrounds/SI2.jpg"
import Pic3 from "../assets/Backgrounds/SI3.png"
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import Container from "react-bootstrap/Container"
import { useState } from "react";
import Card from "react-bootstrap/Card";
import BlogLayout from "./BlogLayout.jsx"
import PicTextComp from "./PicTextComp.jsx"
import StyledAccordion from "../components/StyledAccordion.jsx"
import { IMAGES_URLS } from "../constants/images.js";


const IsabelNevado = () => {

    const [flippedCardId, setFlippedCardId] = useState(null);

    const cardsInfo = [
        {
            id:1,
            titulo: "Frailejones como reguladores de agua",
            backtext: "Murillo es parte fundamental de la experiencia. Respetar su cultura, costumbres y espacios fortalece el turismo sostenible y la economía local.",
            imagen: IMAGES_URLS.NEVADO_IMG1,
        },
        {
            id:2,
            titulo: "Frailejones como reguladores de agua",
            backtext: "Murillo es parte fundamental de la experiencia. Respetar su cultura, costumbres y espacios fortalece el turismo sostenible y la economía local.",
            imagen: IMAGES_URLS.NEVADO_IMG1,
        },
        {
            id:3,
            titulo: "Frailejones como reguladores de agua",
            backtext: "Murillo es parte fundamental de la experiencia. Respetar su cultura, costumbres y espacios fortalece el turismo sostenible y la economía local.",
            imagen: IMAGES_URLS.NEVADO_IMG1,
        },
        {
            id:4,
            titulo: "Frailejones como reguladores de agua",
            backtext: "Murillo es parte fundamental de la experiencia. Respetar su cultura, costumbres y espacios fortalece el turismo sostenible y la economía local.",
            imagen: IMAGES_URLS.NEVADO_IMG1,
        }
    ]

    const handleFlip = (id) => {
        if (flippedCardId === id) {
            setFlippedCardId(null);
        } else {
            setFlippedCardId(id);
        }
    };

    const preguntas = [
        {
            id:0,
            question: "¿Es apto para niños o adultos mayores?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            id:1,
            question: "¿Qué pasa si llueve?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            id:2,
            question: "¿Puedo llevar mascotas?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            id:3,
            question: "¿Hay señal de celular?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            id:4,
            question: "¿Cuál es la mejor época para visitar?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        }
    ]

    const contentPicTextComp = [
        {
            id:1,
            imagen: IMAGES_URLS.NEVADO_IMG1,
            texto: [
                "El Nevado o glaciar Santa Isabel, también conocido en el dialecto Quimbaya como Poleka Kasué, es una de las montañas de la cordillera Central de Colombia. Es un complejo volcánico inactivo de tipo estratovolcánico-andesítico, con tres cumbres principales: El Cisne, Santa Isabel y El Quindío."
            ]
        },
        {
            id:2,
            imagen: IMAGES_URLS.NEVADO_IMG2,
            texto: [
                <>
                <strong>Formación volcánica:</strong><br/>
                El Nevado del Ruiz se formó sobre la misma base montañosa del Cerro Bravo, en una zona donde confluyen varias fallas geológicas que han influido en su evolución a lo largo del tiempo. A través de los siglos, el volcán ha pasado por diferentes etapas de formación y transformación, en las que se han construido y destruido distintos conos volcánicos.
                </>,
                "Durante estos procesos se han producido flujos de lava, nubes de ceniza caliente, deslizamientos de material volcánico y corrientes de lodo, dando forma al paisaje que hoy conocemos. Las rocas que componen el volcán son principalmente de origen volcánico, resultado de antiguas erupciones que moldearon esta imponente montaña.",
                <>
                <strong>Importancia geológica: </strong><br/>
                El Parque Nacional Natural Los Nevados alberga algunos de los ecosistemas más valiosos del país. Sus páramos, bosques altoandinos, lagunas y glaciares suministran agua a millones de personas en los departamentos de Caldas, Risaralda, Quindío y Tolima. Es un refugio de vida donde habitan especies emblemáticas como el cóndor de los Andes, el oso de anteojos y el venado cola blanca. Además, es territorio sagrado para pueblos indígenas que reconocen en el Ruiz una montaña viva, un ser espiritual que enseña equilibrio y respeto. Conservar este parque es cuidar la biodiversidad y la memoria natural y cultural del país.
                </>
                ,
                "Vivir junto a un volcán activo es cohabitar con el riesgo: una realidad cotidiana que nos recuerda la vulnerabilidad de la existencia humana y la urgencia de gestionar los riesgos de manera colectiva. En estos ecosistemas donde los glaciares se funden con las montañas, los páramos sostienen la vida y los ríos conectan la alta montaña con los valles, cada afectación repercute en las personas, en los demás seres vivos y en los delicados equilibrios ecológicos del territorio.",
                <>
                <strong>(Sánchez, 2025)</strong>
                </>
            ]
        },
        {
            id:3,
            imagen: IMAGES_URLS.NEVADO_IMG3,
            texto:[
                "El Nevado del Ruiz es uno de los volcanes activos de Colombia y alcanza una altura de 5.321 metros sobre el nivel del mar. Está ubicado entre los departamentos de Caldas y Tolima y su historia eruptiva se remonta a hace más de un millón de años. A lo largo del tiempo, ha sido una montaña imponente pero también un territorio dinámico que ha influido profundamente en la región que lo rodea.",
                "En la historia del país se han registrado varias erupciones importantes. En 1595, una serie de explosiones volcánicas generó caída de ceniza, oscurecimiento del cielo y flujos de lodo que afectaron los valles de los ríos Gualí y Lagunillas, causando cientos de muertes. En 1845, una erupción acompañada de un fuerte terremoto produjo un gran flujo de lodo que recorrió extensas zonas del valle de Lagunillas y dejó más de mil víctimas.",
                "La erupción más recordada ocurrió en 1985, cuando el volcán generó lahares que sepultaron por completo al municipio de Armero, causando la muerte de decenas de miles de personas. Este hecho marcó profundamente la historia de Colombia y evidenció la importancia de la prevención y el monitoreo volcánico. Actualmente, el Nevado del Ruiz es vigilado constantemente por las autoridades, que trabajan en medidas preventivas para reducir riesgos y proteger a las comunidades cercanas.",
                <>
                <strong>(Pérez & Pérez, s.f.)</strong>
                </>
            ]

        }
    ]
    
    return (

    <BlogLayout
    activeBreadcrumbItem="Nevado de Santa Isabel"
    >
        <Subtitle color="black">
            Todo lo que necesitas saber antes de vivir la experiencia en el páramo y el Nevado de Santa Isabel
        </Subtitle>

        <PicTextComp 
        textos={contentPicTextComp[0].texto}
        imagen={contentPicTextComp[0].imagen}
        />

        <InvisibleSepatator />

        <Container className="d-flex g-3 mt-5 mb-2">
            <Container className="d-flex flex-column g-1">
                <h3 style={{margin:"1rem 0"}}>Ubicación geográfica y características</h3>
                
                <ul style={{lineHeight: "2"}}>
                    <li>Ubicado en la Cordillera Central de los Andes</li>
                    <li>Limita con Tolima, Risaralda y Caldas</li>
                    <li>Elevación: 4,950 metros</li>
                    <li>Parte del Parque Nacional Natural Los Nevados</li>
                </ul>
            </Container>

            <ImageWrapper>
                <MapFrame 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.912722368532!2d-75.36666699999999!3d4.8166668999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e389f353abad8d7%3A0x84078e2553248356!2sNevado%20de%20Santa%20Isabel!5e0!3m2!1ses-419!2sco!4v1771704986750!5m2!1ses-419!2sco"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </ImageWrapper>

        </Container>

        <InvisibleSepatator />

        <Subtitle color="black">
            Origen volcánico y formación
        </Subtitle>

        <PicTextComp 
        textos={contentPicTextComp[1].texto}
        imagen={contentPicTextComp[1].imagen}
        />

        <InvisibleSepatator />

        <Subtitle color="black">
            Actividad histórica
        </Subtitle>

        <PicTextComp 
        textos={contentPicTextComp[2].texto}
        imagen={contentPicTextComp[2].imagen}
        />

        <InvisibleSepatator />

        <Subtitle color="black">
            Ecosistemas y biodiversidad
        </Subtitle>

        <GridContainer>

            {cardsInfo.map((element) => (
                <FlipCardContainer key={element.id}>
                    <FlipCardInner 
                    flipped={flippedCardId === element.id}
                    onClick={() => handleFlip(element.id)}
                    >
                        <FlipCardFront style={{backgroundColor:"#EFE318", color: "black"}}>
                        <Card.Img 
                        variant="top" 
                        src={element.imagen} 
                        style={{ width: "100%", height: "80%", objectFit: "cover" }} />
                        <Card.Text 
                        style={{fontWeight:"bold", marginTop:"1rem", fontSize:"1.2rem"}}>
                            {element.titulo}
                        </Card.Text>
                        </FlipCardFront>

                        <FlipCardBack>{element.backtext}</FlipCardBack>

                    </FlipCardInner>
                </FlipCardContainer>
            ))}

        </GridContainer>

        <InvisibleSepatator />

        <Subtitle color="black">
            Preguntas frecuentes rápidas
        </Subtitle>

        <StyledAccordion array={preguntas}/>

    </BlogLayout>)
}

export default IsabelNevado

const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Importante para que el border-radius funcione en iframe */
  border-radius: 15px;
`
const MapFrame = styled.iframe`
  width: 100%;
  height: 300px; /* Ajusta según necesites */
  border: 0;
  display: block;
`
const FlipCardContainer = styled.div`
  perspective: 1000px; /* Necesario para efecto 3D */
  width: 500px;
  height: 350px;
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  /* Girar 180° cuando está flipped */
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;
const FlipCardFront = styled(Card)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Esconde el reverso cuando está frente */
`;
const FlipCardBack = styled(Card)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg); /* La cara trasera está girada 180° */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222; /* Fondo trasero */
  color: #fff;
  font-weight: bold;
  padding: 2rem;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 columnas de 200px */
    grid-template-rows: 1fr 1fr;    /* 2 filas de 200px */
    gap: 50px 30px; /* gap: fila (vertical) 20px, columna (horizontal) 30px */
    justify-content: center; /* centra el grid horizontalmente */
    margin: 2rem 0;
`