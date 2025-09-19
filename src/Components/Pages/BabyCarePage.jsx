import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';
import Section from './../Layouts/Section';
import useSortedData from '../UI/useSortedData';

function BabyCarePage() {
  
  const babycare = useFetchData('/babycare');
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useSortedData(babycare);

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection/>
      <Section title="Baby Care" onSearch={setSearchTerm} data={babycare} onSortedData={setSortedData}/>
      <SearchableProductGrid data={sortedData} searchTerm={searchTerm} />

    </div>
  )
}

export default BabyCarePage;
