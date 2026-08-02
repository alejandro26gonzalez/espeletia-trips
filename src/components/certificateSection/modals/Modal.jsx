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

const Modal = ({ modalData, onHide }) => {

    useLockBodyScroll();

    return(
        <Backdrop onClick={onHide}>

            <ModalBox onClick={(e) => e.stopPropagation()}>

                <ModalHeader variant={modalData.variant}>

                    <CloseBtn onClick={onHide}>✕</CloseBtn>
                    <HeaderIcon>🛡️</HeaderIcon>
                    <ModalTitle>{modalData.title}</ModalTitle>
                    <ModalSubtitle>{modalData.subtitle}</ModalSubtitle>

                </ModalHeader>

                <ModalBody>

                    {
                        modalData.blocks.map((block, index) => (
                            <Block key={index} variant={modalData.variant}>
                                
                                <h5>{block.title}</h5>
                                <p>{block.content}</p>

                            </Block>
                        ))
                    }

                    <CommitmentBox variant={modalData.variant}>

                        <p>{modalData.commitment}</p>
                        <span>— Equipo Espeletia Trips · Murillo, Tolima</span>

                    </CommitmentBox>

                </ModalBody>

                <ModalFooter>

                    <FooterBrand>Espeletia Trips · Murillo, Tolima</FooterBrand>
                    <FooterRight>
                        <Pill variant={modalData.variant}>{modalData.footerInfo.pill}</Pill>
                        <ConfirmBtn variant={modalData.variant} onClick={onHide}>Entendido</ConfirmBtn>
                    </FooterRight>

                </ModalFooter>

            </ModalBox>

        </Backdrop>
    );
};

export default Modal;
