"use client";
import Image from 'next/image';

interface Address {
    streetNumber: string;
    streetName: string;
    streetSuffix: string;
}

interface Details {
    numBedrooms: string;
    numBathrooms: string;
}

interface Listing {
    mlsNumber: string;
    listPrice: string;
    address: Address;
    details: Details;
}

const ListingCard = ({ listing, imageSrc }: { listing: Listing, imageSrc: string }) => {
    return (
      <div className = "items-center justify-center">
        <div className="card rounded-md text-left h-64 bg-smokeGrey">
            <Image src={imageSrc} alt={`Image of ${listing.address.streetNumber} ${listing.address.streetName}`} width={400} height={400} className="w-full h-full object-cover rounded-md"/>
        </div>
        <div className = "py-3">
        <p className="text-black"><b>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</b></p>
            <p><b className="text-black">Price:</b> ${listing.listPrice}</p>
            {/* <p><b className="text-main">Bedrooms:</b> {listing.details.numBedrooms}</p>
            <p><b className="text-main">Bathrooms:</b> {listing.details.numBathrooms}</p> */}
        </div>    
      </div>
    );
}

export default ListingCard;