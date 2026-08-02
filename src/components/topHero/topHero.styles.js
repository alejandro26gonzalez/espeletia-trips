import styled, {keyframes} from "styled-components";


const zoomBackground = keyframes`
    from{
        background-size:100%;
    }
    to{
        background-size:106%;
    }
`;

/* ==========================================================
   ANIMATIONS
========================================================== */

const fadeUp = keyframes`
    from{
        opacity:0;
        transform:translateY(40px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
    
`;
const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;
export const HeroSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    isolation: isolate;
    animation:${zoomBackground} 18s ease-out forwards;
    &::after{
        content:"";
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        height:180px;
        background:linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,.12),
            #FFFFFF
        );
        z-index:-1;
        pointer-events:none;
    }
    /*
        Espacio reservado para el Logo + Navbar
    */
    padding-top: 180px;
    @media (max-width: 1200px) {
        padding-top: 160px;
    }
    @media (max-width: 992px) {
        min-height: auto;
        padding-top: 150px;
    }
    @media (max-width: 768px) {
        padding-top: 130px;
    }
    @media (max-width: 576px) {
        padding-top: 120px;
    }
    animation:${fadeUp} .9s ease forwards;
`;
export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,.70) 0%,
            rgba(0,0,0,.45) 35%,
            rgba(0,0,0,.15) 60%,
            rgba(0,0,0,.35) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,.05) 0%,
            rgba(0,0,0,.10) 45%,
            rgba(0,0,0,.65) 100%
        );
`;
export const HeroContainer = styled.div`
    width: min(1280px, calc(100% - 48px));
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex: 1;
    @media (max-width: 768px) {
        width: min(100%, calc(100% - 32px));
    }
    @media (max-width: 480px) {
        width: calc(100% - 24px);
    }
`;
export const HeroContent = styled.div`
    width: min(650px, 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    z-index: 2;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;
export const Eyebrow = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-bottom: 1.25rem;
    font-size: clamp(.9rem, 1vw, 1.1rem);
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: #E8D61E;
    &::after{
        content:"";
        width:90px;
        height:2px;
        margin-left:16px;
        background:rgba(255,255,255,.45);
        border-radius:999px;
    }
    @media (max-width:768px){
        justify-content:center;
        &::after{
            width:70px;
        }
    }
    @media (max-width:576px){
        font-size:.82rem;
        margin-bottom:1rem;
        &::after{
            width:55px;
            margin-left:12px;
        }
    }
`;
export const Title = styled.h1`
    display:flex;
    flex-direction:column;
    margin:0;
    line-height:.92;
    font-weight:900;
    text-transform:uppercase;
    color:#FFFFFF;
    text-shadow:
        0 6px 18px rgba(0,0,0,.45),
        0 2px 6px rgba(0,0,0,.25);
    span{
        display:block;
        font-size:clamp(3.8rem,8vw,7.3rem);
        letter-spacing:-.04em;
    }
    span+span{
        margin-top:.25rem;
    }
    @media (max-width:992px){
        span{
            font-size:clamp(3.5rem,10vw,6rem);
        }
    }
    @media (max-width:768px){
        align-items:center;
        span{
            font-size:clamp(3rem,13vw,5rem);
        }
    }
    @media (max-width:480px){
        span{
            font-size:clamp(2.6rem,15vw,4rem);
        }
    }
`;
export const Subtitle = styled.p`
    margin-top:1.8rem;
    margin-bottom:2.3rem;
    max-width:560px;
    font-size:clamp(1rem,1.3vw,1.45rem);
    line-height:1.75;
    color:rgba(255,255,255,.92);
    text-shadow:0 2px 10px rgba(0,0,0,.25);
    @media (max-width:768px){
        max-width:620px;
        margin-top:1.4rem;
        margin-bottom:2rem;
    }
    @media (max-width:576px){
        font-size:1rem;
        line-height:1.65;
        margin-bottom:1.8rem;
    }
`;
export const CTAButton = styled.button`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:.8rem;
    padding:18px 34px;
    border:none;
    border-radius:999px;
    cursor:pointer;
    font-size:1rem;
    font-weight:700;
    color:white;
    background:#787118;
    box-shadow:
        0 14px 30px rgba(0,0,0,.25);
    transition:
        transform .3s ease,
        background .3s ease,
        box-shadow .3s ease;
    svg{
        font-size:1.25rem;
    }
    &:hover{
        background:#8A8220;
        transform:translateY(-4px);
        box-shadow:
            0 18px 38px rgba(0,0,0,.35);
    }
    &:active{
        transform:translateY(0);
    }
    animation:${fadeUp} 1.15s ease both;
    svg{
        transition:transform .35s ease;
    }
    &:hover svg{
        transform:translateX(5px);
    }
    @media (max-width:768px){
        width:100%;
        max-width:320px;
        padding:16px 24px;
    }
    animation:${fadeIn} 1.4s ease both;
`;
export const BottomFeatures = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 2rem;
    padding: 2rem 4rem;
    background: rgba(8, 10, 8, .45);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-top: 1px solid rgba(255,255,255,.08);
    @media (max-width:992px){
        grid-template-columns:1fr;
        gap:1.5rem;
        padding:2rem;
    }
    @media (max-width:576px){
        padding:1.5rem;
        gap:1.25rem;
    }
`;
export const Feature = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    min-height:70px;
    @media (max-width:992px){
        justify-content:center;
        text-align:left;
    }
    @media (max-width:576px){
        align-items:flex-start;
    }
`;
export const FeatureIcon = styled.div`
    width:56px;
    height:56px;
    flex-shrink:0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    color:#E8D61E;
    background:rgba(232,214,30,.08);
    border:1px solid rgba(232,214,30,.25);
    transition:all .35s ease;
    svg{
        font-size:1.6rem;
    }
    ${Feature}:hover &{
        transform:translateY(-4px);
        background:rgba(232,214,30,.15);
        border-color:rgba(232,214,30,.45);
    }
    @media (max-width:576px){
        width:50px;
        height:50px;
        svg{
            font-size:1.35rem;
        }
    }
`;
export const FeatureText = styled.div`
    display:flex;
    flex-direction:column;
`;
export const FeatureTitle = styled.h4`
    margin:0;
    font-size:1.08rem;
    font-weight:700;
    color:#FFFFFF;
    @media (max-width:576px){
        font-size:1rem;
    }
`;
export const FeatureDescription = styled.p`
    margin:.35rem 0 0;
    color:rgba(255,255,255,.72);
    font-size:.95rem;
    line-height:1.45;
    @media (max-width:576px){
        font-size:.9rem;
    }
`;