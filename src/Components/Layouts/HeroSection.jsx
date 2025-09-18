// import React from 'react';

// function HeroSection() {
//   return (
//     <section
//       className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/Pharm.jpeg')",
//       }}
//     >
//       {/* Overlay for soft white blur */}
//       <div className="absolute inset-0  bg-opacity-70 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-8">
//         <h1 className="text-4xl sm:text-5xl font-serif text-blue-800 font-semibold tracking-wide mb-4">
//           Your Trusted Pharmacy Collection
//         </h1>
//         <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto font-light">
//           Discover carefully selected medicines, curated for your health, safety, and comfort — always backed by quality.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from 'react';
import SearchBar from '../UI/SearchBar';

function HeroSection({ title, onSearch }) {

  return (
    <div>
      <section
        className="relative w-full h-[70vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center mb-10"
        style={{
          backgroundImage: "url('/Pharm.jpeg')",
        }}
      >
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/20 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-blue-800 font-semibold tracking-wide mb-4">
            Your Trusted Pharmacy Collection
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto font-light mb-6">
            Discover carefully selected medicines, curated for your health, safety, and comfort — always backed by quality.
          </p>

          <SearchBar onSearch={onSearch} />

        </div>
      </section>
      <div className='my-10'>
        <h1 className="text-3xl text-center sm:text-4xl font-serif font-semibold text-blue-800 tracking-wide">
          {title}
        </h1>

      </div>
    </div>
  );
}

export default HeroSection;