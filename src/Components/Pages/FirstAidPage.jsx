import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from "../../utils/UseFetchData";
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';
import useSortedData from '../UI/useSortedData';
import Section from './../Layouts/Section';

function FirstAidPage() {

  const firstaid = useFetchData('/firstaid');
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useSortedData(firstaid);

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection/>
      <Section title="First Aid" onSearch={setSearchTerm} data={firstaid} onSortedData={setSortedData}/>
      <SearchableProductGrid data={sortedData} searchTerm={searchTerm} />

    </div>

    
  )
}
export default FirstAidPage;