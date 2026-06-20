import styled from "styled-components"
import NavBar from "../components/NavbarComponent"
import { Container } from "react-bootstrap"
import MobileSidebar from "../components/Mobilesidebar"
import useBreakpoint from "../hooks/useBreakpoint"
import { IMAGES_URLS } from "../constants/images"
import { ICONS_URLS } from "../constants/iconsLinks"

const Privacy = () => {
    const informacion = [
        {
            pregunta: "1. ¿Quiénes somos?",
            content : "Nos comprometemos con tu privacidad y el manejo responsable de la información. En este Aviso te explicamos cómo tratamos los datos personales que nos facilitas voluntariamente para fines relacionados con reservas y atención."
        },
        {
            pregunta: "2. ¿Qué datos recolectamos?",
            content: <>
                <p>Solo recolectamos datos básicos de contacto que tú mismo nos facilitas al momento de realizar una reserva.<br/>Podemos solicitar:</p>
                <ul>
                    <li>Nombre completo.</li>
                    <li>Correo electrónico.</li>
                    <li>Número de teléfono (Whatsapp)</li>
                </ul>
                <p>No recolectamos datos sensibles ni datos financieros directamente en la plataforma.</p>
            </>
        },
        {
            pregunta: "3. ¿Para qué usamos tus datos?",
            content: <>
            <p>Los datos que nos proporcionas se utilizan únicamente para:</p>
            <ul>
                <li>Confirmar y coordinar tu reserva.</li>
                <li>Comunicamos contigo vía Whatsapp o correo.</li>
                <li>Atender solicitudes o inquietudes relacionadas con el servicio turístico.</li>
            </ul>
            <p>No utilizamos tus datos para fines comerciales distintos a la prestación del servicio solicitado.</p>
            </>
        },
        {
            pregunta: "4. Comunicación y manejo de reservas",
            content: <>
            <p>La gestión de reservas, información financiera y coordinación de pagos se realiza directamente con el cliente a través de WhatsApp o correo electrónico.<br/>Esto significa que:</p>
            <ul>
                <li>No se realizan pagos dentro de la plataforma web.</li>
                <li>No almacenamos información de tarjetas ni detalles financieros en nuestro sistema.</li>
                <li>La confirmación de la reserva se oficializa mediante comunicación directa con el cliente.</li>
            </ul>
            </>
        },
        {
            pregunta: "5. Seguridad y confidencialidad",
            content: "Implementamos medidas razonables para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Solo nuestro equipo autorizado tiene acceso a la información que nos provees."
        },
        {
            pregunta: "6. Derechos del titular de los datos",
            content: <>
            <p>En cumplimiento de la normativa colombiana (Ley 1581 de 2012 y sus decretos reglamentarios), tú tienes derecho a:</p>
            <ul>
                <li>Acceder a tus datos personales.</li>
                <li>Rectificarlos o actualizarlos.</li>
                <li>Solicitar su supensión cuando no sean necesarios.</li>
                <li>Revocar el consentimiento otorgado.</li>
            </ul>
            <p>Para ejercer estos derechos, puedes contactarnos a través de:</p>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.YELLOWPHONEICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                +57 322 563 2587
            </Container>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.YELLOWMAILICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                turismo@gmail.com
            </Container>
            </>
        },
        {
            pregunta: "7. Tiempo de conservación",
            content: <>
            <p>Tus datos se conservarán únicamente el tiempo necesario para:</p>
            <ul>
                <li>Gestionar tu reserva.</li>
                <li>Atender inquietudes o solicitudes posteriores.</li>
                <li>Cumplir obligaciones legales.</li>
            </ul>
            </>
        },
        {
            pregunta: "8. ¿Qué pasa si decides no proporcionar tus datos?",
            content: <>
            <p>Si no nos facilitas tus datos de contacto básico, no podremos:</p>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.BLOCKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Confirmar tu reserva.
            </Container>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.BLOCKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Coordinar pagos o detalles logísticos.
            </Container>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.BLOCKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Comunicarnos contigo eficientemente.
            </Container>
            </>
        },
        {
            pregunta: "9. Aceptación del aviso",
            content: <>
            <p>Al proporcionar tus datos de contacto (correo o WhatsApp), expresas que:</p>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.OKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Aceptas este Aviso de Privacidad
            </Container>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.OKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Comprendes cómo serán usados tus datos
            </Container>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.OKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Autorizas su tratamiento para los fines descritos
            </Container>
            </>
        }
    ]
    const isResponsive = useBreakpoint("(max-width: 768px)");
    return (
        <ContainerGlobal>
            {isResponsive && <MobileSidebar color="white"/>}
            <HeaderPicture bgImage={IMAGES_URLS.PRIVACY_BKG_IMG}/>
            <NavBar colorNavbar="white"/>
            <HeaderText>
                <Title>AVISO DE PRIVACIDAD Y MANEJO DE DATOS</Title>
                <p>Espeletia Trips – Agencia de Viajes Operadora <br/>Última actualización: Febrero 2026</p>
            </HeaderText>

            <InfoContainer>
                <p>
                    Nos comprometemos con tu privacidad y el manejo responsable de la información. En este Aviso te explicamos cómo tratamos los datos personales que nos facilitas voluntariamente para fines relacionados con reservas y atención.
                </p>
                {informacion.map((elemento, index) => (
                    <div key={index} className="d-flex flex-column g-1">
                        <h3>{elemento.pregunta}</h3>
                        <p>{elemento.content}</p>
                    </div>
                ))}

            </InfoContainer>


        </ContainerGlobal>
    )
}

export default Privacy

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
    height: 300px;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
    padding: 1.5rem;

    p {
        width: 70%;
        text-align: center;
    }
`
const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    width: 75%;

    @media (max-width: 768px) {
        width: 85%;
        font-size: 2rem;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    width: 80%;
    height: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 15px;

    @media (max-width: 768px) {
        width: 95%;
    }
`