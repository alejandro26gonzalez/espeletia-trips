import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    gap:2.5rem;
`;
export const Header = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
export const Title = styled.h2`
    margin:0;
    font-size:clamp(2rem,4vw,3rem);
    color: ${({ theme }) => theme.colors.primary};
    font-weight:700;
`;
export const Description = styled.p`
    margin:0;
    max-width:850px;
    line-height:1.9;
    color:${({ theme }) => theme.colors.text};
    font-size:1.05rem;
`;
export const AccordionContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`;