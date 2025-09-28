"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaLaptopCode, FaPaintBrush, FaRobot, FaServer, FaStar, FaCheckCircle } from "react-icons/fa";

const MainSection = () => {
  const popularCategories = [
    { name: "Programowanie", icon: <FaLaptopCode />, color: "from-purple-700 to-purple-500" },
    { name: "Grafika", icon: <FaPaintBrush />, color: "from-pink-600 to-pink-400" },
    { name: "AI", icon: <FaRobot />, color: "from-cyan-500 to-blue-500" },
    { name: "Administracja", icon: <FaServer />, color: "from-yellow-500 to-yellow-400" },
  ];

  const featuredServices = [
    { title: "Strona www", desc: "Responsywne strony dla firm", price: "500–1500 zł", time: "1–3 dni", rating: 5, color: "from-purple-600 to-purple-400" },
    { title: "Logo & Grafika", desc: "Profesjonalne projekty", price: "200–800 zł", time: "1–2 dni", rating: 4, color: "from-pink-500 to-pink-400" },
    { title: "AI Chatbot", desc: "Inteligentne boty", price: "300–1200 zł", time: "2–4 dni", rating: 5, color: "from-cyan-400 to-blue-400" },
    { title: "SEO & Marketing", desc: "Zwiększ widoczność w sieci", price: "400–1000 zł", time: "2–5 dni", rating: 4, color: "from-yellow-400 to-yellow-300" },
  ];

  const steps = [
    { title: "Dodaj zlecenie", desc: "Opisz, czego potrzebujesz i w jakim czasie.", icon: <FaCheckCircle size={30} className="text-purple-600" /> },
    { title: "Specjalista realizuje", desc: "Wybierz najlepszego wykonawcę lub pozwól systemowi dopasować.", icon: <FaCheckCircle size={30} className="text-blue-500" /> },
    { title: "Odbierz i oceń", desc: "Sprawdź usługę, zapłać i wystaw opinię.", icon: <FaCheckCircle size={30} className="text-cyan-500" /> },
  ];

  const reviews = [
    { name: "Anna K.", text: "Błyskawicznie znalazłam specjalistę do mojej strony!", rating: 5 },
    { name: "Michał P.", text: "Profesjonalna obsługa i szybka realizacja zlecenia.", rating: 4 },
    { name: "Katarzyna R.", text: "Polecam każdemu MŚP, świetne mikro-usługi.", rating: 5 },
  ];

  return (
    <main className="flex flex-col space-y-32">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 text-white py-32 px-6 md:px-12 lg:px-24 rounded-b-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">Znajdź specjalistę IT w kilka minut</h1>
          <p className="mt-6 text-lg text-gray-200 drop-shadow">Mikro-usługi, szybkie zlecenia i proste rozliczenia dla MŚP – wszystko w jednym miejscu.</p>

          <div className="relative mt-10 max-w-md mx-auto">
            <FiSearch className="absolute top-3 left-3 text-blue-300" size={20} />
            <input
              type="text"
              placeholder="Czego potrzebujesz?"
              className="w-full border border-blue-300 rounded-lg px-10 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {popularCategories.map(cat => (
              <div
                key={cat.name}
                className={`flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r ${cat.color} text-white cursor-pointer hover:scale-105 transition transform`}
              >
                {cat.icon} {cat.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polecane mikro-usługi */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Polecane mikro-usługi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map(svc => (
            <div key={svc.title} className={`p-6 rounded-2xl bg-gradient-to-r ${svc.color} shadow-lg hover:scale-105 transition transform cursor-pointer text-white`}>
              <h3 className="text-2xl font-semibold">{svc.title}</h3>
              <p className="mt-3">{svc.desc}</p>
              <div className="mt-4 flex justify-between text-sm font-medium">
                <span>Cena: {svc.price}</span>
                <span>Czas: {svc.time}</span>
              </div>
              <div className="mt-3 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`mr-1 ${i < svc.rating ? "text-yellow-400" : "text-white/50"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jak to działa */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Jak to działa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.title} className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 transition transform text-center flex flex-col items-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opinie klientów */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Opinie klientów</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition text-gray-900">
              <div className="flex items-center mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`mr-1 ${i < r.rating ? "text-yellow-400" : "text-gray-400"}`} />
                ))}
              </div>
              <p className="italic text-gray-700 text-center">"{r.text}"</p>
              <p className="mt-3 font-semibold text-gray-900 text-center">– {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kategorie usług + CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kategorie usług</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {["Web", "Grafika", "AI", "Administracja", "Marketing", "SEO", "UX/UI", "Video"].map(cat => (
            <div key={cat} className="bg-gray-50 hover:bg-purple-100 text-gray-900 rounded-lg py-4 text-center cursor-pointer transition font-medium">
              {cat}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-700 to-blue-500 rounded-xl hover:scale-105 transition text-white font-medium">
            Zobacz wszystkie kategorie
          </button>
        </div>
      </section>

      {/* CTA dodaj zlecenie */}
      <section className="mt-16 bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 rounded-2xl p-12 text-center shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">Masz zlecenie?</h2>
        <p className="text-gray-200 mb-6">Dodaj je teraz i znajdź idealnego specjalistę w kilka minut.</p>
        <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:scale-105 transition">
          Dodaj zlecenie
        </button>
      </section>

    </main>
  );
};

export default MainSection;
