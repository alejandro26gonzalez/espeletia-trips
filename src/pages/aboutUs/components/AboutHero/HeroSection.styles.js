import styled from "styled-components";

export const HeroSectionContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 100dvh;
    display: flex;
    overflow: hidden;
    align-items: center;
    background-image: url(${({ $background }) => $background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            90deg,
            rgba(12,27,18,.78) 0%,
            rgba(12,27,18,.55) 35%,
            rgba(12,27,18,.18) 70%,
            rgba(12,27,18,.08) 100%
        );
    z-index: 1;
`;
export const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    margin-left: clamp(2rem, 7vw, 8rem);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (max-width: 992px){
        width: min(560px,100%);
        margin-left: 2rem;
        margin-right: 2rem;
    }
    @media (max-width:768px){
        width:100%;
        margin:0 1.5rem;
        align-items:center;
        text-align:center;
    }
`;
export const HeroBadge = styled.span`
    width: fit-content;
    padding: .6rem 1.2rem;
    border-radius: 999px;
    background: rgba(255,255,255,.18);
    backdrop-filter: blur(12px);
    color: white;
    font-size: .85rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media(max-width:768px){
        margin:auto;
    }
`;
export const HeroTitle = styled.h1`
    color: white;
    font-size: clamp(3rem,5vw,5rem);
    line-height:1.05;
    font-weight:800;
    margin:0;
`;
export const HeroHighlight = styled.span`
    display:block;
    color:#D9C47A;
`;
export const HeroDivider = styled.div`
    width:120px;
    height:4px;
    border-radius:999px;
    background:#D9C47A;
    @media(max-width:768px){
        margin:auto;
    }
`;
export const HeroDescription = styled.p`
    color:rgba(255,255,255,.95);
    font-size:1.1rem;
    line-height:1.8;
    max-width:540px;
    margin:0;
    @media(max-width:768px){
        max-width:100%;
    }
`;