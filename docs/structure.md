marketplace-project/
|
├── frontend/                           # Aplikacja frontendowa (Next.js + Tailwind)
|     ├── public/                       # Obrazy, favicony, statyczne pliki
|     ├── src/    
|     |     ├── components/             # Reużywalne komponenty UI
|     |     ├── pages/                  # Strony
|     |     ├── styles/                 # Style globalne
|     |     ├── lib/                    # Helpery, np. obsługa fetch API
|     |     └── hooks/                  # Custom React Hooks
|     ├── package.json
|     └── README.md
|
├── backend/                            # Aplikacja backendowa (NextJS / Express)
|     ├── src/                          
|     |     ├── modules/                # Moduły (users, orders, auth)
|     |     ├── controllers/            # Kontrolery REST (API endpoints)
|     |     ├── services/               # Logika biznesowa
|     |     ├── entities                # Modele bazy danych
|     |     └── config/                 # Konfiguracje (env, db)
|     ├── package.json
|     └── README.md
|
├── database/                           # Skrypty bazy danych / migracje
|     ├── migrations/                   # Migracje
|     ├── seed/                         # Dane testowe
|     └── schema.sql                    # Schemat bazy
|
├── docs/                               # Dokumentacja projektu
|     ├── architecture.md               # Jak działa system (diagramy, opis backend/frontend)
|     ├── api.md                        # Opis API (endpointy)
|     ├── roles.md                      # Podział ról w zespole
|     └── structure.md                  # Struktura repozytorium
|
├── .env.example                        # Wzór pliku env (klucze, connection stringi)
├── docker-compose.yml                  # Uruchamianie backend + db w Dockerze
├── README.md                           # Główna dokumentacja projektu
├── .gitignore
└── LICENSE                             # Licencja projektu