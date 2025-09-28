"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Lewa sekcja */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Szukasz specjalisty?</h3>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Dodaj zlecenie już teraz
          </button>
        </div>

        {/* Prawa sekcja */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Jesteś specjalistą IT?</h3>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Dołącz do marketplace już teraz
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;