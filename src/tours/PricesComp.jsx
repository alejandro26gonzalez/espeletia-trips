import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";
import { Container, Card} from "react-bootstrap";
import StyledButtonPricing from "../components/Button"
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import useBreakpoint from "../hooks/useBreakpoint";
import ResponsivePrice from "./ResponsivePrice";
import { ICONS_URLS } from "../constants/iconsLinks";

const PricesComp = ({
    dataPrice
}) => {

    const backPricesItems = [
        "Alimentación",
        "Transporte 4x4 ida y regreso",
        "Entradas",
        "Guía local experto",
        "Póliza de asistencia médica (Colasistencia)"
    ]
    const [selected, setSelected] = useState("btn1");
    const [isCustom, setIsCustom] = useState(false);
    const isResponsive = useBreakpoint("(max-width: 768px)");

    return (
    <>
        {isResponsive ? (

            // Vista responsiva en otro componente de los tours de los precios del tour seleccionado
            <ResponsiveContainer>
                <ResponsivePrice 
                dataPrice={dataPrice}
                texto={dataPrice.description}
                />
            </ResponsiveContainer>
        ):(

            // Vista desktop de los precios de los tours
            <MainContainer>
                <HeaderPicture  bgImage={dataPrice.bkgImg}/>
                <Titles>Precios simples y transparentes</Titles>
                <p style={{margin:"2rem 0", textAlign:"center", color:"white", width:"70%"}}>{dataPrice.description}</p>

            {/* Botones de desplazamiento para cambiar de tipo de tour preferido */}
                <ButtonCont>
                    <ButtonGroup size="lg" className="mb-2">

                        <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-top-1">
                                {dataPrice.textTooltipGrupal}
                            </Tooltip>
                        }
                        >
                            <StyledButton
                            $selected={selected === "btn1"}
                            onClick={() => {
                                setSelected("btn1");
                                setIsCustom(false);
                            }}
                            >
                                Grupal 
                            </StyledButton>
                        </OverlayTrigger>

                        <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-top-2">
                                {dataPrice.textTooltipPersonalizado}
                            </Tooltip>
                        }
                        >
                            <StyledButton
                            $selected={selected === "btn2"}
                            onClick={() => {
                                setSelected("btn2");
                                setIsCustom(true)
                            }}
                            >
                                Personalizado
                            </StyledButton>
                        </OverlayTrigger>


                    </ButtonGroup>
                </ButtonCont>

            {/* Slider para desplazar los precios de los tipos de tours preferidos */}
            
                <SliderContainer>
                    <SliderTrack $isCustom={isCustom}>

                        {/* grupal */}
                        <PayCardCont>

                            <StyledCard>
                                <Container className="d-flex g-3 align-items-center">
                                    <img src={ICONS_URLS.STAR_ICON} alt="estrella icono" style={{
                                        width:"35px",
                                        marginRight:"1rem"
                                    }}/>
                                    <h4 className="mb-0 ">Nacionales/<span style={{
                                        fontStyle:"normal",
                                        fontWeight:"400",
                                        fontSize:"0.8em",
                                        color:"#000"
                                        }}>persona</span></h4>
                                </Container>

                                <Container className="d-flex g-3">
                                    <h1 style={{
                                        marginRight: "1rem"
                                    }}>{dataPrice.priceNational}</h1>
                                    <p>COP</p>
                                </Container>

                                <p style={{marginBottom: "0"}}>{dataPrice.descriptionNational}</p>

                                <hr />

                                <Container className="d-flex flex-column justify-content-between gap-3">

                                    {dataPrice.priceItems.map((items, index) => (
                                        <Container 
                                        className="d-flex g-3 align-items-center" 
                                        key={index}
                                        >
                                            <img 
                                            src={ICONS_URLS.OKAY_PRICE_ICON} 
                                            alt="okay icono" 
                                            style={{
                                                width:"30px",
                                                marginRight:"1rem"
                                            }}/>
                                            <p className="mb-0">
                                                {items}
                                            </p>
                                        </Container>
                                    ))}
                                </Container>

                                <hr />

                                <Container className="w-100">
                                    <StyledButtonPricing 
                                    bgColor="#545525"
                                    color="white"
                                    text="Reservar ahora"
                                    />
                                </Container>

                            </StyledCard>

                            <StyledCard>
                                <Container className="d-flex g-3 align-items-center">
                                    <img src={ICONS_URLS.STAR_ICON} alt="estrella icono" style={{
                                        width:"35px",
                                        marginRight:"1rem"
                                    }}/>
                                    <h4 className="mb-0 ">Extranjeros/<span style={{
                                        fontStyle:"normal",
                                        fontWeight:"400",
                                        fontSize:"0.8em",
                                        color:"#000"
                                        }}>persona</span></h4>
                                </Container>

                                <Container className="d-flex g-3">
                                    <h1 style={{
                                        marginRight: "1rem"
                                    }}>{dataPrice.priceAbroad}</h1>
                                    <p>COP</p>
                                </Container>

                                <p style={{marginBottom: "0"}}>{dataPrice.descriptionAbroad}</p>

                                <hr />

                                <Container className="d-flex flex-column justify-content-between gap-3">

                                    {dataPrice.priceItems.map((items, index) => (
                                        <Container className="d-flex g-3 align-items-center" key={index}>
                                            <img src={ICONS_URLS.OKAY_PRICE_ICON} alt="okay icono" style={{
                                            width:"30px",
                                            marginRight:"1rem"
                                        }}/>
                                        <p className="mb-0">
                                            {items}
                                        </p>
                                        </Container>
                                    ))}
                                </Container>

                                <hr />

                                <Container className="w-100">
                                    <StyledButtonPricing 
                                    bgColor="#545525"
                                    color="white"
                                    text="Reservar ahora"
                                    />
                                </Container>

                            </StyledCard>

                        </PayCardCont>

                        {/* personalizado */}
                        <PayCardCont>

                            <StyledCardBack>
                                <Container className="d-flex g-3 align-items-center">
                                    <img src={ICONS_URLS.STAR_ICON} alt="estrella icono" style={{
                                        width:"35px",
                                        marginRight:"1rem"
                                    }}/>
                                    <h4 className="mb-0 ">Nacionales y Extranjeros/<span style={{
                                        fontStyle:"normal",
                                        fontWeight:"400",
                                        fontSize:"0.8em",
                                        color:"#000"
                                        }}>persona</span></h4>
                                </Container>

                                <Container className="d-flex g-3">
                                    <h1 style={{
                                        marginRight: "1rem"
                                    }}>$---</h1>
                                    <p>COP</p>
                                </Container>

                                <p style={{marginBottom: "0"}}>Los viajes personalizados tienen tarifas diferenciales según la tabla de costos de 1 a 3 persona NACIONALES y EXTRANJEROS CON IVA INCLUIDO.</p>

                                <hr />

                                <Container className="d-flex flex-column justify-content-between gap-3">

                                    {backPricesItems.map((items, index) => (
                                        <Container className="d-flex g-3 align-items-center" key={index}>
                                            <img src={ICONS_URLS.OKAY_PRICE_ICON} alt="okay icono" style={{
                                            width:"30px",
                                            marginRight:"1rem"
                                        }}/>
                                        <p className="mb-0">
                                            {items}
                                        </p>
                                        </Container>
                                    ))}
                                </Container>

                                <hr />

                                <Container className="w-100">
                                    <StyledButtonPricing 
                                    bgColor="#545525"
                                    color="white"
                                    text="Cotizar por whatsapp"
                                    />
                                </Container>

                            </StyledCardBack>

                        </PayCardCont>

                    </SliderTrack>
                </SliderContainer>
        

            </MainContainer>
        )}
    </>
    )
}

export default PricesComp

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3rem 0;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2;
`
const HeaderPicture = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;

    transition: background-image 0.8s ease-in-out;

    z-index: -1;
    top: 0;
`
const Titles = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
    color: white;
`
const ButtonCont = styled.div`
    width: 45%;
    border-radius: 15px;
    background-color: #EFE318;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`
const StyledButton = styled(Button)`
    color: black;
    background-color: white;
    border: none;
    width: 200px;

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
const PayCardCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-shrink: 0;
    padding-bottom: 2.5rem;
`
const StyledCard = styled(Card)`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    padding: 1.5rem;
    color: black;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
`
const StyledCardBack = styled(StyledCard)`
    width: 500px;
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
const ResponsiveContainer = styled.div`
    width: 95%;
    height: 100%;
    margin-bottom: 4rem;
`
