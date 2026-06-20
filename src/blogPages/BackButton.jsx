import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";


export default function BackButton() {
    return (
        <Button onClick={() => window.history.back()}>
            <FaArrowLeft />
            Volver
        </Button>
    );
}

const Button = styled.button`
    color: black;
    transition: color 0.3s ease;
    width: 200px;
    border: none;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    z-index: 1;


    &:hover{
        color: #BF6969;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 150px;
    }
`