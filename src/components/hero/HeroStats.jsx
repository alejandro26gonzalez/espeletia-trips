import {
    FiHeart
} from "react-icons/fi";

import { Trans } from "react-i18next";

import {
    StatsContainer,
    HeartIcon,
    StatsText,
    Stars,
    Rating
} from "./heroStyles/heroStats.styles";

const HeroStats = () => {

    return (
        <StatsContainer>

            <HeartIcon>
                <FiHeart />
            </HeartIcon>

            <StatsText>
                <Trans 
                    ns="hero"
                    i18nKey={"stats_data"}
                    components={[
                        <strong />
                    ]}
                />
            </StatsText>

            <Stars>
                ★★★★★
            </Stars>

            <Rating>
                4.9/5
            </Rating>
        </StatsContainer>
    );
};

export default HeroStats;