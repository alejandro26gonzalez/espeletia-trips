import styled from "styled-components";

export const Section = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:3.5rem;
    padding:2rem 0;
`;
export const Header = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
`;
export const Subtitle = styled.span`
    display:inline-flex;
    padding:.6rem 1.2rem;
    border-radius:100px;
    background:${({theme})=>theme.colors.soft};
    color:${({ theme }) => theme.colors.primary};
    font-size:.8rem;
    font-weight:700;
    letter-spacing:.15em;
    margin-bottom:1rem;
`;
export const Title = styled.h2`
    font-size:clamp(2.3rem,4vw,3.5rem);
    color:${({ theme }) => theme.colors.primary};
    margin:0;
`;
export const Divider = styled.span`
    width:80px;
    height:4px;
    border-radius:50px;
    background:
        linear-gradient(
            90deg,
            ${({theme})=>theme.colors.primary},
            ${({theme})=>theme.colors.secondary}
        );
    margin-top:1.5rem;
`;
export const CardsGrid = styled.div`
    display:grid;
    grid-template-columns:
        repeat(4,1fr);
    gap:2rem;
    @media(max-width:1200px){
        grid-template-columns:
            repeat(2,1fr);
    }
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`;
export const Card = styled.article`
    position:relative;
    overflow:hidden;
    padding:2.5rem 2rem;
    border-radius:28px;
    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.95),
            rgba(248,248,248,.92)
        );
    border:
        1px solid rgba(0,0,0,.05);
    box-shadow:
        0 18px 45px rgba(0,0,0,.05);
    transition:
        .35s ease;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:1.5rem;
    cursor:default;
    &:hover{
        transform:
            translateY(-10px);
        box-shadow:
            0 35px 70px rgba(0,0,0,.10);
    }
    &::before{
        content:"";
        position:absolute;
        inset:0;
        background:
            radial-gradient(
                circle at top,
                rgba(156,184,110,.12),
                transparent 70%
            );
        opacity:0;
        transition:.35s;
    }
    &:hover::before{
        opacity:1;
    }
`;
export const IconWrapper = styled.div`
    width:82px;
    height:82px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:
        linear-gradient(
            135deg,
            ${({theme})=>theme.colors.soft},
            ${({theme})=>theme.colors.lightGreen}
        );
    color:${({ theme }) => theme.colors.primary};
    transition:.35s;
    ${Card}:hover &{
        transform:
            scale(1.08)
            rotate(-8deg);
    }
`;
export const CardTitle = styled.h3`
    margin:0;
    font-size:1.35rem;
    font-weight:700;
    color:${({ theme }) => theme.colors.primary};
`;
export const CardDescription = styled.p`
    margin:0;
    line-height:1.8;
    color:${({ theme }) => theme.colors.text};
    font-size:1rem;
`;