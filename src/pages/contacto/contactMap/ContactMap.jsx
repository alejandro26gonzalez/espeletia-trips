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
import { useTranslation } from "react-i18next";

import { ContactConfig } from "../../../config/pages/contact/contactConfig";

const ContactMap = () => {

    const {t} = useTranslation("reachUs");

    return (
        <Section>

            <Header>

                <Title>
                    {t(ContactConfig.contactMapConfig.titleKey)}
                </Title>
                    {t(ContactConfig.contactMapConfig.subtitleKey)}
                <Subtitle>
                    
                </Subtitle>

            </Header>

            <MapWrapper>

                <MapFrame
                    src={ContactConfig.contactMapConfig.embed}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <FloatingCard>

                    <CardTitle>
                        {ContactConfig.contactMapConfig.title}
                    </CardTitle>

                    <CardText>
                        {ContactConfig.contactMapConfig.address}
                    </CardText>

                    <DirectionsButton
                        href={ContactConfig.contactMapConfig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t(ContactConfig.contactMapConfig.buttonKey)}

                        <FiArrowUpRight />

                    </DirectionsButton>

                </FloatingCard>

            </MapWrapper>

            <Decoration />

        </Section>
    );
};

export default ContactMap;