"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Star } from '../lib/icons';

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  { name: 'Jan Kowalski', role: 'Klient indywidualny', text: 'Super szybka naprawa laptopa, wszystko działa jak nowe!', rating: 5 },
  { name: 'Anna Nowak', role: 'Klient indywidualny', text: 'Profesjonalne podejście i bardzo przystępne ceny.', rating: 5 },
  { name: 'Marek Wiśniewski', role: 'Klient indywidualny', text: 'Polecam, szybka diagnoza i świetny kontakt.', rating: 4 },
  { name: 'Kasia Zielińska', role: 'Klient indywidualny', text: 'Bardzo sprawna obsługa, zdalna pomoc działa perfekcyjnie.', rating: 5 }
];

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  // Automatyczne przesuwanie co 5 sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Opinie klientów
        </h2>

        <div className="relative">
          {/* Slider container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white via-purple-50 to-white p-1">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 p-8">
                  <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-gray-700 text-center text-lg italic mb-4">"{review.text}"</p>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            aria-label="Poprzednia opinia"
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Następna opinia"
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-purple-600 scale-110' : 'bg-gray-300 hover:scale-105'
                }`}
                aria-label={`Przejdź do opinii ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
