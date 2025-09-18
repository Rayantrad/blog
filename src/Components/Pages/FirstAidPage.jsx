import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import UseFetchData from "../../Utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function FirstAidPage() {

  const firstaid = UseFetchData('/firstaid');
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="First Aid" onSearch={setSearchTerm} />
      <SearchableProductGrid data={firstaid} searchTerm={searchTerm} />

    </div>

    
  )
}
export default FirstAidPage;