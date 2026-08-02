import styled from "styled-components";
import { NavLink } from "react-router";

export const Card = styled(NavLink)`
    position: relative;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: flex-start;
    color: #FFFFFF;
    font-weight: 600;
    text-decoration: none;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    padding: 24px;
    border-radius: 18px;
    min-height: 380px;

    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    cursor: pointer;
    transition: all 0.5s;
    user-select: none;

    &:hover {
        transform:translateY(-8px);
    }

    @media (max-width: 480px) {
        min-height: 340px; /* Reducimos un poco el alto para que no ocupe toda la pantalla del celular */
        padding: 18px;     /* Menos espacio interno para dar más aire al texto */
        
        /* Opcional: Reducir levemente las fuentes internas si es necesario */
        h2 {
            font-size: 1.3rem;
        }
        p {
            font-size: 0.88rem;
        }
    }
`
export const IconContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #FFFFFF; 
    
    /* Centrado perfecto absoluto */
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 2;
`
export const IconComp = styled.img`
    width: 55%;
    height: 55%;
    object-fit: contain;
`
export const Text = styled.p`
    position: relative;
    z-index: 2; /* Trae el texto al frente */
    color: #FFFFFF;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0;
`
export const Overlay = styled.div`
    position:absolute;
    inset:0;
    background:
    linear-gradient(
    180deg,
    rgba(0,0,0,.05),
    rgba(0,0,0,.82)
    );
`
export const CardTitle = styled.h2`
    position: relative;
    color: white;
    font-weight: 600;
    z-index: 2;
    margin: 0;
    `;
export const Button = styled.button`
    position: relative;
    z-index: 2; /* Trae el botón al frente */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    width: 100%;

    border: 1px solid rgba(255, 255, 255, 0.25); /* Borde sutil para el efecto espejo */
    border-radius: 50px;

    /* Efecto Vidrio (Glassmorphism) real */
    background: rgba(255, 255, 255, 0.15); 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* Soporte para Safari */

    color: #FFFFFF;
    font-weight: 600;
    font-size: 1rem;

    cursor: pointer;
    transition: background 0.3s, transform 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
        /* Quitamos el translateY de aquí porque ya se eleva la Card completa */
    }
`