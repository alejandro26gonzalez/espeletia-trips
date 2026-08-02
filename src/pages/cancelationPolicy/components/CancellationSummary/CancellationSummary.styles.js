import styled from "styled-components";

export const SummarySection = styled.section`
    width: 100%;
    position: relative;
`;
export const SummaryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 2rem;
`;
export const SummaryHeader = styled.div`
    max-width: 760px;
    margin: auto;
    text-align: center;
`;
export const SummaryBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .55rem 1.4rem;
    border-radius: 999px;
    background: rgba(95,143,59,.12);
    color: ${({theme}) => theme.colors.primary};
    font-weight: 600;
    margin-bottom: 1.5rem;
`;
export const SummaryTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: clamp(2rem,4vw,3rem);
    color: ${({theme}) => theme.colors.text};
`;
export const SummaryDescription = styled.p`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 1.05rem;
    line-height: 1.8;
`;
export const SummaryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    @media(max-width:1200px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`;