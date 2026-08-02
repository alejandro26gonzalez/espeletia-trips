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

import { sectionData } from "./ToursSection.data";
import { tours } from "./Tours.data";

import TourFilters from "../TourFilters/TourFilters";
import TourCard from "../TourCard/TourCard";

const ToursSection = () => {

    const [activeFilter, setActiveFilter] = useState("all");

    const filteredTours = activeFilter === "all"
    ? tours
    : tours.filter(
        (tour) => tour.categories.includes(activeFilter)
    );

    return (
        <Section>

            <Container>

                <Header>

                    <Badge>
                        {sectionData.badge}
                    </Badge>

                    <Title>
                        {sectionData.title}
                        <Highlight>
                            {" "}
                            {sectionData.highlight}
                        </Highlight>
                    </Title>

                    <Description>
                        {sectionData.description}
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