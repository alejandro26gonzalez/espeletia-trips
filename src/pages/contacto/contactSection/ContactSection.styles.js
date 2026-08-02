import styled from "styled-components";
import IMAGES from "../../../assets/images";

export const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 7rem 0;
    background: #F8F7F2;
    overflow: hidden;
`;
export const Grid = styled.div`
    width: min(1200px, 92%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.4fr .9fr;
    gap: 2rem;
    align-items: start;
    @media (max-width: 992px){
        grid-template-columns: 1fr;
    }
`;
export const FormCard = styled.div`
    background: #FFFFFF;
    border-radius: 28px;
    padding: 3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media(max-width:768px){
        padding:2rem;
    }
`;
export const InfoCard = styled.div`
    position: sticky;
    top: 120px;
    background: #1F5A43;
    border-radius: 28px;
    padding: 3rem;
    color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media(max-width:992px){
        position: relative;
        top:0;
    }
    @media(max-width:768px){
        padding:2rem;
    }
`;
export const FormTitle = styled.h2`
    margin: 0 0 .75rem;
    color: #183A2F;
    font-size: clamp(2rem, 4vw, 2.6rem);
    font-weight: 700;
    line-height: 1.2;
`;
export const FormSubtitle = styled.p`
    max-width: 520px;
    margin-bottom: 2.5rem;
    color: #6B7280;
    font-size: 1rem;
    line-height: 1.8;
    @media (max-width:768px){
        margin-bottom:2rem;
    }
`;
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
`;
export const Input = styled.input`
    width: 100%;
    padding: 1rem 1.3rem;
    border: 1px solid #D8DEE4;
    border-radius: 16px;
    background: #FFFFFF;
    font-size: 1rem;
    color: #183A2F;
    transition: all .3s ease;
    &::placeholder{
        color:#9AA4AF;
    }
    &:focus{
        outline:none;
        border-color:#4F8A54;
        box-shadow:0 0 0 4px rgba(79,138,84,.12);
    }
`;
export const TextArea = styled.textarea`
    width: 100%;
    min-height: 170px;
    resize: vertical;
    padding: 1rem 1.3rem;
    border: 1px solid #D8DEE4;
    border-radius: 16px;
    background:#FFFFFF;
    font-size:1rem;
    font-family:inherit;
    color:#183A2F;
    transition:.3s;
    &::placeholder{
        color:#9AA4AF;
    }
    &:focus{
        outline:none;
        border-color:#4F8A54;
        box-shadow:0 0 0 4px rgba(79,138,84,.12);
    }
`;
export const Checkbox = styled.label`
    display:flex;
    align-items:flex-start;
    gap:.8rem;
    cursor:pointer;
    color:#5F6B76;
    font-size:.95rem;
    line-height:1.6;
    input{
        margin-top:.2rem;
        width:18px;
        height:18px;
        accent-color:#4F8A54;
        cursor:pointer;
        flex-shrink:0;
    }
    span{
        flex:1;
    }
`;
export const SubmitButton = styled.button`
    margin-top:.75rem;
    height:58px;
    border:none;
    border-radius:16px;
    background:#2E7D4F;
    color:#FFFFFF;
    font-size:1rem;
    font-weight:600;
    cursor:pointer;
    transition:all .3s ease;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background:#256640;
        transform:translateY(-2px);
        box-shadow:
            0 15px 30px rgba(46,125,79,.28);
    }
    &:active{
        transform:translateY(0);
    }
    @media(max-width:768px){
        width:100%;
    }
`;
export const InfoTitle = styled.h3`
    margin: 0 0 2rem;
    color: #FFFFFF;
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
    @media (max-width:768px){
        margin-bottom:1.5rem;
    }
`;
export const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 2.5rem;
`;
export const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,.12);
    &:last-child{
        border-bottom: none;
        padding-bottom: 0;
    }
`;
export const InfoIcon = styled.div`
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.18);
    color: #FFFFFF;
    font-size: 1.3rem;
    transition: .3s ease;
    ${InfoItem}:hover &{
        background:#8BC34A;
        transform:scale(1.08);
    }
    @media (max-width:768px){
        width:48px;
        height:48px;
        font-size:1.15rem;
    }
`;
export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .35rem;
    flex: 1;
`;
export const InfoLabel = styled.span`
    color: rgba(255,255,255,.75);
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
`;
export const InfoValue = styled.span`
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.7;
    word-break: break-word;
`;
export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2.5rem;
    @media (max-width:768px){
        justify-content: center;
    }
`;
export const SocialButton = styled.a`
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.2rem;
    background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.18);
    transition: all .3s ease;
    &:hover{
        background:#8BC34A;
        transform:translateY(-4px);
        box-shadow:0 12px 25px rgba(0,0,0,.18);
    }
    &:active{
        transform:translateY(-1px);
    }
`;
export const PlantDecoration = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 280px;
    height: 260px;
    background-image: url(${IMAGES.contact.plants});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
    pointer-events: none;
    user-select: none;
    opacity: .95;
    @media (max-width:992px){
        width:220px;
        height:200px;
    }
    @media (max-width:768px){
        display:none;
    }
`;