import styled,  { keyframes } from "styled-components";
import { device } from "../../../breakpoints/breakpoints";
import { NavLink } from "react-router";

/* ==========================================================
   GRID PRINCIPAL
========================================================== */

export const HeroGrid = styled.div`
    position: relative;

    width: 100%;
    min-height: calc(100vh - 180px);

    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    column-gap: 4rem;

    @media (max-width: ${device.desktop}) {
        column-gap: 3rem;
    }

    @media (max-width: ${device.laptop}) {
        grid-template-columns: 1fr;
        row-gap: 4rem;
        justify-items: center;
        min-height: auto;
    }

    @media (max-width: ${device.tablet}) {
        row-gap: 3rem;
    }
`;

/* ==========================================================
   COLUMNA IZQUIERDA
========================================================== */

export const LeftColumn = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    max-width: 640px;

    @media (max-width: ${device.laptop}) {
        align-items: center;
        text-align: center;
        max-width: 700px;
    }
`;

/* ==========================================================
   COLUMNA DERECHA
========================================================== */

export const RightColumn = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    @media (max-width: ${device.laptop}) {
        display: none;
    }
`;

/* ==========================================================
   CONTENEDOR DE LA IMAGEN
========================================================== */

export const ImageWrapper = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 540px;

    aspect-ratio: 4 / 5;

    @media (max-width: ${device.desktop}) {
        max-width: 480px;
    }

    @media (max-width: ${device.laptop}) {
        max-width: 430px;
    }

    @media (max-width: ${device.tablet}) {
        max-width: 360px;
    }

    @media (max-width: ${device.mobile}) {
        max-width: 300px;
    }
`;

/* ==========================================================
   BADGE SUPERIOR
========================================================== */

export const TopBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .75rem;

    padding: .8rem 1.35rem;
    margin-bottom: 2rem;

    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;

    background: rgba(255,255,255,.08);
    backdrop-filter: blur(14px);

    color: #F5F5F5;

    font-size: .92rem;
    font-weight: 500;
    letter-spacing: .02em;

    width: fit-content;

    svg{
        font-size: 1rem;
        color: #D6E46F;
        flex-shrink: 0;
    }

    @media (max-width:${device.tablet}){

        padding: .75rem 1.15rem;
        font-size: .85rem;

    }
`;

/* ==========================================================
   CONTENEDOR DEL TITULO
========================================================== */

export const HeroHeading = styled.div`
    display: flex;
    flex-direction: column;

    gap: .35rem;

    margin-bottom: 2rem;
`;

/* ==========================================================
   TITULO
========================================================== */

export const Title = styled.h1`
    display: flex;
    flex-direction: column;

    margin: 0;

    color: #FFFFFF;

    font-weight: 800;
    line-height: .92;
    letter-spacing: -.04em;

    font-size: clamp(3.2rem, 7vw, 6.4rem);

    text-transform: uppercase;

    @media (max-width:${device.tablet}){

        line-height: .95;

    }
`;

/* ==========================================================
   PALABRA DESTACADA
========================================================== */

export const Highlight = styled.span`
    display: block;

    margin-top: .35rem;

    color: #D8E96B;

    text-shadow:
        0 0 18px rgba(216,233,107,.25);

    font-size: clamp(3.4rem, 7.5vw, 6.8rem);
`;

/* ==========================================================
   SUBTITULO
========================================================== */

export const Subtitle = styled.span`
    display: block;

    margin-top: 1rem;

    color: rgba(255,255,255,.92);

    font-weight: 400;

    font-size: clamp(1.25rem, 2vw, 2rem);

    letter-spacing: -.02em;

    @media (max-width:${device.mobile}){

        margin-top: .75rem;

    }
`;

/* ==========================================================
   DESCRIPCION
========================================================== */

export const Description = styled.p`
    margin: 0 0 2.5rem;

    max-width: 560px;

    color: rgba(255,255,255,.82);

    font-size: clamp(1rem, 1.25vw, 1.18rem);

    line-height: 1.8;

    strong{
        color: #FFFFFF;
        font-weight: 700;
    }

    @media (max-width:${device.laptop}){

        max-width: 620px;

    }

    @media (max-width:${device.tablet}){

        line-height: 1.7;

    }

    @media (max-width:${device.mobile}){

        margin-bottom: 2rem;

    }
`;

/* ==========================================================
   ANIMACIONES
========================================================== */

const pulse = keyframes`
    0%{
        transform: scale(1);
        box-shadow:0 0 0 rgba(216,233,107,.25);
    }

    50%{
        transform: scale(1.08);
        box-shadow:0 0 28px rgba(216,233,107,.35);
    }

    100%{
        transform: scale(1);
        box-shadow:0 0 0 rgba(216,233,107,.25);
    }
`;

/* ==========================================================
   BOTON CTA
========================================================== */

export const CTAButton = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .85rem;

    width: fit-content;

    padding: 1rem 2rem;

    border: none;
    border-radius: 999px;

    background: #D8E96B;
    color: #172312;

    cursor: pointer;

    font-size: 1rem;
    font-weight: 700;

    transition: all .35s ease;

    span{
        transition: transform .35s ease;
    }

    svg{
        font-size: 1.1rem;
        transition: transform .35s ease;
    }

    &:hover{

        transform: translateY(-4px);

        box-shadow:
            0 18px 45px rgba(216,233,107,.28);

        span{
            transform: translateX(-2px);
        }

        svg{
            transform: translateX(6px);
        }

    }

    &:active{

        transform: scale(.98);

    }

    @media(max-width:${device.laptop}){

        margin: 0 auto;

    }

    @media(max-width:${device.mobile}){

        width:100%;
        max-width:320px;

    }
`;

/* ==========================================================
   IMAGEN PRINCIPAL
========================================================== */

/* ==========================================================
   RUTA DECORATIVA
========================================================== */

export const RouteDecoration = styled.div`
    position:absolute;

    top:12%;
    right:-6%;

    width:140px;
    height:240px;

    border-top:3px dashed rgba(255,255,255,.65);
    border-right:3px dashed rgba(255,255,255,.65);

    border-radius:120px;

    transform:rotate(12deg);

    opacity:.75;

    z-index:1;

    @media(max-width:${device.desktop}){

        width:110px;
        height:200px;

    }

    @media(max-width:${device.laptop}){

        display:none;

    }
`;

/* ==========================================================
   MARCADOR
========================================================== */

export const Marker = styled.div`
    position:absolute;

    top:2%;
    right:4%;

    width:22px;
    height:22px;

    border-radius:50%;

    background:#D8E96B;

    border:5px solid white;

    animation:${pulse} 2.8s infinite;

    z-index:3;

    @media(max-width:${device.desktop}){

        top:4%;
        right:6%;

    }

    @media(max-width:${device.laptop}){

        display:none;

    }
`;
