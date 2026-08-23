import {
    FiInstagram,
    FiArrowRight,
    FiMap,
    FiUsers,
    FiFeather 
} from "react-icons/fi";

import IMAGES from "../../assets/images";
import { useTranslation, Trans } from "react-i18next";
import { videoConfig } from "../../config/components/video";

import {
    CardBack,
    Phone,
    LeftSide,
    RightSide,
    Container,
    BackgroundMountains,
    InstagramButton,
    Badge,
    Title,
    Description,
    Features,
    Feature
} from "./VideoCta.styles"

const VideoCTARefactored = () => {

    const { t } = useTranslation("video");

    return (

        <Container>
            <BackgroundMountains
                src={videoConfig.phone.background}
            />

            <LeftSide>
                {videoConfig.cards.map((card) => (
                    <CardBack
                    key={card.id}
                    rotate={card.rotate}
                    left={card.left}
                    right={card.right}
                    top={card.top}
                    >
                        <img src={card.image}
                        alt="" 
                        />
                    </CardBack>
                ))}

                <Phone>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src={videoConfig.phone.video}
                            type="video/mp4"
                        />
                    </video>
                </Phone>
            </LeftSide>

            <RightSide>

                <Badge>
                    {t(videoConfig.texts.badgeKey)}
                </Badge>

                <Title>
                    <Trans 
                    ns="video"
                    i18nKey={videoConfig.texts.titleKey}
                    components={[
                        <br />,
                        <span />
                    ]}
                    />
                </Title>

                <Description>
                    {t(videoConfig.texts.descriptionKey)}
                </Description>

                <Features>
                    {
                        videoConfig.features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <Feature>
                                    <Icon />
                                    <span>
                                        {t(feature.textKey)}
                                    </span>
                                </Feature>
                            )
                        })
                    }
                </Features>

                <InstagramButton
                    href={videoConfig.instagram}
                    target="_blank"
                >
                    <FiInstagram />
                    {t(videoConfig.texts.instagramButtonKey)}
                    <FiArrowRight />
                </InstagramButton>
            </RightSide>
        </Container>
    );
};

export default VideoCTARefactored;