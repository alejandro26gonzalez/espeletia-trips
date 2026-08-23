import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Mail
} from "lucide-react";

import { blogConfig } from "../../../../config/pages/blog/blogConfig";
import { useTranslation } from "react-i18next";

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

    const {t} = useTranslation("blog");

    const navigate = useNavigate();

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
                    {t(blogConfig.mainTitleKey)}
                </Badge>

                <Title>
                    {t(blogConfig.titleKey)}
                </Title>

                <Description>
                    {t(blogConfig.descriptionKey)}
                </Description>

                <Buttons>
                    <PrimaryButton onClick={() => navigate("/tours")}>
                        {t(blogConfig.primaryButtonKey)}
                        <ArrowRight size={18}/>
                    </PrimaryButton>

                    <SecondaryButton>
                        <Mail size={18}/>
                        {t(blogConfig.secondaryButtonKey)}
                    </SecondaryButton>
                </Buttons>
            </Content>
        </Section>
    );
};

export default BlogComingSoon;