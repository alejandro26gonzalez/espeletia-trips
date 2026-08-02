import { useParams } from "react-router";
import { tours } from "../pages/tours/tours.data";

const useTour = () => {
    const { slug } = useParams();

    const tour = tours.find(
        (tour) => tour.slug === slug
    );

    return tour;
};

export default useTour;