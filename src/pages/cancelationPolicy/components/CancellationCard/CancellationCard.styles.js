import styled from "styled-components";

export const Card = styled.article`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    padding: 2.5rem;
    border: 1px solid rgba(0,0,0,.05);
    box-shadow:
        0 15px 40px rgba(0,0,0,.05);
    transition: all .35s ease;
    &:hover{
        transform: translateY(-6px);
        box-shadow:
            0 25px 60px rgba(0,0,0,.10);
    }
    @media (max-width:768px){
        padding:2rem;
    }
    @media (max-width:576px){
        padding:1.5rem;
        border-radius:18px;
    }
`;
export const CardHeader = styled.div`
    margin-bottom:1.5rem;
    padding-bottom:1rem;
    border-bottom:1px solid rgba(0,0,0,.08);
`;
export const CardTitle = styled.h3`
    margin:0;
    font-size:clamp(1.3rem,2vw,1.8rem);
    font-weight:700;
    color:${({theme})=>theme.colors.primary};
    line-height:1.3;
`;
export const CardBody = styled.div`
    color:${({theme})=>theme.colors.text};
    font-size:1rem;
    line-height:1.9;
    p{
        margin-bottom:1rem;
    }
    strong{
        display:block;
        margin-top:1.4rem;
        margin-bottom:.4rem;
        color:${({theme})=>theme.colors.primary};
        font-weight:600;
    }
    ul{
        padding-left:1.4rem;
        margin-top:1rem;
    }
    li{
        margin-bottom:.8rem;
    }
    table{
        margin:2rem 0;
        border-radius:16px;
        overflow:hidden;
    }
    thead{
        background:${({theme})=>theme.colors.primary};
        color:white;
    }
    td,
    th{
        padding:1rem;
    }
    img{
        flex-shrink:0;
    }
    @media(max-width:768px){
        table{
            font-size:.9rem;
        }
    }
`;