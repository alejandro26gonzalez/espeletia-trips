import styled from "styled-components";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";

export const Background = styled.div`

    position:absolute;

    inset:0;

    background-image:url(${props=>props.$image});

    background-size:cover;

    background-position:center;

    transition:.6s;

`;

export const Card = styled.article`
    position: relative;

    width: 100%;
    height: 620px;

    overflow: hidden;

    border-radius: 32px;

    box-shadow:
        0 35px 80px rgba(0,0,0,.18);

    display:flex;
    justify-content:center;
    align-items:center;

    &:hover ${Background}{

        transform:scale(1.05);

    }


    @media(max-width:950px){

        max-width:700px;

    }

    @media(max-width:768px){

        height:540px;

        border-radius:24px;

    }

    @media(max-width:500px){

        height:500px;

    }

`;

export const Overlay = styled.div`

    position:absolute;

    inset:0;

    background:

        linear-gradient(

            180deg,

            rgba(0,0,0,.18),

            rgba(0,0,0,.55),

            rgba(0,0,0,.82)

        );

`;

export const FeaturedBadge = styled.div`

    position:absolute;

    top:28px;

    left:28px;

    display:flex;

    align-items:center;

    gap:10px;

    padding:12px 18px;

    border-radius:50px;

    background:rgba(82,112,56,.85);

    backdrop-filter:blur(12px);

    color:white;

    font-weight:600;

    z-index:4;

`;
export const BadgeText = styled.span`

    font-size:.92rem;

`;
export const Rating = styled.div`

    position:absolute;

    top:28px;

    right:28px;

    display:flex;

    align-items:center;

    gap:12px;

    padding:12px 20px;

    border-radius:50px;

    background:rgba(255,255,255,.12);

    backdrop-filter:blur(16px);

    color:white;

    z-index:4;

`;
export const Stars = styled.div`

    display:flex;

    gap:4px;

    font-size:1rem;

`;
export const RatingValue = styled.span`

    font-weight:700;

    font-size:.95rem;

`;
export const Avatar = styled.img`

    width:130px;

    height:130px;

    border-radius:50%;

    object-fit:cover;

    border:5px solid white;

    box-shadow:

        0 20px 45px rgba(0,0,0,.35);

    margin-bottom:20px;

    @media(max-width:768px){

        width:105px;

        height:105px;

    }

`;
export const Content = styled.div`

    position:relative;

    z-index:5;

    width:80%;

    max-width:650px;

    display:flex;

    flex-direction:column;

    align-items:center;

    text-align:center;

    color:white;

`;
export const Name = styled.h3`

    margin:0;

    font-size:2rem;

    font-weight:700;

`;
export const Location = styled.div`

    display:flex;

    align-items:center;

    gap:8px;

    margin-top:10px;

    margin-bottom:28px;

    color:rgba(255,255,255,.88);

`;
export const Quote = styled.p`

    position:relative;

    font-size:1.05rem;

    line-height:1.9;

    color:white;

    max-width:620px;

    margin:0;

    padding:0 20px;

    @media(max-width:768px){

        font-size:.85rem;

        line-height:1.5;

    }

`;
export const QuoteIconLeft = styled(TfiQuoteLeft)`

    color:#A7D06A;

    font-size:1.4rem;

    margin-right:10px;

`;
export const QuoteIconRight = styled(TfiQuoteRight)`

    color:#A7D06A;

    font-size:1.4rem;

    margin-left:10px;

`;
export const NavigationButton = styled.button`
    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    width: clamp(2.75rem, 5vw, 3.5rem);
    height: clamp(2.75rem, 5vw, 3.5rem);

    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    background: rgba(255,255,255,.15);
    backdrop-filter: blur(14px);

    color: white;

    font-size: clamp(1rem, 2vw, 1.4rem);

    z-index: 10;

    transition:
        background .3s ease,
        color .3s ease,
        transform .3s ease,
        box-shadow .3s ease;

    &:hover{
        background: white;
        color: #527038;
        transform: translateY(-50%) scale(1.08);

        box-shadow: 0 12px 28px rgba(0,0,0,.18);
    }

    @media (max-width:768px){

        backdrop-filter: blur(10px);

    }
`;
export const LeftButton = styled(NavigationButton)`
    left: 1.5rem;

    @media (max-width:992px){
        left: 1rem;
    }

    @media (max-width:576px){
        left: .5rem;
    }
`;
export const RightButton = styled(NavigationButton)`
    right: 1.5rem;

    @media (max-width:992px){
        right: 1rem;
    }

    @media (max-width:576px){
        right: .5rem;
    }
`;