import {
    Section,
    Header,
    Subtitle,
    Title,
    Divider,
    CardsGrid,
    Card,
    IconWrapper,
    CardTitle,
    CardDescription
} from "./PrivacyHighlights.styles";

const PrivacyHighlights = ({ items }) => {

    return (

        <Section>
            <Header>

                <Subtitle>
                    PRIVACIDAD Y SEGURIDAD
                </Subtitle>

                <Title>
                    Nuestros principios
                </Title>

                <Divider />
            </Header>

            <CardsGrid>
                {
                    items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={index}
                            >
                                <IconWrapper>
                                    <Icon size={34} />
                                </IconWrapper>

                                <CardTitle>
                                    {item.title}
                                </CardTitle>

                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                            </Card>
                        );
                    })
                }
            </CardsGrid>
        </Section>
    );
};

export default PrivacyHighlights;