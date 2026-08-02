import styled from "styled-components";
import { MdDesktopAccessDisabled } from "react-icons/md";
import IMAGES from "../../assets/images"

export const Section = styled.section`
    position: relative;
    overflow: hidden;
    padding: 8rem 0;
    background: #102214;
`;
export const Background = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${IMAGES.componentes.additionalServ.main});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.03);
    &::after{
        content:"";
        position:absolute;
        inset:0;
        background:
            radial-gradient(
                circle at top,
                rgba(0,0,0,.15),
                rgba(0,0,0,.65)
            );
    }
`;
export const Overlay = styled.div`
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            180deg,
            rgba(7,18,11,.20) 0%,
            rgba(7,18,11,.55) 45%,
            rgba(7,18,11,.82) 100%
        );
    backdrop-filter: blur(2px);
`;
export const Container = styled.div`
    position: relative;
    z-index: 2;
    width: min(1400px, 92%);
    margin: 0 auto;
`;
export const Header = styled.header`
    max-width: 900px;
    margin: 0 auto 5rem;
    text-align: center;
`;
export const Eyebrow = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .65rem;
    padding: .65rem 1.5rem;
    margin-bottom: 1.75rem;
    border: 1px solid rgba(175, 209, 96, .35);
    border-radius: 999px;
    background: rgba(130, 180, 70, .08);
    backdrop-filter: blur(12px);
    color: #C9DA84;
    font-size: .9rem;
    font-weight: 700;
    letter-spacing: .28rem;
    text-transform: uppercase;
    &::before{
        content:"";
        width:9px;
        height:9px;
        border-radius:50%;
        background:#8DBB42;
        box-shadow:0 0 12px rgba(141,187,66,.8);
    }
`;
export const Title = styled.h2`
    margin: 0;
    color: #FFF;
    font-size: clamp(3rem, 6vw, 5.2rem);
    font-weight: 900;
    line-height: .95;
    text-transform: uppercase;
    letter-spacing: -.05rem;
    text-wrap: balance;
    @media (max-width: 480px) {
        font-size: clamp(2.2rem, 10vw, 3rem);
        letter-spacing: -.035rem;
    }
`;
export const Highlight = styled.span`
    display: inline-block;
    margin-top: 1rem;
    padding: .2rem 1.8rem;
    position: relative;
    color: #17260E;
    font-family: "Caveat", cursive;
    font-size: clamp(2.4rem, 4vw, 4rem);
    font-weight: 700;
    text-transform: none;
    letter-spacing: normal;
    background: linear-gradient(
        90deg,
        #8EBB45,
        #A9D35D
    );
    border-radius: 8px;
    transform: rotate(-1.3deg);
    box-shadow:
        0 18px 40px rgba(0,0,0,.25);
    &::before,
    &::after{
        content:"";
        position:absolute;
        top:50%;
        width:32px;
        height:2px;
        background:#A5CF58;
        opacity:.75;
    }
    &::before{
        right:calc(100% + 10px);
    }
    &::after{
        left:calc(100% + 10px);
    }
`;
export const Description = styled.p`
    width: min(720px, 100%);
    margin: 2rem auto 0;
    color: rgba(255,255,255,.82);
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.8;
    text-wrap: balance;
`;
export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    align-items: stretch;
    margin-bottom: 5rem;
    @media (max-width: 1200px) {
        gap: 1.5rem;
    }
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        width: min(calc(100% - 2rem), 680px);
        margin: 0 auto 4rem;
    }
    @media (max-width: 768px) {
        gap: 1.25rem;
    }
    @media (max-width: 480px) {
        width: calc(100% - 1.25rem);
    }
