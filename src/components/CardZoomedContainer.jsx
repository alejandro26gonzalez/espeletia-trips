import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CardZoomed from "./CardZoomed";
import styled from "styled-components";

const CardZoomedCont = ({ tours = [] }) => {


  return (
    <StyledSwiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
    >
      {tours.map((tour, index) => (
        <SwiperSlide key={index}>
            <Container>
                <CardZoomed
                    imagen={tour.imagen}
                    texto={tour.texto}
                    buttonText="Ver tour"
                    to={tour.link}
                />
            </Container>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default CardZoomedCont;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 0;

  .swiper-button-prev,
  .swiper-button-next {
    color: #545525;
  }
`;
const Container = styled.div`
    width: 300px;
`