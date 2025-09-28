"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Lewa strona */}
        <div className="text-2xl font-bold">Marketplace</div>

        {/* Środek */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Kategorie usług</li>
          <li className="hover:text-blue-600 cursor-pointer">Jak to działa?</li>
          <li className="hover:text-blue-600 cursor-pointer">Dla klientów</li>
          <li className="hover:text-blue-600 cursor-pointer">Dla wykonawców</li>
        </ul>

        {/* Prawa strona */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Zacznij teraz
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;