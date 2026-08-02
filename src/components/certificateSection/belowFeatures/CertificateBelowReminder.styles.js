import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 4rem auto;
    padding: 1.8rem;
    display: flex;
    align-items: center;
    background:
    linear-gradient(
    90deg,
    rgba(255,255,255,.95),
    rgba(246,249,238,.95)
    );
    border:1px solid rgba(122,142,58,.15);
    backdrop-filter: blur(8px);
    border-radius: 28px;
    box-shadow: 0 10px 30px rgba(0,0,0,.08);
    overflow: hidden;
    transition:.35s;
    &:hover{
        transform:translateY(-5px);
    }
    @media (max-width:1000px){
        flex-wrap:wrap;
        gap:2rem;
    }
`;
export const Featured = styled.div`
    flex: 2;
    display:flex;
    align-items:center;
    gap:1.4rem;
    padding-right:2rem;
    border-right:1px solid #ddd;
    img{
        width:55px;
        height:55px;
        object-fit:contain;
    }
    h3{
        margin:0;
        font-size:1.6rem;
        color:#2f4c1e;
    }
    p{
        margin-top:.5rem;
        color:#444;
        line-height:1.6;
    }
    @media(max-width:1000px){
        border:none;
        padding-right:0;
        width:100%;
        flex:100%;
    }
`;
export const Item = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:0 1.5rem;
    gap:.6rem;
    position:relative;    
    &:not(:last-child)::after{
        content:"";
        position:absolute;
        right:0;
        width:1px;
        height:70%;
        background:#ddd;
    }
    img{
        width:42px;
        height:42px;
        object-fit:contain;
        transition:.3s;
    }
    span:first-of-type{
        font-weight:600;
        color:#2f4c1e;
    }
    span:last-of-type{
        color:#555;
        line-height:1.4;
    }
    &:hover img{
        transform:translateY(-6px);
    }
    @media(max-width:1000px){
        flex:45%;
        &:after{
            display:none;
        }
    }
    @media(max-width:600px){
        flex:100%;
    }
`;