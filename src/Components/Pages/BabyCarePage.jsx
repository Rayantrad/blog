import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function BabyCarePage() {
  
  const babycare = useFetchData('/babycare');
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Baby Care" onSearch={setSearchTerm} />
      <SearchableProductGrid data={babycare} searchTerm={searchTerm} />

    </div>
  )
}

export default BabyCarePage;
