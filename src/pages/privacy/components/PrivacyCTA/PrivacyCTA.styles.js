import styled from "styled-components";

export const Section = styled.section`
    position:relative;
    overflow:hidden;
    border-radius:36px;
    padding:5rem 3rem;
    background:
        linear-gradient(
            135deg,
            ${({theme})=>theme.colors.primary},
            ${({theme})=>theme.colors.secondary}
        );
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
`;
export const BackgroundDecoration = styled.div`
    position:absolute;
    inset:0;
    background:
        radial-gradient(
            circle at top right,
            rgba(255,255,255,.18),
            transparent 50%
        );
`;
export const Content = styled.div`
    position:relative;
    z-index:3;
    width:min(700px,100%);
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
`;
export const Badge = styled.span`
    padding:.65rem 1.2rem;
    border-radius:100px;
    background:
        rgba(255,255,255,.18);
    backdrop-filter:blur(15px);
    color:white;
    letter-spacing:.12em;
    font-size:.8rem;
    font-weight:700;
    margin-bottom:1.5rem;
`;
export const Title = styled.h2`
    margin:0;
    color:white;
    font-size:clamp(2.4rem,5vw,3.8rem);
`;
export const Description = styled.p`
    margin:1.8rem 0 2.8rem;
    color:rgba(255,255,255,.9);
    line-height:1.9;
    font-size:1.1rem;
    max-width:620px;
`;
export const Actions = styled.div`
    display:flex;
    gap:1.2rem;
    flex-wrap:wrap;
    justify-content:center;
`;
export const PrimaryButton = styled.button`
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:1rem 2rem;
    border:none;
    border-radius:100px;
    background:white;
    color: ${({ theme }) => theme.colors.primary};
    font-weight:700;
    cursor:pointer;
    transition:.35s;
    &:hover{
        transform:translateY(-4px);
        box-shadow:
            0 20px 45px rgba(0,0,0,.18);
    }
`;
export const SecondaryButton = styled.button`
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:1rem 2rem;
    border-radius:100px;
    border:1px solid rgba(255,255,255,.35);
    background:rgba(255,255,255,.12);
    backdrop-filter:blur(12px);
    color:white;
    cursor:pointer;
    transition:.35s;
    &:hover{
        background:rgba(255,255,255,.2);
        transform:translateY(-4px);
    }
`;
export const Plant = styled.img`
    position:absolute;
    bottom:-10px;
    right:4%;
    width:230px;
    opacity:.22;
    pointer-events:none;
    user-select:none;
    @media(max-width:992px){
        display:none;
    }
`;