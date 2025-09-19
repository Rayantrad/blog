// import React from "react";
// import { useParams } from "react-router";
// import UseFetchData from "../../utils/UseFetchData";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const products = UseFetchData(`/${type}`);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <div className="text-center mt-10 text-gray-500">Product not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="bg-gradient-to-b from-blue-100 to-white rounded-lg p-6 shadow-md flex justify-center items-center">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="w-full h-auto object-contain rounded"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex flex-col gap-4 text-gray-800">
//           <h1 className="text-2xl font-bold text-blue-700">{product.productTitle}</h1>
//           <p className="text-sm text-gray-600">{product.description}</p>

//           <div className="text-xl font-bold text-blue-600">${product.priceInDollar}</div>
//           <div className="text-xs text-gray-500">Stock available: {product.stock}</div>

//           <div className="grid grid-cols-2 gap-4 text-sm mt-2">
//             <div><strong>Brand:</strong> {product.brand}</div>
//             <div><strong>Category:</strong> {product.category}</div>
//             <div><strong>Quantity:</strong> {product.quantity}</div>
//             <div><strong>Form:</strong> {product.form}</div>
//             <div><strong>Scent:</strong> {product.scent}</div>
//             <div><strong>Origin:</strong> {product.countryOfOrigin}</div>
//             <div><strong>Expires:</strong> {product.expirationDate}</div>
//             <div><strong>Barcode:</strong> {product.barcode}</div>
//           </div>

//           <div className="mt-4 text-sm">
//             <strong>Usage Instructions:</strong> {product.usageInstructions}
//           </div>

//           <div className="mt-2 flex flex-wrap gap-2 text-xs">
//             {product.isDermatologistTested && (
//               <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                 Dermatologist Tested
//               </span>
//             )}
//             {product.isHypoallergenic && (
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
//                 Hypoallergenic
//               </span>
//             )}
//             {product.isParabenFree && (
//               <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                 Paraben-Free
//               </span>
//             )}
//           </div>

//           {/* Cart Actions Placeholder */}
//           <div className="mt-6 flex gap-4">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
//               Add to Wishlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;

// import React from "react";
// import { useParams, useNavigate } from "react-router";
// import UseFetchData from "../../utils/UseFetchData";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const navigate = useNavigate();
//   const products = UseFetchData(`/${type}`);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <div className="text-center mt-10 text-gray-500">Product not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
//       >
//         ← Back
//       </button>

//       {/* Product Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="bg-gradient-to-b from-blue-100 to-white rounded-lg p-6 shadow-md flex justify-center items-center">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="w-full h-auto object-contain rounded"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex flex-col gap-4 text-gray-800">
//           <h1 className="text-3xl font-bold text-blue-700">{product.productTitle}</h1>
//           <p className="text-sm text-gray-600">{product.description}</p>

//           <div className="text-2xl font-bold text-blue-600">${product.priceInDollar}</div>
//           <div className="text-xs text-gray-500">Stock available: {product.stock}</div>

//           <div className="grid grid-cols-2 gap-4 text-sm mt-4">
//             <div><strong>Brand:</strong> {product.brand}</div>
//             <div><strong>Category:</strong> {product.category}</div>
//             <div><strong>Quantity:</strong> {product.quantity}</div>
//             <div><strong>Form:</strong> {product.form}</div>
//             {product.scent && <div><strong>Scent:</strong> {product.scent}</div>}
//             <div><strong>Origin:</strong> {product.countryOfOrigin}</div>
//             <div><strong>Expires:</strong> {product.expirationDate}</div>
//             <div><strong>Barcode:</strong> {product.barcode}</div>
//           </div>

//           <div className="mt-4 text-sm">
//             <strong>Usage Instructions:</strong> {product.usageInstructions}
//           </div>

//           <div className="mt-4 flex flex-wrap gap-2 text-xs">
//             {product.isDermatologistTested && (
//               <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                 Dermatologist Tested
//               </span>
//             )}
//             {product.isHypoallergenic && (
//               <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
//                 Hypoallergenic
//               </span>
//             )}
//             {product.isParabenFree && (
//               <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                 Paraben-Free
//               </span>
//             )}
//           </div>

//           {/* Cart Actions */}
//           <div className="mt-6 flex gap-4">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
//               Add to Wishlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import UseFetchData from "../../utils/UseFetchData";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const navigate = useNavigate(); // Hook to navigate programmatically
//   const products = UseFetchData(`/${type}`);

//   // Find the product based on the URL parameters
//   const product = products.find((item) => item.id === parseInt(id));

