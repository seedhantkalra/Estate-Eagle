"use client";
import Image from 'next/image';

interface Address {
    streetNumber: string;
    streetName: string;
    streetSuffix: string;
    city: string;
    area: string;
    district: string;
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
    daysOnMarket: number;
}

const ListingCard = ({ listing, imageSrc }: { listing: Listing, imageSrc: string }) => {
    return (
      <div className = "items-center justify-center">
        <div className="card rounded-md text-left h-64 bg-smokeGrey">
            <Image src={imageSrc} alt={`Image of ${listing.address.streetNumber} ${listing.address.streetName}`} width={400} height={400} className="hover:scale-105 transition-transform duration-350 w-full h-full object-cover rounded-md"/>
        </div>
        <div className = "py-3">
            <div className='flex justify-between'>
                <p className="text-black"><b>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</b></p>
                {listing.address.city !== listing.address.area ? (
                    <p className="text-black flex justify-between">
                        <span className='text-black italic'>{listing.address.city}, {listing.address.area}</span>
                    </p>
                    ) : (
                    <p className="text-black">
                        <span className='text-black italic'>{listing.address.city}</span>
                    </p>
                    )}
            </div>
            <div className='flex justify-between'>
                <p><span className='text-black italic'>${listing.listPrice}</span></p>
                <span className='text-black italic'>Listed {listing.daysOnMarket} Days Ago</span>
            </div>
            
            {/* <p><b className="text-main">Bedrooms:</b> {listing.details.numBedrooms}</p>
            <p><b className="text-main">Bathrooms:</b> {listing.details.numBathrooms}</p> */}
        </div>    
      </div>
    );
}

export default ListingCard;