"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Strona główna", href: "#" },
    { name: "Specjaliści", href: "#" },
    { name: "Zlecenia", href: "#" },
    { name: "O nas", href: "#" },
    { name: "Kontakt", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-extrabold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          LuzeN
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="relative text-lg font-medium group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA + Login */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="#"
            className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            whileTap={{ scale: 0.95 }}
          >
            Zaloguj się
          </motion.a>
          <motion.a
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            whileTap={{ scale: 0.95 }}
          >
            Dodaj zlecenie
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-purple-950 px-6 py-4 space-y-4"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block text-lg text-gray-200 hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="w-full text-center px-5 py-3 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Zaloguj się
            </a>
            <a
              href="#"
              className="w-full text-center px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            >
              Dodaj zlecenie
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
