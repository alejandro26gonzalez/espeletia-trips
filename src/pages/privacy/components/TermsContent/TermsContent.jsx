import {
    Section,
    Header,
    Title,
    Description,
    CardsGrid,
    Card,
    IconWrapper,
    CardTitle,
    CardDescription
} from "./TermsContent.styles";
import { useTranslation } from "react-i18next";

const TermsContent = ({ data }) => {
    const {t} = useTranslation("privacy");

    return (

        <Section>
            <Header>
                <Title>
                    {t(data.titleKey)}
                </Title>

                <Description>
                    {t(data.descriptionKey)}
                </Description>
            </Header>

            <CardsGrid>
                {
                    data.cards.map((card,index)=>{
                        const Icon = card.icon;

                        return(
                            <Card
                                key={index}
                            >
                                <IconWrapper>
                                    <Icon size={28}/>
                                </IconWrapper>

                                <CardTitle>
                                    {t(card.titleKey)}
                                </CardTitle>

                                <CardDescription>
                                    {t(card.descriptionKey)}
                                </CardDescription>
                            </Card>
                        );
                    })
                }
            </CardsGrid>
        </Section>
    );
};

export default TermsContent;