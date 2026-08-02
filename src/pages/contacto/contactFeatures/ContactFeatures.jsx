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

import { features } from "../Contact.data";

const ContactFeatures = () => {
    return (
        <Section>

            <Header>

                <Title>
                    Estamos para ayudarte
                </Title>

                <Subtitle>
                    Queremos que tu experiencia sea inolvidable desde el primer contacto.
                </Subtitle>

            </Header>

            <Cards>

                {features.map((feature) => (

                    <Card key={feature.id}>

                        <IconContainer>
                            <feature.icon />
                        </IconContainer>

                        <CardTitle>
                            {feature.title}
                        </CardTitle>

                        <CardDescription>
                            {feature.description}
                        </CardDescription>

                    </Card>

                ))}

            </Cards>

        </Section>
    );
};

export default ContactFeatures;