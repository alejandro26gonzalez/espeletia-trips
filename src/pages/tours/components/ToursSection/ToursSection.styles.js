import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    padding: 5rem 0;
    overflow: hidden;
    &::before{
        content:"";
        position:absolute;
        top:-280px;
        left:-220px;
        width:700px;
        height:700px;
        border-radius:50%;
        background:
            radial-gradient(
                rgba(146,197,122,.10),
                transparent 72%
            );
        pointer-events:none;
    }
    &::after{
        content:"";
        position:absolute;
        right:-260px;
        bottom:-320px;
        width:760px;
        height:760px;
        border-radius:50%;
        background:
            radial-gradient(
                rgba(79,138,91,.08),
                transparent 72%
            );
        pointer-events:none;
    }
    @media(max-width:992px){
        padding:8rem 0;
    }
    @media(max-width:768px){
        padding:7rem 0;
    }
    @media(max-width:576px){
        padding:6rem 0;
    }
`;
export const Container = styled.div`
    position: relative;
    width: min(1320px, calc(100% - 3rem));
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    gap:4.5rem;
    z-index:2;
    @media(max-width:768px){
        width:calc(100% - 2rem);
        gap:3.5rem;
    }
`;
export const Header = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:1.35rem;
    max-width:760px;
    margin:0 auto;
`;
export const Badge = styled.span`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:.75rem 1.4rem;
    border-radius:999px;
    background:rgba(79,138,91,.10);
    border:1px solid rgba(79,138,91,.15);
    color:#2b6a43;
    font-size:.82rem;
    font-weight:700;
    letter-spacing:.12em;
    text-transform:uppercase;
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
    transition:all .35s ease;
    &:hover{
        transform:translateY(-2px);
        background:rgba(79,138,91,.15);
    }
`;
export const Title = styled.h2`
    margin:0;
    color:#163321;
    font-size:clamp(2.4rem,5vw,3.8rem);
    font-weight:800;
    line-height:1.15;
    letter-spacing:-.03em;
    @media(max-width:576px){
        font-size:2rem;
    }
`;
export const Highlight = styled.span`
    position:relative;
    background:linear-gradient(
        135deg,
        #2b6a43,
        #7fb069
    );
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    &::after{
        content:"";
        position:absolute;
        left:0;
        bottom:-8px;
        width:80%;
        height:4px;
        border-radius:999px;
        background:linear-gradient(
            90deg,
            #7fb069,
            transparent
        );
        transition:width .35s ease;
    }
    ${Header}:hover &::after{
        width:100%;
    }
`;
export const Description = styled.p`
    margin:0;
    color:#66786c;
    font-size:1.08rem;
    line-height:1.9;
    max-width:700px;
    @media(max-width:768px){
        font-size:1rem;
    }
    @media(max-width:576px){
        font-size:.95rem;
        line-height:1.75;
    }
`;
export const ToursGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:2rem;
    align-items:stretch;
    > * { animation:fadeUp .6s ease both; }
    > *:nth-child(1){animation-delay:.05s;}
    > *:nth-child(2){animation-delay:.12s;}
    > *:nth-child(3){animation-delay:.20s;}
    > *:nth-child(4){animation-delay:.28s;}
    > *:nth-child(5){animation-delay:.36s;}
    > *:nth-child(6){animation-delay:.44s;}
    @keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(35px);
    }
    to{
        opacity:1;
        transform:none;
    }
}
    @media(max-width:1200px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:768px){
        grid-template-columns:1fr;
        gap:1.75rem;
    }
`;