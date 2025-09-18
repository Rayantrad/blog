import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function MedicinesPage() {
  const medicines = useFetchData('/medicines');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Medicines" onSearch={setSearchTerm} />
      <SearchableProductGrid data={medicines} searchTerm={searchTerm} />

    </div>
  );
}

export default MedicinesPage