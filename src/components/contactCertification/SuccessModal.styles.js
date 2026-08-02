import styled, { keyframes } from "styled-components";

/* ===========================
   ANIMATIONS
=========================== */

const fadeIn = keyframes`
    from{
        opacity:0;
    }

    to{
        opacity:1;
    }
`;

const scaleUp = keyframes`
    from{
        opacity:0;
        transform:translateY(25px) scale(.95);
    }

    to{
        opacity:1;
        transform:translateY(0) scale(1);
    }
`;

/* ===========================
   OVERLAY
=========================== */

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;

    background: rgba(0, 0, 0, 0.55);

    backdrop-filter: blur(8px);

    z-index: 9999;

    animation: ${fadeIn} .3s ease;
`;

/* ===========================
   CARD
=========================== */

export const ModalCard = styled.div`
    width: 100%;
    max-width: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    padding: 3rem;

    border-radius: 30px;

    background: rgba(255,255,255,.92);

    border: 1px solid rgba(255,255,255,.4);

    box-shadow:
        0 25px 70px rgba(0,0,0,.18),
        0 10px 30px rgba(0,0,0,.08);

    animation: ${scaleUp} .35s ease;

    @media (max-width:768px){

        padding:2.5rem;

        border-radius:24px;

    }

    @media (max-width:480px){

        padding:2rem 1.5rem;

        border-radius:20px;

    }
`;

/* ===========================
   SUCCESS ICON
=========================== */

export const IconContainer = styled.div`
    width: 95px;
    height: 95px;

    border-radius: 50%;

    display:flex;
    align-items:center;
    justify-content:center;

    margin-bottom:1.8rem;

    background: linear-gradient(
        135deg,
        #B9D73F,
        #88B32F
    );

    box-shadow:
        0 20px 40px rgba(146,181,48,.35);

    svg{

        font-size:3rem;

        color:white;

    }

    @media(max-width:480px){

        width:80px;
        height:80px;

        svg{

            font-size:2.5rem;

        }

    }
`;

/* ===========================
   TITLE
=========================== */

export const Title = styled.h3`
    margin:0;

    color:#1A1A1A;

    font-size:clamp(1.8rem,2.4vw,2.4rem);

    font-weight:800;

    line-height:1.2;
`;

/* ===========================
   DESCRIPTION
=========================== */

export const Description = styled.p`
    margin-top:1.25rem;
    margin-bottom:2.5rem;

    color:#5A5A5A;

    font-size:1.05rem;

    line-height:1.7;

    max-width:380px;

    @media(max-width:480px){

        font-size:.95rem;

    }
`;

/* ===========================
   BUTTON
=========================== */

export const CloseButton = styled.button`
    border:none;

    outline:none;

    cursor:pointer;

    padding:1rem 2.5rem;

    border-radius:999px;

    background:linear-gradient(
        135deg,
        #B8D93A,
        #8AB130
    );

    color:white;

    font-size:1rem;

    font-weight:700;

    transition:.3s;

    box-shadow:
        0 15px 35px rgba(152,186,58,.35);

    &:hover{

        transform:translateY(-3px);

        box-shadow:
            0 22px 45px rgba(152,186,58,.45);

    }

    &:active{

        transform:scale(.98);

    }

    @media(max-width:480px){

        width:100%;

    }
`;