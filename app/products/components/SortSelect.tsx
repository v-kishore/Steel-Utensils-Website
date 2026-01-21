import React from "react";

const SortSelect: React.FC = () => {
  return (
    <div className="mb-4 flex justify-end">
      <label className="mr-2 font-semibold" htmlFor="sort">
        Sort by:
      </label>
      <select
        id="sort"
        className="border border-gray-300 rounded-md p-1"
      >
        <option value="popularity">Popularity</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  );
};

export default SortSelect;
