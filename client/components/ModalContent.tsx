import React from 'react';

interface ModalContentProps {
  onClose: () => void;
}

export default function ModalContent({ onClose }: ModalContentProps) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
