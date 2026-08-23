import {
    Section,
    Container,
    Content,
    Badge,
    Title,
    Highlight,
    Description,
    Buttons,
    PrimaryButton,
    SecondaryButton,
    CTABackground,
    CTAOverlay
} from "./TourCTA.styles";

import openWhatsappMessage from "../../../../helpers/openWhatsappMessage";
import { useTranslation } from "react-i18next";
import { ctaDataConfig } from "../../../../config/pages/allTours/cta";

import {
    FiArrowRight,
    FiMessageCircle
} from "react-icons/fi";

const TourCTA = () => {

    const {t} = useTranslation("tour");

    return (

        <Section>
            <Container>
                <CTABackground image={ctaDataConfig.background}/>

                <CTAOverlay />

                <Content>
                    <Badge>
                        {t(ctaDataConfig.badgeKey)}
                    </Badge>

                    <Title>
                        {t(ctaDataConfig.titleKey)}
                        <Highlight>
                            {" "}
                            {t(ctaDataConfig.highlightKey)}
                        </Highlight>
                    </Title>

                    <Description>
                        {t(ctaDataConfig.descriptionKey)}
                    </Description>
                </Content>

                <Buttons>
                    <PrimaryButton onClick={openWhatsappMessage}>
                        <FiMessageCircle />
                        {t(ctaDataConfig.primaryButtonKey)}
                    </PrimaryButton>

                    <SecondaryButton onClick={openWhatsappMessage}>
                        {t(ctaDataConfig.secondaryButtonKey)}
                        <FiArrowRight />
                    </SecondaryButton>
                </Buttons>

            </Container>
        </Section>
    );
};

export default TourCTA;