import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 120px 8%;
    background: linear-gradient(
        180deg,
        #F8FAF7 0%,
        #FFFFFF 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    overflow: hidden;
    @media (max-width: 1024px) {
        padding: 90px 6%;
        gap: 55px;
    }
    @media (max-width: 768px) {
        padding: 70px 24px;
        gap: 45px;
    }
`;
export const Header = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
`;
export const SmallTitle = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 18px;
    border-radius: 30px;
    background: rgba(82, 112, 56, .08);
    color: #527038;
    font-size: .9rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid rgba(82,112,56,.18);
    @media(max-width:768px){
        font-size:.78rem;
        padding:7px 16px;
    }
`;
export const Title = styled.h2`
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    line-height: 1.15;
    color: #1B1B1B;
    font-weight: 800;
    margin: 0;
    max-width: 780px;
    @media(max-width:768px){
        font-size:2.2rem;
    }
`;
export const Subtitle = styled.p`
    margin: 0;
    max-width: 700px;
    color: #666;
    line-height: 1.8;
    font-size: 1.05rem;
    @media(max-width:768px){
        font-size:.95rem;
    }
`;
export const CarouselContainer = styled.div`
    width:100%;
    max-width:1500px;
    display:grid;
    grid-template-columns:
        220px
        minmax(450px,1fr)
        220px;
    align-items:center;
    gap:30px;
    @media(max-width:1200px){
        grid-template-columns:
            180px
            1fr
            180px;
    }
    @media(max-width:950px){
        grid-template-columns:1fr;
        justify-items:center;
        gap:25px;
    }
`;
export const Indicators = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:12px;
`;
export const Dot = styled.button`
    width:${props=>props.active ? "38px":"12px"};
    height:12px;
    border-radius:50px;
    border:none;
    cursor:pointer;
    transition:.35s;
    background:${props=>
        props.active
            ? "#527038"
            : "#D5D5D5"
    };
    &:hover{
        background:#527038;
    }
`;