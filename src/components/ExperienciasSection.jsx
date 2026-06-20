import styled from "styled-components";
import Title from "./Title";
import ExperienciasSectionCarrusel from './ExperienciasSectionCarrusel'


const ExperienciasSection = () => {

    return (
    <Container>
        <Liner />
        <Title color="black">Esto es lo que ya han vivido otros clientes</Title>
        <h4>Tú puedes ser el siguiente</h4>
        <SliderCont>
            < ExperienciasSectionCarrusel />
        </SliderCont>
    </Container>)
}

export default ExperienciasSection


const SliderCont = styled.div`
    width: 60%;
    height: fit-content;

    @media (max-width: 768px) {
        width: 95%;
    }
`

const Container = styled.div`
    position: relative;   /* referencia para el liner absoluto */
    width: 100%;
    height: 600px;
    text-align: center;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
        height: fit-content;
    }
`
const Liner = styled.div`
    position: absolute;       /* lo ponemos fuera del flujo normal */
    top: 50%;                 /* centrado verticalmente */
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 150px;             /* solo una línea decorativa */
    background: linear-gradient(
        90deg,
        rgba(84, 85, 37, 1) 1%,
        rgba(42, 123, 155, 1) 26%, 
        rgba(87, 199, 133, 1) 59%, 
        rgba(239, 227, 24, 1) 100%
    );
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px;
    pointer-events: none;     /* no bloquea interacción de otros elementos */
    z-index: 0;               /* se queda en el fondo */

    @media (max-width: 768px) {
        display: none;
    }
`;
