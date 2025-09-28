"use client";

import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f0f1a] via-[#1a0033] to-[#0d0d0d] text-gray-200 pt-14 pb-6 mt-12">

      {/* Tło pattern – teraz nie blokuje scroll */}
      <div className="absolute top-0 left-0 w-full h-auto bg-[url('/pattern-dots.svg')] opacity-10 pointer-events-none z-0"></div>

      {/* Zawartość */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 z-10">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">LuzeN</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Marketplace usług IT. Łączymy klientów ze specjalistami IT – szybko, bezpiecznie i profesjonalnie.
          </p>
          <p className="mt-3 text-gray-500 text-xs">
            Naszą misją jest wspieranie rozwoju mikro-usług i budowanie silnej społeczności technologicznej.
          </p>
        </div>

        {/* Dla klientów */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Dla klientów</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/zlecenia" className="hover:text-white transition">Przeglądaj zlecenia</Link></li>
            <li><Link href="/dodaj-zlecenie" className="hover:text-white transition">Dodaj zlecenie</Link></li>
            <li><Link href="/specjalisci" className="hover:text-white transition">Znajdź specjalistę</Link></li>
            <li><Link href="/cennik" className="hover:text-white transition">Cennik</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Dla specjalistów i biznesu */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Dla specjalistów</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/dodaj-usluge" className="hover:text-white transition">Dodaj usługę</Link></li>
            <li><Link href="/kariera" className="hover:text-white transition">Kariera</Link></li>
            <li><Link href="/partnerzy" className="hover:text-white transition">Dla partnerów</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/kontakt" className="hover:text-white transition">Kontakt</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter + CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Społeczność</h3>

          {/* Social */}
          <div className="flex gap-4 mb-4">
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition transform hover:scale-110" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <Github className="w-5 h-5 hover:text-gray-300 transition transform hover:scale-110" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-sky-400 transition transform hover:scale-110" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-blue-500 transition transform hover:scale-110" />
            </Link>
          </div>

          {/* Newsletter */}
          <p className="text-gray-400 text-sm mb-3">Zapisz się do newslettera:</p>
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden group mb-4">
            <input
              type="email"
              placeholder="Twój e-mail"
              className="flex-grow px-3 py-2 bg-transparent text-sm text-gray-300 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-medium flex items-center gap-2 hover:opacity-90 transition group-hover:gap-3"
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition" />
              <span>Wyślij</span>
            </button>
          </form>

          {/* CTA dodatkowe */}
          <div className="mt-2">
            <Link
              href="/dodaj-usluge"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-3 rounded-lg font-medium text-white hover:scale-105 transition"
            >
              🚀 Dołącz jako specjalista
            </Link>
          </div>
        </div>
      </div>

      {/* Dolna belka z gradient border-top */}
      <div className="mt-10 pt-4 border-t border-gradient-to-r from-purple-600 to-cyan-400 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2 z-10 relative">
        <span>© {new Date().getFullYear()} LuzeN. Wszelkie prawa zastrzeżone.</span>
        <span>|</span>
        <Link href="/regulamin" className="hover:text-white transition">Regulamin</Link>
        <span>|</span>
        <Link href="/polityka-prywatnosci" className="hover:text-white transition">Polityka prywatności</Link>
        <span>|</span>
        <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
      </div>
    </footer>
  );
}
