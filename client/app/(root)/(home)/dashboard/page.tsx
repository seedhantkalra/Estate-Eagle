"use client";
import React, { useState, useEffect } from "react";
import ListingCard from '../../../../components/listingCard';
import images from '@/lib/houseImages';
import DashboardHeader from '@components/DashboardHeader';
import Image from 'next/image';
import EagleIcon from '../../../../images/output-onlinepngtools.png';
import SearchBar from "../../../../components/searchBar";
import Dialog from "../../../../components/Dialog";
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC = () => {
    const [listings, setListings] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [selectedListing, setSelectedListing] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredListings, setFilteredListings] = useState([]);

    const handleCardClick = (listing: any) => {
        console.log(listing);
        setSelectedListing(listing);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedListing(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            const estateData = await fetch('http://localhost:4000/api/property/');
            const json = await estateData.json();
            console.log(json)

            if (estateData.ok) {
                setListings(json);
                setFilteredListings(json); // Initialize filtered listings with all listings
            }
        }

        fetchData();
    }, []);

    const handleSearch = () => {
            const filtered = listings.filter(( listing : any) => 
                listing.city.toLowerCase() === "mississauga" && listing.price < 10000000
            );
            setFilteredListings(filtered);
    };

    return (
      <div>
        <DashboardHeader />
        <div className="flex w-full">
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                onSearch={handleSearch} 
            />
        </div>
        <h6 className="ml-24 text-gray-500">showing {filteredListings.length} of 1000+ results</h6>
        <div className='grid grid-cols-3 gap-12 mx-24 my-5 justify-center'>
            {filteredListings.length > 0 ? (
                filteredListings.slice(0, images.length).map((listing, index) => (
                    <ListingCard 
                        key={uuidv4()} 
                        listing={listing} 
                        imageSrc={images[index]} 
                        onClick={() => handleCardClick(listing)}
                    />
                ))
            ) : (
                <div className="fixed -top-10 left-0 w-full h-full flex flex-col items-center justify-center">
                    <Image src={EagleIcon} alt="Estate Eagle Logo" width={200} height={200} />
                    <p className="text-black text-3xl">Loading listings...</p>
                </div>
            )}
        </div>
        <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} listing={selectedListing} />
        {filteredListings.length > 0 && <div className="m-4 mb-9 mx-auto text-center py-3 bg-main hover:scale-105 transition-transform duration-200 text-white font-bold rounded-full w-28">
              <span className='text-center inline'>Show More</span>
        </div>}
        {filteredListings.length > 0 && <footer className="p-1 bg-headerBG">
            <h1 className='text-center text-sm '>© Geese Chasers 2024</h1>
        </footer>}
      </div>
    );
  };

export default Home;
