import styled from "styled-components";
import IMAGES from "../../../assets/images";

export const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 7rem 0;
    background: #F8F7F2;
    overflow: hidden;
`;
export const Header = styled.div`
    width: min(700px, 92%);
    margin: 0 auto 4rem;
    text-align: center;
`;
export const Title = styled.h2`
    margin-bottom: 1rem;
    color: #183A2F;
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
`;
export const Subtitle = styled.p`
    color: #6B7280;
    line-height: 1.8;
    max-width: 650px;
    margin: 0 auto;
`;
export const MapWrapper = styled.div`
    position: relative;
    width: min(1200px, 92%);
    height: 560px;
    margin: 0 auto;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    @media (max-width:768px){
        height:420px;
        border-radius:24px;
    }
`;
export const MapFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;
export const FloatingCard = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    width: 330px;
    padding: 2rem;
    background: rgba(255,255,255,.95);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    @media(max-width:768px){
        position:relative;
        left:auto;
        bottom:auto;
        width:calc(100% - 2rem);
        margin:1rem;
    }
`;
export const CardTitle = styled.h3`
    margin-bottom: .8rem;
    color: #183A2F;
    font-size: 1.4rem;
    font-weight: 700;
`;
export const CardText = styled.p`
    margin-bottom: 1.5rem;
    color: #6B7280;
    line-height: 1.7;
`;
export const DirectionsButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: .75rem;
    padding: .9rem 1.5rem;
    border-radius: 999px;
    background: #2E7D4F;
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: .3s;
    &:hover{
        background:#256640;
        transform:translateY(-3px);
    }
`;
export const Decoration = styled.div`
    position: absolute;
    left: -40px;
    bottom: 0;
    width: 240px;
    height: 240px;
    background-image: url(${IMAGES.contact.plants});
    background-repeat: no-repeat;
    background-size: contain;
    opacity: .12;
    pointer-events: none;
    @media(max-width:992px){
        display:none;
    }
`;
