import {
    FiInstagram,
    FiArrowRight,
    FiMap,
    FiUsers,
    FiFeather 
} from "react-icons/fi";

import IMAGES from "../../assets/images";

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

    const instagram =
        "https://www.instagram.com/p/DSNEujljI8e/";

    return (

        <Container>

            <BackgroundMountains
                src={IMAGES.componentes.videoSection.background}
            />

            <LeftSide>

                <CardBack
                    rotate="-18deg"
                    left="-70px"
                    top="90px"
                >
                    <img
                        src={IMAGES.componentes.videoSection.backCard1}
                        alt=""
                    />
                </CardBack>

                <CardBack
                    rotate="-6deg"
                    left="30px"
                    top="20px"
                >
                    <img
                        src={IMAGES.componentes.videoSection.backCard2}
                        alt=""
                    />
                </CardBack>

                <CardBack
                    rotate="10deg"
                    right="-20px"
                    top="35px"
                >
                    <img
                        src={IMAGES.componentes.videoSection.backCard3}
                        alt=""
                    />
                </CardBack>

                <CardBack
                    rotate="22deg"
                    right="-80px"
                    top="110px"
                >
                    <img
                        src={IMAGES.componentes.videoSection.backCard4}
                        alt=""
                    />
                </CardBack>

                <Phone>

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src={IMAGES.componentes.videoSection.video}
                            type="video/mp4"
                        />
                    </video>

                </Phone>

            </LeftSide>

            <RightSide>

                <Badge>
                    EXPERIENCIAS QUE TRANSFORMAN
                </Badge>

                <Title>
                    Viaja por la vía
                    <br />
                    <span>más linda</span>
                </Title>

                <Description>

                    Conéctate con la magia del Nevado del Ruiz,
                    sus paisajes, su gente y cada aventura
                    que te espera en el camino.

                </Description>

                <Features>

                    <Feature>

                        <FiMap />

                        <span>
                            Paisajes inolvidables
                        </span>

                    </Feature>

                    <Feature>

                        <FiUsers />

                        <span>
                            Encuentros que inspiran
                        </span>

                    </Feature>

                    <Feature>

                        <FiFeather />

                        <span>
                            Naturaleza que transforma
                        </span>

                    </Feature>

                </Features>

                <InstagramButton
                    href={instagram}
                    target="_blank"
                >

                    <FiInstagram />

                    Ver video completo en Instagram

                    <FiArrowRight />

                </InstagramButton>

            </RightSide>

        </Container>

    );

};

export default VideoCTARefactored;