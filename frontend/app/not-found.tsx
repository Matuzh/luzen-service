"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden px-4">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-sm text-gray-300">Oops!</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>

        <Link href="/" className="inline-block">
          <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            Powrót do strony głównej
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;