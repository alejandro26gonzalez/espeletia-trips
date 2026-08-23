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
import { useTranslation } from "react-i18next";

import IMAGES from "../../../../assets/images";

const PrivacyCTA = ({ data }) => {

    const {t} = useTranslation("privacy");

    return (

        <Section>
            <BackgroundDecoration />

            <Plant
                src={data.background}
                alt="Frailejón"
            />
            <Content>
                <Badge>
                    ESPELETIA TRIPS
                </Badge>

                <Title>
                    {t(data.titleKey)}
                </Title>

                <Description>
                    {t(data.descriptionKey)}
                </Description>

                <Actions>
                    <PrimaryButton>
                        {t(data.buttonKey)}
                        <ArrowRight
                            size={20}
                        />
                    </PrimaryButton>

                    <SecondaryButton>
                        <House
                            size={18}
                        />
                        {t(data.homeKey)}
                    </SecondaryButton>
                </Actions>
            </Content>
        </Section>
    );
};

export default PrivacyCTA;