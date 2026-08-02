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

const ServiceCard = ({ service }) => {
    const BadgeIcon = service.badge;

    return (
        <Card>

            <Image
                src={service.image}
                alt={service.title}
            />

            <Gradient />

            <Content>

                <Badge>
                    <BadgeIcon />
                </Badge>

                <ServiceTitle>
                    {service.title}
                </ServiceTitle>

                <Subtitle>
                    {service.subtitle}
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
                                    {feature.text}
                                </span>

                            </Feature>
                        );
                    })}

                </Features>

                <BottomButton>
                    {service.button}
                </BottomButton>

            </Content>

        </Card>
    );
};

export default ServiceCard;