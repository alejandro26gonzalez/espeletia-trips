import styled from "styled-components";

export const PriceCardContainer = styled.article`
    position: relative;
    width: 100%;
    overflow: visible;
`;
export const DetailsPopover = styled.div`
    position: absolute;
    z-index: 20;
    left: 50%;
    bottom: 56px;
    transform: translateX(-50%);
    width: calc(100% - 24px);
    max-width: 100%;
    min-height: 280px;
    max-height: 85%;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 18px;
    border-radius: 18px;
    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, .96),
            rgba(248, 248, 245, .94)
        );
    border: 1px solid
        rgba(255, 255, 255, .7);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow:
        0 20px 45px
        rgba(31, 41, 55, .16);
    animation: detailsIn .22s ease-out;
    @keyframes detailsIn {
        from {
            opacity: 0;
            transform:
                translateX(-50%)
                translateY(8px);
        }
        to {
            opacity: 1;
            transform:
                translateX(-50%)
                translateY(0);
        }
    }
`;
export const DetailsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};
`;
export const DetailsTitle = styled.h4`
    margin: 0;
    color:
        ${({ theme }) => theme.colors.primary};
    font-size: .95rem;
    font-weight: 700;
`;
export const DetailsClose = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background:
        ${({ theme }) =>
            `${theme.colors.primary}10`};
    color:
        ${({ theme }) =>
            theme.colors.primary};
    font-size: 1.2rem;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
        background:
            ${({ theme }) =>
                `${theme.colors.primary}20`};
    }
`;
export const DetailsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 14px;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const DetailsLabel = styled.span`
    color:
        ${({ theme }) =>
            theme.colors.textSecondary};
    font-size: .72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
`;
export const DetailsValue = styled.span`
    color:
        ${({ theme }) =>
            theme.colors.text};
    font-size: .86rem;
    line-height: 1.45;
`;
export const IncludesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin: 4px 0 0;
    padding: 0;
    list-style: none;
`;
export const IncludeItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 7px;
    color:
        ${({ theme }) =>
            theme.colors.text};
    font-size: .82rem;
    line-height: 1.4;
    svg {
        flex-shrink: 0;
        margin-top: 2px;
        color:
            ${({ theme }) =>
                theme.colors.primary};
    }
`;
export const DetailsButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
    padding: 10px 16px;
    margin: 16px 0;
    border: 1px solid
        ${({ theme }) =>
            `${theme.colors.primary}30`};
    border-radius: 12px;
    background:
        ${({ $open, theme }) =>
            $open
                ? `${theme.colors.primary}12`
                : "transparent"};
    color:
        ${({ theme }) =>
            theme.colors.primary};
    font-size: .86rem;
    font-weight: 700;
    cursor: pointer;
    transition:
        background .25s ease,
        border-color .25s ease;
    &:hover {
        background:
            ${({ theme }) =>
                `${theme.colors.primary}10`};
        border-color:
            ${({ theme }) =>
                `${theme.colors.primary}50`};
    }
`;
export const DetailsIcon = styled.span`
    display: flex;
    transition:
        transform .25s ease;
    transform:
        rotate(
            ${({ $open }) =>
                $open ? "180deg" : "0deg"}
        );
`;