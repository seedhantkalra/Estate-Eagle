import React, { useState } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch} : {searchTerm : any, setSearchTerm: any, onSearch : any}) => {
  const handleInputChange = (event : any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className="flex items-center mb-4 ml-auto mx-24 my-4 w-2/3">
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <input
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="rounded-md bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none"
          type="button"
          onClick={handleSearch}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
