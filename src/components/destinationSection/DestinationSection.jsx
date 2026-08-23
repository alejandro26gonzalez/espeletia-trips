import DestinationCard from "./card/DestinationCard";
import { useTranslation } from "react-i18next";
import { destinationConfig } from "../../config/components/destination";
import ICONOS from "../../assets/icons";
import {
    Title,
    Decoration,
    Line,
    Leaf,
    Section,
    CardsGrid
} from "./DestinationSection.styles"

const DestinationSection = () => {

    const { t } = useTranslation("destination");

    return (
        <Section >
            <Title>
                <Decoration>
                    <Line />
                    <strong>{t(destinationConfig.titlesConfig.part1)}</strong>
                    <Leaf src={ICONOS.certificateIcons.mainIcon} alt="Espeletia" />
                    <strong>{t(destinationConfig.titlesConfig.part2)}</strong>
                    <Line />
                </Decoration>
                <h1>{t(destinationConfig.titlesConfig.subtitle)}</h1>
                <p>{t(destinationConfig.titlesConfig.paragraph)}</p>
            </Title>

            <CardsGrid>
                {destinationConfig.cardsInfoConfig.map((destination) => (
                    <DestinationCard 
                        key={destination.id}
                        link={destination.link}
                        image={destination.image}
                        icon={destination.icon}
                        titulo={destination.title}
                        descripcion={t(destination.description)}
                    />
                ))}
            </CardsGrid>
        </Section>
    )
}

export default DestinationSection;

