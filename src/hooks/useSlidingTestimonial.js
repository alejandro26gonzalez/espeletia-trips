import { useState, useEffect } from "react";

const useSliding = (items, autoplay = true, delay=6000) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentItem = items[currentIndex];

    const nextSlide = () =>{
        setCurrentIndex(prev => 
        (prev + 1) % items.length
        );
    }

    const previousSlide = () => {
        setCurrentIndex( prev =>
        (prev - 1 + items.length) % items.length
        );
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(
            nextSlide,
            delay
        );
        return () => clearInterval(interval);
    }, [delay, autoplay]);

    return {
        currentItem,
        currentIndex,
        nextSlide,
        previousSlide,
        goToSlide
    }
}

export default useSliding;