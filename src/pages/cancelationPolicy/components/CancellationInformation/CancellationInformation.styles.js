import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 7rem 0;
    background:
        linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.background} 0%,
            ${({ theme }) => theme.colors.backgroundAlt} 100%
        );
`;
export const Container = styled.div`
    width: min(1200px, 90%);
    margin: auto;
`;
export const Header = styled.div`
    max-width: 760px;
    margin: 0 auto 5rem;
    text-align: center;
`;
export const Badge = styled.span`
    display: inline-flex;
    padding: .55rem 1.25rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    margin-bottom: 1.5rem;
`;
export const Title = styled.h2`
    margin-bottom: 1.5rem;
    font-size: clamp(2rem, 4vw, 3rem);
    color: ${({ theme }) => theme.colors.text};
`;
export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.05rem;
    line-height: 1.8;
`;
export const Cards = styled.div`
    display: grid;
    gap: 2rem;
`;