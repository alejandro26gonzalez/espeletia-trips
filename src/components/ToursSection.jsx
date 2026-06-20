import styled from "styled-components"
import Title from "./Title"
import CardZoomed from "./CardZoomed"
<<<<<<< HEAD
=======
import Home1 from "../assets/Backgrounds/Home1.jpg"
import Home2 from "../assets/Backgrounds/Home2.jpg"
import Home3 from "../assets/Backgrounds/Home3.jpg"
import Home4 from "../assets/Backgrounds/Home4.jpg"
import Home5 from "../assets/Backgrounds/Home5.jpg"
import Home6 from "../assets/Backgrounds/Home6.jpeg"
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import useBreakpoint from "../hooks/useBreakpoint"
import ResponsiveCardItem from "../components/responsiveComponents/CardItem"
import ResponsiveCardTitle from "../components/responsiveComponents/CardTitle"
import ResponsiveCardColumn from "../components/responsiveComponents/CardsColumn"
import { IMAGES_URLS } from "../constants/images"


const ToursSection = () => {

    const cardsData = [
        {
            id: 1,
            image: IMAGES_URLS.Home1,
            text: "Valle de las Tumbas",
            link: "/tours/valle-tumbas"
        },
        {
            id:2,
            image: IMAGES_URLS.Home2,
            text: "Termal de la Campanita",
            link: "/tours/campanita"
        },
        {
            id: 3,
            image: IMAGES_URLS.Home3,
            text: "Termal de Canaan",
            link: "/tours/canaan"
        },
        {
            id:4,
            image: IMAGES_URLS.Home4,
            text: "Mirador de los Nevados",
            link: "/tours/mirador"
        },
        {
            id: 5,
            image: IMAGES_URLS.Home5,
            text: "Camino del Oso",
            link: "/tours/camino-oso"
        },
        {
            id:6,
            image: IMAGES_URLS.Home6,
            text: "Expedición al nevado Santa Isabel",
            link:"/tours/nevado-santa-isabel"
        }
    ]
    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
        <>
        {isResponsive ? (
            <ResponsiveBackground>
                <h2 style={{color:"black", textAlign:"center"}}>Planes turísticos que ofrecemos</h2>

                <ResponsiveCardColumn>
                    {cardsData.map((item) => (
                        <ResponsiveCardItem 
                        key={item.id} 
                        $bg={item.image} 
                        to={item.link}
                        >
                            <ResponsiveCardTitle>{item.text}</ResponsiveCardTitle>
                        </ResponsiveCardItem>
                    ))}
                </ResponsiveCardColumn>
            
            </ResponsiveBackground>
        ):(
            <BackgroundSection>
                <InternContainer>
                    <Title color="white">
                        Planes turísticos que ofrecemos
                    </Title>

                    <CardsGrid>
                    {cardsData.map((card) => (
                        <CardZoomed 
                        key={card.id}
                        imagen={card.image}
                        texto={card.text}
                        to={card.link}
                        />
                    ))}
                    </CardsGrid>

                </InternContainer>

            </BackgroundSection>
        )}
        </>
    )
}   

export default ToursSection

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* espacio vertical y horizontal */
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const InternContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
`
const BackgroundSection = styled.section`
    width: 100%;
    height: 750px;
    background-image: url(${IMAGES_URLS.TOURSECTION});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ResponsiveBackground = styled.div`
    background: linear-gradient(to right, #2c3e50, #bdc3c7);
    width: 100%;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`