"use client";

import React from 'react';
import { Star } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: 'Anna Kowalska',
      company: 'StartupTech Sp. z o.o.',
      role: 'CEO',
      content: 'LuzeN znacząco przyspieszyło rozwój naszej firmy. W ciągu miesiąca uruchomiliśmy nową stronę i system CRM.',
      rating: 5,
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Michał Wiśniewski',
      company: 'E-Commerce Solutions',
      role: 'CTO',
      content: 'Profesjonalni wykonawcy i przejrzysty system rozliczeń. Polecam każdemu MŚP szukającemu wsparcia IT.',
      rating: 5,
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Katarzyna Nowak',
      company: 'Digital Agency',
      role: 'Project Manager',
      content: 'Świetna platforma do znajdowania specjalistów. Zrealizowaliśmy już ponad 20 projektów przez LuzeN.',
      rating: 5,
      image: '/api/placeholder/64/64'
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: '/api/placeholder/120/40' },
    { name: 'Google', logo: '/api/placeholder/120/40' },
    { name: 'AWS', logo: '/api/placeholder/120/40' },
    { name: 'Stripe', logo: '/api/placeholder/120/40' },
    { name: 'Slack', logo: '/api/placeholder/120/40' },
    { name: 'Figma', logo: '/api/placeholder/120/40' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Zaufało nam ponad 500 firm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz, co mówią o nas nasi klienci
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-200"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-center text-sm text-gray-500 mb-8">Zaufali nam również:</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
