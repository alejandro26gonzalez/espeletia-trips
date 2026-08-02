import styled from "styled-components";

export const ValuesSectionContainer = styled.section`
    padding: 6rem 0;
`;
export const ValuesHeader = styled.div`
    max-width: 700px;
    margin: 0 auto 4rem;
    text-align: center;
`;
export const ValuesBadge = styled.span`
    display: inline-flex;
    padding: .6rem 1.2rem;
    border-radius: 999px;
    background: #EEF7EC;
    color: #4E7D52;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
`;
export const ValuesTitle = styled.h2`
    margin: 1.5rem 0;
    color: #214228;
    font-size: clamp(2.2rem,4vw,3.3rem);
    font-weight: 800;
    line-height: 1.15;
`;
export const ValuesDivider = styled.div`
    width: 90px;
    height: 4px;
    margin: auto;
    border-radius: 999px;
    background: #D8B65F;
`;
export const ValuesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    @media(max-width:992px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:576px){
        grid-template-columns:1fr;
    }
`;
export const ValueCard = styled.div`
    position: relative;
    background: white;
    padding: 2.2rem;
    border-radius: 28px;
    overflow: hidden;
    transition: .35s ease;
    box-shadow:
        0 20px 45px rgba(0,0,0,.06);
    border: 1px solid rgba(230,235,230,.8);
    &:hover{
        transform: translateY(-10px);
        box-shadow:
            0 30px 55px rgba(0,0,0,.12);
    }
    &::before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:6px;
        background:linear-gradient(
            90deg,
            #4E7D52,
            #D8B65F
        );
    }
`;
export const ValueIcon = styled.div`
    width:72px;
    height:72px;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1.5rem;
    background:#EDF7EE;
    color:#4E7D52;
    font-size:2rem;
    transition:.3s;
    ${ValueCard}:hover &{
        transform:rotate(-8deg) scale(1.08);
    }
`;
export const ValueTitle = styled.h3`
    color:#214228;
    font-size:1.35rem;
    margin-bottom:1rem;
    font-weight:700;
`;
export const ValueDescription = styled.p`
    color:#6B7280;
    line-height:1.8;
    font-size:.97rem;
`;


