import {useState} from "react"
import styled from "styled-components";
import Title from "./Title";
import CertificationModals from "./CertificationModals";
import { IMAGES_URLS } from "../constants/images";

const CertificateSection = () => {

    const [showESCNNA, setShowESCNNA] = useState(false);
    const [showCortolima, setShowCortolima] = useState(false);
    const [showColasistencia, setShowColasistencia] = useState(false);


    return <Container>
        <Title color="black">
            Seguro y certificado
        </Title>
        <Parrafo>
            Contamos con seguro de viaje a través de Colasistencia y tenemos certificado de sello Verde a traves de Cortolima
        </Parrafo>

        <LogoCont>

            <ClickableLogo2
                src={IMAGES_URLS.LogoColasistencia}
                alt="logo colasist"
                className="logo1"
                onClick={() => setShowColasistencia(true)}
                title="Ver póliza de colasistencia"
            />
            <ClickableLogo
                src={IMAGES_URLS.LogoCortolima}
                alt="logo cortolima"
                className="logo2"
                onClick={() => setShowCortolima(true)}
                title="Ver certificación Sello Verde Cortolima"
            />
            <ClickableLogo2
                src={IMAGES_URLS.LogoEscnna}
                alt="logo Escnna"
                className="logo3"
                onClick={() => setShowESCNNA(true)}
                title="Ver certificación ESCNNA"
            />
        </LogoCont>

        <CertificationModals
            showESCNNA={showESCNNA}
            showCortolima={showCortolima}
            showColasistencia={showColasistencia}
            onHideESCNNA={() => setShowESCNNA(false)}
            onHideCortolima={() => setShowCortolima(false)}
            onHideColasistencia={() => setShowColasistencia(false)}
            
        />


    </Container>
}

export default CertificateSection

const Logo = styled.img`
  height: 80px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */
  @media (max-width: 768px) {
        height: 50px;
    }
`;
const Logo2 = styled.img`
  height: 150px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */

  @media (max-width: 768px) {
        height: 150px;
    }
`;
const Logo3 = styled.img`
  height: 80px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */

  @media (max-width: 768px) {
        height: 100px;
    }
`;
const ClickableLogo = styled.img`
  height: 150px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.07);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));
  }

  &.logo2 {
    @media (max-width: 768px) { height: 150px; }
  }
  &.logo3 {
    @media (max-width: 768px) { height: 100px; }
  }
`;
const ClickableLogo2 = styled.img`
  height: 80px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.07);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18));
  }

  &.logo2 {
    @media (max-width: 768px) { height: 150px; }
  }
  &.logo3 {
    @media (max-width: 768px) { height: 100px; }
  }
`;

const Parrafo = styled.p`
    font-size: 1.5rem;
    margin: 2rem 0;
    width: 60%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 80%;
    }
`
const LogoCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px; /* espacio uniforme entre logos */
    flex-wrap: wrap; /* por si en mobile se bajan */
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0;
`

