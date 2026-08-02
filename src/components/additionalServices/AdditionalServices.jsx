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

import openWhatsappMessage from '../../helpers/openWhatsappMessage'

import { additionalServices } from "./AdditionalServices.data";

import ServiceCard from "./components/ServiceCard";

import { FiMessageCircle } from "react-icons/fi";

const AdditionalServices = () => {

    return (
        <Section>

            <Background />

            <Overlay />

            <Container>

                <Header>

                    <Eyebrow>
                        Servicios adicionales
                    </Eyebrow>

                    <Title>
                        Para complementar
                        <Highlight>
                            tu aventura
                        </Highlight>
                    </Title>

                    <Description>
                        Además de nuestros tours, ofrecemos experiencias
                        pensadas para que disfrutes Murillo de una manera
                        diferente, cómoda y completamente conectada con la
                        naturaleza.
                    </Description>

                </Header>

                <CardsGrid>

                    {additionalServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}

                </CardsGrid>

                <Footer>

                    <FooterText>
                        ¿Quieres conocer disponibilidad, tarifas o combinar
                        alguno de estos servicios con tu tour?
                    </FooterText>

                    <WhatsappButton onClick={openWhatsappMessage}>

                        <FiMessageCircle />

                        Solicitar información por WhatsApp

                    </WhatsappButton>

                </Footer>

            </Container>

        </Section>
    );
};

export default AdditionalServices;