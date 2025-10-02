"use client";
import React from 'react';
import { Sparkles, Shield, HeartHandshake } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* Animowane bloby */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            O nas
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            LuzeN to marketplace mikro-usług IT, który łączy ambitne firmy z najlepszymi
            specjalistami w branży. Naszą misją jest przyspieszanie realizacji projektów
            IT, gwarantując bezpieczeństwo i jakość.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bezpieczne płatności</h3>
            <p className="text-gray-400 text-sm">
              Wszystkie transakcje są chronione, a pieniądze uwalniane dopiero po akceptacji pracy.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% satysfakcji</h3>
            <p className="text-gray-400 text-sm">
              Dbamy o najwyższą jakość usług i pełne zadowolenie naszych klientów i freelancerów.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innowacyjne rozwiązania</h3>
            <p className="text-gray-400 text-sm">
              Korzystamy z nowoczesnych technologii i trendów w IT, aby realizować projekty szybko i efektywnie.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Nasza misja</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Chcemy stworzyć bezpieczne i przejrzyste środowisko, w którym firmy i freelancerzy mogą realizować
            projekty IT z gwarancją jakości i terminowości.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
