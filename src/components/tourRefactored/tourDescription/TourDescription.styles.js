import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: 90px;
`;
export const Header = styled.div`
    margin-bottom: 24px;
`;
export const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
`;
export const Intro = styled.p`
    font-size: 1.2rem;
    line-height: 1.9;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 28px;
    font-weight: 500;
`;
export const Content = styled.p`
    line-height: 1.9;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 42px;
`;
export const HighlightGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
    gap: 20px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`;
export const HighlightItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 18px;
    border-radius: 18px;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;
    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({ theme }) => theme.shadows.md};
        border-color: ${({ theme }) =>
            theme.colors.primaryLight};
    }
    @media (max-width: 768px) {
        padding: 16px;
        gap: 12px;
    }
    @media (max-width: 480px) {
        padding: 14px;
        gap: 11px;
    }
`;
export const HighlightIcon = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    border-radius: 12px;
    background: ${({ theme }) =>
        `${theme.colors.primary}12`};
    color: ${({ theme }) =>
        theme.colors.primary};
    font-size: 1.15rem;
    transition:
        background 0.25s ease,
        transform 0.25s ease;
    ${HighlightItem}:hover & {
        background: ${({ theme }) =>
            `${theme.colors.primary}1c`};
        transform: scale(1.05);
    }
    @media (max-width: 480px) {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        font-size: 1rem;
    }
`;
export const HighlightText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`;
export const HighlightTitle = styled.h4`
    margin: 0;
    color: ${({ theme }) =>
        theme.colors.primary};
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.3;
    @media (max-width: 480px) {
        font-size: 0.92rem;
    }
`;
export const HighlightDescription = styled.p`
    margin: 0;
    color: ${({ theme }) =>
        theme.colors.textSecondary};
    font-size: 0.88rem;
    line-height: 1.55;
    @media (max-width: 480px) {
        font-size: 0.82rem;
        line-height: 1.5;
    }
`;