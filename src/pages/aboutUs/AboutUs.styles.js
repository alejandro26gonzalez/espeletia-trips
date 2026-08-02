import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
`;
export const AboutBackground = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    &::before,
    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        opacity: .45;
    }
    /* Halo superior izquierdo */
    &::before{
        width: 500px;
        height: 500px;
        top: -160px;
        left: -180px;
        background: rgba(170, 183, 67, .18);
    }
    /* Halo inferior derecho */
    &::after{
        width: 420px;
        height: 420px;
        bottom: -140px;
        right: -120px;
        background: rgba(219, 196, 132, .18);
    }
`;
export const SectionContainer = styled.div`
    position: relative;
    z-index: 2;
    width: min(1320px, calc(100% - 48px));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0 0 6rem;
    @media (max-width: 1200px) {
        width: min(1140px, calc(100% - 40px));
        gap: 4.5rem;
    }
    @media (max-width: 992px) {
        width: calc(100% - 36px);
        gap: 4rem;
        padding-bottom: 5rem;
    }
    @media (max-width: 768px) {
        width: calc(100% - 28px);
        gap: 3.5rem;
        padding-bottom: 4rem;
    }
    @media (max-width: 480px) {
        width: calc(100% - 22px);
        gap: 3rem;
    }
`;
