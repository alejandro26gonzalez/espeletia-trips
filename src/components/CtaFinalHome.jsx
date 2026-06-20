import Container from 'react-bootstrap/Container';
import Button from "../components/Button"
import styled from "styled-components";
import { useNavigate } from 'react-router';
import useBreakpoint from '../hooks/useBreakpoint';


const CtaFinalHome = ({
    imagen,
    texto,
    buttonText = "",
    reverse = false,     // invertir orden   
    link
}) => {
    const navigate = useNavigate();
    const isResponsive = useBreakpoint("(max-width: 768px)");
    const handleClick = () => {
        if (!link) return;

        if (link.startsWith("#")) {
            const targetElement = document.querySelector(link);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
    <GradientWrapper className='mt-1 mb-2 w-100'>
        {isResponsive ? (
            <ContResponsive>

                <Container className='w-100 d-flex flex-column justify-content-center align-items-center p-3' style={{ height:"200px"}}>
                    <h2 style={{ color: "white", marginBottom: "1.5rem", textAlign:"center"}}>{texto}</h2>
                    <NavButton onClick={handleClick}>
                        <Button color="black" text={buttonText} tipo="button" />
                    </NavButton>
                </Container>

            </ContResponsive>
        ):(
            
        <Container fluid className='p-0 justify-content-between'>
            <div 
            style={{
                display: "flex",
                height: "100%", // asegura que ocupe toda la altura del GradientWrapper
                flexDirection: reverse ? "row-reverse" : "row"
            }}
            reverse={reverse}>
                
                <ImagenWrapper>

                    <Imagen src={imagen} alt="imagen" $reverse={reverse}/>
                
                </ImagenWrapper>
                
                <div
                style={{
                    width: "30%",
                    height: "400px", // iguala altura con la imagen
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "2rem"
                }}
                >
                <h2 style={{ color: "white", marginBottom: "1.5rem" }}>{texto}</h2>
                <NavButton onClick={handleClick}>
                    <Button color="black" text={buttonText} tipo="button" />
                </NavButton>
                </div>
                
            </div>
        </Container>
        )}
    </GradientWrapper>)
}

export default CtaFinalHome

const NavButton = styled.button`
    text-decoration: none;
    width: 80%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 50%;
    }
`
const GradientWrapper = styled.div`
  height: 400px;
  background: #545525;
  background: linear-gradient(304deg,rgba(84, 85, 37, 1) 0%,rgba(185, 187, 81, 1) 100%);
  border-radius: 20px;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

  @media (max-width: 768px) {
    height: 100%;
  }
`;
const ImagenWrapper = styled.div`
  width: 70%;          /* ancho que quieras */
  height: 100%;        /* altura que hereda del padre */
  overflow: hidden;    /* recorta cualquier exceso de la imagen */
`;
const Imagen = styled.img`
  width: 100%;         /* ocupa todo el ancho del contenedor */
  height: 400px;        /* mantiene proporción */
  display: block;
  object-fit: cover;   /* opcional, recorta proporcionalmente */

  border-top-left-radius: ${({ $reverse }) => ($reverse ? "0" : "15px")};
  border-bottom-left-radius: ${({ $reverse }) => ($reverse ? "0" : "15px")};
  border-top-right-radius: ${({ $reverse }) => ($reverse ? "15px" : "0")};
  border-bottom-right-radius: ${({ $reverse }) => ($reverse ? "15px" : "0")};
`;
const ContResponsive = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
`