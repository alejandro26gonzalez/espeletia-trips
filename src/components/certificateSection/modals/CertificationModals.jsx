import Modal from "./Modal";

import { infoModal } from "./CertificationModals.data";

const CertificationModals = ({
  selectedModal,
  closeModal
}) => {
  if (!selectedModal) return null;

  return (
    <Modal 
      modalData={infoModal[selectedModal]}
      onHide={closeModal}
    />
  );
};

export default CertificationModals;