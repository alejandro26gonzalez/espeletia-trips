import styled from "styled-components";
import { device } from "../../../breakpoints/breakpoints";

/* ==========================================================
   CONTENEDOR
========================================================== */

export const StatsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    width: fit-content;
    max-width: 900px;

    margin: 4rem auto 0;

    padding: 1rem 1.75rem;

    border-radius: 999px;

    background: rgba(255,255,255,.08);
    backdrop-filter: blur(16px);

    border: 1px solid rgba(255,255,255,.12);

    box-shadow:
        0 12px 35px rgba(0,0,0,.12);

    @media (max-width: ${device.tablet}) {

        flex-wrap: wrap;
        justify-content: center;
        text-align: center;

        border-radius: 24px;

        padding: 1.4rem;

        gap: .9rem;

    }

    @media (max-width: ${device.mobile}) {

        width: 100%;

    }
`;

/* ==========================================================
   ICONO
========================================================== */

export const HeartIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 54px;
    height: 54px;

    border-radius: 50%;

    background: #D8E96B;

    color: #172312;

    font-size: 1.3rem;

    box-shadow:
        0 10px 25px rgba(216,233,107,.30);
`;

/* ==========================================================
   TEXTO
========================================================== */

export const StatsText = styled.p`
    margin: 0;

    color: rgba(255,255,255,.82);

    font-size: .98rem;

    line-height: 1.6;

    strong{

        color: #FFFFFF;
        font-weight: 700;

    }

    @media (max-width: ${device.tablet}) {

        width: 100%;

    }
`;

/* ==========================================================
   ESTRELLAS
========================================================== */

export const Stars = styled.div`
    display: flex;
    align-items: center;

    gap: .18rem;

    color: #FFD86B;

    font-size: 1.15rem;

    letter-spacing: .08rem;
`;

/* ==========================================================
   CALIFICACION
========================================================== */

export const Rating = styled.span`
    color: #FFFFFF;

    font-size: 1rem;

    font-weight: 700;

    white-space: nowrap;
`;