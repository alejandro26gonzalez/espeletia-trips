import {
    HeroSection,
    Overlay,
    HeroContainer,
    HeroContent,
    Badge,
    Title,
    Description,
    Divider
} from "./PrivacyHero.styles";

import IMAGES from "../../../../assets/images";

const PrivacyHero = ({ data }) => {

    return (

        <HeroSection $background={IMAGES.privacy.hero}>

            <Overlay />

            <HeroContainer>

                <HeroContent>

                    <Badge>
                        Privacidad • Transparencia • Confianza
                    </Badge>

                    <Title>
                        {data.title}
                    </Title>

                    <Divider />

                    <Description>
                        {data.description}
                    </Description>

                </HeroContent>

            </HeroContainer>

        </HeroSection>

    );

};

export default PrivacyHero;