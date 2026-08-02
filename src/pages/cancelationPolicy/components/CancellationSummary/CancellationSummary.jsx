import { summary } from "./data";

import SummaryCard from "./components/SummaryCard";

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
    return (
        <SummarySection>

            <SummaryContainer>

                <SummaryHeader>

                    <SummaryBadge>
                        Información rápida
                    </SummaryBadge>

                    <SummaryTitle>
                        Resumen de nuestras políticas
                    </SummaryTitle>

                    <SummaryDescription>
                        Consulta rápidamente las condiciones generales de
                        cancelación y reembolso antes de revisar el detalle
                        completo de cada artículo.
                    </SummaryDescription>

                </SummaryHeader>

                <SummaryGrid>

                    {summary.map((item, index) => (

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