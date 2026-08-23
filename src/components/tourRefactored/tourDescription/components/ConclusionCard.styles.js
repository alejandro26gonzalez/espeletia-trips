import styled from "styled-components";

export const ConclusionCardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    margin-top: 28px;
    padding: 24px 28px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid
        ${({ theme }) => theme.colors.border};
    border-left: 4px solid
        ${({ theme }) => theme.colors.primaryLight};
    border-radius: 18px;
    box-shadow:
        0 8px 24px rgba(31, 41, 55, 0.04);
    box-sizing: border-box;
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    &:hover {
        transform: translateY(-2px);
        box-shadow:
            0 12px 30px rgba(31, 41, 55, 0.07);
    }
    @media (max-width: 768px) {
        gap: 12px;
        margin-top: 22px;
        padding: 20px;
    }
    @media (max-width: 480px) {
        padding: 18px;
        border-left-width: 3px;
    }
`;
export const QuoteIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: ${({ theme }) =>
        `${theme.colors.primary}10`};
    color: ${({ theme }) =>
        theme.colors.primaryLight};
    font-size: 1.1rem;
    @media (max-width: 480px) {
        width: 34px;
        height: 34px;
        font-size: 1rem;
    }
`;
export const ConclusionText = styled.p`
    margin: 0;
    color: ${({ theme }) =>
        theme.colors.textSecondary};
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.02rem;
    font-style: italic;
    line-height: 1.8;
    letter-spacing: 0.01em;
    @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.7;
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;