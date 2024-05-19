import React from 'react';
import Image from 'next/image';
import interior from '../lib/houseInteriorImages';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import RightArrow from '../public/rightArrow.svg';
import LeftArrow from '../public/leftArrow.svg';
import Graph from '../public/priceGraph.png'

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  listing: any;
}


const divStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '200px',
  width: '200px',
  position: 'relative',
  margin: '0 auto', // Centering horizontally
};

const buttonStyle: React.CSSProperties = {
  width: '30px',
  background: 'none',
  border: '0px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1000,
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, listing }) => {
  if (!isOpen) return null;

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle, left: '0' }}>
        <Image src={LeftArrow} alt="Previous" />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle, right: '0' }}>
        <Image src={RightArrow} alt="Next" />
      </button>
    ),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="slide-container py-3">
          <Slide {...properties}>
            {interior.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
              </div>
            ))}
          </Slide>
        </div>
        <div>
        <div className="">
        <h2 className="text-xl font-bold mb-4">{listing.address}</h2>
        <p><b>City:</b> {listing.city}<b>    Province:</b> {listing.province}<b>     Country:</b> {listing.country}</p>
        <p><b>Price:</b> ${listing.price}<b>    Bathrooms:</b>{listing.bathrooms}<b>    Bedrooms:</b>{listing.bedrooms}</p>
        </div>
        <div>
          <Image src = {Graph} alt="Price Graph"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
