import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import useBreakpoint from '../hooks/useBreakpoint';
import {IMAGES_URLS} from '../constants/images';

function ExperienciasSectionCarrusel() {

  const isResponsive = useBreakpoint("(max-width: 768px");
  const cardsData = [
    {
      id: 1,
      name: "Valentina Ríos",
      testimonial: "Viajar a la montaña fue una experiencia inolvidable. Aprendí a conectarme con la naturaleza, respiré aire puro y disfruté cada instante rodeada de paisajes impresionantes. Definitivamente, repetiría esta aventura mil veces.",
      image: IMAGES_URLS.Persona1,
      background: IMAGES_URLS.BACKGROUND1
    },
    {
      id: 2,
      name: "Camila Torres",
      testimonial: "Participar en el taller de cocina internacional me abrió un mundo de sabores y técnicas nuevas. Me encantó preparar platos que nunca había imaginado y compartirlos con personas de todo el mundo. Fue una experiencia divertida y muy enriquecedora.",
      image: IMAGES_URLS.Persona2,
      background: IMAGES_URLS.BACKGROUND2
    },
    {
      id: 3,
      name: "Santiago Gómez",
      testimonial: "El tour de senderismo fue una aventura increíble. Las vistas panorámicas desde la cima eran impresionantes, y la guía nos brindó información fascinante sobre la flora y fauna local. Sin duda, una experiencia que recomendaría a cualquier amante de la naturaleza.",
      image: IMAGES_URLS.Persona3,
      background: IMAGES_URLS.BACKGROUND3
    }
  ]

  return (
    <>
    {isResponsive ? (
      <CarouselCont>
        <Carousel>  
  
        {cardsData.map((data) => (
         <Carousel.Item interval={4000} className="position-relative" key={data.id}>
          <img
            className="d-block w-100 rounded-4"
            src={data.background}
            alt="First slide"
            />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-center w-75 p-2">
            <h3>{data.name}</h3>
            <p>"{data.testimonial}"</p>
          </Carousel.Caption>
        </Carousel.Item> 
        ))}
  
      </Carousel>
      
      </CarouselCont>
    ):(
      <Carousel>
  
        {cardsData.map((data) => (
         <Carousel.Item interval={1000} className="position-relative" key={data.id}>
          <img
            className="d-block w-100 rounded-4"
            src={data.background}
            alt="First slide"
            />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-center  w-75">
            <h3>{data.name}</h3>
            <p>"{data.testimonial}"</p>
            <img
              src={data.image}
              alt={`Foto de ${data.name}`}
              width="100"
              style={{
                  borderRadius:"50%"
              }}
              />
  
          </Carousel.Caption>
        </Carousel.Item> 
        ))}
  
      </Carousel>
    )}
    </>
  );
}

export default ExperienciasSectionCarrusel;

const CarouselCont = styled.div`
  min-width: 320px;
`