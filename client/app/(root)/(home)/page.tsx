"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '@/components/Navbar'
import ListingCard from './listingCard';

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
                console.log(json.listings)
              }
        }

        fetchData()
    }, [])

    return (
        <div>
          <Navbar />
          <div className='grid grid-cols-4'>
            {listings.length > 0 ? (
              listings.map((listing) => (
                <ListingCard key={listing.mlsNumber} listing={listing} />
              ))
            ) : (
              <p>Loading listings...</p>
            )}
          </div>
        </div>
      );
}

export default Home