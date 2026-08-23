import { useState, useEffect, useRef } from "react";
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
import DetailCard from "./detailsCard/DetailCard";
import { useTranslation } from "react-i18next";
import { toursDetailPlainConfig } from "../../../../config/pages/allTours/allTours";

import {
    FiShield,
    FiClock,
    FiCheckCircle,
} from "react-icons/fi";


const TourPricingCard = ({ data, name }) => {

    const {t} = useTranslation("tour");

    const [showDetails, setShowDetails] = useState(false);
    const detailsRef = useRef(null);

    const toggleDetails = () => {
        setShowDetails(current => !current);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(
                detailsRef.current &&
                !detailsRef.current.contains(event.target)
            ) {
                setShowDetails(false);
            }
        };
        const handleInteraction = (event) => {
            if (event.key === "Escape") {
                setShowDetails(false);
            }
        };
        if (showDetails) {
            document.addEventListener(
                "mousedown",
                handleClickOutside
            );
            document.addEventListener(
                "keydown",
                handleInteraction
            );
        };
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
            document.removeEventListener(
                "keydown",
                handleInteraction
            );
        };
    }, [showDetails]);

    const phoneNumber = "573170566675";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola, quiero reservar el tour ${name}.`
)}`;

    const [isNational, setIsNational] = useState(true);

    const currentPrice = isNational
        ? data.prices.national
        : data.prices.foreign;

    return (

        <Card>

            <PriceSection>

                <PriceLabel>
                    {t(toursDetailPlainConfig.pricesCard.priceLabelKey)}
                </PriceLabel>

                <PriceValue>
                    ${currentPrice.toLocaleString("es-CO")}
                </PriceValue>

                <PriceCurrency>
                    {t(toursDetailPlainConfig.pricesCard.currencyKey)}
                </PriceCurrency>

            </PriceSection>

            <Tabs>

                <TabButton
                    $active={isNational}
                    onClick={() => setIsNational(true)}
                >
                    {t(toursDetailPlainConfig.pricesCard.nationalsKey)}
                </TabButton>

                <TabButton
                    $active={!isNational}
                    onClick={() => setIsNational(false)}
                >
                    {t(toursDetailPlainConfig.pricesCard.strangersKey)}
                </TabButton>

            </Tabs>

            <Divider />

            <InfoSection>

                <InfoTitle>
                    {t(toursDetailPlainConfig.pricesCard.titleKey)}
                </InfoTitle>

                <InfoSubtitle>
                    {t(toursDetailPlainConfig.pricesCard.subtitleKey)}
                </InfoSubtitle>

            </InfoSection>

            <Benefits>

                {toursDetailPlainConfig.pricesCard.benefits.map((item) => {
                    const Icon = item.icon;

                    return (
                        <BenefitItem key={item.id}>
                            <BenefitIcon>
                                <Icon />
                            </BenefitIcon>

                            <BenefitText>
                                <BenefitTitle>
                                    {t(item.titleKey)}
                                </BenefitTitle>

                                <BenefitSubtitle>
                                    {t(item.subtitleKey)}
                                </BenefitSubtitle>
                            </BenefitText>
                        </BenefitItem>
                    )
                })}
            </Benefits>

            <DetailCard 
            data={data.prices}
            toggleDetails={toggleDetails}
            showDetails={showDetails}
            detailsRef={detailsRef}
            />

            <ReserveButton
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
            >
                <WhatsAppIcon />
                {t(toursDetailPlainConfig.pricesCard.buttonKey)}
            </ReserveButton>
        </Card>
    );
};

export default TourPricingCard;