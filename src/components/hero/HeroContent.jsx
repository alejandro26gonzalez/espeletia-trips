import {
    FiArrowRight,
    FiMap
} from "react-icons/fi";
import { useTranslation, Trans } from "react-i18next";

import {
    HeroGrid,
    LeftColumn,
    TopBadge,
    HeroHeading,
    Title,
    Highlight,
    Subtitle,
    Description,
    CTAButton,
    RightColumn,
    ImageWrapper,   
    RouteDecoration,
    Marker
} from "./heroStyles/heroContent.styles";

const HeroContent = () => {

    const { t } = useTranslation("hero");

    return (

        <HeroGrid>

            <LeftColumn>

                <TopBadge>
                    <FiMap />
                    <span>
                        {t("hero_content.top_badge")}
                    </span>
                </TopBadge>

                <HeroHeading>

                    <Title>
                        <Trans 
                            ns="hero"
                            i18nKey="hero_content.heading"
                            components={[
                                <Highlight />
                            ]}
                        />
                    </Title>

                    <Subtitle>
                        {t("hero_content.subtitle")}
                    </Subtitle>

                </HeroHeading>

                <Description>
                    <Trans 
                        ns="hero"
                        i18nKey="hero_content.description"
                        components={[
                            <strong />
                        ]}
                    />
                </Description>

                <CTAButton type="button" to='/tours'>
                    <span>
                        {t("hero_content.cta_button")}
                    </span>
                    <FiArrowRight />
                </CTAButton>

            </LeftColumn>

            <RightColumn>
                <ImageWrapper>
                    <RouteDecoration />
                    <Marker />
                </ImageWrapper>
            </RightColumn>
        </HeroGrid>
    );
};

export default HeroContent;