import styled from "styled-components"
import NavBar from "../components/NavbarComponent"
import useBreakpoint from "../hooks/useBreakpoint"
import MobileSidebar from "../components/Mobilesidebar"

const ToursLayout = ({children}) => {
    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
    <ContainerGlobal>
        {isResponsive && <MobileSidebar color="white"/>}

        <NavBar colorNavbar="white"/>
        {children}

    </ContainerGlobal>)
}

export default ToursLayout

const ContainerGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
`