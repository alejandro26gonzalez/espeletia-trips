import DestinationCard from "./card/DestinationCard";
import { destinations } from "./destinations";
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

    return (
        <Section >

            <Title>
                <Decoration>
                    <Line />
                    <strong>NUESTROS</strong>
                    <Leaf src={ICONOS.certificateIcons.mainIcon} alt="Espeletia" />
                    <strong>DESTINOS</strong>
                    <Line />
                </Decoration>
                <h1>Planes turísticos que ofrecemos</h1>
                <p>Descubre lugares únicos, vive experiencias inolvidables y conéctate con la magia de la naturaleza.</p>
            </Title>

            <CardsGrid>
                {destinations.map((destination) => (
                    <DestinationCard 
                        key={destination.id}
                        link={destination.link}
                        image={destination.image}
                        icon={destination.icon}
                        titulo={destination.title}
                        descripcion={destination.description}
                    />
                ))}
            </CardsGrid>




        </Section>
    )
}

export default DestinationSection;

