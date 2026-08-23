import ICONOS from "../../assets/icons";
import CertificationModals from "./modals/CertificationModals";
import { FiSearch } from "react-icons/fi";
import CertificateBelowReminder from "./belowFeatures/CertificateBelowReminder";

import {
    ContainerCertificate,
    Title,
    Decoration,
    Line,
    Leaf,
    CardsContainer,
    CardCertificate,
    Logo,
    TopIcon,
    Description,
    CertificateButton,
    Mountains
} from "./CertificateSectionRefactored.styles";

import { mainConfig } from "../../config/components/certifications/main";
import { useTranslation } from "react-i18next";
import useCertificateModal from "../../hooks/useCertificateModals";

const CertificateSectionRefactored = () => {

    const { t } = useTranslation("certModal");

    const {
        selectedModal,
        openModal,
        closeModal
    } = useCertificateModal();
    
    return (
        <ContainerCertificate>
            <Title>
                <Decoration>
                    <Line />
                    <Leaf src={ICONOS.certificateIcons.mainIcon} alt="Espeletia" />
                    <Line />
                </Decoration>
                <h1>{t(mainConfig.plainTextConfig.title)}</h1>
                <p>{t(mainConfig.plainTextConfig.subtitle)}</p>
            </Title>

            <CardsContainer>
                {mainConfig.infoCardsConfig.map((card) => (

                    <CardCertificate 
                    key={card.id} 
                    onClick={() => openModal(card.id)}
                    >
                        <TopIcon src={card.topicon} alt="Top Icon" />
                        <Logo src={card.logo} alt={card.alt}/>
                        <Description>{t(card.description)}</Description>
                        <CertificateButton>
                            <FiSearch size={20}/>
                            {t("mainCertificate.view_cert")}
                        </CertificateButton>
                        <Mountains src={card.fondo} alt="Background" />
                    </CardCertificate>
                ))}
            </CardsContainer>

            <CertificateBelowReminder />

            <CertificationModals
                selectedModal={selectedModal}
                closeModal={closeModal}
            />


        </ContainerCertificate>
    )
}

export default CertificateSectionRefactored;