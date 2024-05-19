"use client";
import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import ListingCard from './listingCard';
import images from '@/lib/houseImages';

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

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Home: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'REPLIERS-API-KEY': '2jDW7G5wZCOvrv9DyQzar4uCYmgrbc'
                }
            };

            const estateData = await fetch('https://api.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A', options);
            const json = await estateData.json();

            if (estateData.ok) {
                setListings(json.listings);
                console.log(json.listings);
                setShuffledImages(shuffleArray([...images])); // Shuffle images when listings are fetched
            }
        }

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-4 gap-12 m-24'>
            {listings.length > 0 ? (
                listings.slice(0, shuffledImages.length).map((listing, index) => (
                    <ListingCard key={listing.mlsNumber} listing={listing} imageSrc={shuffledImages[index]} />
                ))
            ) : (
                <p>Loading listings...</p>
            )}
        </div>
    );
}

export default Home;
