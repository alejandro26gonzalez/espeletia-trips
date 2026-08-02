import styled, { css } from "styled-components";

const COLORS = {

    green: {
        soft: "#EAF5E7",
        badge: "#D8ECD2",
        text: "#3D6F38",
        border: "#C9E1C1",
    },

    yellow: {
        soft: "#FFF8DE",
        badge: "#FFE79E",
        text: "#A06B00",
        border: "#F8E0A2",
    },

    orange: {
        soft: "#FFF0E5",
        badge: "#FFD0A8",
        text: "#B35A00",
        border: "#F6D4B3",
    },

    blue: {
        soft: "#E8F6F6",
        badge: "#D6F0EC",
        text: "#2D6F6A",
        border: "#CDE6E2",
    },

};

export const Card = styled.article`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 22px;
    padding: 2rem;
    border: 1px solid rgba(0,0,0,.08);
    transition: .35s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    &:hover{
        transform: translateY(-8px);
        box-shadow:
            0 18px 40px rgba(0,0,0,.08);
    }
`;
export const CardHeader = styled.div`
    display:flex;
    align-items:flex-start;
    gap:1rem;
    margin-bottom:1.5rem;
`;
export const Content = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:.75rem;
`;
export const IconWrapper = styled.div`
    ${({ $color }) => css`
        background:${COLORS[$color].soft};
        color:${COLORS[$color].text};
        border:1px solid ${COLORS[$color].border};
    `}
    width:64px;
    height:64px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
    svg{
        font-size:2rem;
    }
`;
export const Title = styled.h3`
    margin:0;
    font-size:1.25rem;
    line-height:1.45;
    color:${({theme})=>theme.colors.text};
    font-weight:700;
`;
export const Badge = styled.span`
    ${({ $color }) => css`
        background:${COLORS[$color].badge};
        color:${COLORS[$color].text};
    `}
    width:max-content;
    padding:.45rem .9rem;
    border-radius:999px;
    font-size:.85rem;
    font-weight:600;
`;
export const Description = styled.p`
    margin:0;
    color:${({theme})=>theme.colors.textSecondary};
    line-height:1.8;
    font-size:.98rem;
`;