`;
export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`;
export const FooterText = styled.p`
    margin: 0;
    color: rgba(255,255,255,.82);
    font-size: 1.15rem;
    line-height: 1.8;
    max-width: 700px;
    text-wrap: balance;
    @media (max-width:768px){
        font-size:1rem;
        line-height:1.7;
    }
`;
export const WhatsappButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .9rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    background: linear-gradient(
        135deg,
        #74C94C 0%,
        #5FA83D 100%
    );
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
    transition:
        transform .35s ease,
        box-shadow .35s ease,
        filter .35s ease;
    box-shadow:
        0 15px 35px rgba(95,168,61,.35);
    svg{
        font-size:1.35rem;
        flex-shrink:0;
    }
    &:hover{
        transform:translateY(-5px);
        filter:brightness(1.05);
        box-shadow:
            0 22px 45px rgba(95,168,61,.45);
    }
    &:active{
        transform:translateY(-2px);
    }
    @media (max-width:576px){
        width:100%;
        padding:1rem 1.5rem;
        font-size:.95rem;
    }
`;
export const Card = styled.article`
    position: relative;
    overflow: hidden;
    min-height: 540px;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,.18);
    background: rgba(255,255,255,.04);
    backdrop-filter: blur(10px);
    box-shadow:
        0 20px 60px rgba(0,0,0,.35);
    transition:
        transform .45s ease,
        box-shadow .45s ease,
        border-color .45s ease;
    &:hover{
        transform: translateY(-10px);
        border-color: rgba(168,212,93,.45);
        box-shadow:
            0 35px 80px rgba(0,0,0,.45);
        img{
            transform: scale(1.08);
        }
        & > div:nth-child(2){
            opacity:.96;
        }
    }
    @media (max-width:992px){
        min-height:500px;
    }
    @media (max-width:768px){
        min-height:460px;
        border-radius:22px;
    }
    @media (max-width:480px){
        min-height:430px;
    }
`;
export const Image = styled.img`
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    transition:
        transform .8s ease;
`;
export const Gradient = styled.div`
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            90deg,
            rgba(8,14,8,.92) 0%,
            rgba(8,14,8,.70) 35%,
            rgba(8,14,8,.30) 62%,
            rgba(8,14,8,.05) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,.10) 0%,
            rgba(0,0,0,.40) 100%
        );
    transition:opacity .45s ease;
`;
export const Content = styled.div`
    position:relative;
    z-index:3;
    display:flex;
    flex-direction:column;
    height:100%;
    padding:2rem;
    @media (max-width:768px){
        padding:1.5rem;
    }
`;
export const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 62px;
    margin-bottom: 1.75rem;
    border-radius: 18px;
    background: rgba(143, 190, 67, .18);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(180, 225, 104, .28);
    color: #A8D45D;
    box-shadow:
        0 10px 25px rgba(0,0,0,.20);
    svg{
        font-size: 1.75rem;
    }
`;
export const ServiceTitle = styled.h3`
    margin: 0 0 .75rem;
    color: #FFF;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 800;
    line-height: 1.1;
    text-wrap: balance;
`;
export const Subtitle = styled.p`
    max-width: 420px;
    margin: 0;
    color: rgba(255,255,255,.82);
    font-size: 1.05rem;
    line-height: 1.75;
`;
export const Divider = styled.div`
    width: 72px;
    height: 4px;
    margin: 2rem 0;
    border-radius: 999px;
    background: linear-gradient(
        90deg,
        #8EBB45,
        rgba(142,187,69,0)
    );
`;
export const Features = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    flex: 1;
`;
export const Feature = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: rgba(255,255,255,.92);
    font-size: 1rem;
    line-height: 1.6;
    span{
        flex: 1;
    }
`;
export const FeatureIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
    background: rgba(141,187,66,.18);
    border: 1px solid rgba(141,187,66,.30);
    color: #A8D45D;
    svg{
        font-size: 1rem;
    }
`;
export const BottomButton = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-top: 2.5rem;
    padding: .9rem 1.6rem;
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.14);
    color: #FFF;
    font-size: .95rem;
    font-weight: 700;
    letter-spacing: .03rem;
    transition: .35s ease;
    ${Card}:hover &{
        background: linear-gradient(
            135deg,
            #8EBB45,
            #6FA53A
        );
        border-color: transparent;
        color: #102214;
        transform: translateX(6px);
    }
`;
