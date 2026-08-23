import {
    ValuesSectionContainer,
    ValuesHeader,
    ValuesBadge,
    ValuesTitle,
    ValuesDivider,
    ValuesGrid,
    ValueCard,
    ValueIcon,
    ValueTitle,
    ValueDescription
} from "./ValuesSection.styles";

import { useTranslation } from "react-i18next";

const ValuesSection = ({ values }) => {

    const {t} = useTranslation("about");

    return (
        <ValuesSectionContainer>

            <ValuesHeader>

                <ValuesBadge>
                    {t(values.badgeKey)}
                </ValuesBadge>

                <ValuesTitle>
                    {t(values.titleKey)}
                </ValuesTitle>

                <ValuesDivider />

            </ValuesHeader>

            <ValuesGrid>
                {values.items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ValueCard key={item.id}>
                            <ValueIcon>
                                <Icon />
                            </ValueIcon>

                            <ValueTitle>
                                {t(item.titleKey)}
                            </ValueTitle>

                            <ValueDescription>
                                {t(item.descriptionKey)}
                            </ValueDescription>
                        </ValueCard>
                    );
                })}
            </ValuesGrid>
        </ValuesSectionContainer>
    );
};

export default ValuesSection;