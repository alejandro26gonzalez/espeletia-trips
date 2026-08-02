import styled from "styled-components";
import IMAGES from "../../assets/images";

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
    p {
        width: 60%;
        text-align: center;
    }
`
export const Decoration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    
    strong {
        color: #698B4A;
    }
    
`;
export const Line = styled.div`
    width: 80px;
    height: 2px;
    background: #698B4A;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const Leaf = styled.img`
    width: 48px;
    height: auto;
    margin: 0;
`;
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* espacio vertical y horizontal */
    width: 100%;

    background-image: url(${IMAGES.componentes.destinationCards.mainBkg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    }
`
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px; /* espacio vertical y horizontal */
  width: 80%;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
