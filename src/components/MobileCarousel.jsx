import { useRef } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardHome from "./CardHome";

const MobileCarousel = ({ data }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth * 0.8;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <ArrowLeft onClick={() => scroll("left")}>
        <RiArrowLeftSLine size={30} />
      </ArrowLeft>

      <CarouselContainer ref={carouselRef}>
        {data.map((card) => (
          <CardWrapper key={card.id}>
            <CardHome
              image={card.image}
              bgColor={card.bgColor}
              textColor={card.textColor}
            >
              {card.text}
            </CardHome>
          </CardWrapper>
        ))}
      </CarouselContainer>

      <ArrowRight onClick={() => scroll("right")}>
        <RiArrowRightSLine size={30} />
      </ArrowRight>
    </Wrapper>
  );
};

export default MobileCarousel;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 80%;
  scroll-snap-align: center;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
  cursor: pointer;
  background: white;
  border-radius: 50%;
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  cursor: pointer;
  background: white;
  border-radius: 50%;
`;
