import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import {Container } from "react-bootstrap";
import Title from "../Title"

const ResponsiveGalery = ({selectedTour, setSelectedTour}) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const imageFolders = {
        campanita: import.meta.glob("../../assets/Fotos/CANON DEL RECIO TERMAL DE LA CAMPANITA/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        mirador: import.meta.glob("../../assets/Fotos/HIKING MIRADOR DE LOS NEVADOS/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        nevado: import.meta.glob("../../assets/Fotos/NEVADO DE SANTA ISABEL/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        valle: import.meta.glob("../../assets/Fotos/Nevado del Ruiz Valle de las Tumbas/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        canaan: import.meta.glob("../../assets/Fotos/TERMAL DE CANAAN/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        oso: import.meta.glob("../../assets/Fotos/TREKKING OSO MOSUL/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
    }

    const [loading, setLoading] = useState(false);

    const images = Object.values(imageFolders[selectedTour] || {});

    const handleChange = (e) => {
        const newTour = e.target.value;
        setLoading(true);

        setTimeout(() => {
            setSelectedTour(newTour);
            setLoading(false);
        }, 700); // duración animación
    };

    useEffect(() => {
        const handlePopState = () => {
        setSelectedIndex(null);
        };

        if (selectedIndex) {
        window.history.pushState({ modal: true }, "");
        window.addEventListener("popstate", handlePopState);
        }

        return () => {
        window.removeEventListener("popstate", handlePopState);
        };
    }, [selectedIndex]);

    const openImage = (index) => {
        setSelectedIndex(index);
    };  

    const closeImage = () => {
        setSelectedIndex(null);
        window.history.back(); // vuelve atrás si abrió modal
    };

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
        nextImage();
    }

    if (touchStart - touchEnd < -50) {
        prevImage();
    }
    };

    return (
        <MainContainer>

            <Title color="white">
                Galería
            </Title>
            <Container className="d-flex justify-content-center g-2">
                <StyledSelect 
                aria-label="Default select example"
                value={selectedTour}
                onChange={handleChange}
                className="w-100">
                    <option value="valle">Valle de las Tumbas</option>
                    <option value="campanita">Termal de la Campanita</option>
                    <option value="canaan">Termal de Canaan</option>
                    <option value="mirador">Mirador de los Nevados</option>
                    <option value="oso">Camino del Oso Mosul</option>
                    <option value="nevado">Expedición al Nevado de Santa Isabel</option>
                </StyledSelect>
            </Container>

            <SliderWrapper className={loading ? "fade-out" : "fade-in"}>
                {loading && <Loader />}

                <Grid>
                    {images.map((img, index) => (
                        <ImageItem
                            key={index}
                            src={img}
                            onClick={() => openImage(index)}
                        />
                    ))}
                </Grid>
            </SliderWrapper>

            {selectedIndex !== null && (
                <Overlay
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <CloseButton onClick={closeImage}>✕</CloseButton>

                    <ArrowLeft onClick={prevImage}>‹</ArrowLeft>

                    <FullImage src={images[selectedIndex]} />

                    <ArrowRight onClick={nextImage}>›</ArrowRight>
                </Overlay>
            )}
        
        </MainContainer>
    )
}

export default ResponsiveGalery;

const StyledSelect = styled(Form.Select)`
    background-color: #545525;
    color: white;
    font-weight: 700;
    border: none;
    box-shadow: none;
    font-size: 1.2rem;

    &:focus {
        opacity: 0.8;
        background-color: #5d5e2f;
        color: white;
        font-weight: 700;
        box-shadow: none;
        border: none;
    }

    &:hover {
        background-color: #5d5e2f;
        cursor: pointer;
    }

      /* Cambiar icono del dropdown a blanco */
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 16 16' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M1.5 5l6 6 6-6'/></svg>");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;

  /* Estilo del dropdown desplegado (limitado por navegador) */
    option {
        background-color: rgba(50, 50, 50, 0.85);
        color: white;
    }
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-bottom: 3rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ImageItem = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.25s ease;

  &:active {
    transform: scale(0.97);
  }
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
const FullImage = styled.img`
  max-width: 95%;
  max-height: 90%;
  object-fit: contain;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
`;
const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    transition: opacity 0.4s ease, transform 0.4s ease;
    display: flex;
    justify-content: end;

    &.fade-out {
        opacity: 0;
        transform: scale(0.98);
    }

    &.fade-in {
        opacity: 1;
        transform: scale(1);
    }
`;
const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255,255,255,0.2);
    border-top: 4px solid #ffffff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    transform: translate(-50%, -50%);
    z-index: 10;

    @keyframes spin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;
const ArrowLeft = styled.div`
  position: absolute;
  left: 20px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
`;
const ArrowRight = styled.div`
  position: absolute;
  right: 20px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
`;