import { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import styled from "styled-components";
import GlobalContainer from "../components/GlobalContainer";
<<<<<<< HEAD
=======
import Card1Home from "../assets/Backgrounds/Card1Home.jpg";
import Card2Home from "../assets/Backgrounds/Card2Home.jpg";
import Card3Home from "../assets/Backgrounds/Card3Home.jpg";
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import CardHome from "../components/CardHome";
import MobileSideBar from "../components/Mobilesidebar";
import ResponsiveCardContainer from "../components/responsiveComponents/CardsColumn"
import useBreakpoint from "../hooks/useBreakpoint";
import ToursSection from "../components/ToursSection";
import CertificateSection from "../components/CertificateSection";
import VideoSection from "../components/VideoSection"
import ExperienciasSection from "../components/ExperienciasSection"
import FormSection from "../components/FormSection"
import CtaFinalHome from "../components/CtaFinalHome"
import { IMAGES_URLS } from "../constants/images";


const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const isResponsive = useBreakpoint("(max-width: 768px)");

    const cardsData = [
        {
            id:1,
            image: IMAGES_URLS.Card1Home,
            bgColor:"#EFE318",
            textColor:"#000",
            text:"La perla del norte del Tolima",
            link: "/blog/murillo-cultura-historia"
        },
        {
            id:2,
            image: IMAGES_URLS.Card2Home,
            bgColor:"#545525",  
            textColor:"#fff",
            text:"Parque Nacional Natural Los Nevados",
            link: "/blog/parque-nacional-los-nevados"
        },
        {
            id:3,
            image: IMAGES_URLS.Card3Home,
            bgColor:"#EFE318",
            textColor:"#000",
            text:"Cumbre del Nevado de Santa Isabel",
            link: "/blog/nevado-santa-isabel"
        }
    ]

    const heroImages = Object.keys(IMAGES_URLS)
    .filter(key => key.startsWith('Hero'))
    .map(key => IMAGES_URLS[key]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex( prev => 
                prev === heroImages.length - 1 ? 0 : prev + 1 
            );
        }, 8000);
        return () => clearInterval(interval);
    }, []);


    return (
        <GlobalContainer>

{/* titulo y encabezdo */}
            {isResponsive ? <MobileSideBar color="white"/> : <NavbarComponent colorNavbar={"#fff"} />}

            <HeaderPicture bgImage={heroImages[currentIndex]}/>

            <MainContainer>
                <Title>DESCUBRE UN DESTINO MÁGICO Y CULTURAL DE COLOMBIA</Title>
                <Subtitle>Murillo - Tolima</Subtitle>
                <Text >Reserva una experiencia única en Colombia</Text>
            </MainContainer>

{/* contenedor de tarjetas con hiperlink a blog */}
            {isResponsive ? 
            (
                <>
                <h3
                style={{
                    width:"100%",
                    textAlign:"center"
                }}
                >Artículos más visitados</h3>
                <ResponsiveCardContainer>
                    {cardsData.map((item) => (
                        <CardHome 
                        key={item.id}
                        image={item.image}
                        to={item.link}
                        text={item.text}
                        />
                    ))}
                </ResponsiveCardContainer>
                </>
            ):( 
                <CardsContainer>
                    {cardsData.map(card => (
                        <CardHome 
                            key={card.id}
                            image={card.image}
                            bgColor={card.bgColor}
                            textColor={card.textColor}
                            to={card.link}
                        >
                            {card.text}
                        </CardHome>
                    ))}
                </CardsContainer>
            )}

{/* seccion para certificaciones */}
            <SubContainer>
                <CertificateSection />
            </SubContainer>

{/* planes turisticos ofrecidos para los clientes en una lista */}
            <ToursContainer>
                <ToursSection />
            </ToursContainer>

{/* seccion con video representativo de la ruta a la montaña */}
            <ToursContainer>
                <VideoSection />
            </ToursContainer>

{/* seccion de experiencias o recomendaciones de algunas personas */}
            <ToursContainer>
                <ExperienciasSection />
            </ToursContainer>

            < InvisibleSepatator/>
{/* seccion del formulario con logos de veracidad */}
            <SubContainer>
                <FormSection />
            </SubContainer>

            <InvisibleSepatator />

{/* CTA al final de la pagina principal */}
            <SubContainer >
                <CtaFinalHome 
                imagen={IMAGES_URLS.CTAHome}
                texto="Encuentra tu tour ideal"
                buttonText="Ver tours"
                link="/tours"
                />
            </SubContainer>
        
        </GlobalContainer>
    )
}

export default Home

const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
`
const ToursContainer = styled.div`
    width: 100%;
    padding: 3rem 0;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: fit-content;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
       width: 95%;
    }
`
const CardsContainer = styled.div`
    position: relative;
    top: -130px;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: fit-content;
    justify-content: space-around;
    gap: 1rem;
`;
const Text = styled.p`
    color: #FFFFFF;
    margin: 1rem 0 2rem 0;
`
const Title = styled.h1`
    color: #FFFFFF;
    text-shadow: 3px 5px 2px #474747, -1px -6px 16px rgba(206,89,55,0);
    letter-spacing: 8px;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 2rem;
    }

` 
const Subtitle = styled.h2`
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 500;

`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3rem 0;
    height: 60vh;
    max-width: 90%;

`
const HeaderPicture = styled.div`
    position: absolute;
    width: 100%;
    height: 550px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: background-image 0.8s ease-in-out;

    z-index: -1;
    top: 0;
`


