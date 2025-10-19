import React from "react";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "LuzeN - Serwis Komputerowy | Naprawa laptopów i komputerów",
  description:
    "Profesjonalny serwis komputerowy LuzeN. Naprawa laptopów i komputerów, diagnostyka sprzętu, instalacja systemów, doradztwo IT – praca na rezerwacje.",
  keywords:
    "serwis komputerowy, naprawa komputerów, naprawa laptopów, odzyskiwanie danych, instalacja systemu, doradztwo IT, LuzeN, serwis Miedźna, serwis Góra",
  authors: [{ name: "LuzeN" }],
  openGraph: {
    title: "LuzeN - Serwis Komputerowy",
    description:
      "Naprawa laptopów i komputerów, diagnostyka, instalacja systemów i doradztwo IT. Działamy wyłącznie na rezerwacje – bez kolejek.",
    url: "https://luzen.pl",
    type: "website",
    locale: "pl_PL",
    siteName: "LuzeN - Serwis Komputerowy",
    images: [
      {
        url: "https://luzen.pl/images/luzen-uslugi.png",
        width: 1200,
        height: 630,
        alt: "LuzeN - Serwis Komputerowy",
      },
    ],
  },
  icons: {
    icon: "images/favicon.ico",
    apple: "images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
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
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerRepair",
              "name": "LuzeN - Serwis Komputerowy",
              "description": "Profesjonalny serwis komputerowy – naprawa komputerów, laptopów, serwerów, odzyskiwanie danych, diagnostyka i doradztwo IT.",
              "image": "https://www.luzen.pl/images/logo.png",
              "url": "https://www.luzen.pl",
              "telephone": "+48 789 710 406",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Topolowa 74",
                "addressLocality": "Góra",
                "postalCode": "43-227",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.98629858969814,
                "longitude": 19.09741904832983
              },
              "openingHours": "Mo-Su by appointment",
              "sameAs": [
                "https://www.facebook.com/luzen",
                "https://www.tiktok.com/@luzen_it",
                "https://www.instagram.com/luzen_it/"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mateusz Szuper",
              "jobTitle": "Właściciel serwisu komputerowego LuzeN",
              "url": "https://www.luzen.pl",
              "email": "kontakt@luzen.pl" 
            }),
          }}
        />   
      </head>
      <body className="min-h-screen bg-slate-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
