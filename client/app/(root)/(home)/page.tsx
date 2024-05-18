"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '@/components/Navbar'

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

const Home: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  'REPLIERS-API-KEY': '2jDW7G5wZCOvrv9DyQzar4uCYmgrbc'
                }
              };  
              
              const estateData = await fetch('https://api.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A', options)
              const json = await estateData.json()

              if(estateData.ok) {
                setListings(json.listings);
                console.log(listings)
              }
        }

        fetchData()
    }, [])

    return (
        <div>
          <Navbar />
         {listings.length > 0 ? (
            listings.map((listing) => (
              <div key={listing.mlsNumber}>
                <h2>{listing.address.streetNumber} {listing.address.streetName} {listing.address.streetSuffix}</h2>
                <p>Price: ${listing.listPrice}</p>
                <p>Bedrooms: {listing.details.numBedrooms}</p>
                <p>Bathrooms: {listing.details.numBathrooms}</p>
              </div>
            ))
          ) : (
            <p>Loading listings...</p>
          )}
        </div>
      );
}

export default Home