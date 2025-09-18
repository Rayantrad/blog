
import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from '../../utils/UseFetchData'; 
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function PersonalPage() {

  const personalcare = useFetchData('/personalcare');
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Personal Care" onSearch={setSearchTerm} />
      <SearchableProductGrid data={personalcare} searchTerm={searchTerm} />

    </div>
  )
}

export default PersonalPage
