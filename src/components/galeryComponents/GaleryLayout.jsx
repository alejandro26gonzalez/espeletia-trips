import styled from "styled-components"
import NavBar from "../NavbarComponent"
import useBreakpoint from "../../hooks/useBreakpoint"
import MobileSideBar from "../Mobilesidebar"
import { IMAGES_URLS } from '../../constants/images'


const GaleryLayout = ({children}) => {
    const isResponsive = useBreakpoint("(max-width: 768px)");
    return (
    <ContainerGlobal bkgImage={IMAGES_URLS.BACKGROUNDIMAGEMAINER}>

        {isResponsive && <MobileSideBar color="white"/>}

        <NavBar colorNavbar="white"/>

        <InvisibleSepatator />

        {children}
    
    </ContainerGlobal>)
}

export default GaleryLayout

const ContainerGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: white;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${props => props.bkgImage});
        filter: brightness(30%);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.8;
        z-index: -1;
    }
`
const InvisibleSepatator = styled.div`
    width: 100%;
    height: 50px;
`