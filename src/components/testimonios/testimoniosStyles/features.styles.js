import styled from "styled-components";

export const FeaturesGrid = styled.div`

    width:100%;

    max-width:1400px;

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:25px;

    margin-top:15px;

    @media(max-width:1100px){

        grid-template-columns:repeat(2,1fr);

    }

    @media(max-width:768px){

        grid-template-columns:1fr;

        gap:18px;

    }

`;

export const FeatureCard = styled.article`

    position:relative;

    overflow:hidden;

    display:flex;

    align-items:flex-start;

    gap:18px;

    padding:28px;

    border-radius:24px;

    background:rgba(255,255,255,.82);

    backdrop-filter:blur(16px);

    border:1px solid rgba(82,112,56,.12);

    box-shadow:

        0 12px 35px rgba(0,0,0,.06);

    transition:.35s ease;

    cursor:default;

    &:hover{

        transform:translateY(-8px);

        box-shadow:

            0 22px 45px rgba(0,0,0,.10);

    }

    &:hover::before{

        width:100%;

    }

    &::before{

        content:"";

        position:absolute;

        left:0;

        bottom:0;

        width:0;

        height:4px;

        border-radius:20px;

        transition:.4s;

        background:linear-gradient(

            90deg,

            #527038,

            #88A65A

        );

    }

`;

export const FeatureIcon = styled.div`

    flex-shrink:0;

    width:64px;

    height:64px;

    border-radius:18px;

    display:flex;

    justify-content:center;

    align-items:center;

    background:

        linear-gradient(

            135deg,

            #6C8B47,

            #527038

        );

    color:white;

    font-size:1.6rem;

    box-shadow:

        0 10px 25px rgba(82,112,56,.30);

    transition:.35s;

    ${FeatureCard}:hover &{

        transform:rotate(-8deg) scale(1.08);

    }

`;

export const FeatureContent = styled.div`

    display:flex;

    flex-direction:column;

    gap:10px;

`;

export const FeatureTitle = styled.h3`

    margin:0;

    color:#1F1F1F;

    font-size:1.2rem;

    font-weight:700;

`;

export const FeatureDescription = styled.p`

    margin:0;

    color:#666;

    line-height:1.7;

    font-size:.95rem;

`;