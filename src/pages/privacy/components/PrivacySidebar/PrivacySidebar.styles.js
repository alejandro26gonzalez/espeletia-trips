import styled from "styled-components";

export const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
`;
export const SidebarCard = styled.div`
    padding:1.8rem;
    border-radius:24px;
    background:white;
    border:1px solid rgba(0,0,0,.05);
    box-shadow:
        0 15px 45px rgba(0,0,0,.05);
`;
export const SidebarTitle = styled.h3`
    display:flex;
    align-items:center;
    gap:.8rem;
    margin:0 0 1.5rem;
    color:${({ theme }) => theme.colors.primary};
    font-size:1.2rem;
`;
export const SidebarList = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
`;
export const SidebarItem = styled.li`
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:.8rem 0;
    color:${({ theme }) => theme.colors.text};
    font-size:.95rem;
    border-bottom:1px solid rgba(0,0,0,.05);
    &:last-child{
        border-bottom:none;
    }
`;
export const Bullet = styled.span`
    width:8px;
    height:8px;
    border-radius:50%;
    background:${({theme})=>theme.colors.secondary};
    flex-shrink:0;
`;
export const Divider = styled.div`
    width:100%;
    height:1px;
    background:rgba(0,0,0,.08);
    margin:1rem 0;
`;
export const InfoTitle = styled.h4`
    display:flex;
    align-items:center;
    gap:.7rem;
    margin:0;
    color:${({ theme }) => theme.colors.primary};
`;
export const InfoText = styled.p`
    margin:1rem 0 0;
    color:${({ theme }) => theme.colors.text};
`;
export const ContactButton = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    padding:1rem;
    border-radius:16px;
    margin-bottom:1rem;
    background:${({theme})=>theme.colors.soft};
    transition:.3s;
    cursor:pointer;
    &:hover{
        transform:translateX(5px);
    }
`;
export const ContactIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:white;
    color:${({ theme }) => theme.colors.primary};
`;