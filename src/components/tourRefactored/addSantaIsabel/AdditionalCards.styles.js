import styled from "styled-components";

export const ExpeditionGrid = styled.div`
    display: grid;
    grid-template-columns:
        repeat(2, minmax(0, 1fr));
    gap: 20px;
    width: 100%;
    margin-top: 28px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;
export const InfoCard = styled.article`
    position: relative;
    padding: 24px;
    border-radius: 20px;
    background:
        linear-gradient(
            145deg,
            ${({ theme }) => theme.colors.surface},
            ${({ theme }) => theme.colors.background}
        );
    border: 1px solid
        ${({ theme }) => theme.colors.border};
    box-shadow:
        0 8px 24px
        rgba(31, 41, 55, 0.05);
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;
    &:hover {
        transform: translateY(-3px);
        border-color:
            ${({ theme }) =>
                `${theme.colors.primaryLight}70`};
        box-shadow:
            0 14px 32px
            rgba(31, 41, 55, 0.08);
    }
    @media (max-width: 768px) {
        padding: 20px;
    }
    @media (max-width: 480px) {
        padding: 18px;
    }
`;
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};
`;
export const CardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 12px;
    background:
        ${({ theme }) =>
            `${theme.colors.primary}12`};
    color:
        ${({ theme }) =>
            theme.colors.primary};
    font-size: 1.15rem;
`;
export const CardTitle = styled.h3`
    margin: 0;
    color:
        ${({ theme }) =>
            theme.colors.primary};
    font-size: 1.1rem;
    font-weight: 700;
`;
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const InfoRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 480px) {
        gap: 12px;
    }
`;
export const InfoLabel = styled.span`
    flex-shrink: 0;
    color:
        ${({ theme }) =>
            theme.colors.textSecondary};
    font-size: 0.82rem;
    font-weight: 600;
`;
export const InfoValue = styled.span`
    color:
        ${({ theme }) =>
            theme.colors.text};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: right;
    line-height: 1.5;
`;
export const MealsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const MealItem = styled.li`
    display: flex;
    align-items: center;
    gap: 7px;
    color:
        ${({ theme }) =>
            theme.colors.text};
    font-size: 0.86rem;
    line-height: 1.4;
    svg {
        flex-shrink: 0;
        color:
            ${({ theme }) =>
                theme.colors.primaryLight};
        font-size: 0.9rem;
    }
`;
