"use client";

import React from 'react';
import { Globe, Palette, Brain, BarChart, Star, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      category: 'Rozwój Web',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'Strony internetowe', price: '2000-8000 zł', time: '7-14 dni', rating: 4.9 },
        { name: 'Sklepy e-commerce', price: '5000-15000 zł', time: '14-30 dni', rating: 4.8 },
        { name: 'Aplikacje webowe', price: '8000-25000 zł', time: '30-60 dni', rating: 4.9 },
        { name: 'Landing page', price: '1000-3000 zł', time: '3-7 dni', rating: 4.7 }
      ]
    },
    {
      category: 'Design & UX',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      items: [
        { name: 'Logo & branding', price: '1500-5000 zł', time: '5-10 dni', rating: 4.9 },
        { name: 'UI/UX Design', price: '3000-10000 zł', time: '10-20 dni', rating: 4.8 },
        { name: 'Grafika social media', price: '500-2000 zł', time: '2-5 dni', rating: 4.7 },
        { name: 'Prezentacje', price: '800-3000 zł', time: '3-7 dni', rating: 4.8 }
      ]
    },
    {
      category: 'AI & Automatyzacja',
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      items: [
        { name: 'Chatboty AI', price: '3000-12000 zł', time: '10-20 dni', rating: 4.9 },
        { name: 'Automatyzacja procesów', price: '5000-20000 zł', time: '14-30 dni', rating: 4.8 },
        { name: 'Analiza danych', price: '2000-8000 zł', time: '7-14 dni', rating: 4.7 },
        { name: 'Machine Learning', price: '10000-50000 zł', time: '30-90 dni', rating: 4.9 }
      ]
    },
    {
      category: 'Marketing & SEO',
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Optymalizacja SEO', price: '1500-5000 zł/msc', time: 'Stała współpraca', rating: 4.8 },
        { name: 'Google Ads', price: '2000-8000 zł/msc', time: 'Stała współpraca', rating: 4.7 },
        { name: 'Social Media Marketing', price: '2000-6000 zł/msc', time: 'Stała współpraca', rating: 4.8 },
        { name: 'Content Marketing', price: '3000-10000 zł/msc', time: 'Stała współpraca', rating: 4.9 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popularne kategorie usług
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wybierz z ponad 100 kategorii usług IT. Każdy specjalista przechodzi weryfikację kompetencji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.category} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          <span className="mr-4">{item.price}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 group">
                  Zobacz wszystkie
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;