import {
    Section,
    Grid,
    BenefitCard,
    IconContainer,
    TextContainer,
    Title,
    Subtitle
} from "./TourBenefits.styles";

import { benefits } from "./TourBenefits.data";

const TourBenefits = () => {

    return (

        <Section>
            <Grid>
                {
                    benefits.map((benefit)=>{
                        const Icon = benefit.icon;
                        return(
                            <BenefitCard
                                key={benefit.id}
                            >
                                <IconContainer>
                                    <Icon/>
                                </IconContainer>

                                <TextContainer>
                                    <Title>
                                        {benefit.title}
                                    </Title>

                                    <Subtitle>
                                        {benefit.subtitle}
                                    </Subtitle>
                                </TextContainer>
                            </BenefitCard>
                        );
                    })
                }
            </Grid>
        </Section>
    );
};

export default TourBenefits;