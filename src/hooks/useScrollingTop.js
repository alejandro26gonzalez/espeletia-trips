import { useState, useEffect } from "react";

const useScrollingTop = (offset = 300) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > offset);
        }

        handleScroll();

        window.addEventListener("scroll" , handleScroll, {
            passive: true
        });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return visible;

}

export default useScrollingTop;