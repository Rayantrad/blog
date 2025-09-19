import React, { useEffect, useState, useCallback } from "react";
import useFetchData from "../../utils/UseFetchData";
import HeroSection from "../Layouts/HeroSection";
import SearchBar from "../UI/SearchBar";
import SortController from "../UI/SortController";
import ProductGrid from "../UI/ProductGrid";

function AllCategories() {
  const allData = useFetchData("/all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // 🧠 Filter by category and search term
  useEffect(() => {
    if (!Array.isArray(allData)) return;

    let filtered = [...allData];

    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.productTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [allData, selectedType, searchTerm]);

  // ✅ Memoized callback to avoid re-renders
  const handleSortedChange = useCallback((sorted) => {
    setSortedProducts(sorted);
  }, []);

  return (
    <div>
      <HeroSection />

      <main className="container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Explore All Products
          </h1>
        </header>

        {/* 🔧 Controls Panel */}
        <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          {/* 🔍 Search Bar — left-aligned and wider */}
          <div className="w-full md:w-[440px]">
            <SearchBar onSearch={setSearchTerm} />
          </div>

          {/* 🗂️ Category Filter — compact */}
          <div className="w-full md:w-[220px]">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="all">All Products</option>
              <option value="medicines">Medicines</option>
              <option value="vitamins">Vitamins</option>
              <option value="medicalequipment">Medical Equipment</option>
              <option value="firstaid">First Aid</option>
              <option value="personalcare">Personal Care</option>
              <option value="babycare">Baby Care</option>
            </select>
          </div>

          {/* ↕️ Sort Controller — compact */}
          <div className="w-full md:w-[220px]">
            <SortController data={filteredProducts} onChange={handleSortedChange} />
          </div>
        </section>

        {/* 🧩 Product Grid */}
        <section>
          {sortedProducts.length === 0 ? (
            <p className="text-gray-600 text-center text-lg">
              No products found.
            </p>
          ) : (
            <ProductGrid data={sortedProducts} />
          )}
        </section>
      </main>
    </div>
  );
}

export default AllCategories;