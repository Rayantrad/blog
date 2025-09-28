import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import ProductGrid from "../UI/ProductGrid";

function FavouriteproductsPage() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    const loadFavorites = () => {
      const stored = JSON.parse(localStorage.getItem("pharmaFavorites")) || [];
      setFavorites(stored);
    };

    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);
    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Go Back Button */}
      <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold cursor-pointer text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
            >
              <FaArrowLeft className="text-xs" />
              Go Back
            </button>

      <h1 className="text-3xl font-bold text-blue-700 mb-6 md:text-left text-center">Your Favorites:</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">
          You haven’t added any products to favorites yet.
        </p>
      ) : (
        <ProductGrid data={favorites} />
      )}
    </main>
  );
}

export default FavouriteproductsPage;