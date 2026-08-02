import data from "../CertificateSectionRefactored.data";
import {
    Container,
    Featured,
    Item
} from "./CertificateBelowReminder.styles"

export default function ResponsibleTourism() {

    const { features } = data;

    return (
        <Container>

            {features.map((item, index) =>
                item.featured ? (
                    <Featured key={index}>

                        <img src={item.icon} alt={item.title} />

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>

                    </Featured>
                ) : (
                    <Item key={index}>

                        <img src={item.icon} alt={item.title} />

                        <span>{item.title}</span>
                        <span>{item.description}</span>

                    </Item>
                )
            )}

        </Container>
    );
}