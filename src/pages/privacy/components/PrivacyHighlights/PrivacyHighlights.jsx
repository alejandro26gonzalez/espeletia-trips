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
import { useTranslation } from "react-i18next";

const PrivacyHighlights = ({ items, plainText }) => {
    const {t} = useTranslation("privacy");

    return (

        <Section>
            <Header>

                <Subtitle>
                    {t(plainText.highlightTitleKey)}
                </Subtitle>

                <Title>
                    {t(plainText.highlightSubtitleKey)}
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
                                    {t(item.titleKey)}
                                </CardTitle>

                                <CardDescription>
                                    {t(item.descriptionKey)}
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