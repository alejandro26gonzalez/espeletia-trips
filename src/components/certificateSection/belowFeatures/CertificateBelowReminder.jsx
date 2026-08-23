import { mainConfig } from "../../../config/components/certifications/main";
import { useTranslation } from "react-i18next";
import {
    Container,
    Featured,
    Item
} from "./CertificateBelowReminder.styles"

export default function ResponsibleTourism() {

    const { t } = useTranslation("certModal");

    return (
        <Container>

            {mainConfig.featuresConfig.map((item, index) =>
                item.featured ? (
                    <Featured key={index}>

                        <img src={item.icon} alt={t(item.title)} />

                        <div>
                            <h3>{t(item.title)}</h3>
                            <p>{t(item.description)}</p>
                        </div>

                    </Featured>
                ) : (
                    <Item key={index}>

                        <img src={item.icon} alt={t(item.title)} />

                        <span>{t(item.title)}</span>
                        <span>{t(item.description)}</span>

                    </Item>
                )
            )}

        </Container>
    );
}