import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
    Card,
    IconContainer,
    IconComp,
    Text,
    Overlay,
    CardTitle,
    Button
} from "./DestinationCard.styles"
import { useTranslation } from "react-i18next";
import { destinationConfig } from "../../../config/components/destination";

const DestinationCard = ({ 
    link,
    image,
    icon,
    titulo,
    descripcion
}) => {
    const {t} = useTranslation("destination")

    return (
        <Card to={link} $image={image}>
            <Overlay />

            <IconContainer>
                <IconComp src={icon} alt="Icon of the offers."/>
            </IconContainer>

            <CardTitle>
                {titulo}
            </CardTitle>

            <Text>
                {descripcion}
            </Text>

            <Button>
                <span>{t(destinationConfig.titlesConfig.buttonKey)}</span>
                <FiArrowRight size={20} />
            </Button>


        </Card>
    )
}

export default DestinationCard;

