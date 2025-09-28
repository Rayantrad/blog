import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from '../../utils/UseFetchData';
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';
import useSortedData from '../UI/useSortedData';
import Section from './../Layouts/Section';
import { useEffect } from 'react';
function MedicalEquipmentPage() {
  const medicalEquipment = useFetchData('/medicalequipment');
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useSortedData(medicalEquipment);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection/>
      <Section title="Medical Equipment" onSearch={setSearchTerm} data={medicalEquipment} onSortedData={setSortedData}/>
      <SearchableProductGrid data={sortedData } searchTerm={searchTerm} />

    </div>
  )
}

export default MedicalEquipmentPage;