import cancellationInformation from "../../Cancellation.data.jsx";

import CancellationCard from "../CancellationCard/CancellationCard";
import ImportantNotice from "../ImportantNotice/ImportantNotice.jsx";
import CancellationSummary from "../CancellationSummary/CancellationSummary.jsx";

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
    return (
        <Section>

            <Container>

                <CancellationSummary />

                <Header>

                    <Badge>
                        Información legal
                    </Badge>

                    <Title>
                        Política de Cancelaciones y Reembolsos
                    </Title>

                    <Description>
                        Consulta nuestras políticas de cancelación,
                        reembolso y reprogramación para conocer tus
                        derechos y responsabilidades antes de reservar
                        cualquiera de nuestras experiencias.
                    </Description>

                </Header>

                <ImportantNotice />

                <Cards>

                    {cancellationInformation.map((item) => (

                        <CancellationCard
                            key={item.title}
                            title={item.title}
                            content={item.content}
                        />

                    ))}

                </Cards>

            </Container>

        </Section>
    );
};

export default CancellationInformation;