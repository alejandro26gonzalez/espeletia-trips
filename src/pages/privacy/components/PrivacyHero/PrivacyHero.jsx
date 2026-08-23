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
import { useTranslation } from "react-i18next";

const PrivacyHero = ({ data }) => {
    const {t} = useTranslation("privacy");

    return (

        <HeroSection $background={data.background}>

            <Overlay />

            <HeroContainer>

                <HeroContent>

                    <Badge>
                        {t(data.badgeKey)}
                    </Badge>

                    <Title>
                        {t(data.titleKey)}
                    </Title>

                    <Divider />

                    <Description>
                        {t(data.descriptionKey)}
                    </Description>

                </HeroContent>

            </HeroContainer>

        </HeroSection>

    );

};

export default PrivacyHero;