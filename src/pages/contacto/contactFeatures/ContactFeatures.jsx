import {
    Section,
    Header,
    Title,
    Subtitle,
    Cards,
    Card,
    IconContainer,
    CardTitle,
    CardDescription
} from "./ContactFeatures.styles";
import { useTranslation } from "react-i18next";

import { ContactConfig } from "../../../config/pages/contact/contactConfig";

const ContactFeatures = () => {

    const {t} = useTranslation("reachUs");

    return (
        <Section>

            <Header>

                <Title>
                    {t(ContactConfig.featuresPlainConfig.titleKey)}
                </Title>

                <Subtitle>
                    {t(ContactConfig.featuresPlainConfig.subtitleKey)}
                </Subtitle>

            </Header>

            <Cards>

                {ContactConfig.featuresConfig.map((feature) => (

                    <Card key={feature.id}>

                        <IconContainer>
                            <feature.icon />
                        </IconContainer>

                        <CardTitle>
                            {t(feature.titleKey)}
                        </CardTitle>

                        <CardDescription>
                            {t(feature.descriptionKey)}
                        </CardDescription>

                    </Card>

                ))}

            </Cards>

        </Section>
    );
};

export default ContactFeatures;