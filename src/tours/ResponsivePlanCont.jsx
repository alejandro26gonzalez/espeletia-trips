import styled from "styled-components"
import Card from 'react-bootstrap/Card';
import { ICONS_URLS } from "../constants/iconsLinks";

const ResponsivePlanCont = ({selectedPlan,setSelectedPlan}) => {

    return (
        <Container>
            
            {/* nacionales */}
            <StyledCard
            $active={selectedPlan === "nacionales"}
            onClick={() => setSelectedPlan("nacionales")}
            >
                <Card.Header>
                    Selección actual
                </Card.Header>

                <Card.Body>
                    <p>
                        Nacionales <br />
                        <span style={{ fontSize: "0.7rem", color:"#b4b1b1", }}>
                        Persona
                        </span>
                    </p>

                    <IconOk
                        src={ICONS_URLS.OKAY_SIGN_ICON}
                        $active={selectedPlan === "nacionales"}
                    />
                </Card.Body>
            </StyledCard>

            {/* extranjeros */}

            <StyledCard
            $active={selectedPlan === "extranjeros"}
            onClick={() => setSelectedPlan("extranjeros")}
            >
                <Card.Header>
                    Selección actual
                </Card.Header>

                <Card.Body>
                    <p>
                        Extranjeros <br />
                        <span style={{ fontSize: "0.7rem", color:"#b4b1b1", }}>
                        Persona
                        </span>
                    </p>

                    <IconOk
                        src={ICONS_URLS.OKAY_SIGN_ICON}
                        $active={selectedPlan === "extranjeros"}
                    />
                </Card.Body>

            </StyledCard>
            
        </Container>
    )
}

export default ResponsivePlanCont

const StyledCard = styled(Card)`
    width: ${props => props.$active ? "270px" : "200px"};
    height: ${props => props.$active ? "270px" : "200px"};

    border-radius: 15px;
    border: 1px solid #4B4B4B;
    overflow: hidden;
    transition: all 0.35s ease;

    color: ${props => props.$active ? "white" : "black"};

    .card-header {
        background-color: #1c1c1b;
        text-align: center;
        font-weight: bold;
        opacity: ${props => props.$active ? 1 : 0};
        height: ${props => props.$active ? "40px" : "0px"};
        padding: ${props => props.$active ? "0.5rem" : "0"};
        transition: all 0.3s ease;
    }

    .card-body {
        padding: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        background: ${props =>
        props.$active
            ? "linear-gradient(140deg,rgba(84,85,37,1) 1%, rgba(91,212,105,1) 100%)"
            : "white"};

        transition: all 0.35s ease;
    }
`
const IconOk = styled.img`
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 30px;

    opacity: ${props => props.$active ? 1 : 0};
    transform: ${props => props.$active ? "scale(1)" : "scale(0.6)"};
    transition: all 0.3s ease;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    height: 270px;
    align-items: end;
    margin-bottom: 1rem;
`