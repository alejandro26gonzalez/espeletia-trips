import styled from "styled-components";

const Button = ({
    text, 
    color="black", 
    bgColor="#EFE318", 
    tipo = "button",
    onClick,
    className

}) => {
    return (
    <Container 
    color={color} 
    bgColor={bgColor}
    type={tipo}
    onClick={onClick}
    className={className}
    >
        {text}
    </Container>
    )
}

export default Button

const Container = styled.button`
    width: 100%;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    padding: 1rem 0;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    will-change: transform;
    height: fit-content;


    box-shadow: 
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    transition: 
      transform 0.25s ease,
      box-shadow 0.25s ease,
      filter 0.25s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.04); /* zoom leve */
        filter: brightness(1.05);
        box-shadow: 
          rgba(50, 50, 93, 0.35) 0px 8px 15px -3px,
          rgba(0, 0, 0, 0.35) 0px 4px 10px -3px;
    }

    &:active {
        transform: scale(0.98) rotate(-1.5deg); /* pequeño giro + presión */
        box-shadow: 
          rgba(0, 0, 0, 0.25) 0px 3px 6px -2px;
    }
`;
