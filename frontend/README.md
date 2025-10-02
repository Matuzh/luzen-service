# LuzeN – Frontend

Frontend aplikacji **LuzeN Marketplace MVP** zbudowany w oparciu o **Next.js 14 (App Router)**, **TypeScript** i **TailwindCSS**.  
Projekt zawiera wstępny layout, stronę główną, strony logowania i rejestracji oraz przykładowe podstrony.  

---

## 🚀 Quick start

### 1. Klonowanie repozytorium
```bash
git clone https://github.com/marketplace-project.git
cd <repo>/frontend
```

### 2. Instalacja zależności
```bash
npm install
```

### 3. Zmienne środowiskowe
Utwórz plik `.env.local` na podstawie `.env.example`:
```bash
cp .env.example .env.local
```
Przykładowe zmienne:
```ini
NEXT_PUBLIC_API_URL=http://localhost:4000/
```

### 4. Uruchomienie aplikacji w trybie deweloperskim
```bash
npm run dev
```
Aplikacja będzie dostępna pod adresem http://localhost:4000/

## 🛠️ Dostępne skrypty
| Komenda       | Opis                                             |
| ------------- | ------------------------------------------------ |
| npm run dev   | Uruchamia aplikacje w trybie deweloperskim       |
| npm run build | Buduje aplikację produkcyjnie                    |
| npm run start | Uruchamia zbudowaną aplikację                    |
| npm run lint  | Uruchamia ESLint do sprawdzenia błędów w kodzie  |
| npm run test  | Uruchamia testy (Jest)                           |

## 📂 Struktura projektu
```bash
frontend/
├── __tests__/             # Testy jednostkowe (Jest)
├── app/                   # Next.js App Router (strony i layouty)
│   ├── (auth)/            # Moduły autoryzacji
│   │   ├── login/         # Strona logowania
│   │   └── register/      # Strona rejestracji
│   ├── (dashboard)/       # Dashboard użytkownika
│   │   ├── dashboard/     # Widok główny dashboardu
│   │   └── orders/        # Podstrona zamówień
│   │   └── layout.tsx     # Layout sekcji dashboard
│   ├── (services)/        # Usługi
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── about/             # Strona "About"
│   │   └── page.tsx
│   ├── layout.tsx         # Główny layout aplikacji
│   ├── not-found.tsx      # Strona błędu 404
│   └── page.tsx           # Strona główna (landing)
├── components/            # Komponenty UI (Navbar, Footer, sekcje)
├── constants/             # Stałe projektu (np. kolory)
│   └── colors.ts
├── contexts/              # React Contexts (globalny state, providerzy)
├── hooks/                 # Custom hooki
├── lib/                   # Klient API, utils
├── public/                # Statyczne zasoby (ikony, obrazy)
├── schemas/               # Schematy walidacji (Zod)
├── styles/                # Style globalne i animacje
│   └── globals.css
├── .env.example           # Przykładowe zmienne środowiskowe
├── .gitattributes
├── eslint.config.mjs      # Konfiguracja ESLint
├── global.d.ts            # Globalne deklaracje TypeScript
├── jest.config.js         # Konfiguracja testów (Jest)
├── next-env.d.ts          # Deklaracje Next.js
├── next.config.js         # Konfiguracja Next.js
├── package-lock.json
├── package.json
├── postcss.config.js      # Konfiguracja PostCSS
├── README.md
├── tailwind.config.js     # Konfiguracja TailwindCSS
└── tsconfig.json          # Konfiguracja TypeScript

```

## 📡 Integracja z backendem
Frontend domyślnie łączy się z API pod adresem NEXT_PUBLIC_API_URL (zmienna środowiskowa).
Na etapie Sprintu 2 dostępne będą testowe endpointy:

- GET /users – lista użytkowników,
- GET /users/:id – szczegóły użytkownika.

## 🧹 Style i design system
- TailwindCSS – utility-first CSS
- Radix UI – komponenty dostępnościowe
- Zustand – state management
- Zod – walidacja danych
- globals.css – globalne animacje i keyframes
- colors.ts – centralny system kolorów

## ✅ Linting i testy
- ESLint skonfigurowany dla React + TypeScript + Next.js.
- Jest z przykładowymi testami jednostkowymi.

Uruchamianie: 
```bash
npm run lint
npm run test
```

## 📖 Dokumentacja dodatkowa
- Główne README projektu
- Dokumentacja architektury
- API Spec

## 👥 Contributing
Pull requesty są obowiązkowe.
Przed wysłaniem PR:
- upewnij się, że przechodzi `npm run lint` i `npm run build`,
- stosuj się do konwencji commitów (Conventional Commits).
