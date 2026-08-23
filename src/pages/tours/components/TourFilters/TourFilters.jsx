import {
    FiltersContainer,
    FilterButton
} from "./TourFilters.styles";

import { useTranslation } from "react-i18next";
import { sectionConfig } from "../../../../config/pages/allTours/section";

const TourFilters = ({
    activeFilter,
    onFilterChange
}) => {

    const {t} = useTranslation("tour");

    return (

        <FiltersContainer>

            {sectionConfig.filtersConfig.map((filter) => (

                <FilterButton
                    key={filter.id}
                    $active={
                        activeFilter === filter.value
                    }
                    onClick={() => onFilterChange(filter.value)}
                >
                    <span />
                    {t(filter.labelKey)}
                </FilterButton>
            ))}
        </FiltersContainer>
    );
};

export default TourFilters;