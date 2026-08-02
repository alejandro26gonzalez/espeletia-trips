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
`;
export const HighlightIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25rem;
    margin-top: 2px;
    flex-shrink: 0;
`;
export const HighlightText = styled.p`
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
`;