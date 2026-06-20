import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ResponsiveCardItem from "./responsiveComponents/CardItem"
import ResponsiveCardsTitle from "./responsiveComponents/CardTitle"
import useBreakpoint from "../hooks/useBreakpoint";

const CardComponent = ({
  bgColor = "#EFE318",
  textColor = "#000",
  image,
  children,
  to="",
  text=""
}) => {

  const isResponsive = useBreakpoint("(max-width: 768px)");

  return (
    <>
      {isResponsive ? (
        <ResponsiveCardItem to={to} $bg={image}>
          <ResponsiveCardsTitle>{text}</ResponsiveCardsTitle>
        </ResponsiveCardItem>
      ) : (

      <Card bgColor={bgColor} textColor={textColor} to={to}>
        <CardImage src={image} alt="card image" />
        <CardText>{children}</CardText>
      </Card>
      )}
    </>
  );
};

export default CardComponent;

const Card = styled(NavLink)`
  box-sizing: border-box;
  width: 280px;
  height: 250px;

  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  scroll-snap-align: start; /* 👈 importante para snap */

  border: 1px solid white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  backdrop-filter: blur(6px);
  border-radius: 15px;

  text-align: left;
  cursor: pointer;
  transition: all 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  user-select: none;
  font-weight: 450;

  &:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
`;
const CardText = styled.p`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
`;
