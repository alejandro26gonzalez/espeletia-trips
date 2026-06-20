import styled from "styled-components"
import Form from 'react-bootstrap/Form';
import {Container } from "react-bootstrap";
import { forwardRef, useState } from "react";
import SliderComp from "./SliderComp";


const PhotoMainer = forwardRef(({selectedTour, setSelectedTour}, ref) => {
    
    const imageFolders = {
        campanita: import.meta.glob("../../assets/Fotos/CANON DEL RECIO TERMAL DE LA CAMPANITA/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        mirador: import.meta.glob("../../assets/Fotos/HIKING MIRADOR DE LOS NEVADOS/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
        nevado: import.meta.glob("../../assets/FoXtos/NEVADO DE SANTA ISABEL/*.{jpeg,png,jpg}", {eager:true, import: "default"}),
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

    return (
    <ContainerMain>

        {/* Menu de seleccion del tipo de galeria segun el tour */}
        <Container className="d-flex justify-content-end g-2">
            <StyledSelect 
            aria-label="Default select example"
            value={selectedTour}
            onChange={handleChange}
            className="w-75"
            >
                <option value="valle">Valle de las Tumbas</option>
                <option value="campanita">Termal de la Campanita</option>
                <option value="canaan">Termal de Canaan</option>
                <option value="mirador">Mirador de los Nevados</option>
                <option value="oso">Camino del Oso Mosul</option>
                <option value="nevado">Expedición al Nevado de Santa Isabel</option>
            </StyledSelect>

        </Container>

        {/* slider con las imagenes moviendose automaticamente */}
        <SliderWrapper className={loading ? "fade-out" : "fade-in"}>
            {loading && <Loader />}
            <SliderComp ref={ref} images={images}/>
        </SliderWrapper>
    
    </ContainerMain>)
})

export default PhotoMainer

const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
`
const StyledSelect = styled(Form.Select)`
    background-color: #545525;
    color: white;
    font-weight: 700;
    border: none;
    box-shadow: none;
    backdrop-filter: blur(6px);
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


