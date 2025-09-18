import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function VitaminsPage() {
  const vitamins = useFetchData('/vitamins');
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Vitamins" onSearch={setSearchTerm} />
      <SearchableProductGrid data={vitamins} searchTerm={searchTerm} />

    </div>
  )
}

export default VitaminsPage