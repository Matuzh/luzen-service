"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from '../lib/icons';
import { CONTACT_INFO } from '../lib/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Imię musi mieć co najmniej 2 znaki';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Podaj poprawny adres email';
    }

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Podaj poprawny numer telefonu';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Wybierz temat wiadomości';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Wiadomość musi mieć co najmniej 10 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Wystąpił błąd');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Przepraszamy, wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Kontakt
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skontaktuj się
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              z nami
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Masz pytania? Potrzebujesz pomocy? Jesteśmy do Twojej dyspozycji.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informacje kontaktowe
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Telefon</div>
                    <div className="text-white font-semibold">{CONTACT_INFO.phoneFormatted}</div>
                    <div className="text-gray-500 text-xs mt-1">Pon-Pt: 9:00-18:00</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <div className="text-white font-semibold">{CONTACT_INFO.email}</div>
                    <div className="text-gray-500 text-xs mt-1">Odpowiedź w 24h</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Adres</div>
                    <div className="text-white font-semibold">{CONTACT_INFO.address.street}</div>
                    <div className="text-gray-300 text-sm">{CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Godziny pracy</div>
                    <div className="text-white font-semibold">Wyłącznie na rezerwacje</div>
                    <div className="text-gray-300 text-sm">Umów wizytę telefonicznie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Potrzebujesz szybkiej pomocy?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Zadzwoń teraz i umów wizytę. Większość napraw wykonujemy w ciągu 24-48 godzin.
              </p>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Zadzwoń teraz
                </button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Wyślij wiadomość
            </h3>

            {submitStatus !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                submitStatus === 'success'
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${
                  submitStatus === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {submitMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.name ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors`}
                  placeholder="Jan Kowalski"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.email ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors`}
                  placeholder="jan@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.phone ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors`}
                  placeholder="123 456 789"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Temat *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.subject ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors`}
                >
                  <option value="">Wybierz temat</option>
                  <option value="naprawa">Zapytanie o naprawę</option>
                  <option value="wycena">Wycena usługi</option>
                  <option value="reklamacja">Reklamacja</option>
                  <option value="inne">Inne</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none`}
                  placeholder="Opisz swój problem lub pytanie..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Wyślij wiadomość
                  </>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                * Pola wymagane. Twoje dane są chronione i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;