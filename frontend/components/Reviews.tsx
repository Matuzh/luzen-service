"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from '../lib/icons';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  service?: string;
  createdAt: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fallback reviews if API fails
  const fallbackReviews: Review[] = [
    {
      id: '1',
      name: 'Anna K.',
      rating: 5,
      text: 'Szybko i profesjonalnie naprawili mój laptop. Wymienili uszkodzoną matrycę w ciągu 48 godzin. Polecam każdemu!',
      service: 'Naprawa laptopów',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Michał P.',
      rating: 5,
      text: 'Świetna obsługa i konkurencyjne ceny. Odzyskali dane z uszkodzonego dysku. Naprawdę warto skorzystać!',
      service: 'Odzyskiwanie danych',
      createdAt: new Date().toISOString()
    },
    {
      id: '3',
      name: 'Katarzyna L.',
      rating: 5,
      text: 'Serwis komputerowy, któremu można zaufać. Przejrzysta wycena, bez ukrytych kosztów. Polecam każdemu.',
      service: 'Naprawa komputerów',
      createdAt: new Date().toISOString()
    },
    {
      id: '4',
      name: 'Piotr W.',
      rating: 5,
      text: 'Bardzo pomocni i kompetentni. Naprawili mojego starego laptopa i działa jak nowy. Dziękuję!',
      service: 'Serwis laptopów',
      createdAt: new Date().toISOString()
    }
  ];

  useEffect(() => {
    // Fetch reviews from API
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const data = await response.json();
          setReviews(data.data && data.data.length > 0 ? data.data : fallbackReviews);
        } else {
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setReviews(fallbackReviews);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-800 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-800 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const currentReview = reviews[currentIndex];
  if (!currentReview) return null;

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Opinie klientów
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Co mówią nasi
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              zadowoleni klienci
            </span>
          </h2>
        </div>

        {/* Review Slider */}
        <div className="relative">
          {/* Main Review Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-purple-500" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentReview.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative z-10">
              "{currentReview.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-lg">{currentReview.name}</div>
                {currentReview.service && (
                  <div className="text-purple-400 text-sm mt-1">{currentReview.service}</div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-300" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-violet-500 to-purple-600'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Zadowolenie</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Średnia ocen</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">{reviews.length}+</div>
            <div className="text-gray-400 text-sm">Opinii</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Dołącz do grona zadowolonych klientów</p>
          <a href="/rezerwacja">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Umów swoją naprawę
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;