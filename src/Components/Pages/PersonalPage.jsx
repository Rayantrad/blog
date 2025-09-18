
import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import UseFetchData from "../../Utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function PersonalPage() {
  
  const personalcare = UseFetchData('/personalcare');
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Personal Care" onSearch={setSearchTerm} />
      <SearchableProductGrid data={personalcare} searchTerm={searchTerm} />

    </div>
  )
}

export default PersonalPage;
