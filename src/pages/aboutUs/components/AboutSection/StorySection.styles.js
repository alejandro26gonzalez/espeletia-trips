import styled from "styled-components";

export const StorySectionContainer = styled.section`
    width: 100%;
    padding: 5rem 0;
`;
export const StoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;
export const StoryImageWrapper = styled.div`
    position: relative;
    width: 100%;
`;
export const StoryImage = styled.img`
    width: 100%;
    display: block;
    border-radius: 32px;
    object-fit: cover;
    box-shadow:
        0 25px 60px rgba(0,0,0,.18);
    transition: .4s;
    &:hover{
        transform: translateY(-8px);
    }
`;
export const StoryContent = styled.div`
    display:flex;
    flex-direction:column;
`;
export const StoryBadge = styled.span`
    align-self:flex-start;
    padding:.55rem 1rem;
    border-radius:999px;
    background:#EEF7EC;
    color:#48744D;
    font-size:.8rem;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
`;
export const StoryTitle = styled.h2`
    margin:1.2rem 0;
    font-size:clamp(2rem,4vw,3.2rem);
    color:#214228;
    line-height:1.15;
    font-weight:800;
`;
export const StoryDivider = styled.div`
    width:90px;
    height:4px;
    border-radius:999px;
    background:#D8B65F;
    margin-bottom:1.8rem;
`;
export const StoryDescription = styled.p`
    color:#667085;
    font-size:1.08rem;
    line-height:1.9;
    margin-bottom:2.5rem;
`;
export const StoryStatsGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:1.25rem;
    @media(max-width:576px){
        grid-template-columns:1fr;
    }
`;
export const StoryStatCard = styled.div`
    background:white;
    padding:1.5rem;
    border-radius:20px;
    box-shadow:
        0 15px 35px rgba(0,0,0,.08);
    transition:.35s;
    &:hover{
        transform:translateY(-6px);
        box-shadow:
            0 20px 45px rgba(0,0,0,.12);
    }
`;
export const StoryStatIcon = styled.div`
    width:58px;
    height:58px;
    border-radius:16px;
    background:#EDF7EE;
    color:#4E7D52;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.45rem;
    margin-bottom:1rem;
`;
export const StoryStatValue = styled.h3`
    margin:0;
    color:#214228;
    font-size:2rem;
    font-weight:800;
`;
export const StoryStatLabel = styled.p`
    margin-top:.35rem;
    color:#6C757D;
    line-height:1.5;
    font-size:.95rem;
`;
