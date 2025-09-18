import React from 'react'
import HeroSection from "../Layouts/HeroSection";
import useFetchData from '../../utils/UseFetchData';
import SearchableProductGrid from './../UI/SearchableProductGrid';
import { useState } from 'react';

function MedicalEquipmentPage() {
  const medicalEquipment = useFetchData('/medicalequipment');
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 mb-10">
      <HeroSection title="Medical Equipment" onSearch={setSearchTerm} />
      <SearchableProductGrid data={medicalEquipment} searchTerm={searchTerm} />

    </div>
  )
}

export default MedicalEquipmentPage;