import {
    ArrowRight,
    Mail
} from "lucide-react";

import {
    BLOG_DATA
} from "../../data/Blog.data";

import {
    Section,
    Background,
    Overlay,
    Content,
    Badge,
    Title,
    Description,
    Buttons,
    PrimaryButton,
    SecondaryButton,
    PlantDecoration
} from "./BlogCommingSoon.styles";

import IMAGES from "../../../../assets/images";

const BlogComingSoon = () => {

    const {
        title,
        description,
        primaryButton,
        secondaryButton
    } = BLOG_DATA;

    return (

        <Section>
            <Background
                src={IMAGES.tour.main.cta}
                alt="Nevado del Ruiz"
            />

            <Overlay />
            <PlantDecoration
                src={IMAGES.helpers.plants.frailejon}
                alt="Frailejón"
            />
            <Content>
                <Badge>
                    EXPLORANDO NUEVAS HISTORIAS
                </Badge>

                <Title>
                    {title}
                </Title>

                <Description>
                    {description}
                </Description>

                <Buttons>
                    <PrimaryButton>
                        {primaryButton}
                        <ArrowRight size={18}/>
                    </PrimaryButton>

                    <SecondaryButton>
                        <Mail size={18}/>
                        {secondaryButton}
                    </SecondaryButton>
                </Buttons>
            </Content>
        </Section>
    );
};

export default BlogComingSoon;