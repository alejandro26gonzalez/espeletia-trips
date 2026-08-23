import Modal from "./Modal";
import { infoModalConfig } from "../../../config/components/certifications/modal";

const CertificationModals = ({
  selectedModal,
  closeModal
}) => {
  if (!selectedModal) return null;

  return (
    <Modal 
      modalData={infoModalConfig[selectedModal]}
      onHide={closeModal}
    />
  );
};

export default CertificationModals;