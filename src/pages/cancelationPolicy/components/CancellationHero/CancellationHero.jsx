import {
    HeroContainer,
    HeroOverlay,
    HeroContent,
    HeroBreadcrumb,
    HeroTitle,
    HeroDescription,
} from "./CancellationHero.styles";

const CancellationHero = () => {
    return (
        <HeroContainer>

            <HeroOverlay />

            <HeroContent>

                <HeroBreadcrumb>
                    Inicio / Políticas / Cancelaciones y Reembolsos
                </HeroBreadcrumb>

                <HeroTitle>
                    Política de Cancelaciones y Reembolsos
                </HeroTitle>

                <HeroDescription>
                    Conoce las condiciones para cancelaciones, reembolsos,
                    reprogramaciones y demás aspectos relacionados con nuestros
                    servicios turísticos. Buscamos brindarte total transparencia
                    antes y durante tu experiencia con Espeletia Trips.
                </HeroDescription>

            </HeroContent>

        </HeroContainer>
    );
};

export default CancellationHero;