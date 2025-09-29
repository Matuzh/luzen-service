"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Check, Github, LogIn } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Błąd logowania");
      // przekieruj po udanym logowaniu
      window.location.href = data?.redirect || "/dashboard";
    } catch (err: any) {
      setError(err.message || "Błąd sieci");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden flex items-center justify-center px-4">
      {/* Animated Background (motyw z HeroSection) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <main className="relative z-10 w-full max-w-xl bg-slate-900/75 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Zaloguj się</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Zaloguj się do konta LuzeN</p>

        {/* OAuth buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
            onClick={() => {
              // oauth redirect
              window.location.href = "/api/auth/oauth/github";
            }}
            aria-label="Zaloguj przez GitHub"
            type="button"
          >
            <Github className="w-5 h-5" />
            Zaloguj przez GitHub
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
            onClick={() => {
              // oauth redirect
              window.location.href = "/api/auth/oauth/google";
            }}
            aria-label="Zaloguj przez Google"
            type="button"
          >
            <LogIn className="w-5 h-5" />
            Zaloguj przez Google
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                aria-label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="twoj@adres.email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Hasło</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type="password"
                aria-label="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Twoje hasło"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded bg-white/10 border-white/10"
              />
              <span className="text-gray-300">Zapamiętaj mnie</span>
            </label>
            <Link href="/forgot-password" className="text-purple-300 hover:underline">Zapomniałeś hasła?</Link>
          </div>

          {error && <div role="alert" className="text-sm text-red-400">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 hover:shadow-lg transition transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Check className="w-5 h-5" />
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Nie masz konta?{" "}
          <Link href="/register" className="text-purple-300 hover:underline">Zarejestruj się</Link>
        </p>
      </main>
    </section>
  );
};

export default LoginPage;
