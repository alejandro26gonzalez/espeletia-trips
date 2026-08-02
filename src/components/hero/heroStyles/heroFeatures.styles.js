import styled from "styled-components";
import { device } from "../../../breakpoints/breakpoints";

/* ==========================================================
   CONTENEDOR
========================================================== */

export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 1.5rem;

    width: 100%;

    margin-top: 5rem;

    @media (max-width:${device.desktop}){

        grid-template-columns:repeat(2,1fr);

    }

    @media (max-width:${device.tablet}){

        grid-template-columns:1fr;

        margin-top:4rem;

    }
`;

/* ==========================================================
   TARJETA
========================================================== */

export const FeatureCard = styled.div`
    display:flex;
    align-items:flex-start;
    gap:1rem;

    position: relative;
    overflow: hidden;

    padding:1.5rem;

    border-radius:24px;

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.12);

    backdrop-filter:blur(16px);

    transition:
        transform .35s ease,
        background .35s ease,
        border-color .35s ease,
        box-shadow .35s ease;

    &:hover{

        transform:translateY(-8px);

        background:rgba(255,255,255,.12);

        border-color:rgba(216,233,107,.35);

        box-shadow:
            0 18px 35px rgba(0,0,0,.18);

    }

    &::before{
    content:"";

    position:absolute;
    inset:0;

    border-radius:inherit;

    padding:1px;

    background:
        linear-gradient(
            135deg,
            rgba(216,233,107,.6),
            transparent 45%
        );

    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

    mask-composite:exclude;
    -webkit-mask-composite:xor;

    opacity:0;

    transition:opacity .35s;
}

&:hover::before{
    opacity:1;
}
`;

/* ==========================================================
   ICONO
========================================================== */

export const FeatureIcon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    flex-shrink:0;

    width:58px;
    height:58px;

    border-radius:18px;

    background:#D8E96B;

    color:#172312;

    font-size:1.45rem;
    font-weight:700;

    transition:
        transform .35s ease,
        box-shadow .35s ease;

    ${FeatureCard}:hover &{

        transform:rotate(-8deg) scale(1.08);

        box-shadow:
            0 12px 25px rgba(216,233,107,.28);

    }
`;

/* ==========================================================
   CONTENIDO
========================================================== */

export const FeatureContent = styled.div`
    display:flex;
    flex-direction:column;

    gap:.45rem;

    flex:1;
`;

/* ==========================================================
   TITULO
========================================================== */

export const FeatureTitle = styled.h3`
    margin:0;

    color:#FFFFFF;

    font-size:1.05rem;

    font-weight:700;

    line-height:1.3;
`;

/* ==========================================================
   DESCRIPCION
========================================================== */

export const FeatureDescription = styled.p`
    margin:0;

    color:rgba(255,255,255,.72);

    line-height:1.6;

    font-size:.95rem;
`;