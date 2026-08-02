import styled from "styled-components";
import IMAGES from "../../assets/images";

/* ===========================
   SECTION
=========================== */

export const Section = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 6rem 1.5rem;
    background: #faf9f3;
    width: 90%;
`;

/* ===========================
   CONTAINER
=========================== */

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;

    align-items: center;

    @media (max-width: 1200px) {
        gap: 3rem;
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        gap: 2.5rem;
    }

    @media (max-width: 480px) {
        padding: 0;
    }
`;

/* ===========================
   LEFT COLUMN
=========================== */

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    z-index: 2;

    min-width: 0;

    @media (max-width: 1200px) {
        align-items: center;
        text-align: center;
    }
`;

/* ===========================
   RIGHT COLUMN
=========================== */

export const RightColumn = styled.div`
    position: relative;

    min-height: 760px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 32px;

    overflow: hidden;

    background-image: linear-gradient(
            rgba(15, 22, 8, 0.58),
            rgba(15, 22, 8, 0.72)
        ),
        url(${IMAGES.componentes.form.background});

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow:
        0 25px 70px rgba(0,0,0,.16),
        0 10px 25px rgba(0,0,0,.10);

    @media (max-width: 1200px) {
        min-height: auto;
    }

    @media (max-width: 768px) {
        border-radius: 24px;
    }

    @media (max-width: 480px) {
        border-radius: 20px;
    }
`;

/* ===========================
   FORM OVERLAY
=========================== */

export const Overlay = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;

    padding: 4rem;

    backdrop-filter: blur(2px);

    position: relative;
    z-index: 2;

    @media (max-width: 992px) {
        padding: 3rem;
    }

    @media (max-width: 768px) {
        padding: 2.5rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1.5rem;
    }
`;

/* ===========================
   LEFT CONTENT
=========================== */

export const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: .75rem;

    width: fit-content;

    padding: .85rem 1.5rem;

    margin-bottom: 2rem;

    border-radius: 999px;

    border: 1px solid rgba(150, 170, 55, .25);

    background: rgba(255,255,255,.85);

    color: #708129;

    font-size: .95rem;
    font-weight: 700;
    letter-spacing: .5px;
    text-transform: uppercase;

    box-shadow: 0 10px 30px rgba(0,0,0,.05);

    svg{
        font-size:1.2rem;
        color:#9BC53D;
        flex-shrink:0;
    }

    @media (max-width:1200px){
        margin-inline:auto;
    }

    @media (max-width:480px){

        padding:.75rem 1.25rem;

        font-size:.8rem;

        gap:.5rem;

        svg{
            font-size:1rem;
        }
    }
`;

export const Title = styled.h2`
    display:flex;
    flex-direction:column;

    margin:0;

    color:#111;

    font-weight:900;

    line-height:.95;

    letter-spacing:-2px;

    font-size:clamp(3rem,6vw,5.8rem);

    @media (max-width:1200px){
        align-items:center;
    }

    @media (max-width:768px){

        line-height:1;

        letter-spacing:-1px;

        font-size:clamp(2.5rem,10vw,4rem);
    }

    @media (max-width:480px){

        font-size:2.5rem;
    }
`;

export const Highlight = styled.span`
    margin-top:.35rem;

    display:block;

    color:#99B83C;

    line-height:1;

    text-wrap:balance;

    text-shadow:
        0 10px 25px rgba(153,184,60,.18);
`;

export const Description = styled.p`
    max-width:640px;

    margin-top:2rem;
    margin-bottom:3rem;

    color:#474747;

    font-size:clamp(1.05rem,1.35vw,1.45rem);

    line-height:1.55;

    strong{

        color:#111;

        font-weight:800;

    }

    @media (max-width:1200px){

        margin-inline:auto;

    }

    @media (max-width:768px){

        max-width:100%;

        margin-bottom:2.5rem;

        font-size:1rem;

    }
`;

/* ===========================
   FORM TYPOGRAPHY
=========================== */

export const FormTitle = styled.h3`
    margin:0;

    color:#FFFFFF;

    font-size:clamp(2.3rem,3vw,3.5rem);

    font-weight:900;

    line-height:1.05;

    letter-spacing:-1px;

    @media (max-width:480px){

        font-size:2.2rem;

    }
