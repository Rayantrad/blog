import React, { useEffect, useState } from "react";
import useFetchData from "../../utils/UseFetchData";
import HeroSection from './../Layouts/HeroSection';
import SearchBar from './../UI/SearchBar';
import SortController from './../UI/SortController'; // Updated import
import ProductGrid from './../UI/ProductGrid';

function AllProductsPage() {
  const allData = useFetchData("/all");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    setAllProducts(allData);
  }, [allData]);

  useEffect(() => {
    let result = [...allProducts];

    if (searchTerm.trim()) {
      result = result.filter((item) =>
        item.productTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "all") {
      result = result.filter((item) => item.type === selectedType);
    }

    result = result.map((item) => {
      const key = `pharmaDiscount-${item.id}`;
      const stored = JSON.parse(localStorage.getItem(key));
      let discount = 0;
      let discountedPrice = item.priceInDollar;

      if (stored) {
        discount = stored.discount;
        discountedPrice = parseFloat(stored.discountedPrice);
      } else {
        discount = Math.floor(Math.random() * 30) + 5;
        discountedPrice = parseFloat(
          (item.priceInDollar * (1 - discount / 100)).toFixed(2)
        );
        localStorage.setItem(
          key,
          JSON.stringify({ discount, discountedPrice })
        );
      }

      return { ...item, discountedPrice };
    });

    if (sortOption === "priceLow") {
      result.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOption === "priceHigh") {
      result.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [searchTerm, sortOption, selectedType, allProducts]);

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Explore All Products</h1>

        {/* 🔍 Search & Filter Panel */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search products..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="all">All Products</option>
            <option value="medicines">Medicines</option>
            <option value="vitamins">Vitamins</option>
            <option value="medicalequipment">Medical Equipment</option>
            <option value="firstaid">First Aid</option>
            <option value="personalcare">Personal Care</option>
            <option value="babycare">Baby Care</option>
          </select>

          <SortController // Updated usage
            value={sortOption}
            onChange={setSortOption}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* 🧩 Product Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">No products found.</p>
        ) : (
          <ProductGrid data={filteredProducts} />
        )}
      </div>
    </div>
  );
}

export default AllProductsPage;