//   // State to manage quantity for "Add to Cart"
//   const [quantity, setQuantity] = useState(1);
//   const [currentStock, setCurrentStock] = useState(product ? product.stock : 0);

//   // Handle quantity changes
//   const increaseQuantity = () => {
//     if (quantity < currentStock) {
//       setQuantity((prevQuantity) => prevQuantity + 1);
//     }
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   // Handle adding to cart
//   const handleAddToCart = () => {
//     if (quantity > 0 && quantity <= currentStock) {
//       // Logic to decrease stock and add to a temporary cart state
//       setCurrentStock((prevStock) => prevStock - quantity);
//       console.log(`Added ${quantity} of ${product.productTitle} to cart.`);
//     }
//   };

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)} // Navigates to the previous page
//         className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
//       >
//         {/* You'll need to install an icon library like Heroicons for this */}
//         {/* Example: <ArrowLeftIcon className="h-5 w-5 mr-2" /> */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 mr-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Go Back
//       </button>
      
//       {/* Main Product Container */}
//       <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
//         {/* Product Image Section */}
//         <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gray-50 rounded-lg">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="rounded-lg object-contain max-h-96 w-full"
//           />
//         </div>

//         {/* Product Details Section */}
//         <div className="lg:w-1/2">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
//             {product.productTitle}
//           </h1>
//           <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
//           <p className="text-2xl font-bold text-blue-600 mb-6">
//             ${product.priceInDollar}
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             {product.description}
//           </p>

//           {/* Detailed Specifications */}
//           <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
//             <div>
//               <p className="font-semibold">Category:</p>
//               <span>{product.category}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Form:</p>
//               <span>{product.form}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Quantity:</p>
//               <span>{product.quantity}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Scent:</p>
//               <span>{product.scent}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Origin:</p>
//               <span>{product.countryOfOrigin}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Expires:</p>
//               <span>{product.expirationDate}</span>
//             </div>
//             <div>
//               <p className="font-semibold">Barcode:</p>
//               <span>{product.barcode}</span>
//             </div>
//           </div>
          
//           {/* Usage Instructions */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-800">
//               Usage Instructions
//             </h3>
//             <p className="text-gray-700">{product.usageInstructions}</p>
//           </div>
          
//           {/* Health & Safety Badges */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {product.isDermatologistTested && (
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                 Dermatologist Tested
//               </span>
//             )}
//             {product.isHypoallergenic && (
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                 Hypoallergenic
//               </span>
//             )}
//             {product.isParabenFree && (
//               <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                 Paraben-Free
//               </span>
//             )}
//           </div>
          
//           {/* Stock and Cart Actions */}
//           <div className="flex flex-col gap-4">
//             <p className="text-lg font-medium">
//               Stock:{" "}
//               <span
//                 className={currentStock > 0 ? "text-green-600" : "text-red-600"}
//               >
//                 {currentStock > 0 ? `${currentStock} available` : "Out of stock"}
//               </span>
//             </p>
            
//             <div className="flex items-center gap-4">
//               {/* Quantity Selector */}
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="p-3 w-10 text-xl text-gray-600 hover:bg-gray-100"
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <span className="p-3 w-10 text-center text-lg font-medium">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={increaseQuantity}
//                   className="p-3 w-10 text-xl text-gray-600 hover:bg-gray-100"
//                   disabled={quantity >= currentStock}
//                 >
//                   +
//                 </button>
//               </div>
              
//               {/* Add to Cart Button */}
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
//                 disabled={currentStock <= 0}
//               >
//                 Add to Cart
//               </button>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
// import UseFetchData from "../../utils/UseFetchData";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const navigate = useNavigate();
//   const products = UseFetchData(`/${type}`);
//   const product = products.find((item) => item.id === parseInt(id));

//   const [quantity, setQuantity] = useState(1);
//   const [currentStock, setCurrentStock] = useState(product ? product.stock : 0);

//   const increaseQuantity = () => {
//     if (quantity < currentStock) setQuantity((prev) => prev + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleAddToCart = () => {
//     if (quantity <= currentStock) {
//       setCurrentStock((prev) => prev - quantity);
//       console.log(`Added ${quantity} of ${product.productTitle} to cart.`);
//     }
//   };

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
//       >
//         <FaArrowLeft className="text-xs" />
//         Go Back
//       </button>

//       {/* Product Layout */}
//       <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
//         {/* Image Section */}
//         <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="rounded-lg object-contain max-h-96 w-full"
//           />
//         </div>

