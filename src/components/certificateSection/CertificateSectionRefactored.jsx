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

import data from "./CertificateSectionRefactored.data";
import useCertificateModal from "../../hooks/useCertificateModals";

const CertificateSectionRefactored = () => {

    const {infoCards} = data;

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
                <h1>Seguro y certificado</h1>
                <p>Tu tranquilidad es nuestra prioridad. Contamos con aliados y certificaciones que respladan cada experiencia que vivimos juntos.</p>
            </Title>

            <CardsContainer>
                {Object.values(infoCards).map((card) => (

                    <CardCertificate 
                    key={card.id} 
                    onClick={() => openModal(card.id)}
                    >
                        <TopIcon src={card.topicon} alt="Top Icon" />
                        <Logo src={card.logo} alt={card.alt}/>
                        <Description>{card.description}</Description>
                        <CertificateButton>
                            <FiSearch size={20}/>
                            Ver certificación
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