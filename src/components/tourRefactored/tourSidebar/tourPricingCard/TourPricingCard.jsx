import {
    Card,
    PriceSection,
    PriceLabel,
    PriceValue,
    PriceCurrency,

    Tabs,
    TabButton,

    Divider,

    InfoSection,
    InfoTitle,
    InfoSubtitle,

    Benefits,

    BenefitItem,
    BenefitIcon,
    BenefitText,
    BenefitTitle,
    BenefitSubtitle,

    ReserveButton,
    WhatsAppIcon,
} from "./TourPricingCard.styles";

import {
    FiShield,
    FiClock,
    FiCheckCircle,
} from "react-icons/fi";

import { useState } from "react";

const TourPricingCard = ({ prices, name }) => {

    const phoneNumber = "573170566675";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola, quiero reservar el tour ${name}.`
)}`;

    const [isNational, setIsNational] = useState(true);

    const currentPrice = isNational
        ? prices.national
        : prices.foreign;

    return (

        <Card>

            <PriceSection>

                <PriceLabel>
                    Desde
                </PriceLabel>

                <PriceValue>
                    ${currentPrice.toLocaleString("es-CO")}
                </PriceValue>

                <PriceCurrency>
                    COP / por persona
                </PriceCurrency>

            </PriceSection>

            <Tabs>

                <TabButton
                    $active={isNational}
                    onClick={() => setIsNational(true)}
                >
                    Nacionales
                </TabButton>

                <TabButton
                    $active={!isNational}
                    onClick={() => setIsNational(false)}
                >
                    Extranjeros
                </TabButton>

            </Tabs>

            <Divider />

            <InfoSection>

                <InfoTitle>
                    Precio por persona
                </InfoTitle>

                <InfoSubtitle>
                    Grupos desde 5 personas.
                </InfoSubtitle>

            </InfoSection>

            <Benefits>

                <BenefitItem>

                    <BenefitIcon>
                        <FiShield />
                    </BenefitIcon>

                    <BenefitText>

                        <BenefitTitle>
                            Cancelación flexible
                        </BenefitTitle>

                        <BenefitSubtitle>
                            Conoce nuestras políticas
                        </BenefitSubtitle>

                    </BenefitText>

                </BenefitItem>

                <BenefitItem>

                    <BenefitIcon>
                        <FiCheckCircle />
                    </BenefitIcon>

                    <BenefitText>

                        <BenefitTitle>
                            Reserva 100% segura
                        </BenefitTitle>

                        <BenefitSubtitle>
                            Sin cargos ocultos
                        </BenefitSubtitle>

                    </BenefitText>

                </BenefitItem>

                <BenefitItem>

                    <BenefitIcon>
                        <FiClock />
                    </BenefitIcon>

                    <BenefitText>

                        <BenefitTitle>
                            Soporte 24/7
                        </BenefitTitle>

                        <BenefitSubtitle>
                            Estamos para ayudarte
                        </BenefitSubtitle>

                    </BenefitText>

                </BenefitItem>

            </Benefits>

            <ReserveButton
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
            >

                <WhatsAppIcon />

                Reservar por WhatsApp

            </ReserveButton>

        </Card>

    );

};

export default TourPricingCard;