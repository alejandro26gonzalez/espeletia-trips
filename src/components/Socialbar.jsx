import styled, { keyframes } from 'styled-components';
import { device } from '../breakpoints/breakpoints.js'
import {ICONS_URLS} from "../constants/iconsLinks.js"

const Socialbar = () => {
    return (
        <SocialbarStyled>

                <SocialIcon 
                href='https://www.instagram.com/espeletia.trips.murillo?utm_source=qr&igsh=MTBmaGUyaDJya3o5dg==' 
                target="_blank" 
                rel="noopener noreferrer">
                    <SocialIconImg src={ICONS_URLS.INSTAGRAM} alt="Instagram"/>
                    <Paragraph>@ESPELETIA.TRIPS.MURILLO</Paragraph>
                </SocialIcon>

                <SocialIcon 
                href='https://www.facebook.com/share/18CTDhNeVe/' 
                target="_blank" 
                rel="noopener noreferrer">
                    <SocialIconImg src={ICONS_URLS.FACEBOOK} alt="Facebook"/>
                    <Paragraph>ESPELETIA.TRIPS.MURILLO</Paragraph>
                </SocialIcon>

                <SocialIcon 
                href='https://www.facebook.com/share/1JGsDNWJzt/' 
                target="_blank" 
                rel="noopener noreferrer">
                    <SocialIconImg src={ICONS_URLS.FACEBOOK} alt="Facebook"/>
                    <Paragraph>Murillo Trek Breyles</Paragraph>
                </SocialIcon>

        </SocialbarStyled>
    )
}

export default Socialbar

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SocialbarStyled = styled.div`
    background: linear-gradient(300deg, #355c2d, #6b8e23, #2f4f4f, #efe318);
    background-size: 180% 180%;
    animation: ${gradientAnimation} 18s ease infinite;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 500;

    @media ${device.mobile} {
        height: 30px;   
        justify-content: center;
        z-index: 10000;
    }
`
const SocialIcon = styled.a`
    display: flex;
    align-items: center;
    margin-right: 20px;
    gap: 10px;
    padding: 20px;
    color: white;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media ${device.mobile} {
        padding: 10px;
        margin-right: 0px;
        gap: 0;
        width: 30%;
    }

`
const Paragraph = styled.p`
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;


    @media ${device.mobile} {
        font-size: 12px;
        width: 50%;
    }
`;

const SocialIconImg = styled.img`
    width: 25px;
    margin-right: 15px;

    @media ${device.mobile} {
        width: 18px;
        margin-right: 8px;
    }
`;

