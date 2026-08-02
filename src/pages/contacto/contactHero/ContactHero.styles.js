import styled from "styled-components";
import IMAGES from "../../../assets/images";

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${IMAGES.contact.heroBkg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 992px) {
        min-height: 85vh;
    }
    @media (max-width: 768px) {
        min-height: auto;
        padding: 120px 0 80px;
    }
`;
export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            180deg,
            rgba(7, 24, 22, .45) 0%,
            rgba(7, 24, 22, .55) 45%,
            rgba(7, 24, 22, .75) 100%
        );
    z-index: 1;
`;
export const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    width: min(1180px, 92%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* Nuevo */
    padding-top: 150px;
    @media (max-width: 992px) {
        padding-top: 80px;
    }
    @media (max-width: 768px) {
        padding-top: 40px;
    }
`;
export const HeroBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1.4rem;
    margin-bottom: 1.5rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    color: #FFFFFF;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media (max-width:768px){
        padding: .5rem 1.2rem;
        font-size: .75rem;
        letter-spacing: 1.5px;
    }
`;
export const HeroTitle = styled.h1`
    max-width: 780px;
    margin: 0;
    color: #FFFFFF;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 800;
    line-height: 1.1;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 992px) {
        font-size: clamp(2.5rem, 7vw, 4rem);
    }
`;
export const HeroHighlight = styled.span`
    color: #9EDB66;
`;
export const HeroDescription = styled.p`
    max-width: 680px;
    margin-top: 1.8rem;
    color: rgba(255,255,255,.9);
    font-size: 1.15rem;
    line-height: 1.8;
    font-weight: 400;
    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 1rem;
        line-height: 1.7;
    }
`;
export const ContactInfoContainer = styled.div`
    width: 100%;
    max-width: 1050px;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 3rem;
    }
`;
export const ContactCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.6rem 1.8rem;
    border-radius: 22px;
    background: rgba(255,255,255,.14);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,.18);
    box-shadow:
        0 18px 40px rgba(0,0,0,.18);
    transition: .35s ease;
    &:hover{
        transform: translateY(-8px);
        background: rgba(255,255,255,.18);
        box-shadow:
            0 24px 50px rgba(0,0,0,.25);
    }
    @media(max-width:768px){
        padding:1.4rem;
    }
`;
export const ContactIcon = styled.div`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.16);
    color: #FFFFFF;
    font-size: 1.7rem;
    border: 1px solid rgba(255,255,255,.15);
    transition: .3s ease;
    ${ContactCard}:hover &{
        background:#7DBA4B;
        transform: rotate(-8deg);
    }
    @media(max-width:768px){
        width:58px;
        height:58px;
        font-size:1.45rem;
    }
`;
export const ContactText = styled.div`
    display:flex;
    flex-direction:column;
`;
export const ContactLabel = styled.span`
    color: rgba(255,255,255,.75);
    font-size:.9rem;
    font-weight:500;
    margin-bottom:.35rem;
    text-transform:uppercase;
    letter-spacing:1px;
`;
export const ContactValue = styled.span`
    color:#FFFFFF;
    font-size:1.05rem;
    font-weight:600;
    line-height:1.5;
    word-break: break-word;
    @media(max-width:768px){
        font-size:1rem;
    }
`;