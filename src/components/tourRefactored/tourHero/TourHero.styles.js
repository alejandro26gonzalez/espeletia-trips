import styled from "styled-components";

export const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 82vh;
    min-height:700px;
    overflow: hidden;
    background-image: url(${({image}) => image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
export const HeroOverlay = styled.div`
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            rgba(0,0,0,.55),
            rgba(0,0,0,.45)
        );
`;
export const HeroContainer = styled.div`
    position:relative;
    z-index:2;
    width: min(1320px, calc(100% - 3rem));
    margin:auto;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:white;
`;
export const Breadcrumb = styled.div`
    display:flex;
    gap:10px;
    margin-bottom:28px;
    font-size:.95rem;
    opacity:.9;
`;
export const Badge = styled.span`
    width:max-content;
    padding:10px 20px;
    border-radius:999px;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(15px);
    margin-bottom:28px;
`;
export const Title = styled.h1`
    font-size:4.5rem;
    font-weight:700;
    max-width:900px;
    margin-bottom:24px;
    @media (max-width:768px){
        font-size:3rem;
    }
    @media (max-width:576px){
        font-size:2.3rem;
    }
`;
export const Description = styled.p`
    max-width:700px;
    font-size:1.2rem;
    line-height:1.8;
    margin-bottom:36px;
`;
export const Rating = styled.div`
    display:flex;
    align-items:center;
    gap:14px;
`;
export const Stars = styled.div`
    display:flex;
    gap:6px;
    color:#FFD54A;
`;
export const RatingText = styled.span`
    font-weight:500;
`;