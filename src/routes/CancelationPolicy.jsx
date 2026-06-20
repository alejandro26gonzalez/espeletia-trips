import styled from "styled-components"
import NavBar from "../components/NavbarComponent"
import {Table, Container} from 'react-bootstrap';
import useBreakpoint from "../hooks/useBreakpoint";
import MobileSidebar from "../components/Mobilesidebar";
import { IMAGES_URLS } from "../constants/images";
import { ICONS_URLS } from "../constants/iconsLinks";

const CancelationPolicy = () => {

    const information = [
        {
            titulo: "Descripción general",
            contenido : "Esta política regula los términos aplicables en caso de desistimiento, retracto o cancelación de los servicios turísticos contratados con Espeletia Trips."
        },
        {
            titulo: "ARTÍCULO 1. Derecho de Retracto",
            contenido: <>
            <strong style={{
                margin:"1rem 0 0 0"
            }}>Plazo:</strong><br/>
            <p>5 días hábiles posteriores a la compra</p>

            <strong style={{
                margin:"1rem 0 0 0"
            }}>Condición:</strong><br/>
            <p>Siempre que el servicio no haya iniciado.</p>

            <strong style={{
                margin:"1rem 0 0 0"
            }}>Devolución:</strong><br/>
            <p>100% del valor pagado dentro de 30 días calendario.</p>
            </>
        },
        {
            titulo: "ARTÍCULO 2. Cancelación por Parte del Usuario",
            contenido: <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Anticipación</th>
                            <th>Procentaje de devolución</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Más de 15 días</td>
                            <td>90%</td>
                        </tr>

                        <tr>
                            <td>8 a 14 días</td>
                            <td>70%</td>
                        </tr>

                        <tr>
                            <td>2 a 7 días</td>
                            <td>50%</td>
                        </tr>

                        <tr>
                            <td>Menos de 48 horas/No show</td>
                            <td>No aplica devolución</td>
                        </tr>
                    </tbody>   
                </Table>
                <p>Nota: Las cancelaciones deberán notifcarse por escrito a la agencia.</p>
            </>
        },
        {
            titulo: "ARTÍCULO 3. Cancelación por Parte de la Agencia",
            contenido:
            <>
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.OKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Reprogramación sin costo.
            </Container>

            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.OKICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Devolución total del dinero.
            </Container>
            </>
        },
        {
            titulo: "ARTÍCULO 4. Situaciones Excepcionales",
            contenido: <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.CAREFULICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                En caso de factores naturales o situaciones extraordinarias (actividad volcánica, cierre de vías, deslizamientos, incendios, etc.), los costos previamente pagados por transporte, alimentación, hospedaje, guianza y pólizas no serán reembolsables.
            </Container>
        },
        {
            titulo: "ARTÍCULO 5. Cesión de Reserva",
            contenido: <>
            <ul>
                <li>Permitida hasta 48 horas antes.</li>
                <li>Debe notificarse por escrito.</li>
                <li>El nuevo viajero debe cumplir requisitos.</li>
            </ul>
            </>
        },
        {
            titulo: "ARTÍCULO 6. Servicios No Utilizados",
            contenido: <>
            <p>No habrá reembolso por:</p>
            <ul>
                <li>Servicios no utilizados por decisión del usuario.</li>
                <li>Llegadas tardías.</li>
                <li>Mal de altura.</li>
                <li>Problemas de salud.</li>
            </ul>
            </>
        },
        {
            titulo: "¿Tienes dudas sobre esta política?",
            contenido: <>
            <p>Para mayor información o solicitudes formales relacionadas con cancelaciones y reembolsos, puedes comunicarte a:</p>
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
            <Container className="d-flex g-2 align-items-center">
                <img src={ICONS_URLS.LOCATIONICONO} alt="yellow icon phone" style={{
                    width:"50px",
                    margin:"1rem 1.5rem 0 0"
                }}/>
                Calle 4 # 8-5 – Galería Municipal  Murillo, Tolima
            </Container>
            </>
        }
    ]
    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
        <ContainerGlobal>
            {isResponsive && <MobileSidebar color="white"/>}
            <HeaderPicture bgImage={IMAGES_URLS.CAN_POL_BKG_IMG}/>
            <NavBar colorNavbar="white"/>

            <HeaderText>
                <Title>Política de cancelación y reembolsos</Title>
                <p>En cumplimiento de la normativa turística colombiana vigente.</p>
            </HeaderText>

            <InfoContainer>
                <p>Espeletia Trips – Agencia de Viajes Operadora adopta la presente Política de Cancelación y Reembolsos, en cumplimiento de la Ley 300 de 1996, la Ley 1480 de 2011 y demás normas aplicables del sector turístico en Colombia.</p>

                {information.map((elemento, index) => (
                        <div key={index} className="d-flex flex-column g-1">
                            <h3>{elemento.titulo}</h3>
                            <p>{elemento.contenido}</p>
                        </div>
                    ))}

            </InfoContainer>

        </ContainerGlobal>
    )
}

export default CancelationPolicy

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
        font-size: 2rem;
        width: 85%;
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