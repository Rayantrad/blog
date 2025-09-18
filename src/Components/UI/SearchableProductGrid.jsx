import React from 'react';
import ProductGrid from './ProductGrid';

function SearchableProductGrid({ data, searchTerm }) {
  const trimmedTerm = searchTerm.trim().toLowerCase();

  const filteredData = data.filter((item) =>
    item.productTitle.toLowerCase().includes(trimmedTerm)
  );

  return <ProductGrid data={filteredData} />;
}

export default SearchableProductGrid;