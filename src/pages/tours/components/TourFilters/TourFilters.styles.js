import styled from "styled-components";

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    position: relative;
    z-index: 2;
    @media (max-width:768px){
        gap:.85rem;
        margin-bottom:3rem;
    }
    @media (max-width:576px){
        gap:.7rem;
        margin-bottom:2.5rem;
    }
`;
export const FilterButton = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .55rem;
    padding: .9rem 1.5rem;
    border-radius: 999px;
    cursor: pointer;
    border: 1px solid
        ${({ $active }) =>
            $active
                ? "rgba(79,138,91,.35)"
                : "rgba(255,255,255,.45)"};
    background:
        ${({ $active }) =>
            $active
                ? "linear-gradient(135deg,#2b6a43,#4f8a5b)"
                : "rgba(255,255,255,.72)"};
    color:
        ${({ $active }) =>
            $active
                ? "#fff"
                : "#486356"};
    font-size: .95rem;
    font-weight: 700;
    letter-spacing: .02em;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow:
        ${({ $active }) =>
            $active
                ? "0 15px 35px rgba(43,106,67,.22)"
                : "0 8px 20px rgba(24,45,28,.05)"};
    transition:
        all .35s ease;
    overflow: hidden;
    &:hover{
        transform: translateY(-3px);
        border-color: rgba(79,138,91,.22);
        background:
            ${({ $active }) =>
                $active
                    ? "linear-gradient(135deg,#2b6a43,#5a9b68)"
                    : "rgba(255,255,255,.88)"};
        box-shadow:
            ${({ $active }) =>
                $active
                    ? "0 20px 40px rgba(43,106,67,.28)"
                    : "0 14px 28px rgba(24,45,28,.08)"};
    }
    &:active{
        transform: translateY(-1px);
    }
    &::before{
    content:"";
    position:absolute;
    inset:0;
    border-radius:inherit;
    background:
            linear-gradient(
                135deg,
                rgba(255,255,255,.28),
                transparent 45%
            );
        opacity:${({$active})=>$active?1:0};
        pointer-events:none;
    }
    &::after{
        content:"";
        position:absolute;
        left:-120%;
        top:0;
        width:60%;
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
    &:hover::after{
        left:160%;
    }
    span{
        width:8px;
        height:8px;
        border-radius:50%;
        background:
            ${({$active})=>
                $active
                    ? "#fff"
                    : "#7fb069"};
        transition:.3s;
    }
    @media(max-width:768px){
        padding:.8rem 1.25rem;
        font-size:.88rem;
    }
    @media(max-width:576px){
        width:calc(50% - .5rem);
        justify-content:center;
    }
    @media(max-width:420px){
        width:100%;
    }
`;