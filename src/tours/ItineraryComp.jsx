import styled from "styled-components"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";
import { IMAGES_URLS } from "../constants/images";

const ItineraryComp = ({itinerarioArray, nottwoDays = false}) => {

    const [selected, setSelected] = useState("btn1");
    const [isCustom, setIsCustom] = useState(false);


    return (
    <MainContainer>

        <HeaderPicture  bgImage={IMAGES_URLS.TITULO_IMG}/>

        {nottwoDays ? (
            <>
            <Titles>Itinerario de altura </Titles>
            
            <InnerCont>
                        
                <StyledTable striped hover responsive>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Actividad</th>
                        </tr>
                    </thead>

                    <tbody>
                        {itinerarioArray.map((fila, index) => (
                            <tr key={index}>
                                <td>{fila.hora}</td>
                                <td>{fila.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </InnerCont>

            </>
        ) : (
            <>
                <Titles>Itinerario de altura </Titles>

                <ButtonGroup size="lg" className="mb-2">

                    <StyledButton
                    $selected={selected === "btn1"}
                    onClick={() => {
                        setSelected("btn1");
                        setIsCustom(false);
                    }}
                    >
                        Día 1 
                    </StyledButton>

                    <StyledButton
                    $selected={selected === "btn2"}
                    onClick={() => {
                        setSelected("btn2");
                        setIsCustom(true)
                    }}
                    >
                        Día 2
                    </StyledButton>

                </ButtonGroup>

                <SliderContainer>
                    <SliderTrack $isCustom={isCustom}>

                        <ItineraryCardCont>

                            <InnerCont>
                                
                                <StyledTable striped hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Hora</th>
                                            <th>Actividad</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {itinerarioArray
                                        .filter(fila => fila.dia === 1)
                                        .map((fila, index) => (
                                            <tr key={index}>
                                                <td>{fila.hora}</td>
                                                <td>{fila.activity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </StyledTable>
                            </InnerCont>

                        </ItineraryCardCont>

                        <ItineraryCardCont>

                            <InnerCont>
                                
                                <StyledTable striped hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Hora</th>
                                            <th>Actividad</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {itinerarioArray
                                        .filter(fila => fila.dia === 2)
                                        .map((fila, index) => (
                                            <tr key={index}>
                                                <td>{fila.hora}</td>
                                                <td>{fila.activity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </StyledTable>
                            </InnerCont>
                        </ItineraryCardCont>

                    </SliderTrack>

                </SliderContainer>
            </>
        )}

        


    </MainContainer>)
}
export default ItineraryComp

const Titles = styled.h2`
    margin-bottom: 2rem;
    font-weight: bold;
`
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
    height: 400px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: background-image 0.8s ease-in-out;

    z-index: -1;
    top: 0;
`
const InnerCont = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 768px) {
        width: 95%;
    }
`
const StyledTable = styled(Table)`
    width: 100%;

    thead th {
        background-color: #545525;
        color: white;
        padding: 1rem;
        font-size: 1.5rem;
    }

    tbody td {
        padding: 1rem;
    }
    
    tbody td:nth-child(1) {
        color: #545525;
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: underline;
        text-decoration-style: dotted;
        text-underline-offset: 6px;

        @media (max-width: 768px) {
            font-size: 1rem;
            width: 25%;
        }
    }
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
const ItineraryCardCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    padding-bottom: 2.5rem;
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
