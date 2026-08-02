import {
    FiHeart
} from "react-icons/fi";

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

        Más de <strong>500 viajeros</strong> han vivido la experiencia Espeletia Trips.

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