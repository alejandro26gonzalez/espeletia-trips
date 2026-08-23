import {
    FiHome,
    FiCoffee,
    FiMap,
    FiTrendingUp,
    FiClock
} from "react-icons/fi";

import {
    ExpeditionGrid,
    InfoCard,
    CardHeader,
    CardIcon,
    CardTitle,
    CardContent,
    InfoRow,
    InfoLabel,
    InfoValue,
    MealsList,
    MealItem
} from "./AdditionalCards.styles";
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../config/pages/allTours/allTours";

const AdditionalCards = () => {

    const {t} = useTranslation("tour");

    return (
        <ExpeditionGrid>

            {/* EXPEDICIÓN */}

            <InfoCard>
                <CardHeader>
                    <CardIcon>
                        <FiHome />
                    </CardIcon>

                    <CardTitle>
                        {t(toursDetailPlainConfig.isabel.expedition.titleKey)}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <InfoRow>
                        <InfoLabel>
                            {t(toursDetailPlainConfig.isabel.expedition.nightLabelKey)}
                        </InfoLabel>

                        <InfoValue>
                            1
                        </InfoValue>
                    </InfoRow>

                    <InfoRow>
                        <InfoLabel>
                            {t(toursDetailPlainConfig.isabel.expedition.acomodacion[0])}
                        </InfoLabel>

                        <InfoValue>
                            {t(toursDetailPlainConfig.isabel.expedition.acomodacion[1])}
                        </InfoValue>
                    </InfoRow>

                    <InfoRow>
                        <InfoLabel>
                            {t(toursDetailPlainConfig.isabel.expedition.feedLabelKey.titleKey)}
                        </InfoLabel>

                        <MealsList>
                            {toursDetailPlainConfig.isabel.expedition.feedLabelKey.mealsKey.map(
                                (meal, index) => (
                                    <MealItem key={index}>
                                        <FiCoffee />
                                        {t(meal)}
                                    </MealItem>
                                )
                            )}
                        </MealsList>
                    </InfoRow>
                </CardContent>
            </InfoCard>


            {/* EXPERIENCIA */}

            <InfoCard>
                <CardHeader>
                    <CardIcon>
                        <FiMap />
                    </CardIcon>

                    <CardTitle>
                        {t(toursDetailPlainConfig.isabel.experience.titleKey)}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    {toursDetailPlainConfig.isabel.experience.rows.map((item) => (
                        <InfoRow key={item.id}>
                            <InfoLabel>
                                {t(item.labelKey)}
                            </InfoLabel>

                            <InfoValue>
                                {t(item.valueKey)}
                            </InfoValue>
                        </InfoRow>
                    ))}
                </CardContent>

            </InfoCard>

        </ExpeditionGrid>
    );
};

export default AdditionalCards;