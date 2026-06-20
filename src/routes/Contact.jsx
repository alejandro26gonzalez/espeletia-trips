import styled from "styled-components"
import NavBar from "../components/NavbarComponent"
<<<<<<< HEAD
=======
import TitleBackground from "../assets/Backgrounds/Blog6.jpg"
>>>>>>> 88c39204cbacba948a56e84fc2a0cc83541813c2
import { Col } from "react-bootstrap"
import useBreakpoint from "../hooks/useBreakpoint"
import MobileSidebar from "../components/Mobilesidebar"
import { IMAGES_URLS } from "../constants/images"
import { ICONS_URLS } from "../constants/iconsLinks"

const Contact = () => {

    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
        <ContainerGlobal>
            {isResponsive && <MobileSidebar />}

            <HeaderPicture bgImage={IMAGES_URLS.CONTACT_BKG_IMG}/>
            <NavBar colorNavbar="white"/>
            <HeaderText>
                <Title>¿Aún necesitas ayuda?</Title>
                <p>Si necesitas ayuda no dudes en ponerte en contacto con nosotros, puedes dejar tu información y te contactaremos en el menor tiempo posible</p>
            </HeaderText>

            <InvisibleSepatator />

            <InfoContainer>
                <StyledCol>
                    <ContactIcon src={ICONS_URLS.BLACKHOUSE}/>
                    <p>
                        Estamos ubicados en el corazón de la región andina, rodeados de paisajes que inspiran cada una de nuestras experiencias. 
                    </p>
                    <p>
                        Si prefieres una atención personalizada, será un gusto recibirte y planear juntos tu próxima aventura hacia la montaña
                    </p>
                    <strong style={{textAlign:"center"}}>Calle 4 # 8-5 – Galería Municipal Murillo, Tolima</strong>
                </StyledCol>

                <StyledCol>
                    <ContactIcon src={ICONS_URLS.BLACKPHONE} style={{
                        width:"70px"
                    }}/>
                    <p>
                        Nuestro equipo está listo para asesorarte y resolver cualquier duda sobre rutas, fechas o modalidades de viaje. 
                    </p>
                    <p>
                        Escríbenos o llámanos directamente y comienza a planear una experiencia inolvidable en la montaña.
                    </p>
                    <strong style={{textAlign:"center"}}>+57 322 563 2587</strong>
                </StyledCol>

                <StyledCol>
                    <ContactIcon src={ICONS_URLS.BLACKEMAIL}/>
                    <p>
                        Si prefieres comunicarte por correo, envíanos tu consulta y te responderemos lo antes posible con toda la información que necesitas para organizar tu recorrido de forma segura y personalizada.
                    </p>
                    <strong style={{textAlign:"center"}}>Correo.espeletia@trips.com</strong>
                </StyledCol>

            </InfoContainer>

            <MapFrame 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.3884923281066!2d-75.17492252501957!3d4.874416395101332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInMjcuOSJOIDc1wrAxMCcyMC41Ilc!5e0!3m2!1ses!2sco!4v1771737431146!5m2!1ses!2sco"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            />

            <InvisibleSepatator />

        </ContainerGlobal>
    )
}

export default Contact

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
const HeaderPicture = styled.div`
    position: absolute;
    width: 100%;
    height: 600px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: background-image 0.8s ease-in-out;

    z-index: -1;
    top: 0;
`
const HeaderText = styled.div`
    width: 100%;
    height: 450px;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    p {
        width: 70%;
        text-align: center;
        font-size:"1.5rem";
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`
const Title = styled.h1`
    font-size: 4rem;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 3rem;
    }
`
const InfoContainer = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: space-evenly;
    width: 90%;
    height: 60vh;

    p{
        text-align: center;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-bottom: 3rem;
    }
`
const InvisibleSepatator = styled.div`
    width: 100%;
    height: 100px;
`
const StyledCol = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`
const ContactIcon = styled.img`
    width: 80px;
`
const MapFrame = styled.iframe`
  width: 100%;
  height: 600px; /* Ajusta según necesites */
  border: 0;
  display: block;
`