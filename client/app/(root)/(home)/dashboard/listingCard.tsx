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
            <h2 className="text-center text-xl m-4"><b>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</b></h2>
            <p><b className="text-main">Price:</b> ${listing.listPrice}</p>
            <p><b className="text-main">Bedrooms:</b> {listing.details.numBedrooms}</p>
            <p><b className="text-main">Bathrooms:</b> {listing.details.numBathrooms}</p>
      </div>
    );
}

export default ListingCard;