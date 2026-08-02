import styled from "styled-components";

export const BlogContainer = styled.main`
    width:100%;
    min-height:100vh;
    overflow:hidden;
    background:${({ theme }) => theme.colors.background};
`;
export const BlogWrapper = styled.div`
    width:min(1440px,95%);
    margin: 4rem auto;
    display:flex;
    flex-direction:column;
    padding:2rem 0 5rem;
`;
