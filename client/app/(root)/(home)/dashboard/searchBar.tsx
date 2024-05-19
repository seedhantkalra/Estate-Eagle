import { useState } from "react";

const SearchBar = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

  return (
    <div className="flex items-center mb-4 ml-auto mx-24 my-4 w-2/3">
      {/* Filters Dropdown */}
      <div className="relative mx-9">
        <button
          onClick={toggleFilters}
          className="hover:scale-105 focus:scale-105 transition-transform duration-200 card_input px-5 py-3 border border-gray-300 rounded-full focus:border-black text-gray-400"
        >
          Filters
        </button>
        {showFilters && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter 3</li>
              {/* Add more filter options as needed */}
            </ul>
          </div>
        )}
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Find A Home"
        className="hover:scale-105 focus:scale-105 transition-transform duration-200 w-2/3 card_input px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-main"
      />

    </div>
  );
}
 
export default SearchBar;