import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function AddToCartPanel({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [currentStock, setCurrentStock] = useState(0);
  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("pharmaCart")) || [];
      const existingItem = cart.find((item) => item.id === product.id);
      const usedStock = existingItem ? existingItem.quantity : 0;
      setCurrentStock(product.stock - usedStock);
    }
  }, [product]);

  const increaseQuantity = () => {
    if (quantity < currentStock) setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("pharmaCart")) || [];
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      productTitle: product.productTitle,
      price: product.priceInDollar,
      thumbnail: product.thumbnail,
      quantity,
    });
  }

  localStorage.setItem("pharmaCart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated")); // 👈 Notify others

  setCurrentStock((prev) => prev - quantity);
  setQuantity(1);
  setCartMessage(`✅ Added ${quantity} to cart`);
  setTimeout(() => setCartMessage(""), 3000);
};

  return (
    <div className="mt-4">
      <p className="text-sm font-medium mb-2">
        Stock:{" "}
        <span className={currentStock > 0 ? "text-green-600" : "text-red-600"}>
          {currentStock > 0 ? `${currentStock} available` : "Out of stock"}
        </span>
      </p>

      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={decreaseQuantity}
            className="p-3 w-10 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>
          <span className="p-3 w-10 text-center text-lg font-medium">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="p-3 w-10 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            disabled={quantity >= currentStock}
          >
            <FaPlus />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-3 px-6 font-semibold rounded-lg shadow-md transition ${
            currentStock <= 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={currentStock <= 0}
        >
          {currentStock <= 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>

      {cartMessage && (
        <p className="text-green-600 text-sm mt-2">{cartMessage}</p>
      )}
    </div>
  );
}

export default AddToCartPanel;