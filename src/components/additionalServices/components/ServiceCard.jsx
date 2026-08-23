import {
    Card,
    Image,
    Gradient,
    Content,
    Badge,
    ServiceTitle,
    Subtitle,
    Divider,
    Features,
    Feature,
    FeatureIcon,
    BottomButton
} from "../AdditionalServices.styles";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service }) => {

    const BadgeIcon = service.badge;

    const { t } = useTranslation("additional");

    return (
        <Card>

            <Image
                src={service.image}
                alt={t(service.title)}
            />

            <Gradient />

            <Content>

                <Badge>
                    <BadgeIcon />
                </Badge>

                <ServiceTitle>
                    {t(service.title)}
                </ServiceTitle>

                <Subtitle>
                    {t(service.subtitle)}
                </Subtitle>

                <Divider />

                <Features>

                    {service.features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <Feature key={index}>

                                <FeatureIcon>
                                    <Icon />
                                </FeatureIcon>

                                <span>
                                    {t(feature.text)}
                                </span>

                            </Feature>
                        );
                    })}

                </Features>

                <BottomButton>
                    {t(service.button)}
                </BottomButton>

            </Content>

        </Card>
    );
};

export default ServiceCard;