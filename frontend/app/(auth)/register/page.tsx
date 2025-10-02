"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Check, Github, LogIn, Eye, EyeOff, User, Briefcase, Calendar } from "lucide-react";

const RegisterPage = () => {
  const [mode, setMode] = useState<"freelancer" | "company">("freelancer");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [nip, setNip] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Hasła nie są takie same");
      return;
    }

    setLoading(true);
    try {
      const body =
        mode === "freelancer"
          ? { username, firstName, lastName, email, birthDate, password }
          : { companyName, nip, contactPerson, email, password };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, type: mode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Błąd rejestracji");
      window.location.href = data?.redirect || "/dashboard";
    } catch (err: any) {
      setError(err.message || "Błąd sieci");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white flex flex-col">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <main className="flex-1 flex items-center justify-center py-20 px-4 relative z-10">
        <div className="w-full max-w-xl bg-slate-900/75 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
          <h1 className="text-3xl font-bold mb-2 text-center">Zarejestruj się</h1>
          <p className="text-sm text-gray-400 mb-6 text-center">Utwórz konto w LuzeN</p>

          {/* Mode Switch */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                mode === "freelancer"
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setMode("freelancer")}
            >
              Freelancer
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                mode === "company"
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setMode("company")}
            >
              Firma
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              onClick={() => { window.location.href = "/api/auth/oauth/github"; }}
              aria-label="Zarejestruj przez GitHub"
            >
              <Github className="w-5 h-5" />
              GitHub
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              onClick={() => { window.location.href = "/api/auth/oauth/google"; }}
              aria-label="Zarejestruj przez Google"
            >
              <LogIn className="w-5 h-5" />
              Google
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "freelancer" ? (
              <>
                {/* Username */}
                <div>
                  <label htmlFor="username" className="sr-only">Nazwa użytkownika</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Nazwa użytkownika"
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="Imię"
                      className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Nazwisko"
                      className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="E-mail"
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Birth Date */}
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Hasło"
                      className="w-full pl-11 pr-10 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Powtórz hasło"
                      className="w-full pl-11 pr-10 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Company Mode */}
                <div>
                  <label htmlFor="companyName" className="sr-only">Nazwa firmy</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      placeholder="Nazwa firmy"
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                    required
                    placeholder="NIP"
                    className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                    placeholder="Osoba kontaktowa"
                    className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="E-mail"
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Hasło"
                      className="w-full pl-11 pr-10 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Powtórz hasło"
                      className="w-full pl-11 pr-10 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {error && <div role="alert" className="text-sm text-red-400">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 hover:shadow-lg transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              {loading ? "Rejestracja..." : "Zarejestruj się"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Masz już konto? <Link href="/login" className="text-purple-300 hover:underline">Zaloguj się</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
