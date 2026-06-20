import NavBar from "../components/NavbarComponent"
import styled from "styled-components"
import Title from "../components/Title"
import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import LogoBlogHeader from "../blogPages/LogoBlogHeader"
import useBreakpoint from "../hooks/useBreakpoint"
import MobileSidebar from "../components/Mobilesidebar"
import ResponsiveCardItem from "../components/responsiveComponents/CardItem"
import ResponsiveCardTitle from "../components/responsiveComponents/CardTitle"
import ResponsiveColumn from "../components/responsiveComponents/CardsColumn"
import { IMAGES_URLS } from "../constants/images";

const Blog = () => {

    const navigate = useNavigate();
    const handleCardClick = (element) => {
        navigate(element.link);
    }
    const cardContent = [
        {
            id: 1,
            title: "Guía del viajero",
            text: "Descubre consejos esenciales, rutas y recomendaciones para que tu viaje sea inolvidable, desde la planificación hasta la aventura en cada destino.",
            link: "/blog/guia-del-viajero",
            BGcolor: "#EFE318",
            color: "black",
            imagen: IMAGES_URLS.PIC1
        },
        {
            id: 2,
            title: "Nevado de Santa Isabel: naturaleza y geografía",
            text: "Explora los paisajes imponentes del Nevado de Santa Isabel y conoce su diversidad geográfica, flora y fauna que lo convierten en un paraíso natural.",
            link: "/blog/nevado-santa-isabel",
            BGcolor: "#545525",
            color: "white",
            imagen: IMAGES_URLS.PIC2
        },
        {
            id: 3,
            title: "Historia y cultura de Murillo",
            text: "Sumérgete en la riqueza cultural e histórica de Murillo, un lugar lleno de tradiciones, arquitectura colonial y relatos que marcaron la región.",
            link: "/blog/murillo-cultura-historia",
            BGcolor: "#EFE318",
            color: "black",
            imagen: IMAGES_URLS.PIC3
        },
        {
            id: 5,
            title: "Educación ambiental y turismo responsable",
            text: "Aprende cómo viajar de manera consciente, respetando la naturaleza y contribuyendo a la preservación de los ecosistemas locales.",
            link: "/blog/educacion-ambiental-responsable",
            BGcolor: "#EFE318",
            color: "black",
            imagen: IMAGES_URLS.PIC5
        },
        {
            id: 6,
            title: "Seguridad y recomendaciones",
            text: "Descubre consejos prácticos y medidas de seguridad que garantizan una experiencia de viaje tranquila y sin contratiempos.",
            link: "/blog/seguridad-recomendaciones",
            BGcolor: "#545525",
            color: "white",
            imagen: IMAGES_URLS.PIC6
        },
        {
            id: 8,
            title: "Parque Nacional Natural Los Nevados: maravilla natural",
            text: "Aprende de la biodiversidad, paisajes y actividades que hacen del Parque Nacional Natural Los Nevados un destino imperdible para los amantes de la naturaleza.",
            link: "/blog/parque-nacional-los-nevados",
            BGcolor: "#545525",
            color: "white",
            imagen: IMAGES_URLS.PIC8
        }
    ];

    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
        <ContainerGlobal>

            {isResponsive && <MobileSidebar />}

            <LogoBlogHeader />

            <NavBar colorNavbar="white"/>

            <TitleCont>
                <Title color="black">
                        Blog
                </Title>
            </TitleCont>    

            {isResponsive ? (
                <div style={{
                    width:"95%"
                }}>
                    <ResponsiveColumn>
                        {cardContent.map((item) => (
                            <ResponsiveCardItem key={item.id} to={item.link} $bg={item.imagen}>
                                <ResponsiveCardTitle>{item.title}</ResponsiveCardTitle>
                            </ResponsiveCardItem>
                        ))}
                    </ResponsiveColumn>
                </div>
            ): (
                <CardsContainer>
                    {cardContent.map((element) => (
                        <StyledCard 
                        key={element.id} 
                        BGcolor={element.BGcolor} 
                        textcolor={element.color}
                        onClick={() => handleCardClick(element)}
                        >
                            <Card.Img variant="top" src={element.imagen} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>{element.text}</Card.Text>
                            </Card.Body>
                        </StyledCard>
                    ))}
                </CardsContainer>
            )}        

            

        </ContainerGlobal>
    )
}

export default Blog

const StyledCard = styled(Card)`
    width: 18rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: ${(props) => props.BGcolor};
    color: ${(props) => props.textcolor};
    border-radius: 15px;

    &:hover {
        transform: scale(1.05) rotate(1.2deg); /* Zoom in y ligera rotación */
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    &:active {
        transform: scale(0.98) rotate(-1deg); /* Efecto al hacer click */
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;

    }
`;
const TitleCont = styled.div`
    margin: 5rem 0;
    width: 80%;
    display: flex;
    justify-content: flex-start;

    @media (max-width:768px) {
        margin: 2rem 0;
    }
`
const ContainerGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 768px) {
        height: 100%;
        margin-bottom: 3rem;
    }
`
const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;           /* Permite que las cards hagan wrap */
    justify-content: flex-start;   /* Centra las cards horizontalmente */
    gap: 2rem;                 /* Espacio entre cards */
    width: 80%;                /* Ajusta según tu layout */
    margin-bottom: 5rem;
`;
