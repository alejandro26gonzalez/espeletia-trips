import styled from "styled-components";

export const StatsCard = styled.div`

    position: relative;

    width: 100%;
    min-height: 240px;

    border-radius: 28px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px;

    background: rgba(255,255,255,.75);

    backdrop-filter: blur(18px);

    border: 1px solid rgba(82,112,56,.15);

    box-shadow:
        0 18px 45px rgba(0,0,0,.08);

    transition: all .35s ease;

    cursor: default;

    &:hover{

        transform: translateY(-8px);

        box-shadow:
            0 28px 60px rgba(0,0,0,.12);

    }

    @media(max-width:950px){

        max-width:420px;

        min-height:180px;

    }

    @media(max-width:768px){

        min-height:170px;

        padding:25px;

    }

`;

export const StatsOverlay = styled.div`

    position:absolute;

    inset:0;

    background:

    linear-gradient(

        180deg,

        rgba(255,255,255,.45),

        rgba(255,255,255,0)

    );

    pointer-events:none;

`;

export const StatsIcon = styled.div`

    width:72px;

    height:72px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

    margin-bottom:22px;

    color:white;

    font-size:1.8rem;

    background:

        linear-gradient(

            135deg,

            #6C8B47,

            #527038

        );

    box-shadow:

        0 12px 30px rgba(82,112,56,.35);

    @media(max-width:768px){

        width:62px;

        height:62px;

        font-size:1.55rem;

    }

`;

export const StatsNumber = styled.h3`

    margin:0;

    color:#1E1E1E;

    font-size:2.6rem;

    font-weight:800;

    line-height:1;

    @media(max-width:768px){

        font-size:2.2rem;

    }

`;

export const StatsLabel = styled.p`

    margin-top:14px;

    margin-bottom:0;

    text-align:center;

    color:#666;

    line-height:1.6;

    font-size:.95rem;

    max-width:180px;

`;