//         {/* Info Section */}
//         <div className="lg:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.productTitle}</h1>
//             <p className="text-lg text-gray-600 mb-2">{product.brand}</p>
//             <p className="text-2xl font-bold text-blue-600 mb-4">${product.priceInDollar}</p>
//             <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

//             {/* Specs */}
//             <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
//               <div><strong>Category:</strong> {product.category}</div>
//               <div><strong>Form:</strong> {product.form}</div>
//               <div><strong>Quantity:</strong> {product.quantity}</div>
//               {product.scent && <div><strong>Scent:</strong> {product.scent}</div>}
//               <div><strong>Origin:</strong> {product.countryOfOrigin}</div>
//               <div><strong>Expires:</strong> {product.expirationDate}</div>
//               <div><strong>Barcode:</strong> {product.barcode}</div>
//             </div>

//             {/* Usage */}
//             <div className="mb-6">
//               <h3 className="text-md font-semibold text-gray-800 mb-1">Usage Instructions</h3>
//               <p className="text-sm text-gray-700">{product.usageInstructions}</p>
//             </div>

//             {/* Badges */}
//             <div className="flex flex-wrap gap-2 mb-6 text-xs">
//               {product.isDermatologistTested && (
//                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
//                   Dermatologist Tested
//                 </span>
//               )}
//               {product.isHypoallergenic && (
//                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
//                   Hypoallergenic
//                 </span>
//               )}
//               {product.isParabenFree && (
//                 <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
//                   Paraben-Free
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Cart Actions */}
//           <div className="mt-4">
//             <p className="text-sm font-medium mb-2">
//               Stock:{" "}
//               <span className={currentStock > 0 ? "text-green-600" : "text-red-600"}>
//                 {currentStock > 0 ? `${currentStock} available` : "Out of stock"}
//               </span>
//             </p>

//             <div className="flex items-center gap-4">
//               {/* Quantity Selector */}
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="p-3 w-10 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
//                   disabled={quantity <= 1}
//                 >
//                   <FaMinus />
//                 </button>
//                 <span className="p-3 w-10 text-center text-lg font-medium">{quantity}</span>
//                 <button
//                   onClick={increaseQuantity}
//                   className="p-3 w-10 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
//                   disabled={quantity >= currentStock}
//                 >
//                   <FaPlus />
//                 </button>
//               </div>

//               {/* Add to Cart */}
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
//                 disabled={currentStock <= 0}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;


// import React from "react";
// import { useParams, useNavigate } from "react-router";
// import { FaArrowLeft } from "react-icons/fa";
// import useFetchData from "../../utils/UseFetchData";
// import AddToCartPanel from "../UI/AddToCartPanel";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const navigate = useNavigate();
//   const products = useFetchData(`/${type}`);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
//       >
//         <FaArrowLeft className="text-xs" />
//         Go Back
//       </button>

//       {/* Product Layout */}
//       <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
//         {/* Image Section */}
//         <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="rounded-lg object-contain max-h-96 w-full"
//           />
//         </div>

//         {/* Info Section */}
//         <div className="lg:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.productTitle}</h1>
//             <p className="text-lg text-gray-600 mb-2">{product.brand}</p>
//             <p className="text-2xl font-bold text-blue-600 mb-4">${product.priceInDollar}</p>
//             <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

//             {/* Specs */}
//             <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
//               <div><strong>Category:</strong> {product.category}</div>
//               <div><strong>Form:</strong> {product.form}</div>
//               <div><strong>Quantity:</strong> {product.quantity}</div>
//               {product.scent && <div><strong>Scent:</strong> {product.scent}</div>}
//               <div><strong>Origin:</strong> {product.countryOfOrigin}</div>
//               <div><strong>Expires:</strong> {product.expirationDate}</div>
//               <div><strong>Barcode:</strong> {product.barcode}</div>
//             </div>

//             {/* Usage */}
//             <div className="mb-6">
//               <h3 className="text-md font-semibold text-gray-800 mb-1">Usage Instructions</h3>
//               <p className="text-sm text-gray-700">{product.usageInstructions}</p>
//             </div>

//             {/* Badges */}
//             <div className="flex flex-wrap gap-2 mb-6 text-xs">
//               {product.isDermatologistTested && (
//                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
//                   Dermatologist Tested
//                 </span>
//               )}
//               {product.isHypoallergenic && (
//                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
//                   Hypoallergenic
//                 </span>
//               )}
//               {product.isParabenFree && (
//                 <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
//                   Paraben-Free
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Cart Panel */}
//           <AddToCartPanel product={product} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;


// import React from "react";
// import { useParams, useNavigate } from "react-router";
// import { FaArrowLeft, FaStar } from "react-icons/fa";
// import useFetchData from "../../utils/UseFetchData";
// import AddToCartPanel from "../UI/AddToCartPanel";

