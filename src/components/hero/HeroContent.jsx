import {
    FiArrowRight,
    FiMap
} from "react-icons/fi";

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

    return (

        <HeroGrid>

            <LeftColumn>

                <TopBadge>

                    <FiMap />

                    <span>
                        Aventura • Naturaleza • Conexión
                    </span>

                </TopBadge>

                <HeroHeading>

                    <Title>

                        TU PRÓXIMA

                        <Highlight>

                            AVENTURA

                        </Highlight>

                    </Title>

                    <Subtitle>

                        Te está esperando

                    </Subtitle>

                </HeroHeading>

                <Description>

                    Explora el páramo, conecta con la naturaleza
                    y vive <strong>experiencias que te transforman.</strong>

                </Description>

                <CTAButton type="button" to='/tours'>

                    <span>

                        Explorar Tours

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