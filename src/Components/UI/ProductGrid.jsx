import React from 'react';
import Card from './Card'; // adjust path if needed

function ProductGrid({ data }) {
  return (
    <div className="mx-auto justify-items-center">
      <div className="justify-items-center sm:justify-items-stretch grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.productTitle}
            description={item.description}
            priceUSD={item.priceInDollar}
            brand={item.brand}
            thumbnail={item.thumbnail}
            type={item.type}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;