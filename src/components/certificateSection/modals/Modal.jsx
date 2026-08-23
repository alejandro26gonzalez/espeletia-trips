import {
    Backdrop,
    ModalBody,
    ModalHeader,
    HeaderIcon,
    ModalTitle,
    ModalSubtitle,
    CloseBtn,
    ModalBox,
    Block,
    CommitmentBox,
    ModalFooter,
    FooterBrand,
    FooterRight,
    Pill,
    ConfirmBtn
} from "./CertificationModals.styles";

import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { useTranslation, Trans } from "react-i18next";

const Modal = ({ modalData, onHide }) => {

    const { t } = useTranslation("certModal");

    useLockBodyScroll();

    return(
        <Backdrop onClick={onHide}>

            <ModalBox onClick={(e) => e.stopPropagation()}>

                <ModalHeader variant={modalData.variant}>

                    <CloseBtn onClick={onHide}>✕</CloseBtn>

                    <HeaderIcon>
                        {modalData.icon}
                    </HeaderIcon>

                    <ModalTitle>
                        {t(`modals.${modalData.id}.title`)}
                    </ModalTitle>

                    <ModalSubtitle>
                        {t(`modals.${modalData.id}.subtitle`)}
                    </ModalSubtitle>

                </ModalHeader>

                <ModalBody>

                    {
                        modalData.blocks.map((block, index) => (
                            <Block key={index} variant={modalData.variant}>
                                
                                <h5>{t(`modals.${modalData.id}.blocks.${block.id}.title`)}</h5>
                                <p>
                                    <Trans 
                                        ns="certModal"
                                        i18nKey={`modals.${modalData.id}.blocks.${block.id}.content`}
                                        components={[
                                            <strong />,
                                            <em />
                                        ]}
                                    />
                                </p>

                            </Block>
                        ))
                    }

                    <CommitmentBox variant={modalData.variant}>

                        <p>{t(`modals.${modalData.id}.commitment`)}</p>
                        <span>— Equipo Espeletia Trips · Murillo, Tolima</span>

                    </CommitmentBox>

                </ModalBody>

                <ModalFooter>

                    <FooterBrand>Espeletia Trips · Murillo, Tolima</FooterBrand>
                    <FooterRight>
                        <Pill variant={modalData.variant}>{t(`modals.${modalData.id}.footer.pill`)}</Pill>
                        <ConfirmBtn variant={modalData.variant} onClick={onHide}>{t(`modals.confirmation`)}</ConfirmBtn>
                    </FooterRight>

                </ModalFooter>

            </ModalBox>

        </Backdrop>
    );
};

export default Modal;
