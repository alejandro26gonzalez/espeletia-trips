import styled from "styled-components";

export const ExploreButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .65rem;
    color: #2b6a43;
    font-size: .95rem;
    font-weight: 700;
    transition: all .35s ease;
    svg{
        font-size: 1rem;
        transition: transform .35s ease;
    }
    @media (max-width:768px){
        font-size:.9rem;
    }
    @media (max-width:576px){
        width:100%;
        justify-content:space-between;
        padding-top:.75rem;
        border-top:1px dashed rgba(79,138,91,.15);
    }
`;
export const CardTitle = styled.h3`
    position: relative;
    margin: 0;
    padding-bottom: .9rem;
    color: #163321;
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 1.3;
    transition: color .35s ease;
    &::after{
        content:"";
        position:absolute;
        left:0;
        bottom:0;
        width:48px;
        height:3px;
        border-radius:999px;
        background:linear-gradient(
            90deg,
            #4f8a5b,
            #9ecb79
        );
        transition:width .35s ease;
    }
    @media (max-width:992px){
        font-size:1.3rem;
    }
    @media (max-width:768px){
        font-size:1.2rem;
    }
    @media (max-width:576px){
        font-size:1.12rem;
    }
    @media (max-width:576px){
        &::after{
            width:38px;
        }
    }
`;
export const InfoItem = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .7rem .9rem;
    border-radius: 14px;
    background: rgba(79, 138, 91, .08);
    border: 1px solid rgba(79, 138, 91, .12);
    color: #365645;
    font-size: .88rem;
    font-weight: 600;
    transition:
        background .35s ease,
        transform .35s ease,
        border-color .35s ease;
    svg{
        color:#4f8a5b;
        font-size:1rem;
        flex-shrink:0;
    }
    &:hover{
        transform: translateY(-2px);
        background: rgba(79,138,91,.14);
        border-color: rgba(79,138,91,.22);
    }
    @media (max-width:768px){
        font-size:.82rem;
        padding:.65rem .8rem;
    }
    @media (max-width:576px){
        flex:1;
        justify-content:center;
        font-size:.8rem;
    }
`;
export const Card = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 28px;
    overflow: hidden;
    cursor: pointer;
    background: rgba(255,255,255,.88);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,.55);
    box-shadow:
        0 18px 45px rgba(26,45,22,.08),
        0 8px 18px rgba(26,45,22,.04);
    transition:
        transform .45s ease,
        box-shadow .45s ease;
    &:hover{
        transform: translateY(-12px);
        box-shadow:
            0 30px 60px rgba(23,43,18,.16),
            0 12px 24px rgba(23,43,18,.08);
    }
    &:hover img{
        transform: scale(1.08);
    }
    &:hover .overlay{
        opacity:1;
    }
    &:hover ${CardTitle}{
        color:#2b6a43;
    }
    &:hover ${CardTitle}::after{
        width:72px;
    }
    &:hover ${InfoItem}{
        background: rgba(79,138,91,.12);
    }
    &:hover ${ExploreButton}{
        color:#163321;
    }
    &:hover ${ExploreButton} svg{
        transform: translateX(6px);
    }
    @media (max-width:992px){
        &:hover{
            
        }
    }
    @media (max-width:576px){
        &:hover{
            transform: translateY(-4px);
        }
    }
`;
export const CardImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 270px;
    overflow: hidden;
    @media (max-width:1200px){
        height:250px;
    }
    @media (max-width:992px){
        height:235px;
    }
    @media (max-width:768px){
        height:220px;
    }
    @media (max-width:576px){
        height:210px;
    }
`;
export const CardImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    transition:transform .7s ease;
`;
export const CardOverlay = styled.div.attrs({
        className:"overlay"
    })`
    position:absolute;
    inset:0;
    opacity:0;
    transition:opacity .45s ease;
    background:linear-gradient(
        180deg,
    rgba(0,0,0,0) 20%,
        rgba(19,38,25,.15) 60%,
        rgba(19,38,25,.45) 100%
    );
`;
export const CardBadge = styled.span`
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .55rem 1rem;
    border-radius: 999px;
    background: rgba(255,255,255,.18);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,.35);
    color: #ffffff;
    font-size: .78rem;
    font-weight: 700;
    letter-spacing: .05em;
    text-transform: uppercase;
    box-shadow:
        0 8px 18px rgba(0,0,0,.18);
    user-select: none;
    @media (max-width:576px){
        top:14px;
        left:14px;
        padding:.45rem .8rem;
        font-size:.72rem;
    }
`;
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    padding: 1.8rem;
    @media (max-width:768px){
        padding:1.5rem;
        gap:1.1rem;
    }
    @media (max-width:576px){
        padding:1.25rem;
    }
`;
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width:576px){
        gap:.75rem;
    }
`;
export const CardLocation = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    color: #5f7667;
    font-size: .9rem;
    font-weight: 500;
    svg{
        font-size: 1rem;
        color: #4f8a5b;

        flex-shrink: 0;
    }
    @media (max-width:768px){
        font-size:.85rem;
    }
    @media (max-width:576px){
        font-size:.82rem;
    }
`;
export const Rating = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    padding: .35rem .7rem;
    border-radius: 999px;
    background: rgba(255, 196, 0, .10);
    color: #c88a00;
    font-size: .9rem;
    font-weight: 700;
    svg{
        color: #f5b301;
        font-size: .95rem;
        fill: currentColor;
    }
    @media (max-width:576px){
        padding:.3rem .55rem;
        font-size:.82rem;
    }
`;
export const CardDescription = styled.p`
    margin: 0;
    color: #6f7d73;
    font-size: .97rem;
    line-height: 1.7;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media (max-width:768px){
        font-size:.93rem;
    }
    @media (max-width:576px){
        font-size:.9rem;
        line-height:1.6;
    }
`;
export const CardInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
    margin-top: .25rem;
    
    @media (max-width:768px){
        gap:.6rem;
    }
`;
export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(79, 138, 91, .12);
    @media (max-width:576px){
        flex-direction:column;
        align-items:flex-start;
        gap:1rem;
    }
`;
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .15rem;
`;
export const PriceLabel = styled.span`
    color: #7d8f82;
    font-size: .82rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .08em;
`;
export const Price = styled.span`
    color: #163321;
    font-size: 1.65rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -.02em;
    @media (max-width:768px){
        font-size:1.45rem;
    }
    @media (max-width:576px){
        font-size:1.3rem;
    }
`;