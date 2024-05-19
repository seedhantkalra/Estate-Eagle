import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function PortalExample() {

const [modalOpen, setModalOpen] = useState(false)
  const handleClickOpenModal = () => {
    setModalOpen(true);
  }

  const handleClickCloseModal = () => {
    setModalOpen(false);
  }
  return (
    <>
      <button onClick={handleClickOpenModal}>
        Show modal using a portal
      </button>
      {modalOpen && createPortal(
        <ModalContent onClose={handleClickCloseModal} />,
        document.body
      )}
    </>
  );
}