`;

export const Accent = styled.span`
    color:#B8D93A;

    position:relative;

    display:inline-block;

    text-shadow:0 5px 18px rgba(184,217,58,.28);

    &::after{

        content:"";

        position:absolute;

        left:0;
        bottom:-6px;

        width:100%;
        height:4px;

        border-radius:999px;

        background:#B8D93A;

        opacity:.9;

        transform:scaleX(.88);

    }
`;

export const FormDescription = styled.p`
    margin-top:1.75rem;
    margin-bottom:2.75rem;

    max-width:500px;

    color:rgba(255,255,255,.92);

    font-size:1.1rem;

    line-height:1.65;

    @media (max-width:768px){

        font-size:1rem;

        margin-bottom:2rem;

    }
`;

/* ===========================
   FEATURES GRID
=========================== */

export const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 1.5rem;

    width: 100%;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const FeatureCard = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    padding: 1.5rem;

    border-radius: 22px;

    background: rgba(255, 255, 255, 0.85);

    border: 1px solid rgba(184, 217, 58, 0.18);

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.06),
        0 4px 12px rgba(0, 0, 0, 0.03);

    transition:
        transform .3s ease,
        box-shadow .3s ease,
        border-color .3s ease;

    cursor: default;

    &:hover {

        transform: translateY(-6px);

        border-color: rgba(184, 217, 58, 0.45);

        box-shadow:
            0 22px 45px rgba(0, 0, 0, 0.10),
            0 10px 20px rgba(184, 217, 58, 0.15);

    }

    @media (max-width:768px){

        padding:1.25rem;

    }
`;

export const IconWrapper = styled.div`
    width: 60px;
    height: 60px;

    min-width: 60px;

    border-radius: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
        135deg,
        #B8D93A,
        #88B32F
    );

    box-shadow:
        0 12px 25px rgba(184,217,58,.28);

    svg{

        color:white;

        font-size:1.6rem;

    }

    @media(max-width:480px){

        width:52px;
        height:52px;
        min-width:52px;

        border-radius:16px;

        svg{

            font-size:1.35rem;

        }

    }
`;

export const FeatureTitle = styled.h4`
    margin: 0 0 .45rem;

    color: #1B1B1B;

    font-size: 1.1rem;

    font-weight: 700;

    line-height: 1.3;
`;

export const FeatureText = styled.p`
    margin: 0;

    color: #5F5F5F;

    font-size: .95rem;

    line-height: 1.65;
`;

/* ===========================
   FORM
=========================== */

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
`;

export const Label = styled.label`
    display: block;

    margin-bottom: .6rem;

    color: #FFFFFF;

    font-size: .95rem;

    font-weight: 600;

    letter-spacing: .3px;
`;

export const Input = styled.input`
    width: 100%;

    padding: 1rem 1.2rem;

    border-radius: 14px;

    border: 1px solid rgba(255,255,255,.22);

    background: rgba(255,255,255,.10);

    backdrop-filter: blur(8px);

    color: white;

    font-size: 1rem;

    transition: .25s ease;

    &::placeholder{
        color: rgba(255,255,255,.65);
    }

    &:focus{

        outline: none;

        border-color: #B8D93A;

        background: rgba(255,255,255,.16);

        box-shadow: 0 0 0 4px rgba(184,217,58,.18);

    }
`;

export const CheckboxContainer = styled.label`
    display:flex;
    align-items:flex-start;
    gap:.85rem;

    cursor:pointer;

    margin-top:.25rem;
`;

export const Checkbox = styled.input`
    margin-top:.2rem;

    width:18px;
    height:18px;

    accent-color:#A8CC3C;

    cursor:pointer;

    flex-shrink:0;
`;

export const CheckboxText = styled.span`
    color:rgba(255,255,255,.88);

    font-size:.92rem;

    line-height:1.5;
`;

export const Button = styled.button`
    margin-top:1rem;

    width:100%;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:.8rem;

    padding:1rem 1.5rem;

    border:none;

    border-radius:999px;

    background:linear-gradient(
        135deg,
        #B8D93A,
        #8AAE2F
    );

    color:white;

    font-size:1rem;

    font-weight:700;

    cursor:pointer;

    transition:.3s;

    box-shadow:
        0 18px 35px rgba(150,190,50,.28);

    &:hover:not(:disabled){

        transform:translateY(-3px);

        box-shadow:
            0 22px 40px rgba(150,190,50,.38);

    }

    &:active:not(:disabled){

        transform:scale(.98);

    }

    &:disabled{

        opacity:.65;

        cursor:not-allowed;

    }
`;

export const ButtonIcon = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:1.15rem;
`;