"use client"; // Needed if using useState

import React, { useState } from "react";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import SortSelect from "./components/SortSelect";

const dummyProducts = [
  { id: 1, name: "POTS", price: "$59.99", image: "/products/Pots.jpg" },
  { id: 2, name: "Copper-cookware", price: "$129.99", image: "/products/Copper-cookware.jpg" },
  { id: 3, name: "Cooking-Pan", price: "$19.99", image: "/products/Cooking-Pan.jpg" },
  { id: 4, name: "Glasses-set", price: "$49.99", image: "/products/Glasses-set.jpg" },
  { id: 5, name: "Glasses", price: "$89.99", image: "/products/Glasses.jpg" },
  { id: 6, name: "Plates", price: "$79.99", image: "/products/Plates.jpg" },
  { id: 7, name: "Dosha-Stick", price: "$15.99", image: "/products/Dosha-Stick.jpg" },
  { id: 8, name: "Wooden-Spoon", price: "$9.99", image: "/products/Wooden-Spoon.jpg" },
  { id: 9, name: "Black-Cookware-Set", price: "$299.99", image: "/products/Black-Cookware-Set.jpg" },
  { id: 10, name: "Pan-Set", price: "$49.99", image: "/products/Pan-Set.jpg" },
  { id: 11, name: "Spoon", price: "$59.99", image: "/products/Spoon.jpg" },
  { id: 12, name: "Pots", price: "$129.99", image: "/products/Pots.jpg" },
  { id: 13, name: "Copper-cookware", price: "$19.99", image: "/products/Copper-cookware.jpg" },
  { id: 14, name: "Pressure-Cooker", price: "$49.99", image: "/products/Pressure-Cooker.jpg" },
  { id: 15, name: "Cooker", price: "$89.99", image: "/products/Cooker.jpg" },
  { id: 16, name: "Steel-Stand", price: "$79.99", image: "/products/Steel-Stand.jpg" },
  { id: 17, name: "Iron-Pan", price: "$15.99", image: "/products/Iron-Pan.jpg" },
  { id: 18, name: "Iron-Kadhai", price: "$9.99", image: "/products/Iron-Kadhai.jpg" },
  { id: 19, name: "Wooden-Spoon", price: "$299.99", image: "/products/Wooden-Spoon.jpg" },
  { id: 20, name: "Glasses", price: "$49.99", image: "/products/Glasses.jpg" },
];

const ProductsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calculate products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dummyProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(dummyProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <FilterSidebar />

        {/* Right Side */}
        <div className="flex-1">
          <SortSelect />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md border ${
                  page === currentPage
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
