// import React from "react";
// import { FaStar } from "react-icons/fa";

// function Card({
//   title,
//   description,
//   priceLBP,
//   priceUSD,
//   type,
//   thumbnail,
//   className,
// }) {
//   const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
//   const discount = Math.floor(Math.random() * 40); // 0% to 39%

//   return (
//     <div
//       className={` relative bg-white rounded-lg p-4   sm:flex-row items-start sm:items-center gap-4 shadow-md hover:shadow-lg transition ${className}`}
//     >
//       {/* Discount Badge */}
//       {discount > 0 && (
//         <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
//           {discount}% OFF
//         </span>
//       )}

//       {/* Thumbnail */}
//       <div className="w-[72px] h-[72px] flex justify-center items-center bg-primary-50 rounded overflow-hidden">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="object-contain h-full w-full mix-blend-multiply"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col flex-grow">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-sm text-gray-500 mb-1">{description}</p>
//         <p className="text-xs text-gray-400 mb-1">Type: {type}</p>

//         <div className="flex items-center gap-3 mt-2">
//           <span className="text-base font-bold text-primary">
//             LBP {priceLBP}
//           </span>
//           <span className="text-sm text-gray-500">USD ${priceUSD}</span>
//         </div>

//         <div className="mt-2 text-sm text-yellow-500 flex items-center gap-1">
//           <FaStar className="text-yellow-500" />
//           {rating}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

// import React from "react";
// import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

// function ProductCard({
//   title,
//   description,
//   priceLBP,
//   priceUSD,
//   type,
//   thumbnail,
//   className,
// }) {
//   const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
//   const discount = Math.floor(Math.random() * 40); // 0% to 39%

//   // Function to render stars based on the rating
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="text-yellow-400" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
//     }

//     return stars;
//   };

//   return (
//     <div
//       className={`relative w-full rounded-xl bg-white shadow-md hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
//     >
//       {/* Product Image and Hover Effect */}
//       <div className="relative w-full h-full sm:h-64 flex justify-center items-center bg-gradient-to-b from-blue-100 to-white overflow-hidden p-5 transition-all duration-500 ease-in-out group-hover:scale-105">
//         {/* Discount Badge */}
//         {discount > 0 && (
//           <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
//             {discount}% OFF
//           </span>
//         )}
//         <img
//           src={thumbnail}
//           alt={title}
//           className="object-contain h-full w-full mix-blend-multiply"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="relative p-5 z-10 flex flex-col h-full">
//         {/* Rating Stars */}
//         <div className="flex items-center gap-1 mb-2 text-yellow-500">
//           {renderStars(rating)} <span className="text-gray-500 text-sm">({rating})</span>
//         </div>

//         {/* Title and Description */}
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         <p className="text-sm text-gray-500 mb-3 flex-grow line-clamp-2">{description}</p>

//         {/* Prices */}
//         <div className="flex items-center mb-3">
//           <span className="text-2xl font-bold text-blue-600">${priceUSD}</span>
//           <span className="text-sm text-gray-500 ml-2">LBP {priceLBP}</span>
//         </div>

//         {/* Brand and Button */}
//         <div className="flex justify-between items-center">
//           <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
//             {type}
//           </span>
//           <a
//             href="#" // Replace with actual product detail link
//             className="flex items-center gap-1 text-sm font-semibold rounded-full px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
//           >
//             View Details <FaArrowRight className="text-xs" />
//           </a>
//         </div>
//       </div>

//       {/* Bottom Line Hover Effect */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></div>
//     </div>
//   );
// }

// export default ProductCard;

// //perfect design
// import React from "react";
// import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

// function ProductCard({
//   title,
//   description,
//   priceLBP,
//   priceUSD,
//   type,
//   thumbnail,
//   className,
// }) {
//   const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
//   const discount = Math.floor(Math.random() * 30) + 5; // 5% to 34%

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="text-yellow-400 text-xs" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300 text-xs" />);
//     }

//     return stars;
//   };

//   return (
//     <div
//       className={`relative w-full max-w-sm rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-56 flex justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4 group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
//         {discount > 0 && (
//           <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//             {discount}% OFF
//           </span>
//         )}
//         <img
//           src={thumbnail}
//           alt={title}
//           className="object-contain h-full w-full mix-blend-multiply"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="p-4 flex flex-col gap-2">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-yellow-500 text-xs">
//           {renderStars(rating)}
//           <span className="text-gray-500 text-xs">({rating})</span>
//         </div>

