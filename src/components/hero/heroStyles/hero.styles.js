import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #172312;

    @media (max-width: 992px) {
        min-height: auto;
    }

`;

export const BackgroundImage = styled.img`
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    z-index: 0;

    user-select: none;
    pointer-events: none;

`;

export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
        linear-gradient(
            90deg,
            rgba(18, 25, 14, 0.90) 0%,
            rgba(18, 25, 14, 0.82) 25%,
            rgba(18, 25, 14, 0.55) 48%,
            rgba(18, 25, 14, 0.15) 70%,
            rgba(18, 25, 14, 0.05) 100%
        );

    &::after{
        content:"";

        position:absolute;
        inset:0;

        background:
            radial-gradient(
                circle at top right,
                rgba(255, 224, 118, .18),
                transparent 45%
            );

        pointer-events:none;
    }
    @media (max-width:768px){

        background:
            linear-gradient(
                180deg,
                rgba(16,20,14,.90) 0%,
                rgba(16,20,14,.72) 40%,
                rgba(16,20,14,.90) 100%
            );

    }
`;

export const HeroWrapper = styled.div`
    position: relative;
    z-index: 3;

    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    justify-content: center;

    padding:
        110px
        72px
        42px;

    @media (max-width:1200px){
        padding: 100px 48px 40px;
    }

    @media (max-width:992px){
        padding: 90px 40px 36px;
    }

    @media (max-width:768px){
        padding: 40px 24px 32px;
    }

    @media (max-width:480px){
        padding: 32px 18px 28px;
    }
`;
