import styled from "styled-components";

export const HeroSection = styled.section`
    position:relative;
    width:100%;
    min-height: 100vh;
    overflow:hidden;
    display:flex;
    align-items:center;
    background-image: url(${({ $background }) => $background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Overlay = styled.div`
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            90deg,
            rgba(139, 132, 109, 0.94) 0%,
            rgba(236, 223, 183, 0.82) 25%,
            rgba(248,246,240,.40) 55%,
            rgba(248,246,240,.08) 100%
        );
    z-index: 1;
`;
export const HeroContainer = styled.div`
    position:relative;
    z-index:5;
    width: min(1200px, 90%);
    margin: auto;
`;
export const HeroContent = styled.div`
    width:min(600px,100%);
    padding:3rem;
    border-radius:32px;
    background:
        hsla(0, 0%, 100%, 0.18);
    backdrop-filter:blur(18px);
    border:1px solid rgba(255,255,255,.35);
    box-shadow:
        0 30px 80px rgba(0,0,0,.08);
`;
export const Badge = styled.span`
    display:inline-flex;
    align-items:center;
    padding:.65rem 1rem;
    border-radius:100px;
    margin-top: 2rem;
    font-size:.85rem;
    font-weight:600;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:${({ theme }) => theme.colors.primary};
    background:
        rgba(255,255,255,.55);
    margin-bottom:1.5rem;
`;
export const Title = styled.h1`
    font-size:clamp(3rem,5vw,5rem);
    line-height:1.08;
    font-weight:700;
    color:${({ theme }) => theme.colors.primary};
    margin:0;
`;
export const Divider = styled.div`
    width:90px;
    height:5px;
    border-radius:20px;
    margin:2rem 0;
    background:
        linear-gradient(
            90deg,
            ${({theme})=>theme.colors.primary},
            ${({theme})=>theme.colors.secondary}
        );
`;
export const Description = styled.p`
    font-size:1.25rem;
    line-height:1.9;
    color:${({ theme }) => theme.colors.text};
    max-width:520px;
`;