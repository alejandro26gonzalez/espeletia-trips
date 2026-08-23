import {
    Section,
    Background,
    Overlay,
    Container,
    Header,
    Eyebrow,
    Title,
    Highlight,
    Description,
    CardsGrid,
    Footer,
    FooterText,
    WhatsappButton
} from "./AdditionalServices.styles";
import { FiMessageCircle } from "react-icons/fi";
import { useTranslation, Trans } from "react-i18next";

import openWhatsappMessage from '../../helpers/openWhatsappMessage'
import { additionalConfigData } from "../../config/components/additional";
import ServiceCard from "./components/ServiceCard";

const AdditionalServices = () => {

    const { t } = useTranslation("additional");

    return (
        <Section>
            <Background />
            <Overlay />
            <Container>

                <Header>
                    <Eyebrow>
                        {t(additionalConfigData.plainTextConfig.eyebrow)}
                    </Eyebrow>

                    <Title>
                        <Trans 
                            ns="additional"
                            i18nKey={additionalConfigData.plainTextConfig.title}
                            components={[
                                <Highlight />
                            ]}
                        />
                    </Title>

                    <Description>
                        {t(additionalConfigData.plainTextConfig.description)}
                    </Description>
                </Header>

                <CardsGrid>
                    {additionalConfigData.additionalServicesConfig.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </CardsGrid>

                <Footer>
                    <FooterText>
                        {t(additionalConfigData.plainTextConfig.footer_text)}
                    </FooterText>

                    <WhatsappButton onClick={openWhatsappMessage}>
                        <FiMessageCircle />
                        {t(additionalConfigData.plainTextConfig.footer_button)}
                    </WhatsappButton>
                </Footer>
            </Container>
        </Section>
    );
};

export default AdditionalServices;