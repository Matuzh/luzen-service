"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, AlertCircle, Send, CheckCircle, Laptop, Monitor, HardDrive } from '../../lib/icons';
import { CONTACT_INFO } from '../../lib/constants';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  problemDescription: string;
  preferredDate: string;
  preferredTime: string;
}

interface FormErrors {
  [key: string]: string;
}

const ReservationPage = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    problemDescription: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    { value: 'naprawa-laptopow', label: 'Naprawa laptopów', icon: Laptop },
    { value: 'naprawa-komputerow', label: 'Naprawa komputerów PC', icon: Monitor },
    { value: 'odzyskiwanie-danych', label: 'Odzyskiwanie danych', icon: HardDrive },
    { value: 'instalacja-systemow', label: 'Instalacja systemów', icon: Monitor },
    { value: 'pomoc-zdalna', label: 'Pomoc zdalna', icon: Monitor },
    { value: 'doradztwo-it', label: 'Doradztwo IT', icon: Monitor }
  ];

  const deviceTypes = [
    'Laptop',
    'Komputer stacjonarny',
    'Tablet',
    'Telefon',
    'Inne'
  ];

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: CONTACT_INFO.phoneFormatted, link: `tel:${CONTACT_INFO.phone}` },
    { icon: Mail, label: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
    { 
      icon: MapPin, 
      label: 'Adres', 
      value: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.postalCode} ${CONTACT_INFO.address.city}`, 
      link: null 
    }
  ];

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
      newErrors.phone = 'Podaj poprawny numer telefonu (9-15 cyfr)';
    }

    if (!formData.service) {
      newErrors.service = 'Wybierz rodzaj usługi';
    }

    if (!formData.deviceType) {
      newErrors.deviceType = 'Wybierz typ urządzenia';
    }

    if (!formData.deviceBrand.trim()) {
      newErrors.deviceBrand = 'Podaj markę urządzenia';
    }

    if (!formData.problemDescription.trim() || formData.problemDescription.length < 10) {
      newErrors.problemDescription = 'Opis problemu musi mieć co najmniej 10 znaków';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Wybierz datę';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Data nie może być w przeszłości';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Wybierz godzinę';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    setSubmitStatus('error');
    setSubmitMessage('Popraw błędy w formularzu');
    setTimeout(() => setSubmitStatus('idle'), 3000);
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    // Get API URL from environment
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    
    console.log('Sending to:', `${apiUrl}/api/bookings`);
    console.log('Data:', formData);

    const response = await fetch(`${apiUrl}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        preferredDate: new Date(`${formData.preferredDate}T${formData.preferredTime}`).toISOString()
      }),
    });

    console.log('Response status:', response.status);
    
    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Server returned non-JSON response');
    }

    const data = await response.json();
    console.log('Response data:', data);

    if (response.ok && data.success) {
      setSubmitStatus('success');
      setSubmitMessage('Dziękujemy! Twoja rezerwacja została przyjęta. Skontaktujemy się z Tobą w ciągu 24 godzin.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        deviceType: '',
        deviceBrand: '',
        deviceModel: '',
        problemDescription: '',
        preferredDate: '',
        preferredTime: ''
      });
      setErrors({});
    } else {
      throw new Error(data.error || 'Wystąpił błąd');
    }
  } catch (error) {
    console.error('Booking error:', error);
    setSubmitStatus('error');
    setSubmitMessage(
      error instanceof Error 
        ? error.message 
        : 'Przepraszamy, wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.'
    );
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 8000);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
            Rezerwacja online
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Umów wizytę
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              w serwisie
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin, aby potwierdzić termin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Formularz rezerwacji</h2>

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

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
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
                    placeholder="123456789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-2">
                  Rodzaj usługi *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.service ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors`}
                >
                  <option value="">Wybierz usługę...</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                )}
              </div>

              {/* Device Info */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="deviceType" className="block text-gray-300 text-sm font-medium mb-2">
                    Typ urządzenia *
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border ${
                      errors.deviceType ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors`}
                  >
                    <option value="">Wybierz...</option>
                    {deviceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.deviceType && (
                    <p className="mt-1 text-sm text-red-400">{errors.deviceType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="deviceBrand" className="block text-gray-300 text-sm font-medium mb-2">
                    Marka *
                  </label>
                  <input
                    type="text"
                    id="deviceBrand"
                    name="deviceBrand"
                    value={formData.deviceBrand}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border ${
                      errors.deviceBrand ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors`}
                    placeholder="HP, Dell..."
                  />
                  {errors.deviceBrand && (
                    <p className="mt-1 text-sm text-red-400">{errors.deviceBrand}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="deviceModel" className="block text-gray-300 text-sm font-medium mb-2">
                    Model
                  </label>
                  <input
                    type="text"
                    id="deviceModel"
                    name="deviceModel"
                    value={formData.deviceModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                    placeholder="Pavilion..."
                  />
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label htmlFor="problemDescription" className="block text-gray-300 text-sm font-medium mb-2">
                  Opis problemu *
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${
                    errors.problemDescription ? 'border-red-500/50' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none`}
                  placeholder="Opisz szczegółowo problem z urządzeniem..."
                />
                {errors.problemDescription && (
                  <p className="mt-1 text-sm text-red-400">{errors.problemDescription}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-gray-300 text-sm font-medium mb-2">
                    Preferowana data *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={today}
                    className={`w-full px-4 py-3 bg-slate-900/50 border ${
                      errors.preferredDate ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-400">{errors.preferredDate}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-300 text-sm font-medium mb-2">
                    Preferowana godzina *
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    min="09:00"
                    max="19:00"
                    className={`w-full px-4 py-3 bg-slate-900/50 border ${
                      errors.preferredTime ? 'border-red-500/50' : 'border-white/10'
                    } rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors`}
                  />
                  <p className="text-xs text-gray-400 mt-1">Dostępne: 09:00 - 19:00</p>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-400">{errors.preferredTime}</p>
                  )}
                </div>
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
                    Zarezerwuj wizytę
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                * Pola wymagane. Skontaktujemy się w ciągu 24h, aby potwierdzić rezerwację.
              </p>
            </form>
          </div>

          {/* Contact Info & Additional Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div 
                key={info.label} 
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-white font-semibold hover:text-purple-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white font-semibold">{info.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Odwiedź nas osobiście
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Nasz serwis znajduje się w Górze. Działamy wyłącznie na rezerwacje.
              </p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                Otwórz w mapach
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Godziny pracy
                  </h3>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Poniedziałek - Piątek:</span>
                      <span className="font-semibold">09:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sobota:</span>
                      <span className="font-semibold">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niedziela:</span>
                      <span className="text-red-400 font-semibold">Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  <AlertCircle className="w-4 h-4 inline mr-1" />
                  Obsługujemy wyłącznie na rezerwacje
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-400" />
                Ważne informacje
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Potwierdzenie rezerwacji otrzymasz emailem lub telefonicznie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Diagnostyka jest płatna i kosztuje 50 zł (odliczane od naprawy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Przed wizytą zrób kopię zapasową ważnych danych</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>W razie pytań zadzwoń: {CONTACT_INFO.phoneFormatted}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;