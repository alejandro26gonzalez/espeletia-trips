import {
    Section,
    Header,
    Title,
    Intro,
    Content,
    HighlightGrid,
    HighlightItem,
    HighlightIcon,
    HighlightText,
    HighlightTitle,
    HighlightDescription
} from "./TourDescription.styles";
import ConlusionCard from "./components/ConclusionCard";
import { useTranslation } from "react-i18next";
import { tourConfig } from "../../../config/pages/allTours/allTours";

const TourDescription = ({ description }) => {

    const {t} = useTranslation("tour");

    return (

        <Section>

            <Header>
                <Title>
                    {t(tourConfig.toursDetailPlainConfig.description.title)}
                </Title>
            </Header>

            <Intro>
                {t(description.introductionKey)}
            </Intro>

            <Content>
                {t(description.contentKey)}
            </Content>

            <HighlightGrid>
                {
                    description.highlights.map((item,index)=>{
                        const Icon = item.icon;

                        return (
                            <HighlightItem key={index}>
                                <HighlightIcon>
                                    <Icon/>
                                </HighlightIcon>

                                <HighlightText>
                                    <HighlightTitle>
                                        {t(item.titleKey)}
                                    </HighlightTitle>

                                    <HighlightDescription>
                                        {t(item.descriptionKey)}
                                    </HighlightDescription>
                                </HighlightText>
                            </HighlightItem>
                        )
                    })
                }
            </HighlightGrid>

            <ConlusionCard>
                {t(description.conclusionKey)}
            </ConlusionCard>

        </Section>
    );
};

export default TourDescription;