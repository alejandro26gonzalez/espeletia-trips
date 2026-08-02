import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

export const Card = styled.div`
    background: ${({theme}) => theme.colors.surface};
    border-radius: 24px;
    padding: 28px;
    border: 1px solid ${({theme}) => theme.colors.border};
    box-shadow: ${({theme}) => theme.shadows.sm};
`;
export const Header = styled.div`
    margin-bottom: 28px;
`;
export const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
`;
export const Subtitle = styled.p`
    color: ${({theme}) => theme.colors.textSecondary};
    line-height: 1.6;
`;
export const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-bottom: 32px;
`;
export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
export const ContactIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(78,123,59,.08);
    color: ${({theme})=>theme.colors.primary};
    font-size: 1.2rem;
    flex-shrink: 0;
`;
export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ContactLabel = styled.span`
    font-size: .85rem;
    color: ${({theme})=>theme.colors.textSecondary};
`;
export const ContactValue = styled.span`
    font-weight: 600;
    margin-top: 3px;
`;
export const WhatsAppButton = styled.a`
    width: 100%;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-decoration: none;
    background: ${({theme})=>theme.colors.whatsapp};
    color: white;
    font-weight: 600;
    transition: .3s;
    &:hover{
        transform: translateY(-2px);
        box-shadow: ${({theme})=>theme.shadows.md};
    }
`;
export const WhatsAppIcon = styled(FaWhatsapp)`
    font-size: 1.35rem;
    flex-shrink: 0;
`;