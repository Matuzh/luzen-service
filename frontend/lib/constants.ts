import { Service, PricingTier } from '../types';

export const CONTACT_INFO = {
  phone: '+48789710406',
  phoneFormatted: '789-710-406',
  email: 'kontakt@luzen.pl',
  address: {
    street: 'ul. Topolowa 74',
    city: 'Góra',
    postalCode: '43-227',
    country: 'PL'
  },
  coordinates: {
    lat: 49.98629858969814,
    lng: 19.09741904832983
  }
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/luzen',
  instagram: 'https://www.instagram.com/luzen_it/',
  tiktok: 'https://www.tiktok.com/@luzen_it'
} as const;

export const SERVICES: Service[] = [
  {
    id: 'diagnostyka',
    title: 'Diagnostyka sprzętu',
    description:
      'Dokładne sprawdzenie sprzętu i ustalenie przyczyny usterki. Jeśli klient zdecyduje się na naprawę – diagnostyka jest darmowa.',
    price: '80 zł (gratis przy naprawie)',
    duration: '1 dzień',
    icon: 'Search',
    features: [
      'Testy sprzętowe i programowe',
      'Diagnoza źródła problemu',
      'Wycena naprawy i konsultacja'
    ]
  },
  {
    id: 'naprawa-laptopow',
    title: 'Naprawa laptopów',
    description:
      'Serwis sprzętowy i programowy laptopów wszystkich marek. Czysto, dokładnie, bez pośpiechu.',
    price: 'od 100 zł',
    duration: '1–3 dni',
    icon: 'Laptop',
    features: [
      'Wymiana klawiatur, zawiasów i gniazd',
      'Czyszczenie układu chłodzenia',
      'Wymiana dysków, pamięci RAM',
      'Instalacja i konfiguracja systemu'
    ]
  },
  {
    id: 'naprawa-komputerow',
    title: 'Naprawa komputerów PC',
    description:
      'Naprawa i modernizacja komputerów stacjonarnych. Często taniej niż zakup nowego zestawu.',
    price: 'od 80 zł',
    duration: '1–2 dni',
    icon: 'Monitor',
    features: [
      'Czyszczenie i konserwacja',
      'Diagnostyka i wymiana podzespołów',
      'Modernizacja i konfiguracja BIOS',
      'Instalacja systemu Windows'
    ]
  },
  {
    id: 'instalacja-systemow',
    title: 'Instalacja systemów',
    description:
      'Czysta instalacja systemu Windows lub Linux wraz z podstawową konfiguracją i sterownikami.',
    price: 'od 100 zł',
    duration: '2–4 godziny',
    icon: 'Settings',
    features: [
      'Instalacja Windows 10 / 11 lub Linux',
      'Aktualizacje i sterowniki',
      'Podstawowa konfiguracja',
      'Usunięcie zbędnych aplikacji'
    ]
  },
  {
    id: 'doradztwo',
    title: 'Doradztwo IT',
    description:
      'Pomoc przy zakupie sprzętu i planowaniu modernizacji. Bez naciągania i marketingowych bajek.',
    price: 'od 60 zł/h',
    duration: 'wg potrzeb',
    icon: 'Users',
    features: [
      'Dobór sprzętu do budżetu',
      'Porady przy modernizacji',
      'Zabezpieczenie danych',
      'Pomoc w zakupach online'
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Diagnostyka',
    price: '80 zł',
    description:
      'Sprawdzenie sprzętu, diagnoza usterki i przedstawienie kosztorysu. Gratis przy późniejszej naprawie.',
    features: [
      'Pełna diagnostyka',
      'Raport o stanie urządzenia',
      'Wycena naprawy',
      'Możliwość rezygnacji po diagnozie'
    ]
  },
  {
    id: 'standard',
    name: 'Naprawa standardowa',
    price: 'od 100 zł',
    description:
      'Najczęściej wybierany wariant – pełna naprawa z gwarancją i czyszczeniem sprzętu.',
    popular: true,
    features: [
      'Diagnoza w cenie',
      'Naprawa usterki',
      'Czyszczenie i testy końcowe',
      'Gwarancja 30 dni'
    ]
  },
  {
    id: 'premium',
    name: 'Serwis priorytetowy',
    price: 'od 180 zł',
    description:
      'Dla klientów, którym zależy na czasie – szybsza realizacja i rozszerzona gwarancja.',
    features: [
      'Priorytetowa kolejka (24–48h)',
      'Kopia zapasowa danych',
      'Rozszerzona gwarancja 90 dni',
      'Bezpłatny odbiór sprzętu w okolicy'
    ]
  }
];
