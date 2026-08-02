import styled from "styled-components";

import IMAGES from "../../../../assets/images";

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    height: 65vh;
    min-height: 520px;
    max-height: 760px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${IMAGES.cancellationPage.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 992px) {
        height: 60vh;
        min-height: 480px;
    }
    @media (max-width: 768px) {
        min-height: 430px;
    }
    @media (max-width: 576px) {
        min-height: 390px;
    }
`;
export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.30) 0%,
        rgba(0, 0, 0, 0.55) 45%,
        rgba(0, 0, 0, 0.70) 100%
    );
`;
export const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    width: min(1200px, 90%);
    margin-top: 4rem;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (max-width: 992px) {
        width: 92%;
        margin-top: 2rem;
    }
    @media (max-width: 576px) {
        gap: 1rem;
    }
`;
export const HeroBreadcrumb = styled.span`
    font-size: .95rem;
    font-weight: 500;
    letter-spacing: .5px;
    color: rgba(255,255,255,.85);
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: .8rem;
    }
`;
export const HeroTitle = styled.h1`
    max-width: 760px;
    font-size: clamp(2.8rem, 5vw, 4.8rem);
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
`;
export const HeroDescription = styled.p`
    max-width: 720px;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    line-height: 1.9;
    color: rgba(255,255,255,.92);
    margin: 0;
    @media (max-width: 768px) {
        line-height: 1.7;
        font-size: .8rem;
    }
`;