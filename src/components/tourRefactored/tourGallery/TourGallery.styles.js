import styled from "styled-components";

export const Section = styled.section`
    margin-bottom:90px;
`;
export const Header = styled.div`
    margin-bottom:40px;
`;
export const Title = styled.h2`
    font-size:2.2rem;
    margin-bottom:12px;
`;
export const Description = styled.p`
    max-width:650px;
    line-height:1.8;
    color:${({theme})=>theme.colors.textSecondary};
`;
export const GalleryGrid = styled.div`
    display:grid;
    gap:16px;
    grid-template-columns:
        2fr
        1fr
        1fr;
    grid-template-rows:
        240px
        240px;
    @media(max-width:768px){
        grid-template-columns:1fr;
        grid-template-rows:340px;
    }
`;
export const MainImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:24px;
    grid-row:1 / span 2;
    transition:.45s;
    cursor:pointer;
    &:hover{
        transform:scale(1.03);
    };
    @media(max-width:768px){
        grid-row:auto;
        border-radius:24px;
    }
`;
export const SecondaryImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:20px;
    transition:.35s;
    cursor:pointer;
    &:hover{
        transform:scale(1.03);
    }
    @media(max-width:768px){
        display:none;
    }
`;
export const ViewGalleryButton = styled.button`

        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:.75rem;
        padding:1rem 2rem;
        margin-top: 1rem;
        border:none;
        border-radius:999px;
        cursor:pointer;
        position:relative;
        overflow:hidden;
        background:linear-gradient(
            135deg,
            #2b6a43,
            #4f8a5b
        );
        color:#ffffff;
        font-size:1rem;
        font-weight:700;
        transition:
            transform .35s ease,
            box-shadow .35s ease,
            background .35s ease;
        box-shadow:
            0 18px 35px rgba(43,106,67,.25);

        &::before{
            content:"";
            position:absolute;
            top:0;
            left:-120%;
            width:70%;
            height:100%;
            background:
                linear-gradient(
                    120deg,
                    transparent,
                    rgba(255,255,255,.35),
                    transparent
                );
            transition:left .7s ease;
        }
        &:hover{
            transform:translateY(-4px);
            box-shadow:
                0 28px 45px rgba(43,106,67,.35);
        }
        &:hover svg{
            transform:scale(1.15);
        }
        &:active{
            transform:translateY(-1px);
        }
        &:hover::before{
            left:150%;
        }
        @media(max-width:576px){
            width:100%;
            padding:1rem;
        }
`;
