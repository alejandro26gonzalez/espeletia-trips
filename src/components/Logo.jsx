import styled from "styled-components";
import {device} from '../breakpoints/breakpoints.js'
import { IMAGES_URLS } from "../constants/images.js";

const Logo = ({ color = "#000", size ="160px", textSize = "1rem"}) => {
    return <LogoContainer>
        <LogoImagen src={IMAGES_URLS.LOGO} alt="logo espeletia" size={size}/>
        <LogoText color={color} textSize={textSize}>ESPELETIA TRIPS</LogoText>
    </LogoContainer>
}
export default Logo;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.span`
  color: ${(props) => props.color};
  margin-top: 8px;
  font-size: ${(props) => props.textSize};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.4rem;
  text-align: center;
  @media (max-width: 768px) {
    color : black;
  }
`;

const LogoImagen = styled.img`
  width: ${(props) => props.size};
  height: auto;
  @media ${device.mobile} {
    width: 80px;
  }

`