"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {

     const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

       {/* Transparent Header Bar */}

        <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <nav
          className={`
            flex h-14 items-center justify-center px-10
            rounded-full border border-white/80
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/20 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            }
          `}
        >
          <ul className="flex space-x-8 text-white text-sm md:text-base font-medium">
            <li className="cursor-pointer hover:text-gray-300 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
             <Link href="/products">Product</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Steel Utensil
          </h1>
          <p className="text-lg md:text-xl">
            Selling Kitchen Utensil for both retail and wholesale.
          </p>
        </div>
      </div>
    </header>
  );
}
