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

import { useTranslation } from "react-i18next";
import { statsConfig } from "../../config/components/testimonios";

const TestimonialStats = ({ side }) => {

    const isLeft = side === "left";
    const {t} = useTranslation("testimonios");

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
                        t(statsConfig.leftKey)
                        :
                        t(statsConfig.rightKey)
                }
            </StatsLabel>
        </StatsCard>
    );
};

export default TestimonialStats;