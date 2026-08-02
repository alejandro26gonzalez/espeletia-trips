import styled from "styled-components";

export const LogoTitle = styled.span`
    font-size: 1.15rem;
    font-weight: 800;

    letter-spacing: .08em;

    text-transform: uppercase;

    color: ${({ $scrolled }) =>
        $scrolled
            ? "#233127"
            : "#FFFFFF"};

    line-height: 1;

    transition: color .3s ease;

    @media (max-width:768px){

        font-size:1rem;

    }

    @media (max-width:576px){

        font-size:.92rem;

    }
`;
export const LogoSubtitle = styled.span`
    margin-top: .15rem;

    font-size: .72rem;

    font-weight: 600;

    letter-spacing: .45em;

    text-transform: uppercase;

    color: #D9C91D;

    line-height: 1;

    @media (max-width:768px){

        font-size:.65rem;

    }

    @media (max-width:576px){

        font-size:.6rem;

    }
`;

export const FooterWrapper = styled.footer`
    position: relative;
    overflow: hidden;

    margin-top: 8rem;
    color: #FFFFFF;

    &::before {
        content: "";

        position: absolute;

        left: -8%;
        right: -8%;

        top: 180px;
        bottom: 0;

        background: linear-gradient(
            180deg,
            #1D5634 0%,
            #174629 45%,
            #123520 100%
        );

        border-radius:
            50% 50% 0 0 /
            7% 7% 0 0;

        z-index: 3;
    }
`;

export const FooterBackground = styled.div`
    position: absolute;
    inset: 0;

    background-image: url("/images/footer/footer-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    z-index: 1;
`;

export const FooterOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(
        180deg,
        rgba(5, 18, 10, .15) 0%,
        rgba(5, 18, 10, .45) 40%,
        rgba(5, 18, 10, .82) 100%
    );

    z-index: 2;
`;

export const FooterContent = styled.div`
    position: relative;
    z-index: 5;

    width: min(1320px, calc(100% - 48px));

    margin: 0 auto;

    padding: 15rem 0 2rem;

    @media (max-width: 1100px) {
        width: calc(100% - 80px);
    }

    @media (max-width: 768px) {
        width: calc(100% - 48px);
    }
`;

export const FooterGrid = styled.div`
    display: grid;

    grid-template-columns:
        1.45fr
        1fr
        1.2fr
        1fr;

    gap: 5rem;

    align-items: start;

    margin-bottom: 4rem;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

export const BrandColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1.75rem;
`;

export const BrandHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: .45rem;
`;

export const BrandLogo = styled.img`
    width: 112px;
    max-width: 100%;
    height: auto;
    object-fit: contain;

    user-select: none;
`;

export const BrandDescription = styled.p`
    max-width: 360px;

    color: rgba(255, 255, 255, .82);

    font-size: .98rem;
    line-height: 1.8;

    margin: 0;
`;

export const ResponsibleSeal = styled.img`
    width: 230px;
    max-width: 100%;
    height: auto;

    padding: .8rem;

    background: rgba(255,255,255,.05);

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 14px;

    backdrop-filter: blur(10px);
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.75rem;
`;

export const FooterTitle = styled.h3`
    position: relative;

    display: inline-flex;
    align-items: center;

    width: fit-content;

    margin: 0;

    padding-bottom: .9rem;

    font-size: 1.2rem;
    font-weight: 700;

    color: #FFFFFF;

    &::after {

        content: "";

        position: absolute;

        left: 0;
        bottom: 0;

        width: 55px;
        height: 3px;

        border-radius: 999px;

        background: #F4C542;

    }
`;

export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    margin: 0;
    padding: 0;

    list-style: none;
`;
export const FooterItem = styled.li`
    display: flex;
`; 
export const FooterLink = styled.a`
    display: inline-flex;
    align-items: center;

    gap: .75rem;

    color: rgba(255,255,255,.82);

    text-decoration: none;

    font-size: .96rem;

    transition: .25s ease;

    svg{

        font-size: .9rem;

        color: #F4C542;

        transition: .25s ease;

    }

    &:hover{

        color: #FFFFFF;

        transform: translateX(6px);

    }

    &:hover svg{

        transform: translateX(3px);

    }
`;

export const ContactIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    width: 46px;
    height: 46px;

    border-radius: 12px;

    background: rgba(255,255,255,.08);

    border: 1px solid rgba(255,255,255,.08);

    color: #F4C542;

    font-size: 1.15rem;

    transition: .3s ease;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 1rem;

    padding: .9rem 0;

    border-bottom: 1px solid rgba(255,255,255,.08);

    transition: .3s ease;

    &:last-child{
        border-bottom: none;
    }

    &:hover ${ContactIcon}{
        background: #F4C542;
        color: #18492B;
        transform: translateY(-2px);
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: .35rem;

    strong{

        color: #FFFFFF;

        font-size: .95rem;

        font-weight: 600;

    }

    span{

        color: rgba(255,255,255,.78);

        font-size: .92rem;

        line-height: 1.6;

    }
`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`;
export const SocialButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    padding: 1rem 1.15rem;

    text-decoration: none;

    color: #FFFFFF;

    background: rgba(255,255,255,.06);

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 16px;

    backdrop-filter: blur(8px);

    transition: .3s ease;

    > svg:first-child{

        flex-shrink: 0;

        width: 44px;
        height: 44px;

        padding: .75rem;

        border-radius: 12px;

        background: rgba(255,255,255,.08);

        color: #F4C542;

        transition: .3s ease;

    }

    > div{

        flex: 1;

        display: flex;
        flex-direction: column;

        gap: .3rem;

    }

    strong{

        font-size: .95rem;
        font-weight: 600;

        color: #FFFFFF;

    }

    span{

        font-size: .82rem;

        color: rgba(255,255,255,.65);

        text-transform: uppercase;

        letter-spacing: .08em;

    }

    > svg:last-child{

        color: rgba(255,255,255,.45);

        transition: .3s ease;

    }

    &:hover{

        background: rgba(255,255,255,.1);

        transform: translateY(-4px);

        border-color: rgba(244,197,66,.35);

    }

    &:hover > svg:first-child{

        background: #F4C542;

        color: #18492B;

    }

    &:hover > svg:last-child{

        transform: translateX(4px);

        color: #F4C542;

    }

`;
export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 2rem;

    padding-top: 2rem;

    border-top: 1px solid rgba(255,255,255,.08);

    @media (max-width:768px){

        flex-direction: column;

        text-align: center;

        margin-bottom: 3rem;

    }
`;
export const Copyright = styled.p`
    margin: 0;

    color: rgba(255,255,255,.65);

    font-size: .9rem;

    line-height: 1.6;
`;

export const BottomLinks = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    @media (max-width:768px){

        justify-content: center;

        flex-wrap: wrap;

        gap: 1.25rem;

    }

    a{

        color: rgba(255,255,255,.7);

        text-decoration: none;

        font-size: .9rem;

        transition: .25s ease;

        &:hover{

            color: #F4C542;

        }

    }

`;