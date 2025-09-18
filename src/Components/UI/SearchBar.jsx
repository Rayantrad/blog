import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Feather icon

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl" />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-3 rounded-full border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>
    </div>
  );
}

export default SearchBar;