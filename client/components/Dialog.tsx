import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  listing: any;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, listing }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">{listing.address}</h2>
        <p><b>City:</b> {listing.city}</p>
        <p><b>Province:</b> {listing.province}</p>
        <p><b>Country:</b> {listing.country}</p>
        <p><b>Price:</b> ${listing.price}</p>
        <p><b>Bathrooms:</b> {listing.bathrooms}</p>
        <p><b>Bedrooms:</b> {listing.bedrooms}</p>
      </div>
    </div>
  );
};

export default Dialog;