// function ProductDetailPage() {
//   const { type, id } = useParams();
//   const navigate = useNavigate();
//   const products = useFetchData(`/${type}`);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
//       >
//         <FaArrowLeft className="text-xs" />
//         Go Back
//       </button>

//       {/* Product Layout */}
//       <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
//         {/* Image Section */}
//         <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
//           <img
//             src={product.thumbnail}
//             alt={product.productTitle}
//             className="rounded-lg object-contain max-h-96 w-full"
//           />
//         </div>

//         {/* Info Section */}
//         <div className="lg:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.productTitle}</h1>
//             <p className="text-lg text-gray-600 mb-2">{product.brand}</p>
//             <p className="text-2xl font-bold text-blue-600 mb-4">${product.priceInDollar}</p>
//             <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

//             {/* Rating */}
//             {product.rating && (
//               <div className="flex items-center gap-2 text-sm text-yellow-500 mb-4">
//                 <FaStar className="text-yellow-400" />
//                 <span>{product.rating} / 5</span>
//                 <span className="text-gray-500">({product.reviewsCount} reviews)</span>
//               </div>
//             )}

//             {/* Specs */}
//             <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
//               {product.category && <div><strong>Category:</strong> {product.category}</div>}
//               {product.form && <div><strong>Form:</strong> {product.form}</div>}
//               {product.quantity && <div><strong>Quantity:</strong> {product.quantity}</div>}
//               {product.tablets && <div><strong>Tablets:</strong> {product.tablets}</div>}
//               {product.mg && <div><strong>Strength:</strong> {product.mg}</div>}
//               {product.model && <div><strong>Model:</strong> {product.model}</div>}
//               {product.dimensions && <div><strong>Dimensions:</strong> {product.dimensions}</div>}
//               {product.weight && <div><strong>Weight:</strong> {product.weight}</div>}
//               {product.stock && <div><strong>Stock:</strong> {product.stock}</div>}
//               {product.skinType && <div><strong>Skin Type:</strong> {product.skinType}</div>}
//               {product.scent && <div><strong>Scent:</strong> {product.scent}</div>}
//               {product.warrantyPeriod && <div><strong>Warranty:</strong> {product.warrantyPeriod}</div>}
//               {product.powerSource && <div><strong>Power Source:</strong> {product.powerSource}</div>}
//               {product.origin || product.countryOfOrigin && (
//                 <div><strong>Origin:</strong> {product.countryOfOrigin || product.origin}</div>
//               )}
//               {product.expirationDate && <div><strong>Expires:</strong> {product.expirationDate}</div>}
//               {product.barcode && <div><strong>Barcode:</strong> {product.barcode}</div>}
//             </div>

//             {/* Ingredients */}
//             {product.ingredients && (
//               <div className="mb-6">
//                 <h3 className="text-md font-semibold text-gray-800 mb-1">Ingredients</h3>
//                 <ul className="list-disc list-inside text-sm text-gray-700">
//                   {product.ingredients.map((ing, i) => (
//                     <li key={i}>{ing}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Usage Instructions */}
//             {product.usageInstructions && (
//               <div className="mb-6">
//                 <h3 className="text-md font-semibold text-gray-800 mb-1">Usage Instructions</h3>
//                 <p className="text-sm text-gray-700">{product.usageInstructions}</p>
//               </div>
//             )}

//             {/* Safety Warnings */}
//             {product.safetyWarnings && (
//               <div className="mb-6">
//                 <h3 className="text-md font-semibold text-red-600 mb-1">Safety Warnings</h3>
//                 <p className="text-sm text-red-700">{product.safetyWarnings}</p>
//               </div>
//             )}

//             {/* Feature Badges */}
//             <div className="flex flex-wrap gap-2 mb-6 text-xs">
//               {product.isVegetarian && (
//                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
//                   Vegetarian
//                 </span>
//               )}
//               {product.isGlutenFree && (
//                 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
//                   Gluten-Free
//                 </span>
//               )}
//               {product.isDermatologistTested && (
//                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
//                   Dermatologist Tested
//                 </span>
//               )}
//               {product.isHypoallergenic && (
//                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
//                   Hypoallergenic
//                 </span>
//               )}
//               {product.isParabenFree && (
//                 <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
//                   Paraben-Free
//                 </span>
//               )}
//               {product.isCrueltyFree && (
//                 <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium">
//                   Cruelty-Free
//                 </span>
//               )}
//               {product.isRechargeable && (
//                 <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
//                   Rechargeable
//                 </span>
//               )}
//               {product.sterile && (
//                 <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
//                   Sterile
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Cart Panel */}
//           <AddToCartPanel product={product} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;


