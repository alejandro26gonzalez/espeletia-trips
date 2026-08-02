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

const TermsContent = ({ data }) => {

    return (

        <Section>
            <Header>
                <Title>
                    {data.title}
                </Title>

                <Description>
                    {data.description}
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
                                    {card.title}
                                </CardTitle>

                                <CardDescription>
                                    {card.description}
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