import styled from "styled-components"  
import ToursLayout from "../tours/ToursLayout"
import { useState } from "react"
import { useNavigate } from "react-router"
import Carousel from 'react-bootstrap/Carousel';
import Button from "../components/Button";
import useBreakpoint from "../hooks/useBreakpoint"
import { IMAGES_URLS } from "../constants/images";

const Tours = () => {

    const navigate = useNavigate();
    const isResponsive = useBreakpoint("(max-width: 768px)");
    const [index, setIndex] = useState(0);
    const carouselItems = [
        {
            id: 1,
            image: IMAGES_URLS.TOURS1,
            titulo: "Valle de las Tumbas",
            descripcion: "Descubre el misterioso Valle de las Tumbas, un lugar lleno de historia y leyendas en el corazón del Nevado del Ruíz. Explora sus formaciones rocosas únicas y sumérgete en la cultura local mientras disfrutas de vistas impresionantes.",
            link: "/tours/valle-tumbas"
        },
        {
            id: 2,
            image: IMAGES_URLS.TOURS2,
            titulo: "Termal de la Campanita",   
            descripcion: "Relájate en las cálidas aguas termales de la Campanita, un oasis natural rodeado de paisajes impresionantes. Disfruta de sus propiedades curativas mientras te sumerges en un entorno tranquilo y revitalizante.",
            link: "/tours/campanita"
        },
        {
            id: 3,
            image: IMAGES_URLS.TOURS3,
            titulo: "Termal de Canaan",
            descripcion: "Sumérgete en las aguas termales de Canaan, un refugio natural que ofrece una experiencia de relajación única. Rodeado de belleza natural, este lugar es perfecto para desconectar y rejuvenecer cuerpo y mente.",
            link: "/tours/canaan"   
        },
        {
            id: 4,
            image: IMAGES_URLS.TOURS4,
            titulo: "Mirador de los Nevados",
            descripcion: "Admira vistas panorámicas impresionantes desde el Mirador de los Nevados, un punto estratégico para contemplar la majestuosidad de las montañas. Disfruta de un paisaje que te dejará sin aliento y captura momentos inolvidables.",
            link: "/tours/mirador-nevados"
        }  ,
        {
            id: 5,
            image: IMAGES_URLS.TOURS5,
            titulo: "Camino del Oso",
            descripcion: "Embárcate en el Camino del Oso, una ruta de senderismo que te llevará a través de paisajes impresionantes y la oportunidad de avistar la fauna local. Conecta con la naturaleza mientras exploras este camino lleno de aventuras.",
            link: "/tours/camino-oso"
        },
        {
            id: 6,
            image: IMAGES_URLS.TOURS6,
            titulo: "Expedición al nevado Santa Isabel",
            descripcion: "Únete a la expedición al Nevado Santa Isabel, una aventura épica que te llevará a la cima de esta majestuosa montaña. Experimenta la emoción de conquistar alturas impresionantes y disfruta de vistas panorámicas que te dejarán sin aliento.",
            link: "/tours/nevado-santa-isabel"
        }    
    ]
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const handleClick = () => {
        const currentItem = carouselItems[index];
        navigate(currentItem.link);
    }


    return (
        <ToursLayout>

            {isResponsive ? (
                <ResponsiveContainer>
                    {carouselItems.map((item) => (
                        <ResponsiveItem key={item.id} $bg={item.image}>
                            <Title>{item.titulo}</Title>
                            <p>{item.descripcion}</p>
                            <ButtonCont>
                                <Button
                                    text="Ver más"
                                    color="#fff"
                                    bgColor="#CE5937"
                                    onClick={handleClick}
                                />
                            </ButtonCont>
                        </ResponsiveItem>
                    ))}
                
                </ResponsiveContainer>
            ):(
                <div style={{ width: "100%", height: "100%", zIndex:"0" }}>
                    <Carousel activeIndex={index} onSelect={handleSelect} fade carouselInterval={10000} indicators controls>
                        {carouselItems.map((item) => (
                            <Carousel.Item key={item.id}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="imagen"
                                />
                                <CaptionWrapper>
                                    <Title>{item.titulo}</Title>
                                    <p>{item.descripcion}</p>
                                    <ButtonCont>
                                        <Button
                                            text="Ver más"
                                            color="#fff"
                                            bgColor="#CE5937"
                                            onClick={handleClick}
                                        />
                                    </ButtonCont>
                                </CaptionWrapper>
    
                            </Carousel.Item>
                        ))}
    
                    </Carousel>
                </div>
            )}


        </ToursLayout>
    )
}

export default Tours

const CaptionWrapper = styled(Carousel.Caption)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  width: 70%;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    width: 70%;
  }
`;
const Title = styled.h1`
    color: #FFFFFF;
    text-shadow: 3px 5px 2px #474747, -1px -6px 16px rgba(206,89,55,0);
    letter-spacing: 3px;
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        width: 70%;
    }
`
const ButtonCont = styled.div`
    width: 250px;
    margin-top: 1rem;

    @media (max-width: 768px) {
        width: 150px ;
    }
`
const ResponsiveContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    height: fit-content;
    gap: 5rem;
    margin-bottom: 5rem;
`
const ResponsiveItem = styled.div`
    position: relative;
    width: 100%;
    height: 400px; /* ajusta la altura a tu gusto */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center; /* centra verticalmente */
    align-items: center;     /* centra horizontalmente */
    text-align: center;
    padding: 1rem;
    color: white;

    /* Imagen de fondo dinámica */
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Opcional: Overlay para que el texto resalte */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.35); /* semitransparente */
        z-index: 0; /* detrás de los elementos hijos */
    }

    /* Aseguramos que los elementos hijos estén sobre el overlay */
    > * {
        position: relative;
        z-index: 1;
    }
`






