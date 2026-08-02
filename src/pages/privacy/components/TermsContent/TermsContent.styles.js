import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    gap:3rem;
`;
export const Header = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
export const Title = styled.h2`
    margin:0;
    font-size:clamp(2rem,4vw,3rem);
    color:${({ theme }) => theme.colors.primary};
`;
export const Description = styled.p`
    margin:0;
    line-height:1.9;
    max-width:820px;
    color:${({ theme }) => theme.colors.text};
`;
export const CardsGrid = styled.div`
    display:grid;
    grid-template-columns:
        repeat(2,1fr);
    gap:1.8rem;
    @media(max-width:992px){
        grid-template-columns:1fr;
    }
`;
export const Card = styled.article`
    padding:2rem;
    border-radius:24px;
    background:white;
    border:1px solid rgba(0,0,0,.05);
    box-shadow:
        0 15px 40px rgba(0,0,0,.05);
    transition:.35s;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    &:hover{
        transform:translateY(-8px);
        box-shadow:
            0 30px 70px rgba(0,0,0,.09);
    }
`;
export const IconWrapper = styled.div`
    width:68px;
    height:68px;
    border-radius:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:
        ${({theme})=>theme.colors.soft};
    color:${({ theme }) => theme.colors.primary};
`;
export const CardTitle = styled.h3`
    margin:0;
    color:${({ theme }) => theme.colors.primary};
    font-size:1.3rem;
`;
export const CardDescription = styled.p`
    margin:0;
    line-height:1.9;
    color:${({ theme }) => theme.colors.text};
`;