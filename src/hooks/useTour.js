import { useParams } from "react-router";
import { toursDetailConfig as tours } from "../config/pages/allTours/allTours";

const useTour = () => {
    const { slug } = useParams();

    const tour = tours.find(
        (tour) => tour.slug === slug
    );

    return tour;
};

export default useTour;