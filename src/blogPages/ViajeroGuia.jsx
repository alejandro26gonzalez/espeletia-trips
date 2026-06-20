import styled from "styled-components"
import Subtitle from "../components/Subtitle"
import PicTextComp from "./PicTextComp.jsx";
<<<<<<< HEAD
=======
import Pic1 from "../assets/Backgrounds/Blog1.jpg"
import Pic2 from "../assets/Backgrounds/Blog2.png"
import Pic3 from "../assets/Backgrounds/Blog3.png"
import Pic4 from "../assets/Backgrounds/Blog4.png"
import Pic5 from "../assets/Backgrounds/Blog5.png"
import Pic6 from "../assets/Backgrounds/Blog6.jpg"
import CtaPicture from "../assets/Backgrounds/toursSection.png"
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import Button from "../components/Button"
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import StyledAccordion from "../components/StyledAccordion.jsx"
import BlogLayout from "./BlogLayout.jsx";
import ListedContainer from "./ListedContainer.jsx";
import Lista from "./List.jsx"
import { useNavigate } from "react-router";
import { IMAGES_URLS } from "../constants/images.js";
import { ICONS_URLS } from "../constants/iconsLinks.js";

const ViajeroGuia = () => {

    const navigate = useNavigate();

    const handleWhatsapp = () => {
        window.open("https://wa.me/+573170566675?text=Hola! Quisiera reservar un tour. Mi nombre es ", "_blank");
    }
    const cards = [
        {
            id:1,
            icono:ICONS_URLS.TUMBAS1,
            text:"Dormir bien la noche anterior",
            color:"#545525",
            textColor: "white"
        },
        {
            id:2,
            icono: ICONS_URLS.ALCOHOL_ICON,
            text: "Evitar alcohol antes del tour",
            color: "#EFE318",
            textColor: "black"
        },
        {
            id:3,
            icono: ICONS_URLS.PERSON_ICON,
            text:"Caminar a tu propio ritmo",
            color:"#545525",
            textColor: "white"
        },
        {
            id:4,
            icono: ICONS_URLS.SICK_ICON,
            text: "Informar al guía cualquier condición médica",
            color: "#EFE318",
            textColor: "black"
        }
    ]
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
            imagen: IMAGES_URLS.Blog1,
            texto:"Visitar el páramo y el Nevado de Santa Isabel es una experiencia única que requiere preparación y conciencia ambiental. En esta guía encontrarás recomendaciones prácticas para disfrutar el recorrido de forma segura, responsable y memorable."
        },
        {
            id:2,
            imagen: IMAGES_URLS.Blog3,
            texto: "El páramo es un ecosistema de alta montaña donde el clima es impredecible. Durante un mismo recorrido puedes experimentar sol, lluvia, viento y bajas temperaturas."
        },
        {
            id:3,
            imagen: IMAGES_URLS.Blog4,
            texto: "El páramo es un ecosistema frágil y vital para la vida. Cada visitante tiene la responsabilidad de protegerlo."
        },
        {
            id:4,
            imagen: IMAGES_URLS.Blog6,
            texto: "Murillo es parte fundamental de la experiencia. Respetar su cultura, costumbres y espacios fortalece el turismo sostenible y la economía local."
        }
    ]
    const listContent = [
        {
            paragraph: "Elementos indispensables:",
            items: [
                "Ropa térmica e impermeable",
                "Botas de trekking (antideslizantes)",
                "Chaqueta corta viento",
                "Gorra, guantes y bufanda",
                "Bloqueador solar y protector labial",
                "Agua y snacks energéticos",
                "Documento de identidad",
                "Medicamentos personales"
            ]
        },
        {
            paragraph: "Recomendaciones: ",
            items: [
                "Vestirse en capas",
                "Mantenerse hidratado",
                "Seguir siempre las indicaciones del guía",
                "No subestimar el frío ni la altura"
            ]
        },
        {
            paragraph: "Buenas prácticas: ",
            items: [
                "No salirse de los senderos",
                "No extraer flora ni fauna",
                "No dejar residuos",
                "Evitar ruidos fuertes",
                "Respetar la fauna local"
            ]
        },
        {
            paragraph:"Incluye: ",
            items: [
                "Acompañamiento permanente",
                "Evaluación climática previa",
                "Grupos pequeños",
                "Comunicación constante"
            ]
        },
        {
            paragraph: "Recomendaciones: ",
            items: [
                "Saludar y ser amable",
                "Apoyar emprendimientos locales",
                "Respetar tradiciones y horarios"
            ]
        }
    ]

    return (
    <BlogLayout 
    activeBreadcrumbItem="Guía del viajero"
    >

        <Subtitle color="black">
            Todo lo que necesitas saber antes de vivir la experiencia en el páramo y el Nevado de Santa Isabel
        </Subtitle>

        <p style={{fontStyle:"italic", margin:"1rem 0"}}>Prepararte bien es la clave para disfrutar la montaña con seguridad, respeto y conexión con la naturaleza.</p>

        <PicTextComp
        imagen={contentPicTextComp[0].imagen}
        texto={contentPicTextComp[0].texto}
        />

        <InvisibleSepatator />

        <ListedContainer
        imagen={IMAGES_URLS.Blog2}
        overlayText="El clima en el páramo puede cambiar en minutos. Ir bien equipado marca la diferencia."
        >
            <h3 style={{margin:"1rem 0"}}>¿Qué debes llevar al tour?</h3>

            <Lista lista={listContent}/>


        </ListedContainer>

        <InvisibleSepatator />
        <InvisibleSepatator />

        <Subtitle color="black">
            Clima y condiciones del páramo
        </Subtitle>

        <PicTextComp
            imagen={contentPicTextComp[1].imagen}
            texto={contentPicTextComp[1].texto}
        />

        <Lista lista={listContent} index={1}/>

        <InvisibleSepatator />

        <Subtitle color="black">
            Preparación física y nivel de dificultad
        </Subtitle>
        <p style={{ margin:"1rem 0"}}>Las caminatas están diseñadas para personas con condición física básica, pero es importante tener en cuenta la altitud y el terreno.</p>

        <Container fluid className="d-flex justify-content-between gap-2 mt-2 w-100 px-0 flex-wrap">
            {cards.map((element) => (
                <CardStyled 
                color={element.color} 
                textColor={element.textColor}
                key={element.id}
                >
                    <img src={element.icono} alt="" />
                    <p style={{padding:"1rem"}}>{element.text}</p>
                </CardStyled>
            ))}
        </Container>

        <InvisibleSepatator />
        
        <Subtitle color="black">
            Normas del páramo y turismo responsable
        </Subtitle>

        <PicTextComp
            imagen={contentPicTextComp[2].imagen}
            texto={contentPicTextComp[2].texto}
        />

        <Lista lista={listContent} index={2}/>

        <InvisibleSepatator />

        <Subtitle color="black">
            Seguridad durante el recorrido
        </Subtitle>

        <ListedContainer
        imagen={IMAGES_URLS.Blog5}
        overlayText="El clima en el páramo puede cambiar en minutos. Ir bien equipado marca la diferencia."
        showOverlay={false}
        reverse={true}
        >
            <h4 style={{margin:"1rem 0"}}>Nuestros recorridos cuentan con protocolos de seguridad, guías locales capacitados y rutas previamente evaluadas.</h4>

            <Lista lista={listContent} index={3}/>

        </ListedContainer>


        <InvisibleSepatator />
        <InvisibleSepatator />
        
        <Subtitle color="black">
            Convivencia con la comunidad local
        </Subtitle>

        <PicTextComp
            imagen={contentPicTextComp[3].imagen}
            texto={contentPicTextComp[3].texto}
        />

        <Lista lista={listContent} index={4}/>


        <InvisibleSepatator />

        <Subtitle color="black">
            Preguntas frecuentes rápidas
        </Subtitle>

        <StyledAccordion array={preguntas}/>

        <InvisibleSepatator />

        <CTAfinal imagen={IMAGES_URLS.BLOG_VIAJERO_CTA}>
            <TitleCta>Ahora que ya sabes cómo prepararte, solo falta dar el siguiente paso.</TitleCta>
        </CTAfinal>

        <Container className="d-flex justify-content-evenly g-3 mt-5">

            <div style={{ flexBasis: "40%" }}>
                <Button 
                text="Conoce nuestros tours"
                onClick={() => navigate("/tours")}
                />
            </div>

            <div style={{ flexBasis: "40%" }}>
                <Button 
                text="Reserva por whatsapp"
                onClick={handleWhatsapp}
                />
            </div>

        </Container>

    </BlogLayout>)
}

export default ViajeroGuia

const TitleCta = styled.h1`
    color: #FFFFFF;
    text-shadow: 3px 5px 2px #474747, -1px -6px 16px rgba(206,89,55,0);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem;
` 
const CTAfinal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
  border-radius: 15px;
  position: relative; /* necesario para el overlay */
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px; /* ajusta según tu necesidad */

  /* overlay oscuro */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(60, 59, 58, 0.5); /* fondo oscuro semitransparente */
    border-radius: 15px;
    z-index: 1;
  }

  /* contenido dentro del CTA */
  > * {
    position: relative;
    z-index: 2; /* texto encima del overlay */
    color: #fff; /* texto blanco */
    font-weight: bold;
  }
`;
const CardStyled = styled(Card)`
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-weight: bold;
    text-align: center;
    height: 230px;
    width: 230px;

    transition: all 0.5s;

    &:hover {
        border: 1px solid black;
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 45%;
    }
`
const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
    @media (max-width:768px) {
        height: 50px;
    }
`