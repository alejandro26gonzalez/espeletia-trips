import {
    FiltersContainer,
    FilterButton
} from "./TourFilters.styles";

import { filters } from "./TourFilters.data";

const TourFilters = ({
    activeFilter,
    onFilterChange
}) => {

    return (

        <FiltersContainer>

            {filters.map((filter) => (

                <FilterButton
                    key={filter.id}
                    $active={
                        activeFilter === filter.value
                    }
                    onClick={() => onFilterChange(filter.value)}
                >

                    <span />

                    {filter.label}

                </FilterButton>

            ))}

        </FiltersContainer>

    );

};

export default TourFilters;