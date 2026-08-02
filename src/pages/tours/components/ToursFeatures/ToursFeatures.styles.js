import styled from "styled-components";

export const FeaturesSection = styled.section`
    position: relative;
    width: 100%;
    margin-top: -90px;
    padding: 0 0 4rem;
    @media (max-width: 992px) {
        margin-top: -70px;
    }
    @media (max-width: 768px) {
        margin-top: -60px;
    }
    @media (max-width: 576px) {
        margin-top: -40px;
        padding-bottom: 3rem;
    }
`;
export const FeaturesContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: min(1200px, 92%);
    margin: auto;
    padding: 2.5rem;
    border-radius: 32px;
    background: rgba(255,255,255,.75);
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    border: 1px solid rgba(255,255,255,.45);
    box-shadow:
        0 20px 60px rgba(23,35,20,.12),
        inset 0 1px 0 rgba(255,255,255,.55);
    &::before{
    content:"";
    position:absolute;
    inset:0;
    border-radius:inherit;
    background:linear-gradient(
            135deg,
            rgba(255,255,255,.35),
            transparent 45%
        );
        pointer-events:none;
    }
    @media (max-width:992px){
        padding:2rem;
    }
    @media (max-width:768px){
        width:94%;
        padding:1.8rem;
    }
    @media (max-width:576px){
        width:92%;
        border-radius:24px;
        padding:1.5rem;
    }
`;
export const FeaturesGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:2rem;
    @media (max-width:992px){
        grid-template-columns:repeat(2,1fr);
        gap:1.8rem;
    }
    @media (max-width:576px){
        grid-template-columns:1fr;
        gap:1.4rem;
    }
`;
export const FeatureCard = styled.div`
    display:flex;
    align-items:flex-start;
    gap:1.2rem;
    padding:1rem;
    border-radius:20px;
    transition:.35s ease;
    cursor:default;
    &:hover{
        background:rgba(255,255,255,.45);
        transform:translateY(-6px);
    }
    @media (max-width:576px){
        padding:.5rem;
    }
`;
export const FeatureIcon = styled.div`
    width:68px;
    height:68px;
    min-width:68px;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(
        135deg,
        #bfd730,
        #7aa63d
    );
    color:white;
    font-size:1.7rem;
    box-shadow:0 10px 25px rgba(122,166,61,.25);
    @media (max-width:576px){
        width:60px;
        height:60px;
        min-width:60px;
        font-size:1.5rem;
    }
`;
export const FeatureContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:.6rem;
    flex:1;
`;
export const FeatureTitle = styled.h3`
    font-size:1.1rem;
    font-weight:700;
    color:#23411d;
    line-height:1.3;
    @media (max-width:576px){
        font-size:1rem;
    }
`;
export const FeatureDescription = styled.p`
    font-size:.94rem;
    line-height:1.7;
    color:#5b6657;
    @media (max-width:576px){
        font-size:.9rem;
        line-height:1.6;
    }
`;