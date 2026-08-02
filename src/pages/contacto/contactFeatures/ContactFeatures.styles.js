import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 7rem 0;
    background: #FFFFFF;
    overflow: hidden;
`;
export const Header = styled.div`
    width: min(700px, 92%);
    margin: 0 auto 4rem;
    text-align: center;
`;
export const Title = styled.h2`
    margin-bottom: 1rem;
    color: #183A2F;
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
`;
export const Subtitle = styled.p`
    color: #6B7280;
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 650px;
    margin: 0 auto;
`;
export const Cards = styled.div`
    width: min(1200px, 92%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media (max-width:992px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:768px){
        grid-template-columns:1fr;
    }
`;
export const Card = styled.div`
    background: #FFFFFF;
    padding: 2.5rem 2rem;
    border-radius: 26px;
    border: 1px solid #EEF1F3;
    text-align: center;
    transition: all .35s ease;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 22px 45px rgba(0,0,0,.10);
        border-color:#9EDB66;
    }
`;
export const IconContainer = styled.div`
    width: 78px;
    height: 78px;
    margin: 0 auto 1.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(125,186,75,.12);
    color: #2E7D4F;
    font-size: 2rem;
    transition: .35s ease;
    ${Card}:hover &{
        background:#2E7D4F;
        color:#FFFFFF;
        transform:scale(1.08);

    }
`;
export const CardTitle = styled.h3`
    margin-bottom: 1rem;
    color: #183A2F;
    font-size: 1.35rem;
    font-weight: 700;
`;
export const CardDescription = styled.p`
    color: #6B7280;
    line-height: 1.8;
    font-size: .98rem;
`;
