import React from "react";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Metadata, Viewport } from "next";

// Enhanced Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8B5CF6',
};

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://luzen.pl'),
  
  title: {
    default: 'LuzeN - Profesjonalny Serwis Komputerowy w Górze | Naprawa Laptopów i PC',
    template: '%s | LuzeN Serwis Komputerowy'
  },
  
  description: 'Profesjonalny serwis komputerowy LuzeN w Górze. Naprawa laptopów, komputerów PC, odzyskiwanie danych, instalacja systemów. Szybko, tanio, profesjonalnie. Rezerwacja online 24/7. Tel: 789-710-406',
  
  keywords: [
    'serwis komputerowy Góra',
    'naprawa laptopów Góra',
    'naprawa komputerów Góra',
    'odzyskiwanie danych',
    'instalacja Windows',
    'czyszczenie laptopa',
    'wymiana matrycy',
    'naprawa PC',
    'serwis IT Góra',
    'pomoc zdalna',
    'doradztwo IT',
    'LuzeN',
    'Miedźna serwis',
    'serwis komputerowy Miedźna',
    'naprawa komputera tanio',
    'szybka naprawa laptopa'
  ],
  
  authors: [{ name: 'Mateusz Szuper - LuzeN', url: 'https://luzen.pl' }],
  creator: 'Mateusz Szuper',
  publisher: 'LuzeN',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://luzen.pl',
    siteName: 'LuzeN - Serwis Komputerowy',
    title: 'LuzeN - Profesjonalny Serwis Komputerowy w Górze',
    description: 'Naprawa laptopów i komputerów, odzyskiwanie danych, instalacja systemów. Działamy wyłącznie na rezerwacje. Tel: 789-710-406',
    images: [
      {
        url: '/images/luzen-serwis.png',
        width: 1200,
        height: 630,
        alt: 'LuzeN - Serwis Komputerowy w Górze',
        type: 'image/png',
      },
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Logo LuzeN',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'LuzeN - Profesjonalny Serwis Komputerowy',
    description: 'Naprawa laptopów i komputerów w Górze. Szybko, tanio, profesjonalnie. Tel: 789-710-406',
    images: ['/images/luzen-serwis.png'],
    creator: '@luzen_it',
  },
  
  alternates: {
    canonical: 'https://luzen.pl',
    languages: {
      'pl': 'https://luzen.pl',
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#8B5CF6',
      },
    ],
  },
  
  manifest: '/manifest.json',
  
  verification: {
    google: 'your-google-verification-code',                                // Wstaw swój kod weryfikacyjny Google !!!
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  category: 'technology',
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        {/* Google AdSense */}
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4664379142833849"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 - Replace with your GA4 ID */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Enhanced Structured Data - Local Business */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerRepair",
              "name": "LuzeN - Serwis Komputerowy",
              "image": "https://www.luzen.pl/images/logo.png",
              "@id": "https://www.luzen.pl",
              "url": "https://www.luzen.pl",
              "telephone": "+48789710406",
              "priceRange": "50 zł - 500 zł",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Topolowa 74",
                "addressLocality": "Góra",
                "postalCode": "43-227",
                "addressRegion": "Dolnośląskie",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.98629858969814,
                "longitude": 19.09741904832983
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/luzen",
                "https://www.instagram.com/luzen_it/",
                "https://www.tiktok.com/@luzen_it"
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 49.98629858969814,
                  "longitude": 19.09741904832983
                },
                "geoRadius": "50000"
              },
              "paymentAccepted": "Gotówka, Karta, Przelew, BLIK",
              "currenciesAccepted": "PLN"
            }),
          }}
        />

        {/* Structured Data - Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LuzeN",
              "legalName": "Mateusz Szuper - LuzeN",
              "url": "https://www.luzen.pl",
              "logo": "https://www.luzen.pl/images/logo.png",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Mateusz Szuper"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Topolowa 74",
                "addressLocality": "Góra",
                "postalCode": "43-227",
                "addressCountry": "PL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-789-710-406",
                "contactType": "customer service",
                "email": "kontakt@luzen.pl",
                "areaServed": "PL",
                "availableLanguage": "Polish"
              },
              "sameAs": [
                "https://www.facebook.com/luzen",
                "https://www.instagram.com/luzen_it/",
                "https://www.tiktok.com/@luzen_it"
              ]
            }),
          }}
        />

        {/* Structured Data - Service */}
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Serwis komputerowy",
              "provider": {
                "@type": "ComputerRepair",
                "name": "LuzeN"
              },
              "areaServed": {
                "@type": "City",
                "name": "Góra"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi serwisowe",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Naprawa laptopów",
                      "description": "Profesjonalna naprawa laptopów wszystkich marek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Naprawa komputerów PC",
                      "description": "Diagnostyka i naprawa komputerów stacjonarnych"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Odzyskiwanie danych",
                      "description": "Profesjonalne odzyskiwanie utraconych danych"
                    }
                  }
                ]
              }
            }),
          }}
        />

        {/* Breadcrumb List */}
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Strona główna",
                  "item": "https://www.luzen.pl"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Usługi",
                  "item": "https://www.luzen.pl#uslugi"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Cennik",
                  "item": "https://www.luzen.pl#cennik"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Kontakt",
                  "item": "https://www.luzen.pl#kontakt"
                }
              ]
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://luzen.pl" />
      </head>
      <body className="min-h-screen bg-slate-950 antialiased">
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
        >
          Przejdź do treści głównej
        </a>
      </body>
    </html>
  );
}