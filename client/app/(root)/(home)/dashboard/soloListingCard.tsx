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

const SoloListingCard = ({ listing, imageSrc }: { listing: Listing, imageSrc: string }) => {
    return (
        <div className="card rounded-md text-left h-64 bg-smokeGrey items-center justify-center">
            <Image src={imageSrc} alt={`Image of ${listing.address.streetNumber} ${listing.address.streetName}`} width={400} height={400} className="w-full h-full object-cover rounded-md"/>
        </div>
    );
}

export default SoloListingCard;