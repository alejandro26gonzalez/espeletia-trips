import styled from "styled-components";

export const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 88vh;
    min-height: 760px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 992px){
        height: 80vh;
        min-height: 700px;
    };
    @media (max-width: 768px){
        min-height: 650px;
        padding: 120px 0 90px;
    };
    @media (max-width: 576px){
        min-height: 620px;
        padding: 120px 0 70px;
    };
    @media (max-width: 420px){
        min-height: 580px;
    };
`;
export const HeroBackground = styled.div`
    position: absolute;
    inset: 0;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transform: scale(1.08);
`;
export const HeroOverlay = styled.div`
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
export const HeroContainer = styled.div`
    position: relative;
    z-index: 2;
    width: min(1500px, 92%);
    margin: auto;
    @media (max-width:768px){
        width:94%;
    }
    @media (max-width:576px){
        width:92%;
    }
`;
export const HeroContent = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    @media (max-width:1200px){
        max-width:700px;
    }
    @media (max-width:992px){
        max-width:620px;
    }
    @media (max-width:576px){
        max-width:100%;
    }
`;
export const HeroEyebrow = styled.span`
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    padding: .55rem 1.15rem;
    border-radius: 999px;
    background: rgba(255,255,255,.14);
    border: 1px solid rgba(255,255,255,.25);
    backdrop-filter: blur(20px);
    color: #dce98f;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    margin-bottom: 1.8rem;
    @media (max-width:576px){
        font-size:.68rem;
        letter-spacing:.12em;
        padding:.45rem 1rem;
    }
`;
export const HeroTitle = styled.h1`
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1.08;
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
    text-shadow: 0 10px 30px rgba(0,0,0,.30);
    @media (max-width: 992px) {
        font-size: 3.8rem;
    }
    @media (max-width: 768px) {
        font-size: 3rem;
    }
    @media (max-width: 576px) {
        font-size: 2.35rem;
        line-height: 1.2;
    }
    @media (max-width: 420px) {
        font-size: 2rem;
    }
`;
export const HeroHighlight = styled.span`
    color: #bfd730;
`;
export const HeroSubtitle = styled.h2`
    font-size: clamp(1.2rem, 2vw, 1.65rem);
    font-weight: 600;
    color: white;
    margin-bottom: 1.2rem;
    opacity: .95;
     @media (max-width:992px){
        font-size:1.25rem;
    }
    @media (max-width:768px){
        font-size:1.15rem;
    }
    @media (max-width:576px){
        font-size:1rem;
    }
    @media (max-width:420px){
        font-size:.95rem;
    }
`;
export const HeroDescription = styled.p`
    max-width: 650px;
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255,255,255,.88);
    margin-bottom: 3rem;
     @media (max-width:992px){
        max-width:580px;
        font-size:1rem;
    }
    @media (max-width:768px){
        width:95%;
        font-size:.95rem;
    }
    @media (max-width:576px){
        width:100%;
        font-size:.92rem;
        line-height:1.7;
        margin-bottom:2.3rem;
    }
    @media (max-width:420px){
        font-size:.88rem;
    }
`;
export const HeroButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width:576px){
        width:100%;
        flex-direction:column;
    }
`;
export const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: .8rem;
    border: none;
    padding: 1rem 2rem;
    border-radius: 999px;
    background: #f58220;
    color: white;
    font-size: .95rem;
    font-weight: 700;
    cursor: pointer;
    transition: .35s;
    &:hover{
        transform: translateY(-4px);
        background:#df6d0d;
        box-shadow: 0 18px 35px rgba(245,130,32,.35);
    }
    @media (max-width:576px){
        width:100%;
    }
    @media (max-width:420px){
        padding:.9rem 1.2rem;
        font-size:.9rem;
    }
`;
export const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: .8rem;
    padding: 1rem 2rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.35);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(18px);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: .35s;
    &:hover{
        background: rgba(255,255,255,.22);
        transform: translateY(-4px);
    }
    @media (max-width:576px){
        width:100%;
    }
    @media (max-width:420px){
        padding:.9rem 1.2rem;
        font-size:.9rem;
    }
`;
export const HeroScrollIndicator = styled.div`
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255,255,255,.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,.20);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.4rem;
    animation: bounce 2s infinite;
    @keyframes bounce{
        0%,20%,50%,80%,100%{
            transform: translate(-50%,0);
        }
        40%{
            transform: translate(-50%,-10px);
        }
        60%{
            transform: translate(-50%,-5px);
        }
    }
    @media (max-width:576px){
        width:42px;
        height:42px;
        font-size:1.2rem;
    }
`;