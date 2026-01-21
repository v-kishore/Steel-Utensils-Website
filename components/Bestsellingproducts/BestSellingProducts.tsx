"use client";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};



import { useRef } from "react";
import Link from "next/link";

export default function BestSellingProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Best Selling Products
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Popular", "New", "Trending"].map((btn) => (
            <button
              key={btn}
              className="
                px-6 py-2 rounded-full border border-gray-300
                text-sm font-medium
                hover:bg-black hover:text-white
                transition
              "
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute -left-4 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 rounded-full bg-white shadow
              flex items-center justify-center
              hover:bg-black hover:text-white transition
            "
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute -right-4 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 rounded-full bg-white shadow
              flex items-center justify-center
              hover:bg-black hover:text-white transition
            "
          >
            →
          </button>

          {/* Product Cards */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              scrollbar-hide
              py-4
            "
          >
            {[{ id: 1, name: "POTS", price: "$59.99", desc: "Kitchen Utensils",image: "/products/Pots.jpg" },
  { id: 2, name: "Copper-cookware", price: "$129.99", desc: "Kitchen Utensils",image: "/products/Copper-cookware.jpg" },
  { id: 3, name: "Cooking-Pan", price: "$19.99",desc: "Kitchen Utensils", image: "/products/Cooking-Pan.jpg" },
  { id: 4, name: "Glasses-set", price: "$49.99",desc: "Kitchen Utensils", image: "/products/Glasses-set.jpg" },
  { id: 5, name: "Glasses", price: "$89.99",desc: "Kitchen Utensils", image: "/products/Glasses.jpg" },
  { id: 6, name: "Plates", price: "$79.99", desc: "Kitchen Utensils",image: "/products/Plates.jpg" }].map((product) => (
              <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <img
        src={product.image}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                   {product.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold">{product.price}</span>
                  <button className="text-sm font-medium hover:underline">
                   <Link href="/products">View</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="mt-12 flex justify-center">
  <Link
    href="/products"
    className="
      px-8 py-3 rounded-full border border-black
      text-sm font-medium
      hover:bg-black hover:text-white
      transition
    "
  >
    View All Products
  </Link>
</div>
      </div>
    </section>
  );
}
