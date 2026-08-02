import {
    ModalOverlay,
    ModalCard,
    IconContainer,
    Title,
    Description,
    CloseButton,
} from "./SuccessModal.styles";

import { FiCheckCircle } from "react-icons/fi";

const SuccessModal = ({
    open,
    onClose,
    title,
    description,
}) => {

    if (!open) return null;

    return (

        <ModalOverlay onClick={onClose}>

            <ModalCard
                onClick={(e) => e.stopPropagation()}
            >

                <IconContainer>

                    <FiCheckCircle />

                </IconContainer>

                <Title>

                    {title}

                </Title>

                <Description>

                    {description}

                </Description>

                <CloseButton
                    type="button"
                    onClick={onClose}
                >

                    Entiendo

                </CloseButton>

            </ModalCard>

        </ModalOverlay>

    );

};

export default SuccessModal;

