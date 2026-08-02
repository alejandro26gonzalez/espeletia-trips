import styled from "styled-components";

export const Overlay = styled.div`
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.88);
    backdrop-filter:blur(12px);
    z-index:9999;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ModalContainer = styled.div`
    width: min(1400px, 95vw);
    height: 92vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: grab;
    &:active{
        cursor: grabbing;
    }
`;
export const MainImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 18px;
    user-select: none;
    pointer-events: none;
`;
export const PreviousButton = styled.button`
    position:absolute;
    left:20px;
    top:50%;
    transform:translateY(-50%);
    z-index: 1000;
`;
export const NextButton = styled.button`
    position:absolute;
    right:20px;
    top:50%;
    transform:translateY(-50%);
    z-index: 1000;
`;
export const CloseButton = styled.button`
    position:absolute;
    top:20px;
    right:20px;
    z-index: 1000;
`;
export const Footer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:24px;
    z-index: 1000;
`;
export const Counter = styled.span`
    color:white;
    font-size:1rem;
`;
export const ThumbnailContainer = styled.div`
    display: flex;
    gap: 14px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 28px;
    padding-bottom: 10px;
    scrollbar-width: none;      /* Firefox */
    -ms-overflow-style: none;   /* IE */
    &::-webkit-scrollbar{
        display:none;
    }
    z-index: 1000;
`;
export const Thumbnail = styled.img`
    width:90px;
    height:70px;
    object-fit:cover;
    border-radius:12px;
    cursor:pointer;
    border:${({ $active})=>
        $active
            ? "3px solid white"
            : "2px solid transparent"
    };
    opacity:${({ $active})=>
        $active
            ? 1
            : .65
    };
    transition:.25s;
`;
