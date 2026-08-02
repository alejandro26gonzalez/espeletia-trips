import {
    Section,
    Container,
    Content,
    Badge,
    Title,
    Highlight,
    Description,
    Buttons,
    PrimaryButton,
    SecondaryButton,
    CTABackground,
    CTAOverlay
} from "./TourCTA.styles";

import openWhatsappMessage from "../../../../helpers/openWhatsappMessage";

import IMAGES from "../../../../assets/images";

import { ctaData } from "./TourCTA.data";

import {
    FiArrowRight,
    FiMessageCircle
} from "react-icons/fi";

const TourCTA = () => {

    return (

        <Section>
            <Container>
                <CTABackground image={IMAGES.tour.main.cta}/>

                <CTAOverlay />

                <Content>
                    <Badge>
                        {ctaData.badge}
                    </Badge>

                    <Title>
                        {ctaData.title}
                        <Highlight>
                            {" "}
                            {ctaData.highlight}
                        </Highlight>
                    </Title>

                    <Description>
                        {ctaData.description}
                    </Description>
                </Content>

                <Buttons>
                    <PrimaryButton onClick={openWhatsappMessage}>
                        <FiMessageCircle />
                        {ctaData.primaryButton}
                    </PrimaryButton>

                    <SecondaryButton onClick={openWhatsappMessage}>
                        {ctaData.secondaryButton}
                        <FiArrowRight />
                    </SecondaryButton>
                </Buttons>

            </Container>
        </Section>
    );
};

export default TourCTA;