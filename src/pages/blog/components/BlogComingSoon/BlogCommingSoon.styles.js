import styled from "styled-components";

export const Section = styled.section`
    position:relative;
    min-height:85vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    border-radius:36px;
    @media(max-width:768px){
        min-height:auto;
        padding:6rem 0;
    }
`;
export const Background = styled.img`
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
`;
export const Overlay = styled.div`
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            135deg,
            rgba(248,248,245,.92),
            rgba(248,248,245,.82)
        );
    backdrop-filter:blur(4px);
    @media(max-width:768px){
        background:
        linear-gradient(
            180deg,
            rgba(248,248,245,.96),
            rgba(248,248,245,.90)
        );
    }
`;
export const Content = styled.div`
    position:relative;
    z-index:2;
    width:min(760px,92%);
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    @media(max-width:768px){
        width:100%;
    }
`;
export const Badge = styled.span`
    display:inline-flex;
    align-items:center;
    padding:.7rem 1.4rem;
    border-radius:100px;
    background:${({theme})=>theme.colors.soft};
    color:${({theme})=>theme.colors.primary};
    font-size:.82rem;
    font-weight:700;
    letter-spacing:.12em;
    margin-bottom:2rem;
    @media(max-width:768px){
        font-size:.72rem;
        padding:.55rem 1rem;
    }
`;
export const Title = styled.h1`
    margin:0;
    font-size:clamp(2.4rem,7vw,5rem);
    line-height:1.1;
    color:${({theme})=>theme.colors.primary};
`;
export const Description = styled.p`
    margin:2rem 0;
    max-width:620px;
    line-height:1.9;
    color:${({theme})=>theme.colors.text};
    font-size:1.1rem;
    @media(max-width:768px){
        font-size:1rem;
        line-height:1.8;
    }
`;
export const Buttons = styled.div`
    display:flex;
    gap:1.2rem;
    flex-wrap:wrap;
    justify-content:center;
    margin-top:1rem;
    @media(max-width:640px){
        flex-direction:column;
        width:100%;
    }
    button{
        width:100%;
        justify-content:center;
    }
`;
export const PrimaryButton = styled.button`
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:1rem 2rem;
    border:none;
    border-radius:100px;
    background:${({theme})=>theme.colors.primary};
    color:white;
    font-weight:600;
    cursor:pointer;
    transition:.35s;
    &:hover{
        transform:translateY(-4px);
        background:${({theme})=>theme.colors.primaryLight};
    }
`;
export const SecondaryButton = styled.button`
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:1rem 2rem;
    border-radius:100px;
    background:white;
    border:1px solid rgba(0,0,0,.08);
    color:${({theme})=>theme.colors.primary};
    font-weight:600;
    cursor:pointer;
    transition:.35s;
    &:hover{
        transform:translateY(-4px);
        box-shadow:
            0 20px 40px rgba(0,0,0,.08);
    }
`;
export const PlantDecoration = styled.img`
    position:absolute;
    bottom:-20px;
    right:6%;
    width:260px;
    opacity:.95;
    pointer-events:none;
    user-select:none;
    filter:
        drop-shadow(0 25px 30px rgba(0,0,0,.15));
    @media(max-width:992px){
        width:180px;
        opacity:.45;
        right: 2%;
    }
    @media(max-width:768px){
        display:block;
        position:relative;
        right:auto;
        bottom:auto;
        width:130px;
        margin-bottom:2rem;
    }
`;