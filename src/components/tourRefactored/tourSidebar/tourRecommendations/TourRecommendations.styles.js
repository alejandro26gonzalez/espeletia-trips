import styled from "styled-components";
import { Link } from "react-router-dom";

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
    color: ${({theme})=>theme.colors.textSecondary};
    line-height: 1.6;
`;
export const RecommendationList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 28px;
`;
export const RecommendationItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px;
    border-radius: 18px;
    transition: .3s;
    text-decoration: none;
    color: inherit;
    &:hover{
        background: rgba(78,123,59,.06);
        transform: translateY(-2px);
    }
`;
export const TourImage = styled.img`
    width: 82px;
    height: 82px;
    border-radius: 14px;
    object-fit: cover;
    flex-shrink: 0;
`;
export const TourInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const TourName = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 6px;
`;
export const TourMeta = styled.span`
    font-size: .88rem;
    color: ${({theme})=>theme.colors.textSecondary};
`;
export const ViewAllButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    border-radius: 16px;
    border: 1px solid ${({theme})=>theme.colors.primary};
    color: ${({theme})=>theme.colors.primary};
    font-weight: 600;
    transition: .3s;
    &:hover{
        background: ${({theme})=>theme.colors.primary};
        color: white;
    }
`;
