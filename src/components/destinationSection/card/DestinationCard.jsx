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

const DestinationCard = ({ 
    link,
    image,
    icon,
    titulo,
    descripcion
}) => {

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
                <span>Ver más</span>
                <FiArrowRight size={20} />
            </Button>


        </Card>
    )
}

export default DestinationCard;

