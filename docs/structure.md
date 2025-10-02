marketplace-project/
|
├── .github/
|     └── workflow/
|           ├── ci.yml                  # Podstawowy CI: lint, test, build przy PR
|           └── deploy.yml              # Automatyczny deploy na staging / production
|
├── frontend/                           # Next.js + Tailwind (App router)
|     ├── app/
|     |     ├── (auth)/                 # Podstrony / moduły związane z autoryzacją
|     |     ├── (dashboard)/            # Panel użytkownika / admin dashboard
|     |     ├── (services)/             # Logika usług / integracje frontendowe
|     |     ├── layout.tsx              # Główny layout aplikacji
|     |     └── page.tsx                # Strona startowa (index) 
|     |
|     ├── public/                       # Statyczne pliki (obrazy, favicon)
|     ├── components/                   # Reużywalne komponenty UI
|     ├── styles/                       # Globalne style / Tailwind config / CSS
|     ├── lib/                          # Helpery, apiClient, konfiguracje
|     |     └── schemas/                # Schematy walidacji danych (Zod)
|     |
|     ├── hooks/                        # Custom React Hooks
|     ├── contexts                      # Globalny stan aplikacji (React Context / Zustand)
|     ├── tests/                        # Testy frontendowe (Jest / Testing Library)
|     |
|     ├── package.json                  # Zależności frontendowe i skrypty npm
|     └── README.md                     # Opis frontendowego modelu
|
├── backend/                            # Express + Prisma + Socket.IO + Stripe
|     ├── prisma/
|     |     ├── schema.prisma           # Definicja modeli bazy danych
|     |     └── migrations/             # Automatyczne migracje bazy danych
|     |
|     ├── src/                          
|     |     ├── controllers/            # Logika endpointów (HTTP API) 
|     |     ├── graphql/                # GraphQL typeDefs, resolvers (opcjonalne, w przyszłości) 
|     |     ├── routes/                 # Definicja tras / endpointów
|     |     ├── services/               # Logika biznesowa
|     |     |     ├── payments.ts       # Obsługa płatności (Stripe)
|     |     |     └── socket.ts         # Socket.IO / komunikacja realtime
|     |     |
|     |     ├── middlewares/            # Middleware Express (auth, errors, logging)
|     |     ├── jobs/                   # Zadania backgroundowe / cron jobs
|     |     ├── utils/                  # Pomocnicze funkcje / narzędzia
|     |     |
|     |     ├── app.ts                  # Konfiguracja i inicjalizacja Express
|     |     └── server.ts               # Punkt wejścia aplikacji (start serwera)
|     |
|     ├── package.json                  # Zależności backendowe i skrypty npm
|     └── README.md                     # Opis backendowego modelu
|
├── database/                           # Skrypty seed / SQL / migracje dodatkowe
|     ├── seed.ts                       # Przykładowe wypełnienie bazy danych
|     └── README.md                     # Instrukcje dotyczące bazy danych
|
├── docs/                               # Dokumentacja projektu
|     ├── architecture.md               # Ogólna architektura projektu
|     ├── api.md                        # Opis API (endpointy)
|     ├── onboarding.md                 # Instrukcje dla nowych developerów
|     ├── roles.md                      # Podział ról w zespole
|     └── structure.md                  # Struktura repozytorium
|
├── infra/
|     ├── docker/                       # Dockerfile, konfiguracje docker-compose
|     └── k8s/                          # Pliki Kubernetes (opcjonalnie)
|
├── scripts/                            # Przydatne skrypty
|     ├── dev-start.sh                  # Skrypt startowy do uruchomienia dev environment
|     └── seed-db.sh                    # Skrypt do seedowania bazy danych
|
├── .env.example                        # Wzór pliku env (klucze, connection stringi)
├── docker-compose.yml                  # Kompozycja kontenerów (frontend + backend + db)
├── README.md                           # Główna dokumentacja projektu
└── .gitignore                          # Lista plików/folderów ignorowanych przez Git 