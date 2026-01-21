import React from "react";

const FilterSidebar: React.FC = () => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="font-bold text-lg mb-2">Filters</h2>
      <div>
        <h3 className="font-semibold mb-1">Category</h3>
        <ul className="space-y-1 text-gray-700">
          <li><input type="checkbox" /> Kitchen Utensils</li>
          <li><input type="checkbox" /> Stainless Steel</li>
          <li><input type="checkbox" /> Iron Utensils</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-1">Price</h3>
        <ul className="space-y-1 text-gray-700">
          <li><input type="checkbox" /> $0 - $50</li>
          <li><input type="checkbox" /> $50 - $100</li>
          <li><input type="checkbox" /> $100+</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
