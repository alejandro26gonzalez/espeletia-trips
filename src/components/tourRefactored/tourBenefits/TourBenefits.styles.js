import styled from "styled-components";

export const Section = styled.section`
    margin: 120px 0;
`;
export const Grid = styled.div`
    position: relative;
    overflow: hidden;
    display: grid;
    width: min(1320px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 48px;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    border-radius: 32px;
    background:
    linear-gradient(
    180deg,
    #d3ec8d,
    #d1e4c2
    );
    border: 1px solid rgba(255,255,255,.7);
    backdrop-filter: blur(20px);
    box-shadow:
        0 28px 70px rgba(0,0,0,.06),
        0 8px 24px rgba(0,0,0,.04),
        inset 0 1px rgba(255,255,255,.9);
    &::before{
        content:"";
        position:absolute;
        inset:0;
        background:
            radial-gradient(
                circle at top right,
                rgba(125,165,92,.16),
                transparent 45%
            ),
            radial-gradient(
                circle at bottom left,
                rgba(244,208,132,.12),
                transparent 40%
            );
        pointer-events:none;
    }
    &::after{
        content:"";
        position:absolute;
        right:-80px;
        bottom:-90px;
        width:320px;
        height:320px;
        background:url("/images/mountain-line.svg")
            no-repeat center;
        background-size:contain;
        opacity:.05;
        pointer-events:none;
    }
    @media(max-width:1200px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:768px){
        padding:32px;
        grid-template-columns:1fr;
    }
`;
export const BenefitCard = styled.div`
    position:relative;
    z-index:2;
    display:flex;
    align-items:flex-start;
    gap:20px;
    padding:24px;
    border-radius:22px;
    transition:.35s ease;
    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.55),
            rgba(255,255,255,.18)
        );
    border:1px solid rgba(255,255,255,.55);
    &:hover{
        transform:
            translateY(-8px);
        background:white;
        box-shadow:
            0 20px 45px rgba(0,0,0,.08);
    }
`;
export const IconContainer = styled.div`
    position:relative;
    width:68px;
    height:68px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-shrink:0;
    border-radius:20px;
    color:${({theme})=>theme.colors.primary};
    font-size:1.9rem;
    background:
        linear-gradient(
            145deg,
            rgba(125,165,92,.18),
            rgba(125,165,92,.08)
        );
    border:
        1px solid
        rgba(125,165,92,.15);
    box-shadow:
        0 12px 24px
        rgba(125,165,92,.12);
    &::before{
        content:"";
        position:absolute;
        width:90px;
        height:90px;
        border-radius:50%;
        background:
            radial-gradient(
                rgba(125,165,92,.15),
                transparent 70%
            );
        z-index:-1;
    }
`;
export const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
export const Title = styled.h3`
    margin-bottom:8px;
    font-size:1.12rem;
    font-weight:700;
    letter-spacing:-.02em;
    color:${({theme})=>theme.colors.text};
`;
export const Subtitle = styled.p`
    max-width:230px;
    line-height:1.75;
    font-size:.96rem;
    color:${({theme})=>theme.colors.textSecondary};
`;