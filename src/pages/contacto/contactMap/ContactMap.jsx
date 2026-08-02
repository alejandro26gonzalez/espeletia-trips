import {
    Section,
    Header,
    Title,
    Subtitle,
    MapWrapper,
    MapFrame,
    FloatingCard,
    CardTitle,
    CardText,
    DirectionsButton,
    Decoration
} from "./ContactMap.styles";

import { FiArrowUpRight } from "react-icons/fi";

import { contactMap } from "../Contact.data";

const ContactMap = () => {
    return (
        <Section>

            <Header>

                <Title>
                    Encuéntranos
                </Title>

                <Subtitle>
                    Estamos ubicados en Murillo, Tolima, punto de partida para
                    descubrir la magia del Parque Nacional Natural Los Nevados.
                </Subtitle>

            </Header>

            <MapWrapper>

                <MapFrame
                    src={contactMap.embed}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <FloatingCard>

                    <CardTitle>
                        {contactMap.title}
                    </CardTitle>

                    <CardText>
                        {contactMap.address}
                    </CardText>

                    <DirectionsButton
                        href={contactMap.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Abrir en Google Maps

                        <FiArrowUpRight />

                    </DirectionsButton>

                </FloatingCard>

            </MapWrapper>

            <Decoration />

        </Section>
    );
};

export default ContactMap;