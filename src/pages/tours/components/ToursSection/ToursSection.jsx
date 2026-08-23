import { useState } from "react";
import {
    Section,
    Container,
    Header,
    Badge,
    Title,
    Highlight,
    Description,
    ToursGrid
} from "./ToursSection.styles";
import { useTranslation } from "react-i18next";
import { sectionConfig } from "../../../../config/pages/allTours/section";

import TourFilters from "../TourFilters/TourFilters";
import TourCard from "../TourCard/TourCard";

const ToursSection = () => {

    const [activeFilter, setActiveFilter] = useState("all");

    const {t} = useTranslation("tour");

    const filteredTours = activeFilter === "all"
    ? sectionConfig.toursConfig
    : sectionConfig.toursConfig.filter(
        (tour) => tour.categories.includes(activeFilter)
    );

    return (
        <Section>

            <Container>

                <Header>

                    <Badge>
                        {t(sectionConfig.plainSectionConfig.badgeKey)}
                    </Badge>

                    <Title>
                        {t(sectionConfig.plainSectionConfig.titleKey)}
                        <Highlight>
                            {" "}
                            {t(sectionConfig.plainSectionConfig.highlightKey)}
                        </Highlight>
                    </Title>

                    <Description>
                        {t(sectionConfig.plainSectionConfig.descriptionKey)}
                    </Description>

                </Header>

                <TourFilters 
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                />

                <ToursGrid>

                    {filteredTours.map((tour) => (

                        <TourCard
                            key={tour.id}
                            tour={tour}
                        />

                    ))}

                </ToursGrid>

            </Container>

        </Section>
    );
};

export default ToursSection;