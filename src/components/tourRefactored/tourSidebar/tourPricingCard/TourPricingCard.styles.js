import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 20px 60px rgba(0,0,0,.08);
    border: 1px solid rgba(0,0,0,.05);
`;
export const PriceSection = styled.div`
    margin-bottom: 28px;
`;
export const PriceLabel = styled.p`
    font-size: .95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const PriceValue = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin: 8px 0;
`;
export const PriceCurrency = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const Tabs = styled.div`
    display:flex;
    gap:24px;
    margin-bottom:16px;
`;
export const TabButton = styled.button`
    background:none;
    border:none;
    cursor:pointer;
    font-weight:600;
    padding-bottom:12px;
    color:${({$active,theme})=>
        $active
            ? theme.colors.primary
            : theme.colors.textSecondary};
    border-bottom:3px solid
        ${({$active,theme})=>
            $active
                ? theme.colors.primary
                : "transparent"};
    transition:.3s;
`;
export const Divider = styled.hr`
    border:none;
    border-top:1px solid #ececec;
    margin:24px 0;
`;
export const InfoSection = styled.div`
    margin-bottom:28px;
`;
export const InfoTitle = styled.h4`
    font-size:1rem;
`;
export const InfoSubtitle = styled.p`
    color:${({theme})=>theme.colors.textSecondary};
    margin-top:6px;
`;
export const Benefits = styled.div`
    display:flex;
    flex-direction:column;
    gap:22px;
    margin-bottom:32px;
`;
export const BenefitItem = styled.div`
    display:flex;
    gap:16px;
    align-items:flex-start;
`;
export const BenefitIcon = styled.div`
    width:44px;
    height:44px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#F4F8E8;
    color:${({theme})=>theme.colors.primary};
    font-size:1.2rem;
`;
export const BenefitText = styled.div``;

export const BenefitTitle = styled.h5`
    font-size:.95rem;
`;
export const BenefitSubtitle = styled.p`
    color:${({theme})=>theme.colors.textSecondary};
    margin-top:4px;
    font-size:.88rem;
`;
export const ReserveButton = styled.a`
    width:100%;
    height:58px;
    border-radius:16px;
    background:${({theme})=>theme.colors.primary};
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:12px;
    font-weight:600;
    text-decoration:none;
    transition:.3s;
    &:hover{
        transform:translateY(-2px);
        filter:brightness(.95);
    }
`;
export const WhatsAppIcon = styled(FaWhatsapp)`
    font-size: 1.4rem;
    flex-shrink: 0;
`;