import styled from "styled-components";

export const NoticeContainer = styled.section`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 2.5rem 3rem;
    margin-bottom: 1rem;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:
        radial-gradient(
            circle at center,
            rgba(255, 223, 128, .22) 10%,
            rgba(255,255,255,0) 60%
        ),
        linear-gradient(
            90deg,
            #d2eec3 10%,
            #f7fbf4 45%,
            #edffc4 100%
        );
    border: 1px solid rgba(76, 121, 66, .18);
    box-shadow:
        0 20px 45px rgba(48,82,39,.08);
    @media (max-width:768px){
        padding:2rem;
    }
    @media (max-width:576px){
        padding:1.5rem;
        border-radius:22px;
    }
`;
export const NoticeContent = styled.div`
    display:flex;
    align-items:flex-start;
    gap:1.25rem;
    position:relative;
    z-index:2;
    max-width:700px;
`;
export const NoticeIcon = styled.div`
    width:60px;
    height:60px;
    min-width:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background:#dce8d4;
    color:#3f5f38;
    font-size:1.7rem;
    box-shadow:
        inset 0 0 0 1px rgba(63,95,56,.12);
    svg{
        stroke-width:2.2;
    }
`;
export const NoticeText = styled.div`
    display:flex;
    flex-direction:column;
`;
export const NoticeTitle = styled.h3`
    margin:0 0 .35rem;
    color:#243126;
    font-size:1.2rem;
    font-weight:700;
`;
export const NoticeDescription = styled.p`
    margin:0;
    color:#55625a;
    line-height:1.75;
    font-size:.97rem;
`;
export const MountainDecoration = styled.img`
    position:absolute;
    right:0;
    bottom:0;
    width:260px;
    opacity:.28;
    pointer-events:none;
    user-select:none;
    @media(max-width:768px){
        width:190px;
        opacity:.18;
    }
    @media(max-width:576px){
        display:none;
    }
`;