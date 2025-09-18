import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import UseFetchData from "../../Utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function AllCategories() {
  const allCategories = UseFetchData('/allcategories');
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="All Categories" onSearch={setSearchTerm} />
      <SearchableProductGrid data={allCategories} searchTerm={searchTerm} />

    </div>
  )
}

export default AllCategories;
