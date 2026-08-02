import useTour from "./useTour";
import { useCloudinaryImages } from "./useCloudinaryImages";

const useTourData = () => {
    const tour = useTour();
    
    const {
            images,
            loading
        } = useCloudinaryImages(tour?.tag);
    

    if (!tour) {
        return {
            tour: null,
            images: {
                hero: null,
                gallery: []
            },
            loading: false
        };
    }
    return {
        tour,
        images: {
            gallery: images?.slice(1) || []
        },
        loading
    };
};

export default useTourData;