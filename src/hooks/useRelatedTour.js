import { useMemo } from "react";
import { toursDetailConfig as tours } from "../config/pages/allTours/allTours";

const shuffle = (array) => {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0;  i--){
        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];
    };

    return copy;
};

const useRelatedTours = (currentSlug, limit = 3) => {

    return useMemo(() => {
        return shuffle(
            tours.filter(tour => tour.slug !== currentSlug)
        ).slice(0, limit);
    }, [currentSlug, limit]);
};

export default useRelatedTours;