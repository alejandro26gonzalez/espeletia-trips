import styled from "styled-components";

export const FloatingContainer = styled.div`
    position: fixed;
    top: 80%;
    left: 0.75rem;
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    z-index: 900;

    pointer-events: none;

    @media (max-width: 992px) {
        top: auto;
        right: 1rem;
        bottom: 1rem;
        left: auto;
        transform: none;

        flex-direction: row;
        gap: 0.75rem;
    }
`;

export const SocialItem = styled.a`
    position: relative;

    display: flex;
    align-items: center;

    text-decoration: none;

    pointer-events: auto;

    cursor: pointer;
`;

export const SocialIcon = styled.div`
    width: 2.75rem;
    height: 2.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(32, 43, 56, 0.92);
    backdrop-filter: blur(12px);

    border: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.18),
        0 2px 8px rgba(0, 0, 0, 0.12);

    color: #FFFFFF;

    ${SocialItem}:hover & {
        background: ${({ $color }) => $color};
    }

    font-size: 1.25rem;

    transition:
        background 0.3s ease,
        color 0.3s ease,
        transform 0.3s ease,
        box-shadow 0.3s ease;

    z-index: 2;

    ${SocialItem}:hover & {
        transform: scale(1.12);

        background: ${({ $color }) => $color};

        box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.22),
            0 4px 12px rgba(0, 0, 0, 0.18);
    }

    svg {
        width: 1.15rem;
        height: 1.15rem;

        flex-shrink: 0;
    }

    @media (max-width: 992px) {
        width: 3rem;
        height: 3rem;

        svg {
            width: 1.25rem;
            height: 1.25rem;
        }
    }
`;

export const SocialCard = styled.div`
    position: absolute;
    left: 2rem;

    min-width: 220px;
    padding: 0.85rem 1rem 0.85rem 2.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;

    border-radius: 18px;

    background: rgba(32, 43, 56, 0.94);
    backdrop-filter: blur(16px);

    border: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow:
        0 16px 40px rgba(0, 0, 0, 0.22),
        0 6px 16px rgba(0, 0, 0, 0.12);

    opacity: 0;
    visibility: hidden;

    transform: translateX(-15px);

    transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        visibility 0.3s ease;

    z-index: 1;

    ${SocialItem}:hover & {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }

    @media (max-width: 992px) {
        display: none;
    }
`;

export const SocialTitle = styled.span`
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.2;

    color: #FFFFFF;

    white-space: nowrap;
    transition: color .25s ease;

    ${SocialItem}:hover & {
        color: ${({ $color }) => $color};
    }
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
`;

export const SocialSubtitle = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.35;

    color: rgba(255, 255, 255, 0.72);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    transition:
        color .25s ease,
        opacity .25s ease;

    ${SocialItem}:hover & {
        color: rgba(255, 255, 255, 0.92);
        opacity: 1;
    }
`;
