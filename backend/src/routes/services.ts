import express, { Request, Response } from 'express';

const router = express.Router();

// Service data (in a real app, this could come from a database)
const services = [
  {
    id: 'naprawa-laptopow',
    name: 'Naprawa laptopów',
    description: 'Profesjonalna naprawa laptopów wszystkich marek. Wymiana ekranów, klawiatur, dysku, czyszczenie, naprawa płyty głównej.',
    icon: 'laptop',
    pricing: {
      from: 80,
      currency: 'PLN',
      note: 'Diagnostyka 80 zł (odliczana od naprawy)'
    },
    features: [
      'Wymiana ekranu LCD/LED',
      'Naprawa płyty głównej',
      'Wymiana klawiatury',
      'Czyszczenie z kurzu',
      'Wymiana dysku/RAM',
      'Naprawa gniazda ładowania'
    ],
    estimatedTime: '1-3 dni robocze',
    warranty: '6 miesięcy gwarancji'
  },
  {
    id: 'naprawa-komputerow',
    name: 'Naprawa komputerów PC',
    description: 'Kompleksowy serwis komputerów stacjonarnych. Diagnostyka, naprawa, upgrade sprzętu.',
    icon: 'monitor',
    pricing: {
      from: 80,
      currency: 'PLN',
      note: 'Diagnostyka 80 zł (odliczana od naprawy)'
    },
    features: [
      'Diagnostyka i naprawa',
      'Wymiana podzespołów',
      'Upgrade RAM/dysku/karty',
      'Czyszczenie i konserwacja',
      'Optymalizacja systemu',
      'Montaż nowych komponentów'
    ],
    estimatedTime: '1-2 dni robocze',
    warranty: '6 miesięcy gwarancji'
  },
  {
    id: 'odzyskiwanie-danych',
    name: 'Odzyskiwanie danych',
    description: 'Profesjonalne odzyskiwanie danych z uszkodzonych dysków, SSD, kart pamięci i innych nośników.',
    icon: 'hard-drive',
    pricing: {
      from: 150,
      currency: 'PLN',
      note: 'Wycena po diagnostyce'
    },
    features: [
      'Odzyskiwanie z HDD/SSD',
      'Naprawa uszkodzonych partycji',
      'Odzyskiwanie po formatowaniu',
      'Recovery z kart pamięci',
      'Odzyskiwanie baz danych',
      'Profesjonalne oprogramowanie'
    ],
    estimatedTime: '2-7 dni roboczych',
    warranty: 'Gwarancja poufności'
  },
  {
    id: 'instalacja-systemow',
    name: 'Instalacja systemów',
    description: 'Instalacja i konfiguracja systemów operacyjnych Windows, Linux oraz niezbędnego oprogramowania.',
    icon: 'monitor',
    pricing: {
      from: 100,
      currency: 'PLN',
      note: 'Cena zależy od zakresu'
    },
    features: [
      'Instalacja Windows 10/11',
      'Instalacja dystrybucji Linux',
      'Konfiguracja sterowników',
      'Instalacja oprogramowania',
      'Backup danych przed instalacją',
      'Aktywacja i aktualizacje'
    ],
    estimatedTime: '1-2 godziny',
    warranty: '30 dni wsparcia'
  },
  {
    id: 'pomoc-zdalna',
    name: 'Pomoc zdalna',
    description: 'Zdalna pomoc techniczna przez Internet. Rozwiązywanie problemów bez wychodzenia z domu.',
    icon: 'monitor',
    pricing: {
      from: 50,
      currency: 'PLN',
      note: 'Za godzinę lub zadanie'
    },
    features: [
      'Diagnoza problemów zdalnie',
      'Usuwanie wirusów/malware',
      'Konfiguracja oprogramowania',
      'Pomoc w obsłudze programów',
      'Backup i synchronizacja',
      'Optymalizacja wydajności'
    ],
    estimatedTime: '30 min - 2 godziny',
    warranty: '7 dni wsparcia'
  },
  {
    id: 'doradztwo-it',
    name: 'Doradztwo IT',
    description: 'Profesjonalne doradztwo w zakresie doboru sprzętu, oprogramowania i rozwiązań IT.',
    icon: 'monitor',
    pricing: {
      from: 100,
      currency: 'PLN',
      note: 'Konsultacja godzinowa'
    },
    features: [
      'Dobór sprzętu do potrzeb',
      'Planowanie infrastruktury IT',
      'Konsultacje zakupowe',
      'Audyt bezpieczeństwa',
      'Optymalizacja kosztów IT',
      'Rekomendacje rozwiązań'
    ],
    estimatedTime: '1-2 godziny',
    warranty: 'Wsparcie posprzedażowe'
  }
];

// Get all services
router.get('/', (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    let filteredServices = services;

    if (category) {
      // Filter by category if needed (could be expanded)
      filteredServices = services.filter(service => 
        service.id.includes(category as string)
      );
    }

    res.json({
      success: true,
      data: filteredServices,
      total: filteredServices.length
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch services'
    });
  }
});

// Get service by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Service ID is required'
      });
    }

    const service = services.find(s => s.id === id);

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found',
        message: 'The requested service does not exist'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch service'
    });
  }
});

// Get service categories
router.get('/meta/categories', (req: Request, res: Response) => {
  try {
    const categories = [
      {
        id: 'naprawa',
        name: 'Naprawa',
        description: 'Usługi naprawy sprzętu komputerowego',
        services: ['naprawa-laptopow', 'naprawa-komputerow']
      },
      {
        id: 'odzyskiwanie',
        name: 'Odzyskiwanie danych',
        description: 'Profesjonalne odzyskiwanie utraconych danych',
        services: ['odzyskiwanie-danych']
      },
      {
        id: 'instalacja',
        name: 'Instalacja i konfiguracja',
        description: 'Instalacja systemów i oprogramowania',
        services: ['instalacja-systemow']
      },
      {
        id: 'wsparcie',
        name: 'Wsparcie',
        description: 'Pomoc zdalna i doradztwo',
        services: ['pomoc-zdalna', 'doradztwo-it']
      }
    ];

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

export default router;