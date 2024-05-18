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
        <div className="border-black border-2 p-4 text-left m-6">
            <h2>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</h2>
            <p>Price: ${listing.listPrice}</p>
            <p>Bedrooms: {listing.details.numBedrooms}</p>
            <p>Bathrooms: {listing.details.numBathrooms}</p>
        </div>
     );
}
 
export default ListingCard;