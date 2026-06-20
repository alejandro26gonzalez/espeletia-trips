import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import { useState } from "react";
import StyledButton from "../components/Button"
import { Container } from "react-bootstrap";
import ResponsivePlanCont from "./ResponsivePlanCont"
import Card from 'react-bootstrap/Card';
import { ICONS_URLS } from "../constants/iconsLinks";


const ResponsivePrice = ({texto, dataPrice,}) => {
    const [selected, setSelected] = useState("btn1");
    const [isCustom, setIsCustom] = useState(false);
    const backPricesItems = [
        "Alimentación",
        "Transporte 4x4 ida y regreso",
        "Entradas",
        "Guía local experto",
        "Póliza de asistencia médica (Colasistencia)"
    ]
    const [selectedPlan, setSelectedPlan] = useState("extranjeros"); 

    const price = selectedPlan === "nacionales" ? dataPrice.priceNational : dataPrice.priceAbroad ;

    return (
        <RespContainer>
            <TitleComp>Precios simples y transparentes</TitleComp>
            <p>{texto}</p>

{/* Boton de seleccionar tipo de tour que desea el cliente */}
            <ButtonGroup size="lg" className="mb-2">
                <ButtonGrouped
                $selected={selected === "btn1"}
                onClick={() => {
                    setSelected("btn1");
                    setIsCustom(false);
                }}
                >
                    Grupal 
                </ButtonGrouped>

                <ButtonGrouped
                $selected={selected === "btn2"}
                onClick={() => {
                    setSelected("btn2");
                    setIsCustom(true);
                }}
                >
                    Personalizado
                </ButtonGrouped>
            </ButtonGroup>

            <StyledHR />

            <SliderContainer>
                <SliderTrack $isCustom={isCustom}>

                    {/* grupal */}
                    <PayCardCont>

                    {/* Tarjetas animadas del plan a consultar */}
                        <div style={{
                            width:"100%"
                        }}>  
                            <ResponsivePlanCont 
                            selectedPlan={selectedPlan}
                            setSelectedPlan={setSelectedPlan}
                            />
                        </div>

                    {/* Precio del tour seleccionado */}
                        <div style={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"space-between",
                            margin:"0"
                        }}>
                            <p>Precio del tour</p>

                            <p>{price}<Badge bg="secondary"> COP</Badge></p>

                        </div>

                        <StyledHR />

                    {/* Beneficios y lo que incluye el tour seleccionado */}
                        <Container className="d-flex flex-column justify-content-evenly align-items-start ">
                            {dataPrice.priceItems.map((item ,index) => (
                                <div 
                                key={index}
                                style={{
                                    width: "100%",
                                    display:"flex",
                                    justifyContent:"flex-start",
                                    gap:"1rem",
                                    marginBottom:"1rem"
                                }}>
                                    <img 
                                    src={ICONS_URLS.OKAY_PRICE_ICON} 
                                    alt="okay icono" 
                                    style={{
                                        width:"30px",
                                        marginRight:"1rem",
                                    }}/>
                                    <p className="mb-0">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </Container>

                        <StyledHR />

                    {/* Boton de ir a reservar a whatsapp */}
                        <Container className="w-100">
                            <StyledButton 
                            bgColor="#545525"
                            color="white"
                            text="Reservar ahora"
                            />
                        </Container>
                    </PayCardCont>

                    {/* Personalizado */}
                    <PayCardCont>

                        {/* Estilizar la tarjeta en la opcion grupal */}

                        <div style={{
                            width:"100%"
                        }}>

                            <BackCard>
                                <Card.Header>
                                    Única selección
                                </Card.Header>

                                <Card.Body>
                                    <p>
                                        Extranjeros <br />
                                        <span style={{ fontSize: "0.7rem", color:"#b4b1b1", }}>
                                        Persona
                                        </span>
                                    </p>
                                    <IconOk src={ICONS_URLS.OKAY_SIGN_ICON}/>
                                </Card.Body>
                                
                            </BackCard>
                        </div>

                        {/* Precio del tour seleccionado */}
                        <div style={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"space-between",
                            margin:"0"
                        }}>
                            <p>Precio del tour</p>

                            <p>Cotizar por whatsapp<Badge bg="secondary"> COP</Badge></p>

                        </div>

                        <StyledHR />

                        {/* Beneficios y lo que incluye el tour seleccionado */}

                        <Container className="d-flex flex-column justify-content-evenly align-items-start ">
                            {backPricesItems.map((item ,index) => (
                                <div 
                                key={index}
                                style={{
                                    width: "100%",
                                    display:"flex",
                                    justifyContent:"flex-start",
                                    gap:"1rem",
                                    marginBottom:"1rem"
                                }}>
                                    <img 
                                    src={ICONS_URLS.OKAY_PRICE_ICON} 
                                    alt="okay icono" 
                                    style={{
                                        width:"30px",
                                        marginRight:"1rem",
                                    }}/>
                                    <p className="mb-0">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </Container>

                        <StyledHR />

                        {/* Boton de ir a reservar a whatsapp */}
                        <Container className="w-100">
                            <StyledButton 
                            bgColor="#545525"
                            color="white"
                            text="Cotizar por whatsapp"
                            />
                        </Container>
                    
                    </PayCardCont> 

                </SliderTrack>
            </SliderContainer>


        </RespContainer>
    )
}
export default ResponsivePrice;

const RespContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const TitleComp = styled.h1`
    font-size: 1.5rem;
    color: black;
`
const ButtonGrouped = styled(Button)`
    width: 100%;
    border: 1px solid #4B4B4B;
    color: black;
    transition: all 0.3s ease;

    background-color: ${({ $selected }) => ($selected ? "#545525" : "white")};
    color: ${({ $selected }) => ($selected ? "white" : "black")};

    &:hover, &:focus, &:active {
        background-color: ${({ $selected }) => ($selected ? "#545525" : "white")};
        color: ${({ $selected }) => ($selected ? "white" : "black")};
        box-shadow: none;
        outline: none;
        text-decoration: none;
        cursor: pointer;
    }
    &:focus {
        box-shadow: none;
    }

`
const StyledHR = styled.hr`
    width: 100%;
    height: 2px;
    border: none;
    background-color: #4B4B4B;
    margin: 1rem 0;
`
const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden;
`
const SliderTrack = styled.div`
    display: flex;
    transition: transform 0.6s ease-in-out;

    transform: ${({ $isCustom }) => $isCustom ? "translateX(-100%)" : "translateX(0%)"};
`
const PayCardCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    flex-shrink: 0;
    padding-bottom: 2.5rem;
`
const BackCard = styled(Card)`
    width: 100%;
    height: 270px;
    border-radius: 15px;
    border: 1px solid #4B4B4B;
    overflow: hidden;
    transition: all 0.35s ease;

    color: white;

    .card-header {
        background-color: #1c1c1b;
        text-align: center;
        font-weight: bold;
        opacity: 1;
        height: 40px;
        padding: 0.5rem;
        transition: all 0.3s ease;
    }
    .card-body {
        padding: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        background: linear-gradient(140deg,rgba(84,85,37,1) 1%, rgba(91,212,105,1) 100%);

        transition: all 0.35s ease;
    }
`
const IconOk = styled.img`
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 30px;

    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
`;