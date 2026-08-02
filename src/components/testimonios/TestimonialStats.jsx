import {
    FiUsers,
    FiHeart
} from "react-icons/fi";

import {
    StatsCard,
    StatsOverlay,
    StatsIcon,
    StatsNumber,
    StatsLabel
} from "./testimoniosStyles/stats.styles";

const TestimonialStats = ({ side }) => {

    const isLeft = side === "left";

    return (

        <StatsCard>

            <StatsOverlay />

            <StatsIcon>

                {
                    isLeft ?

                        <FiUsers />

                        :

                        <FiHeart />

                }

            </StatsIcon>

            <StatsNumber>

                {

                    isLeft ?

                        "+500"

                        :

                        "4.9/5"

                }

            </StatsNumber>

            <StatsLabel>

                {

                    isLeft ?

                        "Viajeros satisfechos"

                        :

                        "Calificación promedio"

                }

            </StatsLabel>

        </StatsCard>

    );

};

export default TestimonialStats;