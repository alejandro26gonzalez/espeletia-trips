import styled from "styled-components";
import { Link } from "react-router-dom";

const CardItem = styled(Link)`
  width: 100%;
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: white;

  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  display: flex;
  align-items: center;        /* centra vertical */
  justify-content: flex-start; /* inicio horizontal */
  padding: 1.5rem;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  /* Overlay oscuro elegante */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
  }
`;
export default CardItem;