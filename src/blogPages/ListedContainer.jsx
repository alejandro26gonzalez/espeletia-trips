import styled from "styled-components"
import Container from "react-bootstrap/Container"

const ListedContainer = ({ 
    children, 
    imagen, 
    overlayText,        // texto opcional
    showOverlay = true, // mostrar o no el texto
    reverse = false     // invertir orden
}) => {

    return (
        <Container className="mt-5 mb-2 w-100 mx-0 p-0">
            <Row reverse={reverse}>

                {/* Columna de texto */}
                <Container className="d-flex flex-column g-1">
                    {children}
                </Container>

                {/* Columna de imagen */}
                <ImageWrapper>
                    <Picture2 src={imagen} />

                    {showOverlay && overlayText && (
                        <ButtonCont>
                            {overlayText}
                        </ButtonCont>
                    )}

                </ImageWrapper>

            </Row>
        </Container>
    )
}

export default ListedContainer

const Row = styled.div`
    display: flex;
    gap: 2rem;
    align-items: start;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

const Picture2 = styled.img`
    border-radius: 15px;
    width: 100%;
    display: block;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const ButtonCont = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    z-index: 2;
    border-radius: 15px;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    background-color: #EFE318;
    @media (max-width: 768px) {
        width: 80%;
    }
`