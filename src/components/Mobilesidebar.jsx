import { useState } from "react";
import styled from "styled-components";
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router";

const MobileSidebar = ({color="black"}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* ICONO MENU */}
      <MenuIcon onClick={toggleSidebar} isOpen={isOpen}>
        <RiMenu3Line size={30} color={color}/>
      </MenuIcon>

      {/* OVERLAY */}
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />

      {/* SIDEBAR */}
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <RiCloseLine size={28} />
        </CloseButton>

        <MenuItem to="/">Inicio</MenuItem>

        {/* TOURS */}
        <MenuItem onClick={() => toggleDropdown("tours")}>
          Tours <RiArrowDropDownLine />
        </MenuItem>
        {openDropdown === "tours" && (
          <SubMenu>
            <SubItem to="/tours">Todos los tours</SubItem>
            <SubItem to="/tours/valle-tumbas">Tour Valle de las Tumbas</SubItem>
            <SubItem to="/tours/campanita">Tour Termal de la Campanita</SubItem>
            <SubItem to="/tours/canaan">Tour Termal de Canaan</SubItem>
            <SubItem to="/tours/mirador">Tour Mirador de los Nevados</SubItem>
            <SubItem to="/tours/camino-oso">Tour Camino del Oso</SubItem>
            <SubItem to="/tours/nevado-santa-isabel">Tour Expedición al nevado Santa Isabel</SubItem>
          </SubMenu>
        )}

        {/* BLOG */}
        <MenuItem onClick={() => toggleDropdown("blog")}>
          Blog y FAQ <RiArrowDropDownLine />
        </MenuItem>
        {openDropdown === "blog" && (
          <SubMenu>
            <SubItem to="/blog">Blog</SubItem>
            <SubItem to="/blog/guia-del-viajero">Guía del viajero</SubItem>
            <SubItem to="/blog/nevado-santa-isabel">Nevado Santa Isabel</SubItem>
            <SubItem to="/blog/murillo-cultura-historia">Murillo: Historia y cultura</SubItem>
            <SubItem to="/blog/educacion-ambiental-turismo-responsable">Educación ambiental y turismo responsable</SubItem>
            <SubItem to="/blog/seguridad-recomendaciones">Seguridad y recomendaciones</SubItem>
            <SubItem to="/blog/parque-nacional-los-nevados">Parque Nacional Natural los Nevados</SubItem>

          </SubMenu>
        )}

        <MenuItem to="/galery">Galería</MenuItem>
        <MenuItem to="/about">Nosotros</MenuItem>
        <MenuItem to="/contact">Contacto</MenuItem>

        <StyledHR />

        
      </SidebarContainer>
    </>
  );
};

export default MobileSidebar;

const StyledHR = styled.hr`
    width: 90%;
    height: 2px;
    border: none;
    background-color: #4B4B4B;
    margin: 1rem 0;
`
const MenuIcon = styled(NavLink)`
  z-index: ${(props) => (props.isOpen ? 1000 : 3000)};
  position: relative;
  color: black;
  margin-top: 1rem;
  text-decoration: none;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 1999;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  background: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.3s ease;
  z-index: 2000;
`;

const CloseButton = styled.div`
  align-self: flex-end;
`;

const MenuItem = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const SubMenu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
  text-decoration: none;
`;

const SubItem = styled(NavLink)`
  font-size: 1rem;
  color: #555;
  text-decoration: none;
`;
