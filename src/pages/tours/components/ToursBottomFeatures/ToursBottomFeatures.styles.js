import styled from "styled-components";

export const Section = styled.section`
    padding: 0 1.5rem 7rem;
`;
export const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`;
export const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background: rgba(255,255,255,.92);
    border:1px solid rgba(126,160,76,.12);
    border-radius:30px;
    overflow:hidden;
    backdrop-filter: blur(16px);
    box-shadow:
        0 18px 60px rgba(24,54,32,.08);
    @media (max-width:1100px){
        grid-template-columns:repeat(2,1fr);
    }
    @media (max-width:700px){
        grid-template-columns:1fr;
    }
`;
export const FeatureCard = styled.div`
    display:flex;
    align-items:center;
    gap:1.25rem;
    padding:2rem;
    transition:.35s;
    position:relative;
    &:not(:last-child){
        border-right:1px solid rgba(126,160,76,.08);
    }
    &:hover{
        background:#F7FAF4;
    }
    @media(max-width:1100px){
        &:nth-child(odd){
            border-right:1px solid rgba(126,160,76,.08);
        }
        &:nth-child(even){
            border-right:none;
        }
        &:nth-child(-n+2){
            border-bottom:1px solid rgba(126,160,76,.08);
        }
    }
    @media(max-width:700px){
        border-right:none!important;
        border-bottom:1px solid rgba(126,160,76,.08);
        &:last-child{
            border-bottom:none;
        }
    }
`;
export const IconWrapper = styled.div`
    width:64px;
    height:64px;
    border-radius:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
    background:
    linear-gradient(
        135deg,
        #8AAE3C,
        #6E9331
    );
    color:white;
    font-size:1.55rem;
    box-shadow:
        0 12px 25px rgba(126,160,76,.25);
`;
export const FeatureContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:.45rem;
`;
export const FeatureTitle = styled.h3`
    margin:0;
    font-size:1.08rem;
    font-weight:700;
    color:#173321;
`;
export const FeatureDescription = styled.p`
    margin:0;
    color:#6D746D;
    font-size:.95rem;
    line-height:1.6;
`;