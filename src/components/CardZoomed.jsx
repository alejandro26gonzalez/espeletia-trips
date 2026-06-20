import styled from "styled-components";
import Button from "./Button"
import { NavLink } from "react-router-dom";

const CardZoomed = ({
  imagen, 
  texto,
  buttonText,
  to=""
}) => {
    return (
    <Card imagen={imagen} to={to}>
        <Overlay />
        <CardTitle>
            {texto}
        </CardTitle>

        {buttonText && (
            <ButtonCont>
              <Button 
              text={buttonText}
              />
            </ButtonCont>
          )}
    </Card>)
}

export default CardZoomed

const ButtonCont = styled.div`
  width: 40%;
  padding-bottom: 1rem;
`
const CardTitle = styled.h2`
  position: relative;
  color: white;
  font-weight: 500;
  z-index: 2;
  margin-top: 2rem 0;
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;
const Card = styled(NavLink)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  box-sizing: border-box;
  height: 200px; /* altura fija uniforme */
  background-image: url(${props => props.imagen});
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  backdrop-filter: blur(6px);
  border-radius: 16px;
  border: 1px solid white;

  transition: all 0.5s;
  user-select: none;
  
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

`;