import React from "react";
import { useParams, useNavigate } from "react-router";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import useFetchData from "../../utils/UseFetchData";
import AddToCartPanel from "../UI/AddToCartPanel";

function ProductDetailPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const products = useFetchData(`/${type}`);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        Product not found.
      </div>
    );
  }

  // 💰 Discount Logic
  const discountKey = `pharmaDiscount-${product.id}`;
  const stored = JSON.parse(localStorage.getItem(discountKey));

  let discount = 0;
  let discountedPrice = product.priceInDollar;

  if (stored) {
    discount = stored.discount;
    discountedPrice = stored.discountedPrice;
  } else {
    discount = Math.floor(Math.random() * 30) + 5;
    discountedPrice = (product.priceInDollar * (1 - discount / 100)).toFixed(2);
    localStorage.setItem(discountKey, JSON.stringify({ discount, discountedPrice }));
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
      >
        <FaArrowLeft className="text-xs" />
        Go Back
      </button>

      {/* Product Layout */}
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
          <img
            src={product.thumbnail}
            alt={product.productTitle}
            className="rounded-lg object-contain max-h-96 w-full"
          />
        </div>

        {/* Info Section */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.productTitle}</h1>
            <p className="text-lg text-gray-600 mb-2">{product.brand}</p>

            {/* 💸 Price with Discount */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-400 line-through">${product.priceInDollar}</span>
              <span className="text-2xl font-bold text-blue-600">${discountedPrice}</span>
              <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full font-semibold">
                {discount}% OFF
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 text-sm text-yellow-500 mb-4">
                <FaStar className="text-yellow-400" />
                <span>{product.rating} / 5</span>
                <span className="text-gray-500">({product.reviewsCount} reviews)</span>
              </div>
            )}

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
              {product.category && <div><strong>Category:</strong> {product.category}</div>}
              {product.form && <div><strong>Form:</strong> {product.form}</div>}
              {product.quantity && <div><strong>Quantity:</strong> {product.quantity}</div>}
              {product.tablets && <div><strong>Tablets:</strong> {product.tablets}</div>}
              {product.mg && <div><strong>Strength:</strong> {product.mg}</div>}
              {product.model && <div><strong>Model:</strong> {product.model}</div>}
              {product.dimensions && <div><strong>Dimensions:</strong> {product.dimensions}</div>}
              {product.weight && <div><strong>Weight:</strong> {product.weight}</div>}
              {product.stock && <div><strong>Stock:</strong> {product.stock}</div>}
              {product.skinType && <div><strong>Skin Type:</strong> {product.skinType}</div>}
              {product.scent && <div><strong>Scent:</strong> {product.scent}</div>}
              {product.warrantyPeriod && <div><strong>Warranty:</strong> {product.warrantyPeriod}</div>}
              {product.powerSource && <div><strong>Power Source:</strong> {product.powerSource}</div>}
              {product.origin || product.countryOfOrigin && (
                <div><strong>Origin:</strong> {product.countryOfOrigin || product.origin}</div>
              )}
              {product.expirationDate && <div><strong>Expires:</strong> {product.expirationDate}</div>}
              {product.barcode && <div><strong>Barcode:</strong> {product.barcode}</div>}
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Ingredients</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage Instructions */}
            {product.usageInstructions && (
              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Usage Instructions</h3>
                <p className="text-sm text-gray-700">{product.usageInstructions}</p>
              </div>
            )}

            {/* Safety Warnings */}
            {product.safetyWarnings && (
              <div className="mb-6">
                <h3 className="text-md font-semibold text-red-600 mb-1">Safety Warnings</h3>
                <p className="text-sm text-red-700">{product.safetyWarnings}</p>
              </div>
            )}

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs">
              {product.isVegetarian && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Vegetarian</span>
              )}
              {product.isGlutenFree && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Gluten-Free</span>
              )}
              {product.isDermatologistTested && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Dermatologist Tested</span>
              )}
              {product.isHypoallergenic && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Hypoallergenic</span>
              )}
              {product.isParabenFree && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Paraben-Free</span>
              )}
              {product.isCrueltyFree && (
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium">Cruelty-Free</span>
              )}
              {product.isRechargeable && (
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">Rechargeable</span>
              )}
              {product.sterile && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">Sterile</span>
              )}
            </div>
          </div>

          {/* Cart Panel */}
          <AddToCartPanel product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;