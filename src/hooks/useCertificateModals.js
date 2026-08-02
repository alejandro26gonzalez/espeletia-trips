import { useState } from "react"

const useCertificateModal = () => {
    const [selectedModal, setSelectedModal] = useState(null);

    const openModal = (id) => {
        setSelectedModal(id);
    };

    const closeModal = () => {
        setSelectedModal(null);
    };

    return {
        selectedModal,
        openModal,
        closeModal
    };
};
export default useCertificateModal;