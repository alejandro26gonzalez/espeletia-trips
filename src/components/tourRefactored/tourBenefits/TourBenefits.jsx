import {
    Section,
    Grid,
    BenefitCard,
    IconContainer,
    TextContainer,
    Title,
    Subtitle
} from "./TourBenefits.styles";

import { useTranslation } from "react-i18next";
import { tourConfig } from "../../../config/pages/allTours/allTours";

const TourBenefits = () => {

    const {t} = useTranslation("tour");

    return (

        <Section>
            <Grid>
                {
                    tourConfig.benefitsConfig.map((benefit)=>{
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
                                        {t(benefit.titleKey)}
                                    </Title>

                                    <Subtitle>
                                        {t(benefit.subtitleKey)}
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