import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';
import Section from './../Layouts/Section';
import useSortedData from '../UI/useSortedData';
import { useEffect } from 'react';
function MedicinesPage() {
  const medicines = useFetchData('/medicines');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedData, setSortedData] = useSortedData(medicines);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection/>
      <Section title="Medicines" onSearch={setSearchTerm} data={medicines} onSortedData={setSortedData}/>
      <SearchableProductGrid data={sortedData} searchTerm={searchTerm} />

    </div>
  );
}

export default MedicinesPage