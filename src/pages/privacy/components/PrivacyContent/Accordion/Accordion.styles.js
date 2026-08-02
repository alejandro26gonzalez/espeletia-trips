import styled from "styled-components";

export const AccordionWrapper = styled.article`
    border-radius:24px;
    overflow:hidden;
    background:white;
    border:
        1px solid
        ${({$open,theme})=>
            $open
            ? theme.colors.secondary
            : "rgba(0,0,0,.06)"
        };
    transition:.35s;
    box-shadow:
        ${({$open})=>
            $open
            ? "0 18px 45px rgba(0,0,0,.08)"
            : "0 8px 18px rgba(0,0,0,.03)"
        };
`;
export const AccordionHeader = styled.button`
    width:100%;
    border:none;
    background:transparent;
    display:flex;
    align-items:center;
    gap:1rem;
    padding:1.5rem 2rem;
    cursor:pointer;
`;
export const IconContainer = styled.div`
    width:52px;
    height:52px;
    border-radius:50%;
    display:flex;

    align-items:center;
    justify-content:center;
    background:${({theme})=>theme.colors.soft};
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink:0;
`;
export const Title = styled.h3`
    flex:1;
    margin:0;
    text-align:left;
    color: ${({ theme }) => theme.colors.primary};
    font-size:1.2rem;
    font-weight:700;
`;
export const Arrow = styled.div`
    display:flex;
    transition:.35s;
    transform:
        rotate(
            ${({$open})=>
                $open
                ? "180deg"
                : "0deg"}
        );
`;
export const AccordionBody = styled.div`
    padding:
        0 2rem 2rem;
`;
export const Paragraph = styled.p`
    line-height:1.9;
    color:${({ theme }) => theme.colors.text};
    margin-bottom:1rem;
`;
export const List = styled.ul`
    margin:1rem 0;
    padding-left:1.4rem;
`;
export const ListItem = styled.li`
    margin-bottom:.8rem;
    color:${({ theme }) => theme.colors.text};
`;
export const Note = styled.div`
    margin-top:1.5rem;
    padding:1rem 1.3rem;
    border-left:5px solid
        ${({theme})=>theme.colors.secondary};
    background:
        ${({theme})=>theme.colors.soft};
    border-radius:12px;
    line-height:1.8;
`;
export const ContactContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:2rem;
`;
export const ContactItem = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    padding:1rem;
    border-radius:14px;
    background:
        ${({theme})=>theme.colors.soft};
`;