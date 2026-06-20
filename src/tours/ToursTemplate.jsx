import { Container, Card} from "react-bootstrap";
import { useState } from "react";
import ToursLayout from "./ToursLayout"
import HeaderPictureTours from "./HeaderPictureTours"
import styled from "styled-components"
import GalleryTourSection from "./GalleryTourSection"
import useBreakpoint from "../hooks/useBreakpoint";
import PricesComponent from "./PricesComp";
import ItineraryComp from "./ItineraryComp";
<<<<<<< HEAD
=======
import BootIC from "../assets/icons/BotaIC.svg";
import EscudoIC from "../assets/icons/securityIC.svg"
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import ListedContainer from "../blogPages/ListedContainer";
import CtaFinalHome from "../components/CtaFinalHome";
import StyledAccordion from "../components/StyledAccordion";
import CardZoomedCont from "../components/CardZoomedContainer";
import { IMAGES_URLS } from "../constants/images";
import { ICONS_URLS } from "../constants/iconsLinks";


const ToursTemplate = ({
    bgImage, 
    Titulo, 
    imagesCarousel, 
    paragraphsText,
    cardsInfo,
    itinerarioInfo,
    accesoriosInfo,
    CTAPicture,
    moreToursInfo,
    dataPrice,
    nottwoDays
}) => {
    const [flippedCardId, setFlippedCardId] = useState(null);
    const handleFlip = (id) => {
        if (flippedCardId === id) {
            setFlippedCardId(null);
        } else {
            setFlippedCardId(id);
        }
    };
    const ambientalSecurity = [
        {
            text: 
            <>
                <strong>Aclimatación: </strong>Recomendamos llegar a Murillo 1 o 2 días antes. Hidrátate con suero y agua (1-3 litros diarios) desde una semana antes.
            </>,
            image: ICONS_URLS.SECURITY1
        },
        {
            text: 
            <>
                <strong>Restricciones de salud: </strong>No apto para personas con problemas cardio-respiratorios, hipertensión, migrañas crónicas, mujeres embarazadas, niños menores de 10 años o adultos mayores de 60 años sedentarios.
            </>,
            image: ICONS_URLS.SECURITY2
        },
        {
            text:
            <>
                <strong>Sostenibilidad: </strong>Somos un destino de conservación. Está prohibido el uso de plásticos de un solo uso y la recolección de material geológico o flora.
            </>,
            image: ICONS_URLS.SECURITY3
        },
        {
            text:
            <>
                <strong>Logística: </strong>Ten presente el Pico y Placa en la vía Murillo - El Ocho, especialmente en festivos.
            </>,
            image: ICONS_URLS.SECURITY4
        }
    ]
    const isResponsive = useBreakpoint("(max-width: 768px)");


    return (
        <ToursLayout>

            <HeaderPictureTours bgImage={bgImage}/>

            <ContainerGlobal>

                <TitleCont>
                    <h1>{Titulo}</h1>
                </TitleCont>

                <Container className="my-4">
                    <GalleryTourSection images={imagesCarousel}/>
                </Container>

                <Titles>Descripción general</Titles>
                <Container>
                    <hr />
                    {paragraphsText.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))}
                </Container>

                <InvisibleSepatator />

                <Titles>Puntos clave de la expedición</Titles>

                {isResponsive ? (
                    <CarouselContainer>
                        {cardsInfo.map((element) => (
                            <CarouselItem key={element.id}>
                                <FlipCardContainer>
                                    <FlipCardInner
                                    flipped={flippedCardId === element.id}
                                    onClick={() => handleFlip(element.id)}
                                    >
                                        <FlipIndicator>👆</FlipIndicator>
                                        <FlipCardFront
                                            style={{
                                            background: element.color,
                                            color: element.textColor,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            textAlign: "center"
                                            }}
                                        >
                                            <FlipImgStyled
                                            variant="center"
                                            src={element.icono}
                                            />
                                            <FlipTextStyled>
                                            {element.text}
                                            </FlipTextStyled>
                                        </FlipCardFront>

                                        <FlipCardBack
                                            style={{
                                            background: element.color,
                                            color: element.textColor
                                            }}
                                        >
                                            {element.backText}
                                        </FlipCardBack>

                                    </FlipCardInner>
                                </FlipCardContainer>
                            </CarouselItem>
                        ))}
                    </CarouselContainer>
                ):(
                    <GridContainer>
                        {cardsInfo.map((element) => (
                            <FlipCardContainer key={element.id}>
                                
                                <FlipCardInner
                                flipped={flippedCardId === element.id}
                                onClick={() => handleFlip(element.id)}
                                >
                                    <FlipIndicator>👆</FlipIndicator>
                                    <FlipCardFront 
                                    style={{
                                        background: element.color, 
                                        color: element.textColor,
                                        display: "flex",
                                        flexDirection:"column",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        height:"100%",
                                        textAlign: "center"
                                    }}
                                    >
                                        <FlipImgStyled 
                                        variant="center"
                                        src={element.icono}
                                        />
                                        <FlipTextStyled>
                                            {element.text}
                                        </FlipTextStyled>
                                    </FlipCardFront>
    
                                    <FlipCardBack
                                    style={{
                                        background: element.color, 
                                        color: element.textColor
                                    }}
                                    >
                                        {element.backText}
                                    </FlipCardBack>
    
                                </FlipCardInner>
                            </FlipCardContainer>
                        ))}
                    </GridContainer>
                )}


                <InvisibleSepatator />
            </ContainerGlobal>

            <ContainerGlobal id="precios">
                <PricesComponent dataPrice={dataPrice}/>
            </ContainerGlobal>

            <ItineraryComp 
            itinerarioArray={itinerarioInfo}
            nottwoDays={nottwoDays}
            />

            <ContainerGlobal>

                <Container>
                    <img src={ICONS_URLS.BOTA_ICONO} alt="bota icono" style={{marginBottom:"1.5rem"}}/>
                    <h3>Lo que debes llevar para la aventura</h3>
                </Container>

                <StyledAccordion array={accesoriosInfo} />


                <Container>
                    <img src={ICONS_URLS.ESCUDO_ICONO} alt="escudo icono" style={{marginBottom:"1.5rem"}}/>
                    <h3>Seguridad y Compromiso Ambiental</h3>
                    <p style={{ margin:"1.5rem 0"}}>Esta experiencia de <strong>dificultad media</strong> exige responsabilidad y respeto por la alta montaña:</p>
                </Container>
                
                <ListedContainer
                imagen={IMAGES_URLS.TOURS_TEMPLATE_IMG}
                reverse={true}
                >
                    <ul>
                        {ambientalSecurity.map((element, index) => (
                            <ListedItemInline key={index}>
                                <ListedItemImage src={element.image}/>
                                <p>{element.text}</p>
                            </ListedItemInline>
                        ))}
                    </ul>
                </ListedContainer>

                <InvisibleSepatator />

                <CtaFinalHome 
                reverse={true}
                imagen={CTAPicture}
                buttonText="Ver precios"
                texto="¿Estás listo para conquistar la montaña?"
                link="#precios"
                
                />

                <InvisibleSepatator />

                <Container>
                    <h2 style={{ textAlign:"left", marginBottom: "1.5rem"}}>Otros tours que te pueden interesar</h2>

                    <Container >
                        <CardZoomedCont 
                        tours={moreToursInfo}
                        />
                    </Container>
                </Container>

                <InvisibleSepatator />

            </ContainerGlobal>


        </ToursLayout>
    )
}

