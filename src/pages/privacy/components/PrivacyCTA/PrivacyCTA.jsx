import {
    ArrowRight,
    House
} from "lucide-react";

import {
    Section,
    BackgroundDecoration,
    Content,
    Badge,
    Title,
    Description,
    Actions,
    PrimaryButton,
    SecondaryButton,
    Plant
} from "./PrivacyCTA.styles";

import IMAGES from "../../../../assets/images";

const PrivacyCTA = ({ data }) => {

    return (

        <Section>
            <BackgroundDecoration />

            <Plant
                src={IMAGES.helpers.privacy.plant}
                alt="Frailejón"
            />
            <Content>
                <Badge>
                    ESPELETIA TRIPS
                </Badge>

                <Title>
                    {data.title}
                </Title>

                <Description>
                    {data.description}
                </Description>

                <Actions>
                    <PrimaryButton>
                        Contáctanos
                        <ArrowRight
                            size={20}
                        />
                    </PrimaryButton>

                    <SecondaryButton>
                        <House
                            size={18}
                        />
                        Inicio
                    </SecondaryButton>
                </Actions>
            </Content>
        </Section>
    );
};

export default PrivacyCTA;