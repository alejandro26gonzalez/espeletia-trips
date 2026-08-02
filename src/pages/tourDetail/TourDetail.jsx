// Hook
import useTourData from "../../hooks/useTourData";

import TourRefactored from "../../components/tourRefactored";

const TourDetail = () => {

    const {
        tour,
        images,
        loading
    } = useTourData();

    if (!tour) {
        return <h2>Tour no encontrado.</h2>;
    };

    if (loading) {
        return <h2>Cargando tour...</h2>;
    };

    return (


        <TourRefactored 

            tour={tour}

            images={images}

        />
    );
};

export default TourDetail;