import styled from "styled-components";

export const CardBack = styled.div`
    position:absolute;
    width:200px;
    aspect-ratio:220/420;
    border-radius:28px;
    overflow:hidden;
    box-shadow:0 30px 50px rgba(0,0,0,.18);
    transform:rotate(${props=>props.rotate});
    left:${props=>props.left};
    right:${props=>props.right};
    top:${props=>props.top};
    transition:.4s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        filter:brightness(.92);
    }
    @media(max-width:992px){
        width:160px;
    }
    @media(max-width:768px){
        width:110px;
        opacity:.55;
    }
`;
export const Phone = styled.div`
    position:relative;
    width:clamp(250px,30vw,340px);
    aspect-ratio:340/690;
    background:#1f2718;
    padding:14px;
    border-radius:45px;
    box-shadow:
    0 25px 60px rgba(0,0,0,.25);
    z-index:10;
    video{
        width:100%;
        height:100%;
        border-radius:35px;
        object-fit:cover;
    }
    @media(max-width:768px){
        width:min(82vw,310px);
        padding:10px;
        border-radius:34px;
        video{
            border-radius:26px;
        }
    }
`;
export const LeftSide = styled.div`
    flex:1;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:760px;
    @media (max-width:992px){
        min-height:580px;
        width:100%;
    }
    @media (max-width:768px){
        min-height:430px;
    }
`;
export const RightSide = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:6rem;
    z-index:2;
    @media (max-width:992px){
        padding-left:0;
        align-items:center;
        width:100%;
    }
`;
export const Container = styled.section`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    padding: 7rem 8%;
    background: #faf8f1;
    @media (max-width: 1200px){
        gap:3rem;
        padding:6rem 6%;
    }
    @media (max-width: 992px){
        flex-direction:column;
        text-align:center;
        padding:5rem 5%;
    }
    @media (max-width:768px){
        padding:4rem 1.5rem;
        gap:2.5rem;
    }
`;
export const BackgroundMountains = styled.img`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    opacity:.4;
    pointer-events:none;
    @media(max-width:768px){
        opacity:.22;
        transform:scale(1.3);
    }
`;
export const InstagramButton = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:14px;
    width:min(420px,100%);
    padding:20px;
    border-radius:999px;
    background:#4F6D2A;
    color:white;
    font-weight:700;
    text-decoration:none;
    transition:.3s;
    svg{
        font-size:26px;
    }
    @media(max-width:768px){
        font-size:.95rem;
        padding:18px;
        svg{
            font-size:22px;
            }
    }
`;
export const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    width: fit-content;
    padding: .8rem 1.5rem;
    border-radius: 999px;
    background: linear-gradient(
    90deg,
    rgba(255,255,255,.92),
    rgba(247,249,241,.95)
    );    
    border: 1px solid rgba(122,142,58,.25);
    backdrop-filter: blur(8px);
    color: #6D8440;
    font-size: .95rem;
    font-weight: 500;
    letter-spacing: .06em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    box-shadow:
        0 8px 20px rgba(0,0,0,.04);
    transition: .3s;
    &:hover{
        transform: translateY(-2px);
        border-color:#6D8440;
        box-shadow:0 12px 28px rgba(0,0,0,.08);
    }
    @media(max-width:768px){
        font-size:.8rem;
        padding:.65rem 1rem;
    }
`;
export const Title = styled.h1`
    margin: 0;
    font-family: "Cormorant Garamond", serif;
    /* También puedes usar Playfair Display o DM Serif Display */
    font-size: clamp(3rem, 6vw, 5.4rem);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -2px;
    color: #4B612C;
    margin-bottom: 2rem;
    max-width: 650px;
    span{
        color:#6E8A3A;
    }
    @media (max-width: 992px){
        text-align:center;
        font-size:clamp(2.8rem,8vw,4.2rem);
        line-height:1;
        letter-spacing:-1px;
        max-width:100%;
    }
    max-width:650px;
    @media(max-width:992px){
        max-width:100%;
    }
`;
export const Description = styled.p`
    text-align:center;
    line-height:1.8;
    color:#555;
    font-size:.98rem;
    margin:30px 0;
`;
export const Features = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    width:100%;
    padding:1.5rem;
    background:rgba(255,255,255,.75);
    border-radius:28px;
    backdrop-filter:blur(10px);
    box-shadow:0 10px 25px rgba(0,0,0,.05);
    @media(max-width:992px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`;
export const Feature = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:.8rem;
    padding:1rem;
    border-radius:18px;
    transition:.3s;
    svg{
        width:54px;
        height:54px;
        padding:12px;
        background:#F5F7EE;
        border-radius:50%;
        color:#6D8440;
    }
    span{
        font-size:.95rem;
        text-align:center;
    }
    @media(max-width:768px){
        flex-direction:row;
        justify-content:flex-start;
        text-align:left;
        span{
            text-align:left;
        }
    }
`;