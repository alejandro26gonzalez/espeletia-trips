import { cancellationConfig } from "../../../../config/pages/cancellation/cancellationConfig.js";

import CancellationCard from "../CancellationCard/CancellationCard";
import ImportantNotice from "../ImportantNotice/ImportantNotice.jsx";
import CancellationSummary from "../CancellationSummary/CancellationSummary.jsx";
import { useTranslation } from "react-i18next";

import {
    Section,
    Container,
    Header,
    Badge,
    Title,
    Description,
    Cards,
} from "./CancellationInformation.styles";

const CancellationInformation = () => {
    const {t} = useTranslation("cancellation");

    return (
        <Section>

            <Container>

                <CancellationSummary />

                <Header>

                    <Badge>
                        {t(cancellationConfig.plainTextConfig.information.badgeKey)}
                    </Badge>

                    <Title>
                        {t(cancellationConfig.plainTextConfig.information.titleKey)}
                    </Title>

                    <Description>
                        {t(cancellationConfig.plainTextConfig.information.descriptionKey)}
                    </Description>

                </Header>

                <ImportantNotice />

                <Cards>

                    {cancellationConfig.infoConfig.map((item) => (

                        <CancellationCard
                            key={item.id}
                            {...item}
                        />

                    ))}

                </Cards>

            </Container>

        </Section>
    );
};

export default CancellationInformation;