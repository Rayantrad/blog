import React from 'react';
import SearchBar from './../UI/SearchBar';
import SortController from './../UI/SortController';

function Section({ title, onSearch, onSortedData, data }) {
  return (
    <section className="container mx-auto px-4 sm:px-8 mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-blue-800 tracking-wide text-center md:text-left">
          {title}
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 w-full md:w-auto">
          <div className="w-full sm:w-64">
            <SearchBar onSearch={onSearch} />
          </div>
          <div className="w-full sm:w-48 flex items-center">
            <SortController data={data} onChange={onSortedData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;