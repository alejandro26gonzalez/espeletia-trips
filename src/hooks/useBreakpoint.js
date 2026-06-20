import { useState, useEffect } from "react";

const useBreakpoint = (query) => {
    const [matches, setMatches] = useState(() => {
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (event) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}

export default useBreakpoint;