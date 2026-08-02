import styled from "styled-components";

export const PrivacyContainer = styled.main`
    width:100%;
    overflow:hidden;
    background:${({theme})=>theme.colors.background};
`;
export const PrivacyWrapper = styled.div`
    width: min(1200px, 90%);
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:3rem;
    padding:
        3rem
        0
        5rem;
`;
export const ContentGrid = styled.section`
    display:grid;
    grid-template-columns:
        minmax(0,3fr)
        minmax(280px,1fr);
    gap:2rem;
    align-items:start;
    @media(max-width:1100px){
        grid-template-columns:1fr;
    }
`;
export const MainContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
`;
export const Sidebar = styled.aside`
    position:sticky;
    top:120px;
    align-self:start;
    @media(max-width:1100px){
        position:relative;
        top:0;
        order:-1;
    }
`;
