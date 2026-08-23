import { cancellationConfig } from "../../../../config/pages/cancellation/cancellationConfig";

import SummaryCard from "./components/SummaryCard";
import { useTranslation } from "react-i18next";

import {
    SummarySection,
    SummaryContainer,
    SummaryHeader,
    SummaryBadge,
    SummaryTitle,
    SummaryDescription,
    SummaryGrid,
} from "./CancellationSummary.styles";

const CancellationSummary = () => {
    const {t} = useTranslation("cancellation");

    return (
        <SummarySection>

            <SummaryContainer>

                <SummaryHeader>

                    <SummaryBadge>
                        {t(cancellationConfig.plainTextConfig.summary.badgeKey)}
                    </SummaryBadge>

                    <SummaryTitle>
                        {t(cancellationConfig.plainTextConfig.summary.titleKey)}
                    </SummaryTitle>

                    <SummaryDescription>
                        {t(cancellationConfig.plainTextConfig.summary.descriptionKey)}
                    </SummaryDescription>

                </SummaryHeader>

                <SummaryGrid>

                    {cancellationConfig.summaryConfig.map((item, index) => (

                        <SummaryCard
                            key={index}
                            {...item}
                        />

                    ))}

                </SummaryGrid>

            </SummaryContainer>

        </SummarySection>
    );
};

export default CancellationSummary;