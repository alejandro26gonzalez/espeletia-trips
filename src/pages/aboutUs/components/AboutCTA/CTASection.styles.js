import styled from "styled-components";

export const CTASectionContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 36px;
    background-image: url(${({ $background }) => $background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow:
        0 35px 70px rgba(0,0,0,.15);
`;
export const CTAOverlay = styled.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            135deg,
            rgba(17,37,23,.82),
            rgba(31,67,41,.55)
        );
    z-index: 1;
`;
export const CTAContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 760px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.75rem;
    @media(max-width:768px){
        padding:2rem;
    }
`;
export const CTATitle = styled.h2`
    margin: 0;
    color: white;
    font-size: clamp(2.4rem,4vw,3.8rem);
    line-height: 1.15;
    font-weight: 800;
`;
export const CTADescription = styled.p`
    color: rgba(255,255,255,.92);
    font-size: 1.08rem;
    line-height: 1.9;
    max-width: 620px;
    margin: 0;
`;
export const CTAButton = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2.4rem;
    border-radius: 999px;
    background: #D8B65F;
    color: white;
    text-decoration: none;
    font-size: .95rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: .35s ease;
    box-shadow:
        0 15px 35px rgba(216,182,95,.35);
    &:hover{
        transform: translateY(-4px);
        background:#C8A54B;
        box-shadow:
            0 20px 45px rgba(216,182,95,.45);
    }
    &:active{
        transform: translateY(0);
    }
`;