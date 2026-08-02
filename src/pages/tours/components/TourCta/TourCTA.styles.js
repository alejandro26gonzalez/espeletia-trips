import styled from "styled-components";

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .75rem 1.4rem;
    border-radius: 999px;
    background: rgba(194, 206, 196, 0.34);
    border: 1px solid rgba(79,138,91,.18);
    color: #fff;
    font-size: .82rem;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all .35s ease;
    &:hover{
        background: rgba(79,138,91,.16);
        transform: translateY(-2px);
    }
    @media (max-width:576px){
        padding:.65rem 1.15rem;
        font-size:.74rem;
    }
`;
export const CTABackground = styled.div`
    position: absolute;
    inset: 0;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.08);
`;
export const CTAOverlay = styled.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            180deg,
            rgba(9, 32, 58, .50) 0%,
            rgba(11, 45, 32, .38) 30%,
            rgba(20, 34, 28, .62) 70%,
            rgba(244,248,241,.95) 100%
        );
`;
export const PrimaryButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.75rem;
    padding:1rem 2rem;
    border:none;
    border-radius:999px;
    cursor:pointer;
    position:relative;
    overflow:hidden;
    background:linear-gradient(
        135deg,
        #2b6a43,
        #4f8a5b
    );
    color:#ffffff;
    font-size:1rem;
    font-weight:700;
    transition:
        transform .35s ease,
        box-shadow .35s ease,
        background .35s ease;
    box-shadow:
        0 18px 35px rgba(43,106,67,.25);
    svg{
        font-size:1.15rem;
        transition:transform .35s ease;
    }
    &::before{
        content:"";
        position:absolute;
        top:0;
        left:-120%;
        width:70%;
        height:100%;
        background:
            linear-gradient(
                120deg,
                transparent,
                rgba(255,255,255,.35),
                transparent
            );
        transition:left .7s ease;
    }
    &:hover{
        transform:translateY(-4px);
        box-shadow:
            0 28px 45px rgba(43,106,67,.35);
    }
    &:hover svg{
        transform:scale(1.15);
    }
    &:active{
        transform:translateY(-1px);
    }
    &:hover::before{
        left:150%;
    }
    @media(max-width:576px){
        width:100%;
        padding:1rem;
    }
`;
export const SecondaryButton = styled.button`
    display:flex;
    align-items:center;
    gap:.65rem;
    padding:.95rem 1rem;
    background:transparent;
    border:none;
    cursor:pointer;
    color: #dffdef;
    font-size:1rem;
    font-weight:700;
    transition:all .35s ease;
    svg{
        transition:transform .35s ease;
    }
    &:hover{
        color:#163321;
    }
    &:hover svg{
        transform:translateX(6px);
    }
    @media(max-width:576px){
        width:100%;
        justify-content:center;
    }
`;
export const Section = styled.section`
    position: relative;
    padding: 8rem 0;
    overflow: hidden;
    @media (max-width:992px){
        padding:7rem 0;
    }
    @media (max-width:768px){
        padding:6rem 0;
    }
    @media (max-width:576px){
        padding:5rem 0;
    }
`;
export const Highlight = styled.span`
    position: relative;
    background: linear-gradient(
        135deg,
        #5eee95,
        #7fb069
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip:text;
    &::after{
        content:"";
        position:absolute;
        left:0;
        bottom:-8px;
        width:80%;
        height:4px;
        border-radius:999px;
        background:linear-gradient(
            90deg,
            #7fb069,
            transparent
        );
        transition:width .4s ease;
    }
    
`;
export const Container = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem;
    border-radius: 36px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.88),
            rgba(248,252,247,.94)
        );
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border: 1px solid rgba(255,255,255,.55);
    box-shadow:
        0 40px 90px rgba(24,45,28,.08),
        0 15px 35px rgba(24,45,28,.05);
        z-index:2;
        &::before{
        content:"";
        position:absolute;
        inset:0;
        border-radius:inherit;
        background:
            linear-gradient(
                135deg,
                rgba(255,255,255,.45),
                transparent 40%
            );
        pointer-events:none;
    }
    &:hover ${PrimaryButton}{
        box-shadow:
            0 25px 50px rgba(43,106,67,.30);
    }
    &:hover ${SecondaryButton}{
        letter-spacing:.02em;
    }
    &:hover ${Badge}{
        background: rgba(79,138,91,.18);
        border-color: rgba(79,138,91,.28);
    }
    &:hover ${Highlight}::after{
        width:120%;
    }
    &::after{
    content:"";
    position:absolute;
    width:420px;
    height:420px;
    border-radius:50%;
    right:-160px;
    top:-160px;
    background:
            radial-gradient(
                rgba(145,196,123,.22),
                transparent 70%
            );
        pointer-events:none;
    }
    @media(max-width:1200px){
        margin:0 2rem;
    }
    @media(max-width:768px){
        padding:3.5rem 2rem;
        border-radius:30px;
    }
    @media(max-width:576px){
        margin:0 1rem;
        padding:3rem 1.5rem;
        border-radius:24px;
    }
`;
export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 760px;
    @media (max-width:768px){
        gap:1.25rem;
    }
    @media (max-width:576px){
        gap:1rem;
    }
`;
export const Title = styled.h2`
    margin: 0;
    color: #99ffc0;
    font-size: clamp(2.5rem,5vw,4rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -.03em;
    @media (max-width:768px){
        font-size:2.8rem;
    }
    @media (max-width:576px){
        font-size:2.1rem;
    }
`;
export const Description = styled.p`
    margin: 0;
    color: #f9faf9;
    font-size: 1.08rem;
    line-height: 1.9;
    max-width: 700px;
    @media (max-width:768px){
        font-size:1rem;
        line-height:1.8;
    }
    @media (max-width:576px){
        font-size:.95rem;
        line-height:1.7;
    }
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    @media (max-width:576px){
        width:100%;
        flex-direction:column;
    }
`;