//         {/* Title & Description */}
//         <h5 className="text-base font-semibold text-gray-800">{title}</h5>
//         <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

//         {/* Prices */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-sm font-bold text-blue-600">${priceUSD}</span>
//           <span className="text-xs text-gray-500">LBP {priceLBP}</span>
//         </div>

//         {/* Type & Button */}
//         <div className="flex justify-between items-center mt-2">
//           <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded-full">
//             {type}
//           </span>
//           <a
//             href="#"
//             className="flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
//           >
//             View Details <FaArrowRight className="text-[10px]" />
//           </a>
//         </div>
//       </div>

//       {/* Hover Line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></div>
//     </div>
//   );
// }

// export default ProductCard;

// import React from "react";
// import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

// function ProductCard({
//   title,
//   description,
//   priceUSD,
//   originalPrice,
//   thumbnail,
//   className,
// }) {
//   // Hardcoded for example, as per the image
//   const rating = 2.56;
//   const discount = Math.round(((originalPrice - priceUSD) / originalPrice) * 100);

//   // Function to render stars based on the rating
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
//     }

//     // You could add a half-star icon here if you wanted, but for simplicity
//     // and to match the image, we will just use full and empty stars.
//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="text-yellow-400" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
//     }

//     return stars;
//   };

//   return (
//     <div
//       className={`relative w-64 h-auto rounded-lg bg-white shadow-md overflow-hidden ${className}`}
//     >
//       {/* Discount Badge */}
//       {discount > 0 && (
//         <span className="absolute top-2 right-2 bg-white text-gray-700 text-xs font-semibold px-2 py-1 rounded-full border border-gray-200">
//           {discount}% OFF
//         </span>
//       )}

//       {/* Product Image */}
//       <div className="relative w-full h-40 flex justify-center items-center bg-gray-50 p-4">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="object-contain h-full w-full"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="relative p-3 z-10">
//         {/* Rating Stars and Count */}
//         <div className="flex items-center gap-1 mb-1 text-yellow-500">
//           {renderStars(rating)}
//           <span className="text-gray-500 text-xs">({rating})</span>
//         </div>

//         {/* Title */}
//         <h5 className="text-base font-semibold text-gray-800 mb-1">{title}</h5>

//         {/* Description */}
//         <p className="text-xs text-gray-500 mb-2 line-clamp-2">{description}</p>

//         {/* Prices */}
//         <div className="flex items-center mb-3">
//           <span className="text-lg font-bold text-gray-800">${priceUSD}</span>
//           {originalPrice && (
//             <span className="text-sm text-gray-400 ml-2 line-through">${originalPrice}</span>
//           )}
//         </div>

//         {/* View Details Button */}
//         <button
//           className="w-full flex justify-center items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 border border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors"
//         >
//           View Details <FaArrowRight className="text-xs" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// PERFECT ONE
// import React from "react";
// import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

// function ProductCard({
//   title,
//   description,
//   priceUSD,
//   type,
//   thumbnail,
//   className,
// }) {
//   const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
//   const discount = Math.floor(Math.random() * 30) + 5; // 5% to 34%

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="text-yellow-400 text-xs" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <FaRegStar key={`empty-${i}`} className="text-gray-300 text-xs" />
//       );
//     }

//     return stars;
//   };

//   return (
//     <div
//       className={`relative w-58 rounded-xl hover:-translate-y-1.5  bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-40 flex justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4 group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
//         {discount > 0 && (
//           <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//             {discount}% OFF
//           </span>
//         )}
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-[120px] h-[120px] object-contain mix-blend-multiply"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="p-4 flex flex-col gap-2">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-yellow-500 text-xs">
//           {renderStars(rating)}
//           <span className="text-gray-500 text-xs">({rating})</span>
//         </div>

//         {/* Title & Description */}
//         <h5 className="text-base font-semibold text-gray-800">{title}</h5>
//         <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

//         {/* Prices */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-sm font-bold text-blue-600">${priceUSD}</span>
//         </div>

//         {/* Type & Button */}
//         <div className="flex justify-between items-center mt-2">
//           <span className="bg-gray-100 text-gray-700 text-[8px] font-semibold px-2 py-1 rounded-full">
//             {type}
//           </span>
//           <a
//             href="#"
//             className="flex items-center gap-1 text-[10px] font-semibold rounded-full px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
//           >
//             View Details <FaArrowRight className="text-[10px]" />
//           </a>
//         </div>
//       </div>