export default ToursTemplate 

const ContainerGlobal = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 768px) {
        width: 95%;        
    }
`
const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
`
const TitleCont = styled.div`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: left;

    h1 {
        width: 60%;
        margin-left: 2rem;
        color: white;
        font-size: 4rem;

        @media (max-width: 768px) {
            width: 95%;
            font-size: 2rem;
            text-align: center;
        }
    }
`
const Titles = styled.h3`
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        text-align: center;
    }
`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 2 columnas de 200px */
    gap: 50px; /* gap: fila (vertical) 20px, columna (horizontal) 30px */
    justify-content: space-evenly; /* centra el grid horizontalmente */
    margin: 2rem 0;
`
const FlipCardBack = styled(Card)`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg); /* La cara trasera está girada 180° */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    font-weight: bold;
    padding: 1rem;
`;
const FlipCardFront = styled(Card)`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Esconde el reverso cuando está frente */
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
const FlipCardContainer = styled.div`
  perspective: 1000px; /* Necesario para efecto 3D */
  width: 300px;
  height: 300px;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }
`;
const FlipImgStyled = styled(Card.Img)`
    width: 40%;                             
    height:auto;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        margin-bottom: 0.5rem;
    }
`
const FlipTextStyled = styled(Card.Text)`
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`
const FlipIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: white;

  pointer-events: none; /* 👈 NO bloquea el click */
  z-index: 5;
`;
const CarouselContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow-x: auto;
  overflow-y: hidden;

  display: flex;
  gap: 1rem;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  padding: 0.5rem;

  /* Ocultar scrollbar (opcional elegante) */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CarouselItem = styled.div`
  min-width: 180px;  /* ancho de cada card */
  height: 100%;
  flex: 0 0 auto;

  scroll-snap-align: start;
`;
const ListedItemInline = styled.li`
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        
    }

`
const ListedItemImage = styled.img`
    width: 80px;
    height: auto;
    @media (max-width: 768px) {
        /* width: 50px; */
        display: none;
    }
`