import styled, { keyframes } from "styled-components";
import IMAGES from "../../../assets/images";

const FrailejonDecoration = IMAGES.helpers.plants.frailejon;

const fadeIn = keyframes`
from{
    opacity:0;
    transform:translateY(12px);
}
to{
    opacity:1;
    transform:translateY(0);
}
`;
export const Section = styled.section`
    margin-bottom: 90px;
`;
export const Content = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:48px;
    align-items:start;
    @media(max-width:992px){
        grid-template-columns:1fr;
    }
`;
export const Timeline = styled.div`
    h2{
        margin-bottom:40px;
    }
`;
export const TimelineItem = styled.div`
    display:flex;
    gap:24px;
    position:relative;
    padding-bottom:40px;
    &:last-child{
        padding-bottom:0;
    }
`;
export const TimelineIcon = styled.div`
    width:56px;
    height:56px;
    border-radius:50%;
    border:2px solid ${({theme})=>theme.colors.primary};
    display:flex;
    align-items:center;
    justify-content:center;
    color:${({theme})=>theme.colors.primary};
    background:white;
    position:relative;
    flex-shrink:0;
    &::after{
        content:"";
        position:absolute;
        top:56px;
        width:2px;
        height:60px;
        background:${({theme})=>theme.colors.primary};
    }
`;
export const TimelineContent = styled.div`
    display:flex;
    flex-direction:column;
`;
export const TimelineTime = styled.span`
    font-weight:700;
    margin-bottom:6px;
`;
export const TimelineTitle = styled.h4`
    margin-bottom:8px;
`;
export const TimelineDescription = styled.p`
    color:${({theme})=>theme.colors.textSecondary};
    line-height:1.7;
`;
export const Sidebar = styled.div`
    display:flex;
    flex-direction:column;
    gap:28px;
`;
export const EquipmentCard = styled.div`
    background:${({theme})=>theme.colors.surface};
    border-radius:24px;
    padding:28px;
    border:1px solid ${({theme})=>theme.colors.border};
    box-shadow:${({theme})=>theme.shadows.sm};
`;
export const EquipmentTitle = styled.h3`
    margin-bottom:24px;
`;
export const EquipmentList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;

`;
export const EquipmentItem = styled.li`
    display:flex;
    gap:12px;
    align-items:center;
`;
export const EquipmentIcon = styled.div`
    color:${({theme})=>theme.colors.primary};
`;
export const TipsCard = styled.div`
    position: relative;
    overflow: hidden;

    min-height: 220px;
    padding: 32px;
    border-radius: 28px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.98) 0%,
            #FCFAF4 45%,
            #F3EEDB 100%
        );

    border: 1px solid rgba(126, 164, 92, .18);

    box-shadow:
        0 10px 30px rgba(0,0,0,.08),
        0 2px 8px rgba(0,0,0,.05);

    backdrop-filter: blur(8px);

    animation: ${fadeIn} .45s ease;

    transition:
        transform .35s ease,
        box-shadow .35s ease;

    &:hover{
        transform: translateY(-6px);

        box-shadow:
            0 20px 45px rgba(0,0,0,.12),
            0 8px 18px rgba(126,164,92,.15);
    }

    &::before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:5px;

        background:linear-gradient(
            90deg,
            #7EA45C,
            #B8C96A,
            #D9B85F
        );
    }

    &::after{
        content:"";
        position:absolute;

        right:-20px;
        bottom:-18px;

        width:180px;
        height:180px;

        background:url(${FrailejonDecoration}) no-repeat center;
        background-size:contain;

        opacity:.22;

        transform:rotate(-8deg);

        pointer-events:none;
    }
`;
export const TipIcon = styled.div`
    font-size:2rem;
    color:${({theme})=>theme.colors.primary};
    margin-bottom:18px;
`;
export const TipTitle = styled.h3`
    margin-bottom:16px;
`;
export const TipDescription = styled.p`
    line-height:1.8;
    color:${({theme})=>theme.colors.textSecondary};
`;