//       {/* Hover Line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></div>
//     </div>
//   );
// }

// export default ProductCard;



// import React from "react";
// import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";
// import { NavLink } from "react-router";
// function ProductCard({
//   id,
//   title,
//   description,
//   priceUSD,
//   brand,
//   type,
//   thumbnail,
//   className,
// }) {
//   const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
//   const discount = Math.floor(Math.random() * 30) + 5; // 5% to 34%

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="text-yellow-400 text-xs" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <FaRegStar key={`empty-${i}`} className="text-gray-300 text-xs" />
//       );
//     }

//     return stars;
//   };

//   return (
//     <div
//       className={`relative w-58  h-[360px] flex flex-col justify-between rounded-xl hover:-translate-y-1.5 bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-40 flex justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4 group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
//         {discount > 0 && (
//           <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//             {discount}% OFF
//           </span>
//         )}
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-full h-full  object-contain mix-blend-multiply"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="p-4 flex flex-col flex-grow justify-between">
//         <div className="flex flex-col gap-2">
//           {/* Rating */}
//           <div className="flex items-center gap-1 text-yellow-500 text-xs">
//             {renderStars(rating)}
//             <span className="text-gray-500 text-xs">({rating})</span>
//           </div>

//           {/* Title & Description */}
//           <h5 className="text-base font-semibold text-gray-800 line-clamp-1">{title}</h5>
//           <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

//           {/* Prices */}
//           <div className="flex items-center gap-2 mt-1">
//             <span className="text-sm font-bold text-blue-600">${priceUSD}</span>
//           </div>
//         </div>

//         {/* Type & Button */}
//         <div className="flex justify-between items-center mt-auto">
//           <span className="bg-gray-100 text-gray-700 text-[8px] font-semibold px-2 py-1 rounded-full">
//             {brand}
//           </span>
//           <NavLink
//             to={`/${type}/${id}`}
//             className="flex items-center gap-1 text-[10px] font-semibold rounded-full px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
//           >
//             View Details <FaArrowRight className="text-[10px]" />
//           </NavLink>
//         </div>
//       </div>

//       {/* Hover Line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></div>
//     </div>
//   );
// }

// export default ProductCard;



import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router";

function Card({
  id,
  title,
  description,
  priceUSD,
  brand,
  type,
  thumbnail,
  className,
}) {
  const [rating] = useState((Math.random() * 2 + 3).toFixed(1));
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(priceUSD);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`pharmaDiscount-${id}`));

    if (stored) {
      setDiscount(stored.discount);
      setDiscountedPrice(stored.discountedPrice);
    } else {
      const generatedDiscount = Math.floor(Math.random() * 40) + 5;
      const calculatedPrice = (priceUSD * (1 - generatedDiscount / 100)).toFixed(2);

      setDiscount(generatedDiscount);
      setDiscountedPrice(calculatedPrice);

      localStorage.setItem(
        `pharmaDiscount-${id}`,
        JSON.stringify({ discount: generatedDiscount, discountedPrice: calculatedPrice })
      );
    }
  }, [id, priceUSD]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
      );
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-400 text-xs" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="text-gray-300 text-xs" />
      );
    }

    return stars;
  };

  return (
    <div
      className={`relative w-58 h-[360px] flex flex-col justify-between rounded-xl hover:-translate-y-1.5 bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-40 flex justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4 group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            {discount}% OFF
          </span>
        )}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-2">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-xs">
            {renderStars(rating)}
            <span className="text-gray-500 text-xs">({rating})</span>
          </div>

          {/* Title & Description */}
          <h5 className="text-base font-semibold text-gray-800 line-clamp-1">{title}</h5>
          <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

          {/* Prices */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-400 line-through">${priceUSD}</span>
            <span className="text-sm font-bold text-blue-600">${discountedPrice}</span>
          </div>
        </div>

        {/* Type & Button */}
        <div className="flex justify-between items-center mt-auto">
          <span className="bg-gray-100 text-gray-700 text-[8px] font-semibold px-2 py-1 rounded-full">
            {brand}
          </span>
          <NavLink
            to={`/${type}/${id}`}
            className="flex items-center gap-1 text-[10px] font-semibold rounded-full px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View Details <FaArrowRight className="text-[10px]" />
          </NavLink>
        </div>
      </div>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></div>
    </div>
  );
}

export default Card;