"use client";

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

const ListingCard = ( { listing } : { listing: Listing } ) => {

    return ( 
        <div className="card rounded-md p-4 text-left h-96 bg-smokeGrey">
            <h2 className="text-center text-xl m-4"><b>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</b></h2>
            <p><b className="text-main">Price:</b> ${listing.listPrice}</p>
            <p><b className="text-main">Bedrooms:</b>{listing.details.numBedrooms}</p>
            <p><b className="text-main">Bathrooms:</b> {listing.details.numBathrooms}</p>
        </div>
     );
}
 
export default ListingCard;