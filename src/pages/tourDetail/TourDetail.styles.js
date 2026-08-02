import styled from "styled-components";

export const PageContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ContentContainer = styled.section`
    width: min(1320px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    grid-template-columns: minmax(0, 2fr) 380px;
    gap: 40px;
    @media (max-width: 1200px) {
        grid-template-columns: minmax(0, 1fr) 340px;
        gap: 32px;
    }
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;
export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;
export const SidebarContent = styled.aside`
    position: relative;
`;