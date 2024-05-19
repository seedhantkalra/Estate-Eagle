"use client";
import React, { useState, useEffect } from "react";
import ListingCard from './listingCard';
import images from '@/lib/houseImages';
import DashboardHeader from '@components/DashboardHeader'
import Image from 'next/image';
import EagleIcon from '../../../../images/output-onlinepngtools.png'
import SearchBar from "./searchBar";
import { v4 as uuidv4 } from 'uuid';

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Home: React.FC = () => {
    const [listings, setListings] = useState([]);
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const estateData = await fetch('http://localhost:4000/api/property/');
            const json = await estateData.json();
            console.log(json)

            if (estateData.ok) {
                setListings(json);
                console.log(json)
                setShuffledImages(shuffleArray([...images])); // Shuffle images when listings are fetched
            }
        }

        fetchData();
    }, []);

    return (
      <div>
        <DashboardHeader />
        <div className="flex w-full">
            <SearchBar />
        </div>
        <h6 className="ml-24 text-gray-500">showing 15 of 13,959 results</h6>
        <div className='grid grid-cols-3 gap-12 mx-24 my-5 justify-center'>
            {listings.length > 0 ? (
                listings.slice(0, shuffledImages.length).map((listing, index) => (
                    <ListingCard key={uuidv4()} listing={listing} imageSrc={shuffledImages[index]} />
                ))
            ) : (
                <div className="fixed -top-10 left-0 w-full h-full flex flex-col items-center justify-center">
                    <Image src={EagleIcon} alt="Estate Eagle Logo" width={200} height={200} />
                    <p className="text-black text-3xl">Loading listings...</p>
                </div>

            )}
        </div>
        {listings.length > 0 && <div className="m-4 mb-9 mx-auto text-center py-3 bg-main hover:scale-105 transition-transform duration-200 text-white font-bold rounded-full w-28">
              <span className='text-center inline'>Show More</span>
        </div>}
        {listings.length > 0 && <footer className="p-1 bg-headerBG">
            <h1 className='text-center text-sm '>© Geece Chasers 2024</h1>
        </footer> }
      </div>
    );
}

export default Home;
