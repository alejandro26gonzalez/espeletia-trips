import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Logo from "./Logo.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavbarComponent = ({colorNavbar="#fff"}) => {


    return (
        <NavContainer>

            <LogoReset to="/">
              <Logo 
              color="white"
              size="80px"
              textSize="0.5rem"
              />
            </LogoReset>

            <NavLinks>

              <Links to="/" colorText={colorNavbar}>Inicio</Links>

              <Dropdown as={ButtonGroup}>
                <MainButton as={NavLink} to="/tours">Tours</MainButton>

                <SplitToggle split variant="success" id="dropdown-split-tours" />

                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/tours/valle-tumbas">Valle de las Tumbas</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/tours/campanita">Termal de la Campanita</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/tours/canaan">Termal de Canaan</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/tours/mirador">Mirador de los Nevados</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/tours/camino-oso">Camino del Oso</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/tours/nevado-santa-isabel">Nevado Santa Isabel</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={ButtonGroup}>
                <MainButton as={NavLink} to="/blog">Blog</MainButton>

                <SplitToggle split id="dropdown-split-blog" />

                <StyledMenu>
                  <Dropdown.Item as={NavLink} to="/blog/guia-del-viajero">Guía del viajero</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/blog/nevado-santa-isabel">Nevado de Santa Isabel</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/blog/murillo-cultura-historia">Murillo: Historia y cultura</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/blog/educacion-ambiental-turismo-responsable">Educación ambiental y turismo responsable</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/blog/seguridad-recomendaciones">Seguridad y recomendaciones</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/blog/parque-nacional-los-nevados">Parque Nacional Natural Los Nevados</Dropdown.Item>
                </StyledMenu>
              </Dropdown>             

              <Links to="/galery" colorText={colorNavbar}>Galería</Links>

              <Links to="/about" colorText={colorNavbar}>Nosotros</Links>

              <Links to="/contact" colorText={colorNavbar}>Contacto</Links>

            </NavLinks>
        </NavContainer>
    )
}


export default NavbarComponent;
const LogoReset = styled(NavLink)`
    text-decoration: none;
    color: white;
    background: none;
    border: none;
    outline: none;

    &:visited {
        color: white;
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        color: white;
    }

    &:focus {
        outline: none;
    }

    p {
        margin: 0;
    }
`
const NavContainer = styled.nav`
  width: fit-content;
  padding: 1rem 0;
  display: flex;
  gap: 3rem;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  position: relative;
  z-index: 1000;
`;
const NavLinks = styled.div`
    width: 100%;
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0.5rem 1rem;
    background-color: #545525;
    border-radius: 20px;

    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media (max-width: 768px) {
        display: none;
    }

`;
const Links = styled(NavLink)`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.colorText};
  font-size: 1rem;
  font-weight: 500;

  transition: color 0.3s ease;

  &::after {
    content: "";
    position: relative;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #BF6969;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #BF6969;
  }

  &:hover::after {
    width: 100%;
  }
`;
const MainButton = styled(Button)`
  width: 100px;
  text-decoration: none;
  display: flex;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 500;

  transition: all 0.3s ease;

  &&:hover,
  &&:focus,
  &&:active {
    background-color: #BF6969;
    border-color: #BF6969;
    color: white;
    box-shadow: none;
  }
`;
const SplitToggle = styled(Dropdown.Toggle)`
  && {
    background-color: #6364363a;
    border: none;
    border: none;
    color: white;

    transition: all 0.3s ease;
  }

  &&:hover,
  &&:focus,
  &&:active,
  &&.show {
    background-color: #BF6969;
    border-color: #BF6969;
    color: white;
    box-shadow: none;
  }
`;
const StyledMenu = styled(Dropdown.Menu)`
  z-index: 9999 !important;
`;

