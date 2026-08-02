import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 100%;
    position: sticky;
    top: 110px;
    align-self: flex-start;
    @media (max-width: 992px) {
        position: static;
        top: auto;
        max-width: 650px;
        margin: 32px auto 0;
    }
    @media (max-width: 576px) {
        max-width: 100%;
        margin-top: 24px;
    }
`;
export const SidebarStack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 576px) {
        gap: 16px;
    }
`;